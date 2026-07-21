import {
  Controller,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  Param,
  Res,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import {
  RegisterDto,
  LoginDto,
  OAuthDto,
  TwoFactorCodeDto,
} from './dto/auth.dto';
import type { Response, Request } from 'express';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CurrentUser } from '../common/decorators/current-user.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // create account
  // POST /auth/register
  @Post('register')
  async register(@Body() dto: RegisterDto) {
    return this.authService.register(dto);
  }

  // email + password login
  // POST /auth/login
  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(
    @Body() dto: LoginDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const result = await this.authService.login(dto);

    if ('requires2FA' in result) {
      return result;
    }

    res.cookie('access_token', result.accessToken, {
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
      maxAge: 15 * 60 * 1000,
    });
    res.cookie('refresh_token', result.refreshToken, {
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return {
      language: result.language,
    };
  }

  // refresh JWT
  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  async refresh(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    const refreshToken = req.cookies.refresh_token;

    const tokens = await this.authService.refreshTokens(refreshToken);

    res.cookie('access_token', tokens.accessToken, {
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
      maxAge: 15 * 60 * 1000,
    });

    res.cookie('refresh_token', tokens.refreshToken, {
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return {
      message: 'Tokens refreshed',
    };
  }

  // OAuth callback
  @Post('oauth/:provider')
  @HttpCode(HttpStatus.OK)
  async oauthCallback(
    @Param('provider') provider: string,
    @Body() dto: OAuthDto,
  ) {
    return this.authService.validateOAuth(provider, dto.token);
  }

  // generate TOTP secret + QR
  @UseGuards(JwtAuthGuard)
  @Post('2fa/setup')
  async setup2FA(@CurrentUser('userId') userId: string,) {
    return this.authService.generate2FASecret(userId);
  }

  // verify TOTP code
  @UseGuards(JwtAuthGuard)
  @Post('2fa/verify')
  @HttpCode(HttpStatus.OK)
  async verify2FA(
    @CurrentUser('userId') userId: string,
    @Body() dto: TwoFactorCodeDto,
  ) {
    return this.authService.enable2FA(userId, dto.code);
  }

  // disable 2FA
  @UseGuards(JwtAuthGuard)
  @Post('2fa/disable')
  @HttpCode(HttpStatus.OK)
  async disable2FA(
    @CurrentUser('userId') userId: string,
    @Body() dto: TwoFactorCodeDto,
  ) {
    return this.authService.disable2FA(userId, dto.code);
  }

  @UseGuards(JwtAuthGuard)
  @Post('logout')
  @HttpCode(HttpStatus.OK)
  async logout(
    @CurrentUser('userId') userId: string,
    @Res({ passthrough: true }) res: Response,
  ) {
    await this.authService.logout(userId);

    res.clearCookie('access_token');
    res.clearCookie('refresh_token');

    return {
      message: 'Logged out',
    };
  }
}
