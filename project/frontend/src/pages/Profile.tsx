import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { useAuth } from '../auth/useAuth';

const API = import.meta.env.VITE_API_URL ?? 'http://localhost:4000';
const DEFAULT_AVATAR = 'https://www.gravatar.com/avatar/?d=mp';

export default function Profile() {
  const { t } = useTranslation();

  const { user, loading, refreshUser } = useAuth();

  const [depositAmount, setDepositAmount] = useState('');
  const [depositLoading, setDepositLoading] = useState(false);
  const [error, setError] = useState('');
  const [avatarUploading, setAvatarUploading] = useState(false);
  const [avatarError, setAvatarError] = useState('');
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [username, setUsername] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [saveLoading, setSaveLoading] = useState(false);
  const [saveError, setSaveError] = useState('');
  const [saveSuccess, setSaveSuccess] = useState(false);

  const [logoutLoading, setLogoutLoading] = useState(false);

  // useEffect(() => {
  //   if (!loading && !user) {
  //     navigate('/login');
  //   }
  // }, [loading, user, navigate]);

  useEffect(() => {
    if (user) {
      setUsername(user.username);
      setDisplayName(user.displayName ?? '');
    }
  }, [user]);

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
      await refreshUser();
      setDepositAmount('');
    } catch (err) {
      setError(err instanceof Error ? err.message : t('profile.depositFailed'));
    } finally {
      setDepositLoading(false);
    }
  };

  const handleAvatarClick = () => {
    if (avatarUploading) return;
    fileInputRef.current?.click();
  };

  const handleAvatarChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = '';
    if (!file) return;

    setAvatarError('');

    if (!file.type.startsWith('image/')) {
      setAvatarError(t('profile.avatarInvalidType'));
      return;
    }
    const MAX_SIZE = 5 * 1024 * 1024;
    if (file.size > MAX_SIZE) {
      setAvatarError(t('profile.avatarTooLarge'));
      return;
    }

    const formData = new FormData();
    formData.append('avatar', file);

    try {
      setAvatarUploading(true);
      const res = await fetch(`${API}/api/users/me/avatar`, {
        method: 'PUT',
        credentials: 'include',
        body: formData,
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.message ?? t('profile.avatarUploadFailed'));
      }
      await refreshUser();
    } catch (err) {
      setAvatarError(
        err instanceof Error ? err.message : t('profile.avatarUploadFailed'),
      );
    } finally {
      setAvatarUploading(false);
    }
  };

  const handleSave = async () => {
    setSaveError('');
    setSaveSuccess(false);
    if (!username.trim()) {
      setSaveError(t('profile.usernameRequired'));
      return;
    }
    try {
      setSaveLoading(true);
      const res = await fetch(`${API}/api/users/me`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          username: username.trim(),
          displayName: displayName.trim() || null,
        }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.message ?? t('profile.saveFailed'));
      }

      await refreshUser();
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 2500);
    } catch (err) {
      setSaveError(err instanceof Error ? err.message : t('profile.saveFailed'));
    } finally {
      setSaveLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      setLogoutLoading(true);
      await fetch(`${API}/api/auth/logout`, {
        method: 'POST',
        credentials: 'include',
      });
    } catch {
    } finally {
      await refreshUser();
      setLogoutLoading(false);
      navigate('/login');
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

  const avatar = user.avatarUrl ? `${API}${user.avatarUrl}` : DEFAULT_AVATAR;
  const balance = Number(user.balance ?? 0);
  const hasChanges =
    username.trim() !== user.username ||
    (displayName.trim() || null) !== (user.displayName ?? null);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted p-8">
      <div className="w-full max-w-3xl rounded-lg bg-card p-8 shadow-md">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold">{t('profile.title')}</h1>
          <LanguageSwitcher />
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* левая колонка: identity + info */}
          <div>
            <div className="mb-6 flex items-center gap-4">
              <button
                type="button"
                onClick={handleAvatarClick}
                disabled={avatarUploading}
                className="group relative h-20 w-20 shrink-0 rounded-full focus:outline-none focus:ring-2 focus:ring-ring disabled:cursor-not-allowed"
                aria-label={t('profile.changeAvatar')}
              >
                <img
                  src={avatar}
                  alt="avatar"
                  className="h-20 w-20 rounded-full object-cover"
                />
                <span className="absolute inset-0 flex items-center justify-center rounded-full bg-black/0 text-[10px] font-medium text-transparent transition-colors group-hover:bg-black/40 group-hover:text-white">
                  {avatarUploading ? t('profile.uploading') : t('profile.changeAvatar')}
                </span>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarChange}
                  className="hidden"
                />
              </button>
              <div>
                <h2 className="text-lg font-semibold">
                  {user.displayName || user.username}
                </h2>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <span
                    className={`inline-block h-2 w-2 rounded-full ${
                      user.isOnline ? 'bg-green-500' : 'bg-gray-400'
                    }`}
                  />
                  {user.isOnline ? t('profile.online') : t('profile.offline')}
                </div>
              </div>
            </div>

            {avatarError && (
              <p className="-mt-4 mb-4 text-sm text-destructive">{avatarError}</p>
            )}

            <div className="space-y-2 border-t border-input pt-4 text-sm">
              <p>
                <span className="font-medium">{t('profile.email')}:</span>{' '}
                <span className="text-muted-foreground">{user.email}</span>
              </p>
              <p>
                <span className="font-medium">{t('profile.balance')}:</span>{' '}
                <span className="text-muted-foreground">{balance.toFixed(2)}</span>
              </p>
              {user.lastSeen && (
                <p>
                  <span className="font-medium">{t('profile.lastSeen')}:</span>{' '}
                  <span className="text-muted-foreground">
                    {new Date(user.lastSeen).toLocaleString()}
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
              {error && <p className="mt-2 text-sm text-destructive">{error}</p>}
            </div>
          </div>

          <div className="flex flex-col">
            <div className="space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium">
                  {t('profile.username')}
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full rounded border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">
                  {t('profile.displayName')}
                </label>
                <input
                  type="text"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  placeholder={t('profile.displayNamePlaceholder')}
                  className="w-full rounded border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              {saveError && <p className="text-sm text-destructive">{saveError}</p>}
              {saveSuccess && (
                <p className="text-sm text-green-600">{t('profile.saved')}</p>
              )}

              <button
                onClick={handleSave}
                disabled={saveLoading || !hasChanges}
                className="w-full rounded bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {saveLoading ? t('profile.saving') : t('profile.saveButton')}
              </button>
            </div>

            <div className="mt-auto border-t border-input pt-4 md:mt-6">
              <button
                onClick={handleLogout}
                disabled={logoutLoading}
                className="w-full rounded border border-input px-4 py-2 text-sm font-medium text-destructive hover:bg-destructive/10 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {logoutLoading ? t('profile.loggingOut') : t('profile.logoutButton')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}