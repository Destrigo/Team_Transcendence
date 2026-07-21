import { useEffect, useState } from 'react';
import { AuthContext } from './authContext';

const API = import.meta.env.VITE_API_URL ?? 'http://localhost:4000';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  const refreshUser = async () => {
    try {
      const res = await fetch(`${API}/api/users/me`, {
        credentials: 'include',
      });

      if (!res.ok) {
        setUser(null);
        return;
      }

      const data = await res.json();
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