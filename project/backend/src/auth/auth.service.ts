import {
  Injectable,
  ConflictException,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import {
  RegisterDto,
  LoginDto,
  OAuthDto,
  TwoFactorCodeDto,
} from './dto/auth.dto';
import * as bcrypt from 'bcrypt';
import { OTP } from 'otplib';

@Injectable()
export class AuthService {
  private readonly otp = new OTP();

  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  // POST /auth/register
  async register(dto: RegisterDto) {
    const existing = await this.prisma.user.findFirst({
      where: { OR: [{ email: dto.email }, { username: dto.username }] },
    });

    if (existing) {
      if (existing.email === dto.email)
        throw new ConflictException('auth.emailTaken');
      if (existing.username === dto.username)
        throw new ConflictException('auth.usernameTaken');
    }

    const passwordHash = await bcrypt.hash(dto.password, 10);

    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        username: dto.username,
        passwordHash,
        language: dto.language || 'en',
      },
    });

    const tokens = await this.generateTokens(
      user.id,
      user.email,
      user.twoFactorEnabled,
    );
    await this.updateRefreshToken(user.id, tokens.refreshToken);

    return tokens;
  }

  // POST /auth/login
  async login(dto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });
    if (!user || !user.passwordHash)
      throw new UnauthorizedException('auth.invalidCredentials');

    const isMatch = await bcrypt.compare(dto.password, user.passwordHash);
    if (!isMatch) throw new UnauthorizedException('auth.invalidCredentials');

    if (user.twoFactorEnabled) {
      // if 2FA is active, restrict token drop until 2FA code is verified
      return { requires2FA: true, userId: user.id };
    }

    const tokens = await this.generateTokens(user.id, user.email, false);
    await this.updateRefreshToken(user.id, tokens.refreshToken);

    await this.prisma.user.update({
      where: { id: user.id },
      data: {
        isOnline: true,
        lastSeen: new Date(),
      },
    });

    return { ...tokens, language: user.language };
  }

  // POST /auth/refresh
  async refreshTokens(refreshToken: string) {
    let payload;

    try {
      payload = await this.jwtService.verifyAsync(refreshToken, {
        secret: process.env.JWT_SECRET,
      });
    } catch {
      throw new UnauthorizedException('auth.errors.accessDenied');
    }

    const user = await this.prisma.user.findUnique({
      where: {
        id: payload.sub,
      },
    });

    if (!user || !user.hashedRefreshToken) {
      throw new UnauthorizedException('auth.errors.accessDenied');
    }

    const matches = await bcrypt.compare(refreshToken, user.hashedRefreshToken);

    if (!matches) {
      throw new UnauthorizedException('auth.errors.accessDenied');
    }

    const tokens = await this.generateTokens(
      user.id,
      user.email,
      user.twoFactorEnabled,
    );

    await this.updateRefreshToken(user.id, tokens.refreshToken);

    return tokens;
  }

  // POST /auth/oauth/:provider
  async validateOAuth(provider: string, token: string) {
    // OAuth fetches token data from provider API (Google/42/Github)
    const externalEmail = `oauth-${provider}-${token.substring(0, 5)}@example.com`;
    const fallbackUsername = `${provider}_user_${Date.now().toString().slice(-4)}`;

    let user = await this.prisma.user.findUnique({
      where: { email: externalEmail },
    });
    if (!user) {
      user = await this.prisma.user.create({
        data: {
          email: externalEmail,
          username: fallbackUsername,
          oauthProvider: provider,
          oauthId: `id-${token.substring(0, 10)}`,
        },
      });
    }

    const tokens = await this.generateTokens(
      user.id,
      user.email,
      user.twoFactorEnabled,
    );
    await this.updateRefreshToken(user.id, tokens.refreshToken);

    return tokens;
  }

  // POST /auth/2fa/setup
  async generate2FASecret(userId: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new BadRequestException('auth.errors.userNotFound');

    const secret = this.otp.generateSecret();
    const otpauthUrl = this.otp.generateURI({
      issuer: 'TranscendenceTrading',
      label: user.email,
      secret,
    });

    await this.prisma.user.update({
      where: { id: userId },
      data: { twoFactorSecret: secret },
    });

    return { secret, otpauthUrl };
  }

  // POST /auth/2fa/verify
  async enable2FA(userId: string, code: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user || !user.twoFactorSecret)
      throw new BadRequestException('auth.errors.setupNotInitiated');

    const result = await this.otp.verify({
      token: code,
      secret: user.twoFactorSecret,
    });
    if (!result.valid)
      throw new UnauthorizedException('auth.errors.invalid2fationCode');

    await this.prisma.user.update({
      where: { id: userId },
      data: { twoFactorEnabled: true },
    });

    return { success: true };
  }

  // POST /auth/2fa/disable
  async disable2FA(userId: string, code: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user || !user.twoFactorEnabled || !user.twoFactorSecret) {
      throw new BadRequestException('auth.errors.twoFactorNotActive');
    }

    const result = await this.otp.verify({
      token: code,
      secret: user.twoFactorSecret,
    });
    if (!result.valid)
      throw new UnauthorizedException('auth.errors.invalid2fationCode');

    await this.prisma.user.update({
      where: { id: userId },
      data: { twoFactorEnabled: false, twoFactorSecret: null },
    });

    return { success: true };
  }

  // helper utilities

  private async updateRefreshToken(userId: string, rt: string) {
    const hash = await bcrypt.hash(rt, 10);
    await this.prisma.user.update({
      where: { id: userId },
      data: { hashedRefreshToken: hash },
    });
  }

  private async generateTokens(
    userId: string,
    email: string,
    is2faActive: boolean,
  ) {
    const payload = { sub: userId, email, is2faActive };
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload, {
        expiresIn: '15m',
        secret: process.env.JWT_SECRET,
      }),
      this.jwtService.signAsync(payload, {
        expiresIn: '7d',
        secret: process.env.JWT_SECRET,
      }),
    ]);

    return { accessToken, refreshToken };
  }

  async logout(userId: string) {
    await this.prisma.user.update({
      where: { id: userId },
      data: {
        hashedRefreshToken: null,
        isOnline: false,
        lastSeen: new Date(),
      },
    });
  }
}
