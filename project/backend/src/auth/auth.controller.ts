import {
  Controller,
  Get,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  Res,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import {
  RegisterDto,
  LoginDto,
  TwoFactorCodeDto,
  LoginTwoFactorDto,
} from './dto/auth.dto';
import type { Response, Request } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CurrentUser } from '../common/decorators/current-user.decorator';

const FRONTEND_URL = process.env.FRONTEND_URL || 'https://localhost';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(
    @Body() dto: RegisterDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const result = await this.authService.register(dto);

    this.setAuthCookies(res, result.accessToken, result.refreshToken);

    return {
      language: result.language,
    };
  }

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

    this.setAuthCookies(res, result.accessToken, result.refreshToken);

    return {
      language: result.language,
    };
  }

  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  async refresh(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    const refreshToken = req.cookies.refresh_token;

    const tokens = await this.authService.refreshTokens(refreshToken);

   this.setAuthCookies(res, tokens.accessToken, tokens.refreshToken);

    return {
      message: 'Tokens refreshed',
    };
  }

  @UseGuards(JwtAuthGuard)
  @Post('2fa/setup')
  async setup2FA(@CurrentUser('userId') userId: string,) {
    return this.authService.generate2FASecret(userId);
  }

  @Post('login/2fa')
  @HttpCode(HttpStatus.OK)
  async loginWith2FA(
    @Body() dto: LoginTwoFactorDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const result = await this.authService.verifyLogin2FA(dto.loginToken, dto.code);
    this.setAuthCookies(res, result.accessToken, result.refreshToken);
    return { language: result.language };
  }
    
  @UseGuards(JwtAuthGuard)
  @Post('2fa/verify')
  @HttpCode(HttpStatus.OK)
  async verify2FA(
    @CurrentUser('userId') userId: string,
    @Body() dto: TwoFactorCodeDto,
  ) {
    return this.authService.enable2FA(userId, dto.code);
  }

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

    res.clearCookie('access_token', { path: '/' });
    res.clearCookie('refresh_token', { path: '/api/auth' });

    return {
      message: 'Logged out',
    };
  }

  @Get('google')
  @UseGuards(AuthGuard('google'))
  googleAuth() { }

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  async googleCallback(@Req() req, @Res({ passthrough: true }) res: Response) {
    const { email, providerId, provider, displayName } = req.user;

    const tokens = await this.authService.validateOAuthLogin({
      provider,
      providerId,
      email,
      displayName,
    });

    this.setAuthCookies(res, tokens.accessToken, tokens.refreshToken);

    return res.redirect(`${FRONTEND_URL}/settings`);
  }

  @Get('github')
  @UseGuards(AuthGuard('github'))
  githubAuth() { }

  @Get('github/callback')
  @UseGuards(AuthGuard('github'))
  async githubCallback(@Req() req, @Res({ passthrough: true }) res: Response) {
    const { email, providerId, provider, displayName } = req.user;

    const tokens = await this.authService.validateOAuthLogin({
      provider,
      providerId,
      email,
      displayName,
    });

    this.setAuthCookies(res, tokens.accessToken, tokens.refreshToken);

    return res.redirect(`${FRONTEND_URL}/settings`);
  }

  @Get('42')
  @UseGuards(AuthGuard('42'))
  fortyTwoAuth() { }

  @Get('42/callback')
  @UseGuards(AuthGuard('42'))
  async fortyTwoCallback(@Req() req, @Res({ passthrough: true }) res: Response) {
    const { email, providerId, provider, displayName } = req.user;

    const tokens = await this.authService.validateOAuthLogin({
      provider,
      providerId,
      email,
      displayName,
    });

    this.setAuthCookies(res, tokens.accessToken, tokens.refreshToken);

    return res.redirect(`${FRONTEND_URL}/settings`);
  }

  private setAuthCookies(
  res: Response,
  accessToken: string,
  refreshToken: string,
) {
  res.cookie('access_token', accessToken, {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    maxAge: 15 * 60 * 1000,
    path: '/',
  });
  res.cookie('refresh_token', refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    maxAge: 7 * 24 * 60 * 60 * 1000,
    path: '/api/auth',
  });
  }
}
