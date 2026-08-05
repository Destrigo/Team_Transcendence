import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import type { Asset, AssetListResponse, AssetType } from '../types/types';
import { fetchAssets, type AssetQueryParams } from '../services/trading.service';

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

interface AssetTableProps {
  selectedAssetId: string | null;
  onSelectAsset: (asset: Asset) => void;
}

export default function AssetTable({ selectedAssetId, onSelectAsset }: AssetTableProps) {
  const { t } = useTranslation();
  const [response, setResponse] = useState<AssetListResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [q, setQ] = useState('');
  const [type, setType] = useState<AssetType | ''>('');
  const [sort, setSort] = useState<AssetQueryParams['sort']>('marketCap');
  const [order, setOrder] = useState<'asc' | 'desc'>('desc');
  const [page, setPage] = useState(1);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    fetchAssets({
      q: q || undefined,
      type: type || undefined,
      sort,
      order,
      page,
      limit: 20,
    })
      .then((data) => {
        if (!cancelled) setResponse(data);
      })
      .catch(() => {
        if (!cancelled) setError(t('trading.assetTable.errorLoad'));
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [q, type, sort, order, page, t]);

  const toggleSort = (field: AssetQueryParams['sort']) => {
    if (sort === field) {
      setOrder(order === 'desc' ? 'asc' : 'desc');
    } else {
      setSort(field);
      setOrder('desc');
    }
    setPage(1);
  };

  return (
    <div className="flex h-full flex-col rounded-lg border border-border bg-card shadow-sm">
      <div className="flex flex-wrap items-center gap-2 border-b border-border p-3">
        <input
          value={q}
          onChange={(e) => {
            setPage(1);
            setQ(e.target.value);
          }}
          placeholder={t('trading.assetTable.searchPlaceholder')}
          className="min-w-[180px] flex-1 rounded border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        />
        <select
          value={type}
          onChange={(e) => {
            setPage(1);
            setType(e.target.value as AssetType | '');
          }}
          className="rounded border border-input bg-background px-2 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        >
          <option value="">{t('trading.assetTable.allTypes')}</option>
          <option value="CRYPTO">{t('trading.assetTable.crypto')}</option>
          <option value="STOCK">{t('trading.assetTable.stock')}</option>
        </select>
      </div>

      <div className="grid grid-cols-[1fr_auto_auto_auto] gap-2 border-b border-border bg-muted px-3 py-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
        <button onClick={() => toggleSort('name')} className="text-left hover:text-foreground">
          {t('trading.assetTable.colAsset')} {sort === 'name' && (order === 'desc' ? '▼' : '▲')}
        </button>
        <button onClick={() => toggleSort('price')} className="text-right hover:text-foreground">
          {t('trading.price')} {sort === 'price' && (order === 'desc' ? '▼' : '▲')}
        </button>
        <button onClick={() => toggleSort('change')} className="w-16 text-right hover:text-foreground">
          {t('trading.assetTable.colChange')} {sort === 'change' && (order === 'desc' ? '▼' : '▲')}
        </button>
        <button onClick={() => toggleSort('marketCap')} className="w-20 text-right hover:text-foreground">
          {t('trading.assetTable.colMktCap')} {sort === 'marketCap' && (order === 'desc' ? '▼' : '▲')}
        </button>
      </div>

      <div className="flex-1 overflow-y-auto">
        {loading && <p className="p-4 text-sm text-muted-foreground">{t('trading.assetTable.loading')}</p>}
        {error && <p className="p-4 text-sm text-destructive">{error}</p>}
        {!loading && !error && response?.data.length === 0 && (
          <p className="p-4 text-sm text-muted-foreground">{t('trading.assetTable.noResults')}</p>
        )}
        {response?.data.map((asset) => {
          const isSelected = asset.id === selectedAssetId;
          const isUp = asset.change24h >= 0;
          return (
            <button
              key={asset.id}
              onClick={() => onSelectAsset(asset)}
              className={`grid w-full grid-cols-[1fr_auto_auto_auto] items-center gap-2 border-b border-border px-3 py-2.5 text-left transition-colors ${
                isSelected ? 'bg-accent' : 'hover:bg-accent/60'
              }`}
            >
              <span className="flex items-center gap-2 truncate">
                <span className="font-mono text-sm font-semibold">{asset.symbol}</span>
                <span className="truncate text-xs text-muted-foreground">{asset.name}</span>
              </span>
              <span className="font-mono text-sm">{formatCurrency(asset.currentPrice)}</span>
              <span className={`w-16 text-right font-mono text-xs ${isUp ? 'text-emerald-600' : 'text-destructive'}`}>
                {isUp ? '+' : ''}
                {asset.change24h.toFixed(2)}%
              </span>
              <span className="w-20 text-right font-mono text-xs text-muted-foreground">{formatCompact(asset.marketCap)}</span>
            </button>
          );
        })}
      </div>

      {response && response.meta.totalPages > 1 && (
        <div className="flex items-center justify-between border-t border-border px-3 py-2 text-xs text-muted-foreground">
          <button
            disabled={page <= 1}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            className="rounded px-2 py-1 hover:bg-accent disabled:opacity-30"
          >
            {t('trading.assetTable.prev')}
          </button>
          <span>
            {t('trading.assetTable.pageInfo', { current: response.meta.page, total: response.meta.totalPages })}
          </span>
          <button
            disabled={page >= response.meta.totalPages}
            onClick={() => setPage((p) => p + 1)}
            className="rounded px-2 py-1 hover:bg-accent disabled:opacity-30"
          >
            {t('trading.assetTable.next')}
          </button>
        </div>
      )}
    </div>
  );
}
