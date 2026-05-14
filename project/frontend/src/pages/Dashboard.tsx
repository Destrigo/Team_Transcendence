import { useTranslation } from 'react-i18next';

// TODO: import real data hooks once backend is ready
// import { usePortfolio } from '@/hooks/usePortfolio';

const Dashboard = () => {
  const { t } = useTranslation();

  return (
    <div className="p-6">
      <h1 className="mb-6 text-2xl font-bold">{t('dashboard.title')}</h1>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border border-border bg-card p-4">
          <p className="text-sm text-muted-foreground">{t('dashboard.portfolioValue')}</p>
          <p className="mt-1 text-2xl font-bold">—</p>
        </div>
        <div className="rounded-lg border border-border bg-card p-4">
          <p className="text-sm text-muted-foreground">{t('dashboard.balance')}</p>
          <p className="mt-1 text-2xl font-bold">—</p>
        </div>
        <div className="rounded-lg border border-border bg-card p-4">
          <p className="text-sm text-muted-foreground">{t('dashboard.totalPnl')}</p>
          <p className="mt-1 text-2xl font-bold">—</p>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="mb-3 text-lg font-semibold">{t('dashboard.recentTrades')}</h2>
        <p className="text-sm text-muted-foreground">{t('common.noData')}</p>
      </div>
    </div>
  );
};

export default Dashboard;
