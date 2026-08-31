import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, Profile } from 'passport-github2';

interface GithubEmail {
  email: string;
  primary: boolean;
  verified: boolean;
  visibility: string | null;
}

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

  async validate(accessToken: string, refreshToken: string, profile: Profile) {
    const res = await fetch('https://api.github.com/user/emails', {
      headers: {
        Authorization: `token ${accessToken}`,
        'User-Agent': 'PaperTrade-App',
      },
    });

    if (!res.ok) {
      throw new UnauthorizedException('Unable to retrieve your email from GitHub');
    }

    const emails = (await res.json()) as GithubEmail[];

    const verifiedEmail =
      emails.find((e) => e.primary && e.verified) ??
      emails.find((e) => e.verified);

    if (!verifiedEmail) {
      throw new UnauthorizedException('Your GitHub email is not verified');
    }

    return {
      provider: 'github',
      providerId: profile.id,
      email: verifiedEmail.email,
      displayName: profile.displayName || profile.username,
    };
  }
}