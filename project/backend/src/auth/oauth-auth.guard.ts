import {
  CanActivate,
  ExecutionContext,
  Injectable,
  mixin,
  ServiceUnavailableException,
  Type,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
  isFortyTwoOAuthConfigured,
  isGithubOAuthConfigured,
  isGoogleOAuthConfigured,
} from './oauth-config';

type OAuthStrategy = 'google' | 'github' | '42';

function isConfigured(strategy: OAuthStrategy): boolean {
  switch (strategy) {
    case 'google':
      return isGoogleOAuthConfigured();
    case 'github':
      return isGithubOAuthConfigured();
    case '42':
      return isFortyTwoOAuthConfigured();
  }
}

/** AuthGuard that returns 503 instead of 500 when the Passport strategy was never registered. */
export function OAuthAuthGuard(strategy: OAuthStrategy): Type<CanActivate> {
  @Injectable()
  class OAuthAuthGuardMixin extends AuthGuard(strategy) {
    canActivate(context: ExecutionContext) {
      if (!isConfigured(strategy)) {
        throw new ServiceUnavailableException('auth.oauthNotConfigured');
      }
      return super.canActivate(context);
    }
  }

  return mixin(OAuthAuthGuardMixin);
}
