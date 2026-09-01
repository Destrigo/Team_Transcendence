import {
  Injectable,
  ConflictException,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import {
  RegisterDto,
  LoginDto,
} from './dto/auth.dto';
import * as bcrypt from 'bcrypt';
import { OTP } from 'otplib';
import { encryptSecret, decryptSecret } from '../common/crypto/secret-cipher';

interface OAuthProfile {
  provider: string;
  providerId: string;
  email: string;
  displayName?: string;
}

@Injectable()
export class AuthService {
  private readonly otp = new OTP();

  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

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
        isOnline: true,
      },
    });

    const tokens = await this.generateTokens(
      user.id,
      user.email,
      user.twoFactorEnabled,
    );
    await this.updateRefreshToken(user.id, tokens.refreshToken);

    return { ...tokens, language: user.language };
  }

  async login(dto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });
    if (!user || !user.passwordHash)
      throw new UnauthorizedException('auth.invalidCredentials');

    const isMatch = await bcrypt.compare(dto.password, user.passwordHash);
    if (!isMatch) throw new UnauthorizedException('auth.invalidCredentials');

    if (user.twoFactorEnabled) {
      const loginToken = await this.jwtService.signAsync(
        { sub: user.id, purpose: '2fa-pending' },
        { expiresIn: '5m', secret: process.env.JWT_LOGIN_SECRET },
      );
      return { requires2FA: true, loginToken };
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

  async refreshTokens(refreshToken: string) {
    let payload;

    try {
      payload = await this.jwtService.verifyAsync(refreshToken, {
        secret: process.env.JWT_REFRESH_SECRET,
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
      data: { twoFactorSecret: encryptSecret(secret) },
    });

    return { secret, otpauthUrl };
  }

  async verifyLogin2FA(loginToken: string, code: string) {
    let payload: any;
    try {
      payload = await this.jwtService.verifyAsync(loginToken, {
        secret: process.env.JWT_LOGIN_SECRET,
      });
    } catch {
      throw new UnauthorizedException('auth.errors.accessDenied');
    }

    if (payload.purpose !== '2fa-pending') {
      throw new UnauthorizedException('auth.errors.accessDenied');
    }

    const user = await this.prisma.user.findUnique({ where: { id: payload.sub } });
    if (!user || !user.twoFactorEnabled || !user.twoFactorSecret) {
      throw new UnauthorizedException('auth.errors.accessDenied');
    }

    const valid = await this.verifyTotp(user.twoFactorSecret, code);
    if (!valid) {
      throw new UnauthorizedException('auth.errors.invalid2faCode');
    }

    const tokens = await this.generateTokens(user.id, user.email, true);
    await this.updateRefreshToken(user.id, tokens.refreshToken);

    return { ...tokens, language: user.language };
  }

  async enable2FA(userId: string, code: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user || !user.twoFactorSecret)
      throw new BadRequestException('auth.errors.setupNotInitiated');

    const valid = await this.verifyTotp(user.twoFactorSecret, code);
    if (!valid) throw new UnauthorizedException('auth.errors.invalid2fationCode');

    await this.prisma.user.update({
      where: { id: userId },
      data: { twoFactorEnabled: true },
    });

    return { success: true };
  }

  async disable2FA(userId: string, code: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user || !user.twoFactorEnabled || !user.twoFactorSecret) {
      throw new BadRequestException('auth.errors.twoFactorNotActive');
    }

    const valid = await this.verifyTotp(user.twoFactorSecret, code);
    if (!valid) throw new UnauthorizedException('auth.errors.invalid2fationCode');

    await this.prisma.user.update({
      where: { id: userId },
      data: { twoFactorEnabled: false, twoFactorSecret: null },
    });

    return { success: true };
  }

  // Legacy rows created before secrets were encrypted at rest (or any
  // corrupted ciphertext) would otherwise throw out of decryptSecret and
  // surface as a 500 instead of a clean "wrong code" 401.
  private async verifyTotp(encryptedSecret: string, code: string): Promise<boolean> {
    let secret: string;
    try {
      secret = decryptSecret(encryptedSecret);
    } catch {
      return false;
    }
    const result = await this.otp.verify({ token: code, secret });
    return result.valid;
  }

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
        secret: process.env.JWT_ACCESS_SECRET,
      }),
      this.jwtService.signAsync(payload, {
        expiresIn: '7d',
        secret: process.env.JWT_REFRESH_SECRET,
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

  async validateOAuthLogin(profile: OAuthProfile) {
    const { provider, providerId, email, displayName } = profile;

    if (!email) {
      throw new BadRequestException(
        `No email returned by ${provider}. Check the requested OAuth scopes.`,
      );
    }

    let user = await this.prisma.user.findUnique({ where: { email } });

    if (user) {
      if (!user.oauthProvider) {
        user = await this.prisma.user.update({
          where: { id: user.id },
          data: { oauthProvider: provider, oauthId: providerId },
        });
      }
    } else {
      const username = await this.generateUniqueUsername(
        displayName || `${provider}_user`,
      );

      try {
        user = await this.prisma.user.create({
          data: {
            email,
            username,
            oauthProvider: provider,
            oauthId: providerId,
          },
        });
      } catch (err) {
        if (
          err instanceof Prisma.PrismaClientKnownRequestError &&
          err.code === 'P2002' &&
          (err.meta?.target as string[])?.includes('email')
        ) {
          const existingUser = await this.prisma.user.findUnique({
            where: { email },
          });

          if (!existingUser) {
            throw new ConflictException(
              'Failed to resolve user after concurrent creation conflict',
            );
          }

          user = existingUser;
        } else {
          throw err;
        }
      }
    }

    const tokens = await this.generateTokens(
      user.id,
      user.email,
      user.twoFactorEnabled,
    );
    await this.updateRefreshToken(user.id, tokens.refreshToken);
    return tokens;
  }

  private async generateUniqueUsername(base: string): Promise<string> {
    const slug = base.toLowerCase().replace(/[^a-z0-9]/g, '').slice(0, 20) || 'user';
    let candidate = slug;
    let suffix = 0;

    while (await this.prisma.user.findUnique({ where: { username: candidate } })) {
      suffix += 1;
      candidate = `${slug}${suffix}`;
    }
    return candidate;
  }
}

