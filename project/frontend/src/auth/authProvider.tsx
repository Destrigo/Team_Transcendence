import { useEffect, useState } from 'react';
import { AuthContext, type User } from './authContext';
import { api } from '../api/api';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);


  const refreshUser = async () => {
    try {
      const { data } = await api.get<User>('/users/me');
      setUser(data);
    } catch {
      setUser(null);
    }
  };


  useEffect(() => {
    refreshUser()
      .finally(() => setLoading(false));
  }, []);


  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        refreshUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}