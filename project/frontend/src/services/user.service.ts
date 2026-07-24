const API = import.meta.env.VITE_API_URL ?? 'http://localhost:4000';

export interface PublicProfile {
  id: string;
  username: string;
  displayName: string | null;
  avatarUrl: string | null;
  isOnline: boolean;
  lastSeen: string | null;
  createdAt: string;
}

export interface SearchUsersResult {
  items: PublicProfile[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export async function searchUsers(
  q: string,
  page = 1,
  limit = 20,
): Promise<SearchUsersResult> {
  const params = new URLSearchParams({
    page: String(page),
    limit: String(limit),
  });

  if (q) {
    params.set('q', q);
  }

  const res = await fetch(`${API}/api/users/search?${params.toString()}`, {
    credentials: 'include',
  });

  if (!res.ok) {
    throw new Error(`HTTP ${res.status}`);
  }

  return await res.json();
}

export async function getPublicProfile(id: string): Promise<PublicProfile> {
  const res = await fetch(`${API}/api/users/${id}`, {
    credentials: 'include',
  });

  if (!res.ok) {
    throw new Error(`HTTP ${res.status}`);
  }

  return await res.json();
}