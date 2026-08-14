import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-oauth2';
import axios from 'axios';

@Injectable()
export class FortyTwoStrategy extends PassportStrategy(Strategy, '42') {
  constructor() {
    
    const clientID = process.env.FORTYTWO_CLIENT_ID;
    const clientSecret = process.env.FORTYTWO_CLIENT_SECRET;
    const callbackURL = process.env.FORTYTWO_CALLBACK_URL;

    if (!clientID || !clientSecret || !callbackURL) {
    throw new Error('42 OAuth environment variables are not configured');
    }

    super({
      authorizationURL: 'https://api.intra.42.fr/oauth/authorize',
      tokenURL: 'https://api.intra.42.fr/oauth/token',
      clientID,
      clientSecret,
      callbackURL,
    });
  }

  async validate(accessToken: string) {
    const { data } = await axios.get('https://api.intra.42.fr/v2/me', {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    return {
      provider: '42',
      providerId: String(data.id),
      email: data.email,
      displayName: data.usual_full_name || data.login,
    };
  }
}