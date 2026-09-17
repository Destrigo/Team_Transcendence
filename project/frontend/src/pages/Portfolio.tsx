import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import type { Portfolio, PricePoint } from '../types/types';
import { fetchPortfolio, fetchPortfolioHistory } from '../services/trading.service';
import { formatCurrency } from '../utils/format';
import PortfolioHoldingsTable from '../components/PortfolioHoldingsTable';
import PriceChart from '../components/PriceChart';

export default function PortfolioPage() {
  const { t } = useTranslation();
  const [portfolio, setPortfolio] = useState<Portfolio | null>(null);
  const [history, setHistory] = useState<PricePoint[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    fetchPortfolio()
      .then((data) => {
        if (!cancelled) setPortfolio(data);
      })
      .catch(() => {
        if (!cancelled) setPortfolio(null);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    // Independent of the portfolio fetch above: history is a nice-to-have
    // chart, so a failure here shouldn't block the rest of the page.
    fetchPortfolioHistory()
      .then((data) => {
        if (cancelled) return;
        setHistory(
          data.map((point) => ({
            time: Math.floor(new Date(point.date).getTime() / 1000),
            value: point.totalValue,
          })),
        );
      })
      .catch(() => {
        if (!cancelled) setHistory([]);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const isUp = (portfolio?.totalPnl ?? 0) >= 0;

  return (
    <div className="p-6">
      <h1 className="mb-4 text-2xl font-bold">{t('portfolio.title')}</h1>

      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
          <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            {t('portfolio.totalValue')}
          </div>
          <div className="mt-1 font-mono text-2xl">
            {loading || !portfolio ? '—' : formatCurrency(portfolio.totalValue)}
          </div>
        </div>
        <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
          <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            {t('portfolio.balance')}
          </div>
          <div className="mt-1 font-mono text-2xl">
            {loading || !portfolio ? '—' : formatCurrency(portfolio.balance)}
          </div>
        </div>
        <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
          <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            {t('portfolio.totalPnl')}
          </div>
          <div className={`mt-1 font-mono text-2xl ${isUp ? 'text-emerald-600' : 'text-destructive'}`}>
            {loading || !portfolio
              ? '—'
              : `${isUp ? '+' : ''}${formatCurrency(portfolio.totalPnl)} (${isUp ? '+' : ''}${portfolio.totalPnlPercent.toFixed(2)}%)`}
          </div>
        </div>
      </div>

      {!loading && (
        <div className="mb-6 rounded-lg border border-border bg-card p-4 shadow-sm">
          <div className="mb-3 text-xs font-medium uppercase tracking-wide text-muted-foreground">
            {t('dashboard.performanceChart')}
          </div>
          <PriceChart data={history} emptyMessage={t('portfolio.noHistoryYet')} />
        </div>
      )}

      {loading ? (
        <div className="rounded-lg border border-border bg-card p-6 text-sm text-muted-foreground">
          {t('trading.assetTable.loading')}
        </div>
      ) : (
        <PortfolioHoldingsTable holdings={portfolio?.holdings ?? []} />
      )}
    </div>
  );
}
