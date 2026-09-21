import { Module, Global  } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtAuthGuard } from './jwt-auth.guard';
import { JwtStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { SocialModule } from '../social/social.module';
import { GoogleStrategy } from './strategies/google.strategy';
import { GithubStrategy } from './strategies/github.strategy';
import { FortyTwoStrategy } from './strategies/fortytwo.strategy';
import {
  isFortyTwoOAuthConfigured,
  isGithubOAuthConfigured,
  isGoogleOAuthConfigured,
} from './oauth-config';

// Each strategy's constructor throws if its own env vars are missing, so it
// is only registered when configured — otherwise a dev/eval env without
// OAuth credentials would crash the whole app at bootstrap instead of just
// leaving that provider's login button non-functional.
const oauthProviders = [
  ...(isGoogleOAuthConfigured() ? [GoogleStrategy] : []),
  ...(isGithubOAuthConfigured() ? [GithubStrategy] : []),
  ...(isFortyTwoOAuthConfigured() ? [FortyTwoStrategy] : []),
];

@Global() 
@Module({
  imports: [
    UsersModule,
    SocialModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.JWT_ACCESS_SECRET,
      signOptions: { expiresIn: '15m' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, JwtAuthGuard, ...oauthProviders],
  exports: [AuthService, PassportModule, JwtAuthGuard],
})
export class AuthModule {}
