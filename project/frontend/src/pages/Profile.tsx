import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../components/LanguageSwitcher';

const API = import.meta.env.VITE_API_URL ?? 'http://localhost:4000';
const DEFAULT_AVATAR = 'https://www.gravatar.com/avatar/?d=mp';

type User = {
  id: string;
  email: string;
  username: string;
  display_name?: string | null;
  avatar_url?: string | null;
  balance: string | number;
  is_online: boolean;
  last_seen?: string | null;
};

export default function Profile() {
  const { t } = useTranslation();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [depositAmount, setDepositAmount] = useState('');
  const [depositLoading, setDepositLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMe = async () => {
      try {
        const res = await fetch(`${API}/api/users/me`, {
          credentials: 'include',
        });
        if (!res.ok) throw new Error('Unauthorized');
        setUser(await res.json());
      } catch {
        navigate('/login');
      } finally {
        setLoading(false);
      }
    };
    fetchMe();
  }, [navigate]);

  const handleDeposit = async () => {
    setError('');
    const amount = Number(depositAmount);
    if (!amount || amount <= 0) {
      setError(t('profile.invalidAmount'));
      return;
    }
    try {
      setDepositLoading(true);
      const res = await fetch(`${API}/api/users/deposit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ amount }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.message ?? t('profile.depositFailed'));
      }
      setUser(await res.json());
      setDepositAmount('');
    } catch (err) {
      setError(err instanceof Error ? err.message : t('profile.depositFailed'));
    } finally {
      setDepositLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-muted">
        <p className="text-sm text-muted-foreground">{t('profile.loading')}</p>
      </div>
    );
  }

  if (!user) return null;

  const avatar = user.avatar_url || DEFAULT_AVATAR;
  const balance = Number(user.balance ?? 0);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="w-full max-w-sm rounded-lg bg-card p-8 shadow-md">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold">{t('profile.title')}</h1>
          <LanguageSwitcher />
        </div>

        <div className="mb-6 flex items-center gap-4">
          <img
            src={avatar}
            alt="avatar"
            className="h-20 w-20 rounded-full object-cover"
          />
          <div>
            <h2 className="text-lg font-semibold">
              {user.display_name || user.username}
            </h2>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <span
                className={`inline-block h-2 w-2 rounded-full ${
                  user.is_online ? 'bg-green-500' : 'bg-gray-400'
                }`}
              />
              {user.is_online ? t('profile.online') : t('profile.offline')}
            </div>
          </div>
        </div>

        <div className="space-y-2 border-t border-input pt-4 text-sm">
          <p>
            <span className="font-medium">{t('profile.email')}:</span>{' '}
            <span className="text-muted-foreground">{user.email}</span>
          </p>
          <p>
            <span className="font-medium">{t('profile.username')}:</span>{' '}
            <span className="text-muted-foreground">{user.username}</span>
          </p>
          <p>
            <span className="font-medium">{t('profile.balance')}:</span>{' '}
            <span className="text-muted-foreground">{balance.toFixed(2)}</span>
          </p>
          {user.last_seen && (
            <p>
              <span className="font-medium">{t('profile.lastSeen')}:</span>{' '}
              <span className="text-muted-foreground">
                {new Date(user.last_seen).toLocaleString()}
              </span>
            </p>
          )}
        </div>

        <div className="mt-6 border-t border-input pt-4">
          <label className="mb-1 block text-sm font-medium">
            {t('profile.depositLabel')}
          </label>
          <div className="flex gap-2">
            <input
              type="number"
              value={depositAmount}
              onChange={(e) => setDepositAmount(e.target.value)}
              placeholder={t('profile.depositPlaceholder')}
              className="w-full rounded border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <button
              onClick={handleDeposit}
              disabled={depositLoading}
              className="whitespace-nowrap rounded bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {depositLoading ? t('profile.depositing') : t('profile.depositButton')}
            </button>
          </div>
        </div>

        {error && <p className="mt-4 text-sm text-destructive">{error}</p>}
      </div>
    </div>
  );
}