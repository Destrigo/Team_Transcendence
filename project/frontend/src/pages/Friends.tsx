import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Loader2, UserCheck, UserX, X } from 'lucide-react';
import Avatar from '../components/Avatar';
import FriendCard from '../components/FriendCard';
import { useSocial } from '../social/SocialContext';
import {
  acceptFriendRequest,
  declineFriendRequest,
  fetchFriendRequests,
  fetchFriends,
  fetchOutgoingFriendRequests,
  removeFriend,
} from '../services/social.service';
import type { Friend, FriendRequest } from '../types/social';

export default function FriendsPage() {
  const { t } = useTranslation();
  const { onlineUserIds } = useSocial();

  const [friends, setFriends] = useState<Friend[]>([]);
  const [requests, setRequests] = useState<FriendRequest[]>([]);
  const [outgoingRequests, setOutgoingRequests] = useState<FriendRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [busyId, setBusyId] = useState<string | null>(null);

  const load = useCallback(() => {
    setLoading(true);
    setError(false);
    Promise.all([fetchFriends(), fetchFriendRequests(), fetchOutgoingFriendRequests()])
      .then(([f, r, o]) => {
        setFriends(f);
        setRequests(r);
        setOutgoingRequests(o);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const handleAccept = async (id: string) => {
    setBusyId(id);
    try {
      await acceptFriendRequest(id);
      load();
    } finally {
      setBusyId(null);
    }
  };

  const handleDecline = async (id: string) => {
    setBusyId(id);
    try {
      await declineFriendRequest(id);
      setRequests((prev) => prev.filter((r) => r.id !== id));
    } finally {
      setBusyId(null);
    }
  };

  const handleRemove = async (friendshipId: string) => {
    await removeFriend(friendshipId);
    setFriends((prev) => prev.filter((f) => f.friendshipId !== friendshipId));
  };

  const handleCancelOutgoing = async (id: string) => {
    setBusyId(id);
    try {
      // Cancelling isn't a distinct action on the backend — a pending
      // friendship row is just deleted, same as removing an accepted one.
      await removeFriend(id);
      setOutgoingRequests((prev) => prev.filter((r) => r.id !== id));
    } finally {
      setBusyId(null);
    }
  };

  return (
    <div className="mx-auto max-w-3xl p-6">
      <h1 className="mb-6 text-2xl font-bold">{t('friends.title')}</h1>

      {loading && (
        <div className="flex items-center justify-center gap-2 py-12 text-sm text-muted-foreground">
          <Loader2 className="h-4 w-4 animate-spin" />
          {t('common.loading')}
        </div>
      )}

      {!loading && error && (
        <p className="py-12 text-center text-sm text-destructive">{t('friends.loadFailed')}</p>
      )}

      {!loading && !error && (
        <>
          {requests.length > 0 && (
            <section className="mb-8">
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                {t('friends.incomingRequests')} ({requests.length})
              </h2>
              <div className="flex flex-col gap-2">
                {requests.map((r) => (
                  <div key={r.id} className="flex items-center gap-3 rounded-xl border border-border bg-card p-3">
                    <Avatar
                      url={r.otherUser.avatarUrl}
                      label={r.otherUser.displayName || r.otherUser.username}
                      size={10}
                    />
                    <p className="flex-1 truncate text-sm font-medium">
                      {r.otherUser.displayName || r.otherUser.username}
                    </p>
                    <button
                      disabled={busyId === r.id}
                      onClick={() => handleAccept(r.id)}
                      title={t('friends.accept')}
                      className="flex h-8 w-8 items-center justify-center rounded-lg border border-border text-emerald-600 transition hover:border-emerald-300 hover:bg-emerald-50 disabled:opacity-40 dark:hover:bg-emerald-950"
                    >
                      <UserCheck className="h-4 w-4" />
                    </button>
                    <button
                      disabled={busyId === r.id}
                      onClick={() => handleDecline(r.id)}
                      title={t('friends.decline')}
                      className="flex h-8 w-8 items-center justify-center rounded-lg border border-border text-destructive transition hover:border-destructive/40 hover:bg-destructive/10 disabled:opacity-40"
                    >
                      <UserX className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            </section>
          )}

          {outgoingRequests.length > 0 && (
            <section className="mb-8">
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                {t('friends.outgoingRequests')} ({outgoingRequests.length})
              </h2>
              <div className="flex flex-col gap-2">
                {outgoingRequests.map((r) => (
                  <div key={r.id} className="flex items-center gap-3 rounded-xl border border-border bg-card p-3">
                    <Avatar
                      url={r.otherUser.avatarUrl}
                      label={r.otherUser.displayName || r.otherUser.username}
                      size={10}
                    />
                    <div className="flex-1 min-w-0">
                      <p className="truncate text-sm font-medium">
                        {r.otherUser.displayName || r.otherUser.username}
                      </p>
                      <p className="text-xs text-muted-foreground">{t('friends.pending')}</p>
                    </div>
                    <button
                      disabled={busyId === r.id}
                      onClick={() => handleCancelOutgoing(r.id)}
                      title={t('friends.cancelRequest')}
                      className="flex h-8 w-8 items-center justify-center rounded-lg border border-border text-muted-foreground transition hover:border-destructive/40 hover:text-destructive disabled:opacity-40"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            </section>
          )}

          <section>
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              {t('friends.yourFriends')} ({friends.length})
            </h2>
            {friends.length === 0 ? (
              <p className="rounded-xl border border-border bg-card p-4 text-sm text-muted-foreground">
                {t('friends.noFriends')}
              </p>
            ) : (
              <div className="grid gap-2 sm:grid-cols-2">
                {friends.map((f) => (
                  <FriendCard
                    key={f.friendshipId}
                    friend={f}
                    online={onlineUserIds.has(f.id)}
                    onRemove={handleRemove}
                  />
                ))}
              </div>
            )}
          </section>
        </>
      )}
    </div>
  );
}
