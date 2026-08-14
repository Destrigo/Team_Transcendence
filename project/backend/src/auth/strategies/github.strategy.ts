import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, Profile } from 'passport-github2';

@Injectable()
export class GithubStrategy extends PassportStrategy(Strategy, 'github') {
  constructor() {
    const clientID = process.env.GITHUB_CLIENT_ID;
    const clientSecret = process.env.GITHUB_CLIENT_SECRET;
    const callbackURL = process.env.GITHUB_CALLBACK_URL;

    if (!clientID || !clientSecret || !callbackURL) {
    throw new Error('GitHub OAuth environment variables are not configured');
    }

    super({
    clientID,
    clientSecret,
    callbackURL,
    scope: ['user:email'],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: Profile,
  ) {
    // GitHub can return multiple emails (work, personal, noreply...).
    // Prefer the primary/verified one if present, else fall back to first.
    const emails = profile.emails as Array<{
      value: string;
      primary?: boolean;
      verified?: boolean;
    }>;
    const primaryEmail =
      emails?.find((e) => e.primary && e.verified) ?? emails?.[0];

    if (!primaryEmail) {
      // Happens if the user has no public/verified email and the
      // user:email scope wasn't granted - handle in the controller/service.
    }

    return {
      provider: 'github',
      providerId: profile.id,
      email: primaryEmail?.value,
      displayName: profile.displayName || profile.username,
    };
  }
}