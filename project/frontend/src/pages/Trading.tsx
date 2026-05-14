import { useTranslation } from 'react-i18next';

// TODO: import order form and asset list once trading engine is ready

const Trading = () => {
  const { t } = useTranslation();

  return (
    <div className="p-6">
      <h1 className="mb-6 text-2xl font-bold">{t('trading.title')}</h1>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="mb-3 text-lg font-semibold">{t('markets.title')}</h2>
          <div className="overflow-x-auto rounded-lg border border-border bg-card">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-left text-muted-foreground">
                  <th className="px-4 py-3">{t('markets.name')}</th>
                  <th className="px-4 py-3">{t('markets.price')}</th>
                  <th className="px-4 py-3">{t('markets.change24h')}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={3} className="px-4 py-6 text-center text-muted-foreground">
                    {t('common.loading')}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-lg border border-border bg-card p-4">
          <div className="mb-4 flex gap-2">
            <button className="flex-1 rounded bg-primary px-3 py-2 text-sm font-medium text-primary-foreground">
              {t('trading.buy')}
            </button>
            <button className="flex-1 rounded border border-border px-3 py-2 text-sm font-medium">
              {t('trading.sell')}
            </button>
          </div>
          <div className="space-y-3">
            <div>
              <label className="mb-1 block text-xs text-muted-foreground">{t('trading.quantity')}</label>
              <input
                type="number"
                className="w-full rounded border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <p className="text-xs text-muted-foreground">
              {t('trading.availableBalance')}: —
            </p>
            <button className="w-full rounded bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90">
              {t('trading.placeOrder')}
            </button>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="mb-3 text-lg font-semibold">{t('trading.orderHistory')}</h2>
        <div className="overflow-x-auto rounded-lg border border-border bg-card">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left text-muted-foreground">
                <th className="px-4 py-3">{t('trading.date')}</th>
                <th className="px-4 py-3">{t('trading.side')}</th>
                <th className="px-4 py-3">{t('trading.type')}</th>
                <th className="px-4 py-3">{t('trading.quantity')}</th>
                <th className="px-4 py-3">{t('trading.price')}</th>
                <th className="px-4 py-3">{t('trading.status')}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={6} className="px-4 py-6 text-center text-muted-foreground">
                  {t('common.noData')}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Trading;
