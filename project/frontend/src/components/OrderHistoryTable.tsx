import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import type { Order, OrderStatus } from '../types/types';
import { fetchOrders } from '../services/trading.service';
import { formatCurrency } from '../utils/format';

const STATUS_STYLES: Record<OrderStatus, string> = {
  FILLED: 'bg-emerald-500/15 text-emerald-600',
  PENDING: 'bg-amber-500/15 text-amber-600',
  CANCELLED: 'bg-muted text-muted-foreground',
};

const STATUS_LABEL_KEY: Record<OrderStatus, string> = {
  FILLED: 'trading.filled',
  PENDING: 'trading.pending',
  CANCELLED: 'trading.cancelled',
};

interface OrderHistoryTableProps {
  /** Bump this (e.g. after placing/cancelling an order) to force a refetch. */
  refreshKey?: number;
}

export default function OrderHistoryTable({ refreshKey }: OrderHistoryTableProps) {
  const { t } = useTranslation();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    fetchOrders({})
      .then((data) => {
        if (!cancelled) setOrders(data);
      })
      .catch(() => {
        if (!cancelled) setOrders([]);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [refreshKey]);

  return (
    <div className="rounded-lg border border-border bg-card shadow-sm">
      <div className="border-b border-border bg-muted px-3 py-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
        {t('trading.orderHistory')}
      </div>

      {loading && <p className="p-4 text-sm text-muted-foreground">{t('trading.assetTable.loading')}</p>}

      {!loading && orders.length === 0 && (
        <p className="p-4 text-sm text-muted-foreground">{t('trading.openOrdersTable.noOrders')}</p>
      )}

      {!loading && orders.length > 0 && (
        <div className="max-h-80 divide-y divide-border overflow-y-auto">
          {orders.map((order) => (
            <div key={order.id} className="flex items-center justify-between gap-2 px-3 py-2.5 text-sm">
              <div>
                <div className="flex items-center gap-2">
                  <span
                    className={`text-xs font-semibold uppercase ${
                      order.type === 'BUY' ? 'text-primary' : 'text-destructive'
                    }`}
                  >
                    {order.type === 'BUY' ? t('trading.buy') : t('trading.sell')}
                  </span>
                  <span className="font-mono font-semibold">{order.asset.symbol}</span>
                  <span className="font-mono text-xs text-muted-foreground">{order.quantity}</span>
                  <span
                    className={`rounded px-1.5 py-0.5 text-[10px] font-medium uppercase ${STATUS_STYLES[order.status]}`}
                  >
                    {t(STATUS_LABEL_KEY[order.status])}
                  </span>
                </div>
                <div className="text-xs text-muted-foreground">
                  {new Date(order.createdAt).toLocaleString()}
                </div>
              </div>
              <div className="text-right text-xs text-muted-foreground">
                <div className="font-mono text-foreground">{formatCurrency(order.price)}</div>
                <div>{formatCurrency(order.total)}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
