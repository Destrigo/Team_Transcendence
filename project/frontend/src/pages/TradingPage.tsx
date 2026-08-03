import { useCallback, useEffect, useState } from 'react';
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

  // A placed order can be a limit order (shows up in "open orders" and
  // doesn't move the portfolio yet) or a filled market order (moves the
  // portfolio immediately) — refresh both since we can't tell which from here.
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
    // Build a minimal Asset shape from the holding so the order panel
    // can pre-select it; AssetTable will replace it with full data
    // once the user re-searches, but current price is already accurate.
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
        <h1 className="mb-4 text-2xl font-bold">Trade</h1>
        <div className="grid grid-cols-3 divide-x divide-border rounded-lg bg-card font-mono text-sm shadow-sm">
          <div className="px-4 py-3">
            <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Cash</div>
            <div className="text-lg">{portfolio ? formatCurrency(portfolio.balance) : '—'}</div>
          </div>
          <div className="px-4 py-3">
            <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Holdings value</div>
            <div className="text-lg">{portfolio ? formatCurrency(portfolio.holdingsValue) : '—'}</div>
          </div>
          <div className="px-4 py-3">
            <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Total P&amp;L</div>
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
        <div className="h-[560px]">
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