import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Avatar from './Avatar';
import type { LeaderboardEntry } from '../types/social';

function formatCurrency(value: number) {
  return value.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 });
}

interface LeaderboardRowProps {
  entry: LeaderboardEntry;
  isCurrentUser: boolean;
}

export default function LeaderboardRow({ entry, isCurrentUser }: LeaderboardRowProps) {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const isUp = entry.pnlPercent >= 0;

  return (
    <button
      onClick={() => navigate(`/profile/${entry.userId}`)}
      className={`grid w-full grid-cols-[3rem_1fr_auto_auto] items-center gap-3 border-b border-border px-3 py-2.5 text-left transition-colors last:border-b-0 hover:bg-accent/60 ${
        isCurrentUser ? 'bg-primary/5' : ''
      }`}
    >
      <span className="font-mono text-sm text-muted-foreground">#{entry.rank}</span>

      <span className="flex min-w-0 items-center gap-2">
        <Avatar url={entry.avatarUrl} label={entry.displayName || entry.username} size={8} />
        <span className="truncate text-sm font-medium">
          {entry.displayName || entry.username}
          {isCurrentUser && <span className="ml-1 text-xs text-muted-foreground">({t('leaderboard.you')})</span>}
        </span>
      </span>

      <span className="font-mono text-sm">{formatCurrency(entry.totalValue)}</span>

      <span className={`w-20 text-right font-mono text-xs ${isUp ? 'text-emerald-600' : 'text-destructive'}`}>
        {isUp ? '+' : ''}
        {entry.pnlPercent.toFixed(2)}%
      </span>
    </button>
  );
}
