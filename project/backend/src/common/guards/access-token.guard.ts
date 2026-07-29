import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import type { Request } from 'express';

export type AccessTokenPayload = {
  sub: string;
  email?: string;
  is2faActive?: boolean;
};

type AuthenticatedRequest = Request & {
  user?: { userId: string; email?: string };
  cookies?: Record<string, string>;
};

/** Verifies access JWT from Authorization Bearer or access_token cookie. */
@Injectable()
export class AccessTokenGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest<AuthenticatedRequest>();
    const token = this.extractToken(req);

    if (!token) {
      throw new UnauthorizedException('Authentication required');
    }

    try {
      // Must match AuthService.generateTokens until JWT secrets are centralized.
      const payload = await this.jwtService.verifyAsync<AccessTokenPayload>(
        token,
        { secret: process.env.JWT_SECRET ?? 'ACCESS_SECRET' },
      );

      if (!payload?.sub) {
        throw new UnauthorizedException('Invalid token payload');
      }

      req.user = { userId: payload.sub, email: payload.email };
      return true;
    } catch {
      throw new UnauthorizedException('Invalid or expired token');
    }
  }

  private extractToken(req: AuthenticatedRequest): string | null {
    const header = req.headers.authorization;
    if (header?.startsWith('Bearer ')) {
      return header.slice('Bearer '.length).trim();
    }

    const cookieToken = req.cookies?.access_token;
    if (cookieToken) {
      return cookieToken;
    }

    return null;
  }
}
