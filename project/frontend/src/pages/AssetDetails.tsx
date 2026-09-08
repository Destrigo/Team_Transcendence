import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import type { Asset, Order, Portfolio, PricePoint } from '../types/types';
import { fetchAssetBySymbol, fetchAssetHistory, fetchOrders, fetchPortfolio } from '../services/trading.service';
import PriceChart from '../components/PriceChart';
import OrderPanel from '../components/OrdersPanel';

function formatCurrency(value: number) {
  return value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: value < 1 ? 6 : 2,
  });
}

function formatCompact(value: number) {
  return new Intl.NumberFormat('en-US', { notation: 'compact', maximumFractionDigits: 1 }).format(value);
}

export default function AssetDetailsPage() {
  const { t } = useTranslation();
  const { symbol } = useParams<{ symbol: string }>();
  const [asset, setAsset] = useState<Asset | null>(null);
  const [portfolio, setPortfolio] = useState<Portfolio | null>(null);
  const [history, setHistory] = useState<PricePoint[]>([]);
  const [assetOrders, setAssetOrders] = useState<Order[]>([]);
  const [days, setDays] = useState(30);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!symbol) return;
    setLoading(true);
    setError(false);
    Promise.all([fetchAssetBySymbol(symbol), fetchAssetHistory(symbol, days), fetchPortfolio()])
      .then(([assetData, historyData, portfolioData]) => {
        setAsset(assetData);
        setHistory(historyData);
        setPortfolio(portfolioData);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [symbol, days]);

  useEffect(() => {
    if (!asset) return;
    fetchOrders({ assetId: asset.id })
      .then(setAssetOrders)
      .catch(() => setAssetOrders([]));
  }, [asset?.id]);

  const refreshAfterOrderChange = useCallback(() => {
    fetchPortfolio().then(setPortfolio).catch(() => {});
    if (asset) {
      fetchOrders({ assetId: asset.id }).then(setAssetOrders).catch(() => {});
    }
  }, [asset]);

  if (!symbol) {
    return <Navigate to="/markets" replace />;
  }

  if (loading) {
    return (
      <div className="animate-pulse p-6">
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 rounded-full bg-muted" />
          <div className="space-y-2">
            <div className="h-5 w-32 rounded bg-muted" />
            <div className="h-4 w-20 rounded bg-muted" />
          </div>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-[1.4fr_1fr]">
          <div className="h-80 rounded-lg bg-muted" />
          <div className="h-80 rounded-lg bg-muted" />
        </div>
      </div>
    );
  }

  if (error || !asset) return <div className="p-6 text-sm text-destructive">{t('trading.assetTable.errorLoad')}</div>;

  const isUp = asset.change24h >= 0;
  const holding = portfolio?.holdings.find((h) => h.assetId === asset.id) ?? null;

  return (
    <div className="p-6">

      <div className="flex items-stretch justify-between gap-4">
        <div className="flex items-center gap-4">
          {asset.logoUrl && <img src={asset.logoUrl} alt={asset.symbol} className="h-10 w-10 rounded-full" />}
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold">{asset.symbol}</span>
              <span className="text-sm text-muted-foreground">{asset.name}</span>
              <span className="rounded bg-muted px-1.5 py-0.5 text-[10px] font-medium uppercase text-muted-foreground">
                {asset.type === 'CRYPTO' ? t('trading.assetTable.crypto') : t('trading.assetTable.stock')}
              </span>
            </div>
            <div className="flex items-baseline gap-2 font-mono">
              <span className="text-2xl">{formatCurrency(asset.currentPrice)}</span>
              <span className={`text-sm ${isUp ? 'text-emerald-600' : 'text-destructive'}`}>
                {isUp ? '+' : ''}{asset.change24h.toFixed(2)}%
              </span>
            </div>
            <div className="mt-2 flex gap-6 text-sm">
              <div>
                <div className="text-xs uppercase tracking-wide text-muted-foreground">{t('markets.volume')}</div>
                <div className="font-mono">{formatCompact(asset.volume24h)}</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-wide text-muted-foreground">{t('markets.marketCap')}</div>
                <div className="font-mono">{formatCompact(asset.marketCap)}</div>
              </div>
            </div>
          </div>
        </div>
		
        <div className="flex flex-col items-end justify-between">
          <h1 className="text-xl font-bold">{t('assetDetails.title')}</h1>
          <Link to="/markets" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" />
            {t('assetDetails.back')}
          </Link>
        </div>
    </div>

	
      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-[1.4fr_1fr]">
        <div className="rounded-lg border border-border bg-card p-4 shadow-sm lg:col-start-1 lg:row-start-1">
          <div className="mb-3 flex gap-2">
            {[7, 30, 90].map((d) => (
              <button
                key={d}
                onClick={() => setDays(d)}
                className={`rounded px-2 py-1 text-xs font-medium ${
                  days === d ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:bg-accent'
                }`}
              >
                {d}D
              </button>
            ))}
          </div>
          <PriceChart data={history} />
        </div>

        <div className="lg:col-start-2 lg:row-start-1">
          <OrderPanel
            asset={asset}
            holding={holding}
            balance={portfolio?.balance ?? 0}
            onOrderPlaced={refreshAfterOrderChange}
          />
        </div>

        {holding && (
          <div className="self-start rounded-lg border border-border bg-card p-4 shadow-sm lg:col-start-1 lg:row-start-2">
            <div className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              {t('assetDetails.yourPosition')}
            </div>
            <div className="flex items-center justify-between font-mono text-sm">
              <span className="text-muted-foreground">{t('trading.holdingsTable.avg')}</span>
              <span>{formatCurrency(holding.avgBuyPrice)}</span>
            </div>
            <div className="mt-1 flex items-center justify-between font-mono text-sm">
              <span className="text-muted-foreground">{holding.quantity} {asset.symbol}</span>
              <span>{formatCurrency(holding.currentValue)}</span>
            </div>
            <div
              className={`mt-1 text-right font-mono text-xs ${
                holding.pnl >= 0 ? 'text-emerald-600' : 'text-destructive'
              }`}
            >
              {holding.pnl >= 0 ? '+' : ''}
              {formatCurrency(holding.pnl)} ({holding.pnl >= 0 ? '+' : ''}
              {holding.pnlPercent.toFixed(2)}%)
            </div>
          </div>
        )}

		{assetOrders.length > 0 && (
		  <div className="rounded-lg border border-border bg-card shadow-sm lg:col-start-2 lg:row-start-2">
            <div className="px-3 py-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              {t('trading.orderHistory')}
            </div>
            <div className="divide-y divide-border">
              {assetOrders.slice(0, 5).map((order) => (
                <div key={order.id} className="flex items-center justify-between gap-2 px-3 py-2.5 text-sm">
                  <div>
                    <span
                      className={`text-xs font-semibold uppercase ${
                        order.type === 'BUY' ? 'text-primary' : 'text-destructive'
                      }`}
                    >
                      {order.type === 'BUY' ? t('trading.buy') : t('trading.sell')}
                    </span>{' '}
                    <span className="font-mono">{order.quantity}</span>
                  </div>
                  <div className="text-right text-xs text-muted-foreground">
                    <div>{formatCurrency(order.price)}</div>
                    <div>{new Date(order.createdAt).toLocaleDateString()}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
		)}

      </div>
    </div>
  );
}
