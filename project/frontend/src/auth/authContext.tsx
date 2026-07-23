import { createContext } from 'react';

export type User = {
  id: string;
  email: string;
  username: string;
  displayName?: string | null;
  avatarUrl?: string | null;
  balance: string | number;
  isOnline: boolean;
  lastSeen?: string | null;
  language: string;
};

type AuthContextType = {
  user: User;
  loading: boolean;
  refreshUser: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  refreshUser: async () => {},
});