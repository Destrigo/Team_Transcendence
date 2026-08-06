const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';

export function resolveAvatarUrl(avatarUrl: string | null | undefined): string | null {
  if (!avatarUrl) return null;
  if (/^https?:\/\//i.test(avatarUrl)) return avatarUrl;
  return `${API_URL}${avatarUrl.startsWith('/') ? '' : '/'}${avatarUrl}`;
}