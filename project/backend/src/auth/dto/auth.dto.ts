import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
  MaxLength,
  Matches,
  IsOptional,
  IsIn,
  Length,
} from 'class-validator';

export class RegisterDto {
  @IsEmail({}, { message: 'auth.validation.invalidEmail' })
  @IsNotEmpty({ message: 'auth.validation.emailRequired' })
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'auth.validation.usernameRequired' })
  @MinLength(3, { message: 'auth.validation.usernameTooShort' })
  @MaxLength(50, { message: 'auth.validation.usernameTooLong' })
  @Matches(/^[a-zA-Z0-9_-]+$/, {
    message: 'auth.validation.usernameInvalidChars',
  })
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

export class LoginDto {
  @IsEmail({}, { message: 'auth.validation.invalidEmail' })
  @IsNotEmpty({ message: 'auth.validation.emailRequired' })
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'auth.validation.passwordRequired' })
  password: string;
}

export class TwoFactorCodeDto {
  @IsString()
  @IsNotEmpty({ message: 'auth.validation.codeRequired' })
  @Length(6, 6, { message: 'auth.validation.codeLengthInvalid' })
  @Matches(/^[0-9]+$/, { message: 'auth.validation.codeNumericOnly' })
  code: string;
}

export class LoginTwoFactorDto {
  @IsString()
  @IsNotEmpty({ message: 'auth.validation.loginTokenRequired' })
  loginToken: string;

  @IsString()
  @IsNotEmpty({ message: 'auth.validation.codeRequired' })
  @Length(6, 6, { message: 'auth.validation.codeLengthInvalid' })
  @Matches(/^[0-9]+$/, { message: 'auth.validation.codeNumericOnly' })
  code: string;
}