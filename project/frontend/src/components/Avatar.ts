const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';

const API_ORIGIN = API_URL.replace(/\/api\/?$/, '');

export function resolveAvatarUrl(avatarUrl: string | null | undefined): string | null {
  if (!avatarUrl) return null;
  if (/^https?:\/\//i.test(avatarUrl)) return avatarUrl;
  return `${API_ORIGIN}${avatarUrl.startsWith('/') ? '' : '/'}${avatarUrl}`;
}