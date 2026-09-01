import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { UsersModule } from 'src/users/users.module';
import { GoogleStrategy } from './strategies/google.strategy';
import { GithubStrategy } from './strategies/github.strategy';
import { FortyTwoStrategy } from './strategies/fortytwo.strategy';

// Each strategy's constructor throws if its own env vars are missing, so it
// is only registered when configured — otherwise a dev/eval env without
// OAuth credentials would crash the whole app at bootstrap instead of just
// leaving that provider's login button non-functional.
const oauthProviders = [
  ...(process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET && process.env.GOOGLE_CALLBACK_URL
    ? [GoogleStrategy]
    : []),
  ...(process.env.GITHUB_CLIENT_ID && process.env.GITHUB_CLIENT_SECRET && process.env.GITHUB_CALLBACK_URL
    ? [GithubStrategy]
    : []),
  ...(process.env.FORTYTWO_CLIENT_ID && process.env.FORTYTWO_CLIENT_SECRET && process.env.FORTYTWO_CALLBACK_URL
    ? [FortyTwoStrategy]
    : []),
];

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      secret: process.env.JWT_ACCESS_SECRET,
      signOptions: { expiresIn: '15m' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, ...oauthProviders],
  exports: [AuthService],
})
export class AuthModule {}
