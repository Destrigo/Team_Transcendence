import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import type { Asset, Holding, Order, Portfolio } from '../types/types';
import { fetchOrders, fetchPortfolio } from '../services/trading.service';
import AssetTable from '../components/AssetsTable';
import OrderPanel from '../components/OrdersPanel';
import HoldingsTable from '../components/HoldingsTable';
import OpenOrdersTable from '../components/OpenOrdersTable';

function formatCurrency(value: number) {
  return value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2,
  });
}

export default function TradingPage() {
  const { t } = useTranslation();
  const [portfolio, setPortfolio] = useState<Portfolio | null>(null);
  const [openOrders, setOpenOrders] = useState<Order[]>([]);
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null);

  const loadPortfolio = useCallback(() => {
    fetchPortfolio()
      .then(setPortfolio)
      .catch(() => setPortfolio(null));
  }, []);

  const loadOpenOrders = useCallback(() => {
    fetchOrders({ status: 'PENDING' })
      .then(setOpenOrders)
      .catch(() => setOpenOrders([]));
  }, []);

  const refreshAfterOrderChange = useCallback(() => {
    loadPortfolio();
    loadOpenOrders();
  }, [loadPortfolio, loadOpenOrders]);

  useEffect(() => {
    refreshAfterOrderChange();
  }, [refreshAfterOrderChange]);

  const holdingForSelected: Holding | null =
    (selectedAsset && portfolio?.holdings.find((h) => h.assetId === selectedAsset.id)) || null;

  const handleSelectHolding = (holding: Holding) => {
    setSelectedAsset({
      id: holding.assetId,
      symbol: holding.symbol,
      name: holding.name,
      type: holding.type,
      currentPrice: holding.currentPrice,
      change24h: 0,
      volume24h: 0,
      marketCap: 0,
      logoUrl: holding.logoUrl,
      isActive: true,
    });
  };

  return (
    <div className="p-6">
      <header className="mb-6">
        <h1 className="mb-4 text-2xl font-bold">{t('trading.title')}</h1>
        <div className="grid grid-cols-3 divide-x divide-border rounded-lg bg-card font-mono text-sm shadow-sm">
          <div className="px-4 py-3">
            <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              {t('trading.cash')}
            </div>
            <div className="text-lg">{portfolio ? formatCurrency(portfolio.balance) : '—'}</div>
          </div>
          <div className="px-4 py-3">
            <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              {t('trading.holdingsValue')}
            </div>
            <div className="text-lg">{portfolio ? formatCurrency(portfolio.holdingsValue) : '—'}</div>
          </div>
          <div className="px-4 py-3">
            <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              {t('trading.totalPnl')}
            </div>
            <div className={`text-lg ${portfolio && portfolio.totalPnl >= 0 ? 'text-emerald-600' : 'text-destructive'}`}>
              {portfolio
                ? `${portfolio.totalPnl >= 0 ? '+' : ''}${formatCurrency(portfolio.totalPnl)} (${
                    portfolio.totalPnl >= 0 ? '+' : ''
                  }${portfolio.totalPnlPercent.toFixed(2)}%)`
                : '—'}
            </div>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.4fr_1fr]">
        <div className="min-h-screen">
          <AssetTable selectedAssetId={selectedAsset?.id ?? null} onSelectAsset={setSelectedAsset} />
        </div>

        <div className="flex flex-col gap-4">
          <OrderPanel
            asset={selectedAsset}
            holding={holdingForSelected}
            balance={portfolio?.balance ?? 0}
            onOrderPlaced={refreshAfterOrderChange}
          />
          <OpenOrdersTable orders={openOrders} onCancelled={refreshAfterOrderChange} />
          <HoldingsTable holdings={portfolio?.holdings ?? []} onSelectHolding={handleSelectHolding} />
        </div>
      </div>
    </div>
  );
}
