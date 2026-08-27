import { api } from '../api/api';
import type {
  AppNotification,
  ChatMessage,
  Friend,
  FriendRequest,
  LeaderboardResponse,
} from '../types/social';

// --- Friends ---

export async function fetchFriends(): Promise<Friend[]> {
  const { data } = await api.get<Friend[]>('/friends');
  return data;
}

export async function fetchFriendRequests(): Promise<FriendRequest[]> {
  const { data } = await api.get<FriendRequest[]>('/friends/requests');
  return data;
}

export async function sendFriendRequest(userId: string) {
  const { data } = await api.post(`/friends/request/${userId}`);
  return data;
}

export async function acceptFriendRequest(friendshipId: string) {
  const { data } = await api.put(`/friends/${friendshipId}/accept`);
  return data;
}

export async function declineFriendRequest(friendshipId: string) {
  const { data } = await api.put(`/friends/${friendshipId}/decline`);
  return data;
}

export async function removeFriend(friendshipId: string) {
  const { data } = await api.delete(`/friends/${friendshipId}`);
  return data;
}

// --- Messages ---

export async function fetchConversation(otherUserId: string): Promise<ChatMessage[]> {
  const { data } = await api.get<ChatMessage[]>(`/messages/${otherUserId}`);
  return data;
}

export async function sendMessageRest(otherUserId: string, content: string): Promise<ChatMessage> {
  const { data } = await api.post<ChatMessage>(`/messages/${otherUserId}`, { content });
  return data;
}

export async function markConversationRead(otherUserId: string) {
  const { data } = await api.put(`/messages/${otherUserId}/read`);
  return data;
}

// --- Notifications ---

export async function fetchNotifications(): Promise<AppNotification[]> {
  const { data } = await api.get<AppNotification[]>('/notifications');
  return data;
}

export async function fetchUnreadCount(): Promise<number> {
  const { data } = await api.get<number>('/notifications/unread-count');
  return data;
}

export async function markNotificationRead(id: string) {
  const { data } = await api.put(`/notifications/${id}/read`);
  return data;
}

export async function markAllNotificationsRead() {
  const { data } = await api.put('/notifications/read-all');
  return data;
}

// --- Leaderboard ---

export async function fetchLeaderboard(page = 1, limit = 50): Promise<LeaderboardResponse> {
  const { data } = await api.get<LeaderboardResponse>('/leaderboard', { params: { page, limit } });
  return data;
}
