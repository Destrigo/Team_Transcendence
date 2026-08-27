import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MessageCircle, UserMinus } from 'lucide-react';
import { resolveAvatarUrl } from '../api/avatar';
import type { Friend } from '../types/social';

interface FriendCardProps {
  friend: Friend;
  online: boolean;
  onRemove: (friendshipId: string) => void;
}

export default function FriendCard({ friend, online, onRemove }: FriendCardProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const initials = (friend.displayName || friend.username).slice(0, 2).toUpperCase();

  return (
    <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-3">
      <button
        onClick={() => navigate(`/profile/${friend.id}`)}
        className="relative shrink-0"
        title={friend.username}
      >
        {resolveAvatarUrl(friend.avatarUrl) ? (
          <img src={resolveAvatarUrl(friend.avatarUrl)!} alt="" className="h-11 w-11 rounded-full object-cover" />
        ) : (
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
            {initials}
          </div>
        )}
        <span
          className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-card ${
            online ? 'bg-emerald-500' : 'bg-muted-foreground/40'
          }`}
        />
      </button>

      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium">{friend.displayName || friend.username}</p>
        <p className="truncate text-xs text-muted-foreground">
          {online ? t('friends.online') : t('friends.offline')}
        </p>
      </div>

      <div className="flex shrink-0 items-center gap-1.5">
        <button
          title={t('friends.message')}
          onClick={() => navigate(`/messages/${friend.id}`)}
          className="flex h-8 w-8 items-center justify-center rounded-lg border border-border text-muted-foreground transition hover:border-primary/40 hover:text-primary"
        >
          <MessageCircle className="h-4 w-4" />
        </button>
        <button
          title={t('friends.removeFriend')}
          onClick={() => onRemove(friend.friendshipId)}
          className="flex h-8 w-8 items-center justify-center rounded-lg border border-border text-muted-foreground transition hover:border-destructive/40 hover:text-destructive"
        >
          <UserMinus className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
