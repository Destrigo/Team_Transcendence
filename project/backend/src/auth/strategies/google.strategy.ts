import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, Profile } from 'passport-google-oauth20';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor() {
    const clientID = process.env.GOOGLE_CLIENT_ID;
    const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
    const callbackURL = process.env.GOOGLE_CALLBACK_URL;

    if (!clientID || !clientSecret || !callbackURL) {
      throw new Error('Google OAuth environment variables are not configured');
    }

    super({
      clientID,
      clientSecret,
      callbackURL,
      scope: ['email', 'profile'],
    });
  }

  // Called automatically by passport after Google redirects back with the code
  // and the strategy has already exchanged it for an access token + profile.
  async validate(
    accessToken: string,
    refreshToken: string,
    profile: Profile,
  ) {
    const email = profile.emails?.[0]?.value;
    const displayName = profile.displayName;
    const providerId = profile.id;

    // Whatever we return here becomes `req.user` in the callback controller method
    return {
      provider: 'google',
      providerId,
      email,
      displayName,
    };
  }
}