export interface JwtPayload {
  sub: string;
  email?: string;
  is2faActive ?: boolean;
}

export interface AuthenticatedUser {
  userId: string;
}
