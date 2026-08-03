import { useState } from 'react';
import type { Order } from '../types/types';
import { cancelOrder } from '../services/trading.service';

function formatCurrency(value: number) {
  return value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: value < 1 ? 6 : 2,
  });
}

interface OpenOrdersTableProps {
  orders: Order[];
  onCancelled: () => void;
}

export default function OpenOrdersTable({ orders, onCancelled }: OpenOrdersTableProps) {
  const [cancellingId, setCancellingId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleCancel = async (orderId: string) => {
    setError(null);
    setCancellingId(orderId);
    try {
      await cancelOrder(orderId);
      onCancelled();
    } catch (err: any) {
      setError(err?.response?.data?.message ?? 'Could not cancel order.');
    } finally {
      setCancellingId(null);
    }
  };

  if (orders.length === 0) {
    return (
      <div className="rounded-lg border border-border bg-card p-4 text-sm text-muted-foreground shadow-sm">
        No open limit orders.
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-border bg-card shadow-sm">
      <div className="border-b border-border bg-muted px-3 py-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
        Open orders
      </div>
      {error && <p className="px-3 py-2 text-sm text-destructive">{error}</p>}
      <div className="divide-y divide-border">
        {orders.map((order) => (
          <div key={order.id} className="flex items-center justify-between gap-2 px-3 py-2.5">
            <div>
              <div className="flex items-center gap-2">
                <span
                  className={`text-xs font-semibold uppercase ${
                    order.type === 'BUY' ? 'text-primary' : 'text-destructive'
                  }`}
                >
                  {order.type}
                </span>
                <span className="font-mono text-sm font-semibold">{order.asset.symbol}</span>
                <span className="font-mono text-xs text-muted-foreground">{order.quantity}</span>
              </div>
              <div className="text-xs text-muted-foreground">
                target {formatCurrency(order.price)} · placed {new Date(order.createdAt).toLocaleDateString()}
              </div>
            </div>
            <button
              onClick={() => handleCancel(order.id)}
              disabled={cancellingId === order.id}
              className="rounded border border-input px-3 py-2 text-xs font-medium hover:bg-accent disabled:opacity-40"
            >
              {cancellingId === order.id ? 'Cancelling…' : 'Cancel'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}