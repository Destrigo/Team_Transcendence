import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Loader2 } from 'lucide-react';
import LeaderboardRow from '../components/LeaderboardRow';
import { useAuth } from '../auth/useAuth';
import { fetchLeaderboard } from '../services/social.service';
import type { LeaderboardEntry } from '../types/social';

const LIMIT = 50;

export default function LeaderboardPage() {
  const { t } = useTranslation();
  const { user } = useAuth();

  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    fetchLeaderboard(page, LIMIT)
      .then((res) => {
        setEntries(res.data);
        setTotalPages(res.meta.totalPages);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [page]);

  return (
    <div className="mx-auto max-w-3xl p-6">
      <h1 className="mb-6 text-2xl font-bold">{t('leaderboard.title')}</h1>

      {loading && (
        <div className="flex items-center justify-center gap-2 py-12 text-sm text-muted-foreground">
          <Loader2 className="h-4 w-4 animate-spin" />
          {t('common.loading')}
        </div>
      )}

      {!loading && error && (
        <p className="py-12 text-center text-sm text-destructive">{t('leaderboard.loadFailed')}</p>
      )}

      {!loading && !error && (
        <div className="rounded-lg border border-border bg-card shadow-sm">
          <div className="grid grid-cols-[3rem_1fr_auto_auto] gap-3 border-b border-border bg-muted px-3 py-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
            <span>{t('leaderboard.rank')}</span>
            <span>{t('leaderboard.player')}</span>
            <span>{t('leaderboard.portfolioValue')}</span>
            <span className="text-right">{t('leaderboard.pnlPercent')}</span>
          </div>
          {entries.length === 0 ? (
            <p className="p-4 text-sm text-muted-foreground">{t('leaderboard.empty')}</p>
          ) : (
            entries.map((entry) => (
              <LeaderboardRow key={entry.userId} entry={entry} isCurrentUser={entry.userId === user?.id} />
            ))
          )}

          {totalPages > 1 && (
            <div className="flex items-center justify-between border-t border-border px-3 py-2 text-xs text-muted-foreground">
              <button
                disabled={page <= 1}
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                className="rounded px-2 py-1 hover:bg-accent disabled:opacity-30"
              >
                {t('search.prev')}
              </button>
              <span>{t('search.page', { page, totalPages })}</span>
              <button
                disabled={page >= totalPages}
                onClick={() => setPage((p) => p + 1)}
                className="rounded px-2 py-1 hover:bg-accent disabled:opacity-30"
              >
                {t('search.next')}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
