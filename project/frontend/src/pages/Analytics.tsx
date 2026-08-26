import { useEffect, useState } from 'react';
import type { CSSProperties, ReactNode } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend,
} from 'recharts';

const API = import.meta.env.VITE_API_URL ?? 'https://localhost';

interface PortfolioPoint { date: string; totalValue: number; balance: number; holdingsValue: number; }
interface AllocationItem  { symbol: string; name: string; value: number; percentage: number; }
interface TradeStats      { totalTrades: number; totalPnl: number; bestTrade: { symbol: string; pnl: number } | null; worstTrade: { symbol: string; pnl: number } | null; }
interface Trade           { filledAt: string; asset: { symbol: string; name: string }; type: 'BUY' | 'SELL'; quantity: number; price: number; total: number; }

const PIE_COLORS = ['#6366f1', '#22c55e', '#f59e0b', '#ec4899', '#14b8a6', '#f97316'];

function fmt(n: number) { return '$' + n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }

function formatTooltipValue(value: unknown) {
  return fmt(Number(value ?? 0));
}

async function apiFetch<T>(path: string): Promise<T> {
  const res = await fetch(`${API}/api${path}`, { credentials: 'include' });
  if (!res.ok) throw new Error(`${res.status}`);
  return res.json();
}

export default function Analytics() {
  const [portfolioData, setPortfolioData] = useState<PortfolioPoint[]>([]);
  const [allocation, setAllocation]       = useState<AllocationItem[]>([]);
  const [stats, setStats]                 = useState<TradeStats | null>(null);
  const [trades, setTrades]               = useState<Trade[]>([]);
  const [from, setFrom]                   = useState('');
  const [to, setTo]                       = useState('');
  const [loading, setLoading]             = useState(true);
  const [error, setError]                 = useState('');

  async function load() {
    setLoading(true);
    setError('');
    try {
      const params = new URLSearchParams();
      if (from) params.set('from', from);
      if (to)   params.set('to', to);
      const qs = params.toString() ? '?' + params.toString() : '';

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
      setError('Failed to load analytics data. Is the backend running?');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { load(); }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function downloadCsv() {
    const params = new URLSearchParams();
    if (from) params.set('from', from);
    if (to)   params.set('to', to);
    const qs = params.toString() ? '?' + params.toString() : '';

    const res = await fetch(`${API}/api/analytics/export/csv${qs}`, { credentials: 'include' });
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'trades.csv';
    a.click();
    URL.revokeObjectURL(url);
  }

  const startingBalance = 10000;
  const currentValue = portfolioData.length > 0
    ? portfolioData[portfolioData.length - 1].totalValue
    : startingBalance;
  const totalPnl = currentValue - startingBalance;

  return (
    <div style={{ maxWidth: 1000, margin: '40px auto', fontFamily: 'sans-serif', padding: '0 16px' }}>
      <h1>Analytics</h1>

      <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 24, flexWrap: 'wrap' }}>
        <label>From <input type="date" value={from} onChange={(e) => setFrom(e.target.value)} /></label>
        <label>To <input type="date" value={to} onChange={(e) => setTo(e.target.value)} /></label>
        <button onClick={load}>Apply</button>
        <button onClick={downloadCsv} style={{ marginLeft: 'auto' }}>Export CSV</button>
      </div>

      {loading && <p style={{ color: '#888' }}>Loading...</p>}
      {error   && <p style={{ color: 'red' }}>{error}</p>}

      {!loading && !error && (
        <>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16, marginBottom: 32 }}>
            <StatCard label="Portfolio Value"   value={fmt(currentValue)} />
            <StatCard label="Total P&L"         value={fmt(totalPnl)} color={totalPnl >= 0 ? 'green' : 'red'} />
            <StatCard label="Total Trades"      value={String(stats?.totalTrades ?? 0)} />
            <StatCard label="Best Trade"        value={stats?.bestTrade ? `${stats.bestTrade.symbol} ${fmt(stats.bestTrade.pnl)}` : '-'} color="green" />
            <StatCard label="Worst Trade"       value={stats?.worstTrade ? `${stats.worstTrade.symbol} ${fmt(stats.worstTrade.pnl)}` : '-'} color="red" />
          </div>

          <Section title="Portfolio Performance">
            {portfolioData.length === 0 ? (
              <EmptyState msg="No snapshot data yet. It will appear after the first daily snapshot runs." />
            ) : (
              <ResponsiveContainer width="100%" height={280}>
                <LineChart data={portfolioData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="date" tick={{ fontSize: 11 }} />
                  <YAxis tickFormatter={(v) => '$' + (v / 1000).toFixed(1) + 'k'} tick={{ fontSize: 11 }} />
                  <Tooltip formatter={formatTooltipValue} />
                  <Legend />
                  <Line type="monotone" dataKey="totalValue"    name="Total Value"    stroke="#6366f1" strokeWidth={2} dot={false} />
                  <Line type="monotone" dataKey="holdingsValue" name="Holdings Value" stroke="#22c55e" strokeWidth={1.5} dot={false} strokeDasharray="4 2" />
                  <Line type="monotone" dataKey="balance"       name="Cash Balance"   stroke="#f59e0b" strokeWidth={1.5} dot={false} strokeDasharray="4 2" />
                </LineChart>
              </ResponsiveContainer>
            )}
          </Section>

          <Section title="Asset Allocation">
            {allocation.length === 0 ? (
              <EmptyState msg="No holdings yet. Place trades to see allocation." />
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
                      <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={formatTooltipValue} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            )}
          </Section>

          <Section title="Trade History">
            {trades.length === 0 ? (
              <EmptyState msg="No completed trades yet." />
            ) : (
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid #e5e7eb', textAlign: 'left' }}>
                      <th style={th}>Date</th>
                      <th style={th}>Symbol</th>
                      <th style={th}>Type</th>
                      <th style={th}>Qty</th>
                      <th style={th}>Price</th>
                      <th style={th}>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {trades.map((t, i) => (
                      <tr key={i} style={{ borderBottom: '1px solid #f3f4f6' }}>
                        <td style={td}>{new Date(t.filledAt).toLocaleDateString()}</td>
                        <td style={td}><strong>{t.asset?.symbol}</strong></td>
                        <td style={{ ...td, color: t.type === 'BUY' ? 'green' : 'red', fontWeight: 600 }}>{t.type}</td>
                        <td style={td}>{Number(t.quantity).toFixed(6)}</td>
                        <td style={td}>{fmt(Number(t.price))}</td>
                        <td style={td}>{fmt(Number(t.total))}</td>
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

function StatCard({ label, value, color }: { label: string; value: string; color?: string }) {
  return (
    <div style={{ border: '1px solid #e5e7eb', padding: '16px', borderRadius: 8 }}>
      <div style={{ fontSize: 12, color: '#6b7280', marginBottom: 4 }}>{label}</div>
      <div style={{ fontSize: 20, fontWeight: 700, color: color ?? 'inherit' }}>{value}</div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div style={{ marginBottom: 40 }}>
      <h2 style={{ fontSize: 18, marginBottom: 16 }}>{title}</h2>
      {children}
    </div>
  );
}

function EmptyState({ msg }: { msg: string }) {
  return <p style={{ color: '#9ca3af', padding: '24px 0' }}>{msg}</p>;
}

const th: CSSProperties = { padding: '8px 12px', fontWeight: 600 };
const td: CSSProperties = { padding: '8px 12px' };
