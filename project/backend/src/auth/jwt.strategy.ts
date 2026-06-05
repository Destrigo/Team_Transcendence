import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    const secret = process.env.JWT_SECRET;

    if (!secret) {
        throw new Error('JWT_SECRET is not defined');
    }

    super({
    jwtFromRequest: ExtractJwt.fromExtractors([
        (req) => req?.cookies?.access_token,
    ]),
    secretOrKey: secret,
    });
  }

  validate(payload: any) {
    return {
      userId: payload.sub,
    };
  }
}