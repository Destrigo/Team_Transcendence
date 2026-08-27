import { JwtService } from '@nestjs/jwt';
import type { Socket } from 'socket.io';

function parseCookie(header: string | undefined, name: string): string | null {
  if (!header) return null;
  for (const part of header.split(';')) {
    const [key, ...rest] = part.trim().split('=');
    if (key === name) return decodeURIComponent(rest.join('='));
  }
  return null;
}

/**
 * Verifies the access_token cookie on a socket handshake and returns the
 * authenticated userId, or null if missing/invalid. Never trust a userId
 * the client sends itself (e.g. in handshake.query) — it has to come from
 * a verified JWT, the same as REST requests.
 */
export async function getUserIdFromSocket(
  client: Socket,
  jwtService: JwtService,
): Promise<string | null> {
  const token = parseCookie(client.handshake.headers.cookie, 'access_token');
  if (!token) return null;

  try {
    const payload = await jwtService.verifyAsync<{ sub: string }>(token, {
      secret: process.env.JWT_ACCESS_SECRET,
    });
    return payload.sub ?? null;
  } catch {
    return null;
  }
}
