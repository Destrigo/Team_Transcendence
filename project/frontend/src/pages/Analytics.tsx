import { useTranslation } from 'react-i18next';

// TODO: import Recharts and real data hooks once portfolio snapshots are ready

const Analytics = () => {
  const { t } = useTranslation();

  return (
    <div className="p-6">
      <h1 className="mb-6 text-2xl font-bold">{t('analytics.title')}</h1>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: t('analytics.totalTrades'), value: '—' },
          { label: t('analytics.totalPnl'), value: '—' },
          { label: t('analytics.bestTrade'), value: '—' },
          { label: t('analytics.winRate'), value: '—' },
        ].map(({ label, value }) => (
          <div key={label} className="rounded-lg border border-border bg-card p-4">
            <p className="text-sm text-muted-foreground">{label}</p>
            <p className="mt-1 text-2xl font-bold">{value}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-lg border border-border bg-card p-4">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold">{t('analytics.performance')}</h2>
          <div className="flex gap-2">
            <button className="rounded border border-border px-3 py-1 text-xs hover:bg-accent">
              {t('analytics.last7Days')}
            </button>
            <button className="rounded border border-border px-3 py-1 text-xs hover:bg-accent">
              {t('analytics.last30Days')}
            </button>
            <button className="rounded border border-border px-3 py-1 text-xs hover:bg-accent">
              {t('analytics.allTime')}
            </button>
          </div>
        </div>
        <div className="flex h-48 items-center justify-center text-muted-foreground text-sm">
          {t('common.noData')}
        </div>
      </div>

      <div className="mt-6">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-lg font-semibold">{t('analytics.tradeHistory')}</h2>
          <div className="flex gap-2">
            <button className="rounded border border-border px-3 py-1 text-xs hover:bg-accent">
              {t('analytics.exportCsv')}
            </button>
            <button className="rounded border border-border px-3 py-1 text-xs hover:bg-accent">
              {t('analytics.exportPdf')}
            </button>
          </div>
        </div>
        <div className="overflow-x-auto rounded-lg border border-border bg-card">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left text-muted-foreground">
                <th className="px-4 py-3">{t('trading.date')}</th>
                <th className="px-4 py-3">{t('trading.side')}</th>
                <th className="px-4 py-3">{t('trading.quantity')}</th>
                <th className="px-4 py-3">{t('trading.price')}</th>
                <th className="px-4 py-3">{t('portfolio.pnl')}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={5} className="px-4 py-6 text-center text-muted-foreground">
                  {t('analytics.noTrades')}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
