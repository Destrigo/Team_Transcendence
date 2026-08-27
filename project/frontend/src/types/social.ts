export type FriendshipStatus = 'PENDING' | 'ACCEPTED' | 'DECLINED';

export interface Friend {
  friendshipId: string;
  id: string;
  username: string;
  displayName: string | null;
  avatarUrl: string | null;
  isOnline: boolean;
  lastSeen: string | null;
}

export interface FriendRequest {
  id: string;
  status: FriendshipStatus;
  createdAt: string;
  requester: {
    id: string;
    username: string;
    displayName: string | null;
    avatarUrl: string | null;
  };
}

export interface ChatMessage {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  isRead: boolean;
  createdAt: string;
}

export interface AppNotification {
  id: string;
  type: string;
  title: string;
  body: string;
  data: Record<string, unknown> | null;
  isRead: boolean;
  createdAt: string;
}

export interface LeaderboardEntry {
  rank: number;
  userId: string;
  username: string;
  displayName: string | null;
  avatarUrl: string | null;
  totalValue: number;
  pnlPercent: number;
}

export interface LeaderboardResponse {
  data: LeaderboardEntry[];
  meta: { page: number; limit: number; total: number; totalPages: number };
}
