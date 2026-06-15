import { IsEmail, IsNotEmpty, IsString, MinLength, MaxLength, Matches, IsOptional, IsIn, Length } from 'class-validator';

// validates POST /auth/register
export class RegisterDto {

	@IsEmail({}, { message: 'auth.validation.invalidEmail' }) 
	@IsNotEmpty({ message: 'auth.validation.emailRequired' })
	email: string;

	@IsString()
	@IsNotEmpty({ message: 'auth.validation.usernameRequired' })
	@MinLength(3, { message: 'auth.validation.usernameTooShort' })
	@MaxLength(50, { message: 'auth.validation.usernameTooLong' })
	@Matches(/^[a-zA-Z0-9_-]+$/, { message: 'auth.validation.usernameInvalidChars' })
	username: string;

	@IsString()
	@IsNotEmpty({ message: 'auth.validation.passwordRequired' })
	@MinLength(8, { message: 'auth.weakPassword' })
	password: string;

	@IsString()
	@IsOptional()
	@IsIn(['en', 'fr', 'nl'], { message: 'auth.validation.invalidLanguage' })
	language?: string;

}

// validates POST /auth/login
export class LoginDto {

	@IsEmail({}, { message: 'auth.validation.invalidEmail' })
	@IsNotEmpty({ message: 'auth.validation.emailRequired' })
	email: string;

	@IsString()
	@IsNotEmpty({ message: 'auth.validation.passwordRequired' })
	password: string;

}

// validates POST /auth/refresh
export class RefreshDto {

	@IsEmail({}, { message: 'auth.validation.invalidEmail' })
	@IsNotEmpty({ message: 'auth.validation.emailRequired' })
	email: string;

	@IsString()
	@IsNotEmpty({ message: 'auth.validation.tokenRequired' })
	refreshToken: string;

}

// validates POST /auth/oauth/:provider
export class OAuthDto {

	@IsString()
	@IsNotEmpty({ message: 'auth.validation.oauthTokenRequired' })
	token: string;

}

// validates 2FA verification codes
export class TwoFactorCodeDto {

	@IsString()
	@IsNotEmpty({ message: 'auth.validation.codeRequired' })
	@Length(6, 6, { message: 'auth.validation.codeLengthInvalid' })
	@Matches(/^[0-9]+$/, { message: 'auth.validation.codeNumericOnly' })
	code: string;

}
