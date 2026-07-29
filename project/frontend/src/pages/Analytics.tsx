import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from 'recharts';

const API = import.meta.env.VITE_API_URL ?? 'http://localhost:4000';

interface PortfolioPoint {
  date: string;
  totalValue: number;
  balance: number;
  holdingsValue: number;
}
interface AllocationItem {
  symbol: string;
  name: string;
  value: number;
  percentage: number;
}
interface TradeStats {
  totalTrades: number;
  totalPnl: number;
  bestTrade: { symbol: string; pnl: number } | null;
  worstTrade: { symbol: string; pnl: number } | null;
}
interface Trade {
  filledAt: string;
  asset: { symbol: string; name: string };
  type: 'BUY' | 'SELL';
  quantity: number;
  price: number;
  total: number;
}

const PIE_COLORS = [
  '#6366f1',
  '#22c55e',
  '#f59e0b',
  '#ec4899',
  '#14b8a6',
  '#f97316',
];

function fmt(n: number) {
  return (
    '$' +
    n.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  );
}

function formatTooltipValue(value: unknown) {
  return fmt(Number(value ?? 0));
}

function rangeQuery(from: string, to: string) {
  const params = new URLSearchParams();
  if (from) params.set('from', from);
  if (to) params.set('to', to);
  const qs = params.toString();
  return qs ? `?${qs}` : '';
}

async function apiFetch<T>(path: string): Promise<T> {
  const res = await fetch(`${API}/api${path}`, { credentials: 'include' });
  if (!res.ok) throw new Error(`${res.status}`);
  return res.json();
}

async function downloadFile(path: string, filename: string) {
  const res = await fetch(`${API}/api${path}`, { credentials: 'include' });
  if (!res.ok) throw new Error(`${res.status}`);
  const blob = await res.blob();
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

function daysAgoIso(days: number) {
  const d = new Date();
  d.setDate(d.getDate() - days);
  return d.toISOString().slice(0, 10);
}

export default function Analytics() {
  const { t } = useTranslation();
  const [portfolioData, setPortfolioData] = useState<PortfolioPoint[]>([]);
  const [allocation, setAllocation] = useState<AllocationItem[]>([]);
  const [stats, setStats] = useState<TradeStats | null>(null);
  const [trades, setTrades] = useState<Trade[]>([]);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  async function load(nextFrom = from, nextTo = to) {
    setLoading(true);
    setError('');
    try {
      const qs = rangeQuery(nextFrom, nextTo);
      const [portfolio, alloc, tradeStats, tradeList] = await Promise.all([
        apiFetch<PortfolioPoint[]>(`/analytics/portfolio${qs}`),
        apiFetch<AllocationItem[]>(`/analytics/allocation`),
        apiFetch<TradeStats>(`/analytics/stats${qs}`),
        apiFetch<Trade[]>(`/analytics/trades${qs}`),
      ]);

      setPortfolioData(portfolio);
      setAllocation(alloc);
      setStats(tradeStats);
      setTrades(tradeList);
    } catch {
      setError(t('analytics.loadError'));
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function applyPreset(days: number | null) {
    if (days === null) {
      setFrom('');
      setTo('');
      void load('', '');
      return;
    }
    const nextFrom = daysAgoIso(days);
    const nextTo = new Date().toISOString().slice(0, 10);
    setFrom(nextFrom);
    setTo(nextTo);
    void load(nextFrom, nextTo);
  }

  async function downloadCsv() {
    try {
      await downloadFile(
        `/analytics/export/csv${rangeQuery(from, to)}`,
        'trades.csv',
      );
    } catch {
      setError(t('analytics.exportError'));
    }
  }

  async function downloadPdf() {
    try {
      await downloadFile(
        `/analytics/export/pdf${rangeQuery(from, to)}`,
        'analytics-report.pdf',
      );
    } catch {
      setError(t('analytics.exportError'));
    }
  }

  const startingBalance = 10000;
  const currentValue =
    portfolioData.length > 0
      ? portfolioData[portfolioData.length - 1].totalValue
      : startingBalance;
  const totalPnl = currentValue - startingBalance;

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="mb-6 text-2xl font-bold">{t('analytics.title')}</h1>

      <div className="mb-6 flex flex-wrap items-end gap-3">
        <label className="text-sm">
          <span className="mb-1 block text-muted-foreground">
            {t('analytics.from')}
          </span>
          <input
            type="date"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="rounded border border-input bg-background px-3 py-2 text-sm"
          />
        </label>
        <label className="text-sm">
          <span className="mb-1 block text-muted-foreground">
            {t('analytics.to')}
          </span>
          <input
            type="date"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="rounded border border-input bg-background px-3 py-2 text-sm"
          />
        </label>
        <button
          type="button"
          onClick={() => load()}
          className="rounded bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
        >
          {t('analytics.apply')}
        </button>

        <div className="flex flex-wrap gap-2">
          <PresetButton label={t('analytics.allTime')} onClick={() => applyPreset(null)} />
          <PresetButton label={t('analytics.last7Days')} onClick={() => applyPreset(7)} />
          <PresetButton label={t('analytics.last30Days')} onClick={() => applyPreset(30)} />
          <PresetButton label={t('analytics.last90Days')} onClick={() => applyPreset(90)} />
        </div>

        <div className="ml-auto flex gap-2">
          <button
            type="button"
            onClick={downloadCsv}
            className="rounded border border-border px-4 py-2 text-sm hover:bg-accent"
          >
            {t('analytics.exportCsv')}
          </button>
          <button
            type="button"
            onClick={downloadPdf}
            className="rounded border border-border px-4 py-2 text-sm hover:bg-accent"
          >
            {t('analytics.exportPdf')}
          </button>
        </div>
      </div>

      {loading && (
        <p className="text-sm text-muted-foreground">{t('analytics.loading')}</p>
      )}
      {error && <p className="text-sm text-destructive">{error}</p>}

      {!loading && !error && (
        <>
          <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            <StatCard
              label={t('analytics.portfolioValue')}
              value={fmt(currentValue)}
            />
            <StatCard
              label={t('analytics.totalPnl')}
              value={fmt(totalPnl)}
              tone={totalPnl >= 0 ? 'up' : 'down'}
            />
            <StatCard
              label={t('analytics.totalTrades')}
              value={String(stats?.totalTrades ?? 0)}
            />
            <StatCard
              label={t('analytics.bestTrade')}
              value={
                stats?.bestTrade
                  ? `${stats.bestTrade.symbol} ${fmt(stats.bestTrade.pnl)}`
                  : '-'
              }
              tone="up"
            />
            <StatCard
              label={t('analytics.worstTrade')}
              value={
                stats?.worstTrade
                  ? `${stats.worstTrade.symbol} ${fmt(stats.worstTrade.pnl)}`
                  : '-'
              }
              tone="down"
            />
          </div>

          <Section title={t('analytics.performance')}>
            {portfolioData.length === 0 ? (
              <EmptyState msg={t('analytics.noSnapshots')} />
            ) : (
              <ResponsiveContainer width="100%" height={280}>
                <LineChart
                  data={portfolioData}
                  margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="date" tick={{ fontSize: 11 }} />
                  <YAxis
                    tickFormatter={(v) => '$' + (v / 1000).toFixed(1) + 'k'}
                    tick={{ fontSize: 11 }}
                  />
                  <Tooltip formatter={formatTooltipValue} />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="totalValue"
                    name="Total Value"
                    stroke="#6366f1"
                    strokeWidth={2}
                    dot={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="holdingsValue"
                    name="Holdings Value"
                    stroke="#22c55e"
                    strokeWidth={1.5}
                    dot={false}
                    strokeDasharray="4 2"
                  />
                  <Line
                    type="monotone"
                    dataKey="balance"
                    name="Cash Balance"
                    stroke="#f59e0b"
                    strokeWidth={1.5}
                    dot={false}
                    strokeDasharray="4 2"
                  />
                </LineChart>
              </ResponsiveContainer>
            )}
          </Section>

          <Section title={t('analytics.allocation')}>
            {allocation.length === 0 ? (
              <EmptyState msg={t('analytics.noHoldings')} />
            ) : (
              <ResponsiveContainer width="100%" height={260}>
                <PieChart>
                  <Pie
                    data={allocation}
                    dataKey="value"
                    nameKey="symbol"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    label={(entry) => {
                      const item = entry.payload as AllocationItem | undefined;
                      if (!item) return '';
                      return `${item.symbol} ${item.percentage.toFixed(1)}%`;
                    }}
                  >
                    {allocation.map((_, i) => (
                      <Cell
                        key={i}
                        fill={PIE_COLORS[i % PIE_COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip formatter={formatTooltipValue} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            )}
          </Section>

          <Section title={t('analytics.tradeHistory')}>
            {trades.length === 0 ? (
              <EmptyState msg={t('analytics.noTrades')} />
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b-2 border-border text-left">
                      <th className="px-3 py-2 font-semibold">
                        {t('analytics.colDate')}
                      </th>
                      <th className="px-3 py-2 font-semibold">
                        {t('analytics.colSymbol')}
                      </th>
                      <th className="px-3 py-2 font-semibold">
                        {t('analytics.colType')}
                      </th>
                      <th className="px-3 py-2 font-semibold">
                        {t('analytics.colQty')}
                      </th>
                      <th className="px-3 py-2 font-semibold">
                        {t('analytics.colPrice')}
                      </th>
                      <th className="px-3 py-2 font-semibold">
                        {t('analytics.colTotal')}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {trades.map((trade, i) => (
                      <tr key={i} className="border-b border-border/60">
                        <td className="px-3 py-2">
                          {new Date(trade.filledAt).toLocaleDateString()}
                        </td>
                        <td className="px-3 py-2 font-semibold">
                          {trade.asset?.symbol}
                        </td>
                        <td
                          className={`px-3 py-2 font-semibold ${
                            trade.type === 'BUY'
                              ? 'text-green-600'
                              : 'text-red-600'
                          }`}
                        >
                          {trade.type}
                        </td>
                        <td className="px-3 py-2">
                          {Number(trade.quantity).toFixed(6)}
                        </td>
                        <td className="px-3 py-2">
                          {fmt(Number(trade.price))}
                        </td>
                        <td className="px-3 py-2">
                          {fmt(Number(trade.total))}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </Section>
        </>
      )}
    </div>
  );
}

function PresetButton({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded border border-border px-3 py-2 text-xs hover:bg-accent"
    >
      {label}
    </button>
  );
}

function StatCard({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone?: 'up' | 'down';
}) {
  const valueClass =
    tone === 'up'
      ? 'text-green-600'
      : tone === 'down'
        ? 'text-red-600'
        : '';

  return (
    <div className="rounded-lg border border-border bg-card p-4">
      <div className="mb-1 text-xs text-muted-foreground">{label}</div>
      <div className={`text-xl font-bold ${valueClass}`}>{value}</div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="mb-4 text-lg font-semibold">{title}</h2>
      {children}
    </section>
  );
}

function EmptyState({ msg }: { msg: string }) {
  return <p className="py-6 text-sm text-muted-foreground">{msg}</p>;
}
