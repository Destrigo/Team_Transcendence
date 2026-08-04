import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Search as SearchIcon, UserPlus, MessageCircle, Loader2 } from 'lucide-react';
import { useDebounce } from '../hooks/useDebounce';
import { searchUsers, type PublicProfile } from '../services/user.service';
import { resolveAvatarUrl } from '../components/Avatar';

const LIMIT = 20;

export default function SearchPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [results, setResults] = useState<PublicProfile[]>([]);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  // tracks which placeholder button was just clicked, per user id, to show a "coming soon" hint
  const [flashed, setFlashed] = useState<string | null>(null);

  const debouncedQuery = useDebounce(query, 350);

  // reset to page 1 whenever the search term changes
  useEffect(() => {
    setPage(1);
  }, [debouncedQuery]);

  useEffect(() => {
    if (!debouncedQuery.trim()) {
      setResults([]);
      setTotal(0);
      setTotalPages(0);
      setError(false);
      setLoading(false);
      return;
    }

    let cancelled = false;
    setLoading(true);
    setError(false);

    searchUsers(debouncedQuery.trim(), page, LIMIT)
      .then((data) => {
        if (cancelled) return;
        setResults(data.items);
        setTotal(data.total);
        setTotalPages(data.totalPages);
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
  }, [debouncedQuery, page]);

  const handlePlaceholderClick = (id: string, action: 'friend' | 'message') => (
    e: React.MouseEvent,
  ) => {
    e.stopPropagation();
    setFlashed(`${id}:${action}`);
    setTimeout(() => setFlashed(null), 1500);
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

  const initials = (u: PublicProfile) =>
    (u.displayName || u.username).slice(0, 2).toUpperCase();

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <header className="mb-6">
        <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
          {t('search.title')}
        </h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          {t('search.subtitle')}
        </p>
      </header>

      <div className="relative mb-6">
        <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t('search.placeholder')}
          className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm text-slate-900 shadow-sm outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:ring-indigo-900/40"
          autoFocus
        />
      </div>

      {/* Empty / prompt state */}
      {!debouncedQuery.trim() && (
        <p className="py-12 text-center text-sm text-slate-400 dark:text-slate-500">
          {t('search.noQuery')}
        </p>
      )}

      {/* Loading state */}
      {loading && (
        <div className="flex items-center justify-center gap-2 py-12 text-sm text-slate-400">
          <Loader2 className="h-4 w-4 animate-spin" />
          {t('search.loading')}
        </div>
      )}

      {/* Error state */}
      {!loading && error && (
        <div className="flex flex-col items-center gap-3 py-12 text-sm text-slate-500">
          <span>{t('search.error')}</span>
          <button
            onClick={() => setPage((p) => p)}
            className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm font-medium hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800"
          >
            {t('search.retry')}
          </button>
        </div>
      )}

      {/* No results */}
      {!loading && !error && debouncedQuery.trim() && results.length === 0 && (
        <p className="py-12 text-center text-sm text-slate-400 dark:text-slate-500">
          {t('search.noResults', { query: debouncedQuery.trim() })}
        </p>
      )}

      {/* Results */}
      {!loading && !error && results.length > 0 && (
        <>
          <p className="mb-3 text-xs font-medium uppercase tracking-wide text-slate-400">
            {t('search.resultsCount', { count: total })}
          </p>

          <ul className="flex flex-col gap-2">
            {results.map((u) => (
              <li
                key={u.id}
                onClick={() => navigate(`/profile/${u.id}`)}
                className="group flex cursor-pointer items-center gap-4 rounded-xl border border-slate-200 bg-white p-3 transition hover:border-indigo-200 hover:shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:hover:border-indigo-800"
              >
                <div className="relative shrink-0">
                  {resolveAvatarUrl(u.avatarUrl) ? (
                    <img
                      src={resolveAvatarUrl(u.avatarUrl)!}
                      alt=""
                      className="h-11 w-11 rounded-full object-cover"
                    />
                  ) : (
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-indigo-100 text-sm font-semibold text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300">
                      {initials(u)}
                    </div>
                  )}
                  <span
                    className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white dark:border-slate-900 ${
                      u.isOnline ? 'bg-emerald-500' : 'bg-slate-300 dark:bg-slate-600'
                    }`}
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-slate-900 dark:text-slate-100">
                    {u.displayName || u.username}
                  </p>
                  <p className="truncate text-xs text-slate-400">
                    @{u.username}
                    {' · '}
                    {u.isOnline ? (
                      <span className="text-emerald-600 dark:text-emerald-400">
                        {t('search.online')}
                      </span>
                    ) : (
                      formatLastSeen(u.lastSeen)
                    )}
                  </p>
                </div>

                <div className="flex shrink-0 items-center gap-1.5">
                  <button
                    title={t('search.addFriend')}
                    onClick={handlePlaceholderClick(u.id, 'friend')}
                    className="relative flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:border-indigo-300 hover:text-indigo-600 dark:border-slate-700 dark:text-slate-400 dark:hover:border-indigo-700 dark:hover:text-indigo-400"
                  >
                    <UserPlus className="h-4 w-4" />
                    {flashed === `${u.id}:friend` && (
                      <span className="absolute -top-8 whitespace-nowrap rounded-md bg-slate-800 px-2 py-1 text-[11px] text-white shadow">
                        {t('search.comingSoon')}
                      </span>
                    )}
                  </button>
                  <button
                    title={t('search.message')}
                    onClick={handlePlaceholderClick(u.id, 'message')}
                    className="relative flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:border-indigo-300 hover:text-indigo-600 dark:border-slate-700 dark:text-slate-400 dark:hover:border-indigo-700 dark:hover:text-indigo-400"
                  >
                    <MessageCircle className="h-4 w-4" />
                    {flashed === `${u.id}:message` && (
                      <span className="absolute -top-8 whitespace-nowrap rounded-md bg-slate-800 px-2 py-1 text-[11px] text-white shadow">
                        {t('search.comingSoon')}
                      </span>
                    )}
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {totalPages > 1 && (
            <div className="mt-6 flex items-center justify-center gap-4 text-sm">
              <button
                disabled={page <= 1}
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                className="rounded-lg border border-slate-200 px-3 py-1.5 font-medium disabled:cursor-not-allowed disabled:opacity-40 dark:border-slate-700"
              >
                {t('search.prev')}
              </button>
              <span className="text-slate-400">
                {t('search.page', { page, totalPages })}
              </span>
              <button
                disabled={page >= totalPages}
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                className="rounded-lg border border-slate-200 px-3 py-1.5 font-medium disabled:cursor-not-allowed disabled:opacity-40 dark:border-slate-700"
              >
                {t('search.next')}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}