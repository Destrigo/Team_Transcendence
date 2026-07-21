import { createContext } from 'react';

type AuthContextType = {
  user: any;
  loading: boolean;
  refreshUser: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  refreshUser: async () => {},
});