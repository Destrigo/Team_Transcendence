import { useEffect, useState } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, UserPlus, MessageCircle, Loader2, Check } from 'lucide-react';
import { getPublicProfile, type PublicProfile as PublicProfileType } from '../services/user.service';
import { useAuth } from '../auth/useAuth';
import { resolveAvatarUrl } from '../api/avatar';
import { sendFriendRequest } from '../services/social.service';

export default function PublicProfile() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { user: currentUser } = useAuth();

  const [profile, setProfile] = useState<PublicProfileType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [requestSent, setRequestSent] = useState(false);

  const isSelf = !!currentUser && currentUser.id === id;

  useEffect(() => {
    if (!id || isSelf) return;
    let cancelled = false;
    setLoading(true);
    setError(false);

    getPublicProfile(id)
      .then((data) => {
        if (!cancelled) setProfile(data);
      })
      .catch(() => {
        if (!cancelled) setError(true);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [id, isSelf]);

  if (isSelf) {
    return <Navigate to="/settings" replace />;
  }

  const handleAddFriend = async () => {
    if (!id || requestSent) return;
    try {
      await sendFriendRequest(id);
      setRequestSent(true);
    } catch {
      // request already exists, or some other transient error — no need to block the UI
    }
  };

  const handleMessage = () => {
    if (id) navigate(`/messages/${id}`);
  };

  const formatLastSeen = (iso: string | null) => {
    if (!iso) return '';
    const diffMs = Date.now() - new Date(iso).getTime();
    const mins = Math.round(diffMs / 60000);
    if (mins < 1) return t('search.offlineSince', { time: t('common.justNow', 'just now') });
    if (mins < 60) return t('search.offlineSince', { time: `${mins}m` });
    const hours = Math.round(mins / 60);
    if (hours < 24) return t('search.offlineSince', { time: `${hours}h` });
    const days = Math.round(hours / 24);
    return t('search.offlineSince', { time: `${days}d` });
  };

  const formatJoined = (iso: string) =>
    new Date(iso).toLocaleDateString(undefined, { year: 'numeric', month: 'long' });

  const initials = (p: PublicProfileType) =>
    (p.displayName || p.username).slice(0, 2).toUpperCase();

  return (
    <div className="mx-auto max-w-2xl px-4 py-8">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 flex items-center gap-1.5 text-sm font-medium text-slate-500 transition hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-100"
      >
        <ArrowLeft className="h-4 w-4" />
        {t('common.back', 'Back')}
      </button>

      {loading && (
        <div className="flex items-center justify-center gap-2 py-24 text-sm text-slate-400">
          <Loader2 className="h-4 w-4 animate-spin" />
          {t('profile.loading', 'Loading profile…')}
        </div>
      )}

      {!loading && (error || !profile) && (
        <div className="flex flex-col items-center gap-3 py-24 text-center">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            {t('profile.notFound', "This trader doesn't exist or the profile is unavailable.")}
          </p>
          <button
            onClick={() => navigate('/search')}
            className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm font-medium hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800"
          >
            {t('search.title')}
          </button>
        </div>
      )}

      {!loading && !error && profile && (
        <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
          <div className="flex items-start gap-5">
            <div className="relative shrink-0">
              {resolveAvatarUrl(profile.avatarUrl) ? (
                <img
                  src={resolveAvatarUrl(profile.avatarUrl)!}
                  alt=""
                  className="h-20 w-20 rounded-full object-cover"
                />
              ) : (
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-indigo-100 text-xl font-semibold text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300">
                  {initials(profile)}
                </div>
              )}
              <span
                className={`absolute bottom-1 right-1 h-4 w-4 rounded-full border-2 border-white dark:border-slate-900 ${
                  profile.isOnline ? 'bg-emerald-500' : 'bg-slate-300 dark:bg-slate-600'
                }`}
              />
            </div>

            <div className="min-w-0 flex-1 pt-1">
              <h1 className="truncate text-xl font-semibold text-slate-900 dark:text-slate-100">
                {profile.displayName || profile.username}
              </h1>
              <p className="truncate text-sm text-slate-400">@{profile.username}</p>

              <p className="mt-2 text-sm">
                {profile.isOnline ? (
                  <span className="font-medium text-emerald-600 dark:text-emerald-400">
                    {t('search.online')}
                  </span>
                ) : (
                  <span className="text-slate-400">{formatLastSeen(profile.lastSeen)}</span>
                )}
              </p>

              <p className="mt-1 text-xs text-slate-400">
                {t('profile.joined', 'Joined {{date}}', { date: formatJoined(profile.createdAt) })}
              </p>
            </div>
          </div>

          <div className="mt-6 flex gap-2 border-t border-slate-100 pt-5 dark:border-slate-800">
            <button
              onClick={handleAddFriend}
              disabled={requestSent}
              className="relative flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 py-2.5 text-sm font-medium text-slate-600 transition hover:border-indigo-300 hover:text-indigo-600 disabled:cursor-default disabled:opacity-60 dark:border-slate-700 dark:text-slate-300 dark:hover:border-indigo-700 dark:hover:text-indigo-400"
            >
              {requestSent ? <Check className="h-4 w-4" /> : <UserPlus className="h-4 w-4" />}
              {requestSent ? t('search.requestSent') : t('search.addFriend')}
            </button>
            <button
              onClick={handleMessage}
              className="relative flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 py-2.5 text-sm font-medium text-slate-600 transition hover:border-indigo-300 hover:text-indigo-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-indigo-700 dark:hover:text-indigo-400"
            >
              <MessageCircle className="h-4 w-4" />
              {t('search.message')}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}