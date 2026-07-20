import { Controller, Post, Body, HttpCode, HttpStatus, Param, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto, LoginDto, RefreshDto, OAuthDto, TwoFactorCodeDto } from './dto/auth.dto';
import type { Response, Request } from 'express';

@Controller('auth')
export class AuthController {

	constructor(private readonly authService: AuthService) { }

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

	res.cookie(
		'access_token',
		result.accessToken,
		{
		httpOnly: true,
		secure: false,
		sameSite: 'lax',
		maxAge: 15 * 60 * 1000,
		},
	);

	return {
		language: result.language,
	};
	}
	
	// refresh JWT
	@Post('refresh')
	@HttpCode(HttpStatus.OK)
	async refresh(@Body() dto: RefreshDto) {
		return this.authService.refreshTokens(dto);
	}

	// OAuth callback
	@Post('oauth/:provider')
	@HttpCode(HttpStatus.OK)
	async oauthCallback(@Param('provider') provider: string, @Body() dto: OAuthDto) {
		return this.authService.validateOAuth(provider, dto.token);
	}

	// generate TOTP secret + QR
	@Post('2fa/setup')
	async setup2FA(@Body('userId') userId: string) {
		return this.authService.generate2FASecret(userId);
	}

	// verify TOTP code
	@Post('2fa/verify')
	@HttpCode(HttpStatus.OK)
	async verify2FA(@Body('userId') userId: string, @Body() dto: TwoFactorCodeDto) {
		return this.authService.enable2FA(userId, dto.code);
	}

	// disable 2FA
	@Post('2fa/disable')
	@HttpCode(HttpStatus.OK)
	async disable2FA(@Body('userId') userId: string, @Body() dto: TwoFactorCodeDto) {
		return this.authService.disable2FA(userId, dto.code);
	}

}
