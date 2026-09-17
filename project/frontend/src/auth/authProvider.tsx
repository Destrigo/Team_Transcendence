import { useEffect, useState } from 'react';
import { AuthContext, type User } from './authContext';
import { api } from '../api/api';
import i18n from '../i18n';

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

  // The language switcher only persists to localStorage on the browser that
  // changed it — a login from a different browser/device (or with
  // localStorage cleared) would otherwise stay on the browser's default
  // language instead of the one saved on the account.
  useEffect(() => {
    if (user?.language && user.language !== i18n.resolvedLanguage) {
      i18n.changeLanguage(user.language);
    }
  }, [user?.language]);


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