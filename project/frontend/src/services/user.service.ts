import { api } from '../api/api';

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
  const { data } = await api.get<SearchUsersResult>('/users/search', {
    params: { q: q || undefined, page, limit },
  });
  return data;
}

export async function getPublicProfile(id: string): Promise<PublicProfile> {
  const { data } = await api.get<PublicProfile>(`/users/${id}`);
  return data;
}
