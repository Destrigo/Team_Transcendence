import { useEffect, useState } from 'react';
import type { Asset, CreateOrderPayload, Holding, OrderExecutionType, OrderSide } from '../types/types';
import { placeOrder } from '../services/trading.service';

function formatCurrency(value: number) {
  return value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: value < 1 ? 6 : 2,
  });
}

interface OrderPanelProps {
  asset: Asset | null;
  holding: Holding | null;
  balance: number;
  onOrderPlaced: () => void;
}

export default function OrderPanel({ asset, holding, balance, onOrderPlaced }: OrderPanelProps) {
  const [side, setSide] = useState<OrderSide>('BUY');
  const [execType, setExecType] = useState<OrderExecutionType>('MARKET');
  const [quantity, setQuantity] = useState('');
  const [limitPrice, setLimitPrice] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // Reset the form whenever a different asset is selected
  useEffect(() => {
    setQuantity('');
    setLimitPrice('');
    setError(null);
    setSuccess(null);
    setSide('BUY');
    setExecType('MARKET');
  }, [asset?.id]);

  if (!asset) {
    return (
      <div className="flex min-h-[220px] items-center justify-center rounded-lg border border-border bg-card p-6 text-center text-sm text-muted-foreground shadow-sm">
        Select an asset from the market list to place an order.
      </div>
    );
  }

  const qtyNum = Number(quantity) || 0;
  const refPrice = execType === 'MARKET' ? asset.currentPrice : Number(limitPrice) || 0;
  const estimatedTotal = qtyNum * refPrice;
  const maxSellQty = holding?.quantity ?? 0;

  const insufficientFunds = side === 'BUY' && estimatedTotal > balance;
  const insufficientHoldings = side === 'SELL' && qtyNum > maxSellQty;
  const invalidLimitPrice = execType === 'LIMIT' && (!limitPrice || Number(limitPrice) <= 0);
  const canSubmit =
    qtyNum > 0 && !insufficientFunds && !insufficientHoldings && !invalidLimitPrice && !submitting;

  const setMax = () => {
    if (side === 'SELL') {
      setQuantity(maxSellQty > 0 ? String(maxSellQty) : '');
    } else if (refPrice > 0) {
      // leave a hair of headroom for rounding
      const maxQty = Math.floor((balance / refPrice) * 1e8) / 1e8;
      setQuantity(maxQty > 0 ? String(maxQty) : '');
    }
  };

  const handleSubmit = async () => {
    setError(null);
    setSuccess(null);
    setSubmitting(true);
    try {
      const payload: CreateOrderPayload = {
        assetId: asset.id,
        type: side,
        orderType: execType,
        quantity: qtyNum,
        ...(execType === 'LIMIT' ? { price: Number(limitPrice) } : {}),
      };
      await placeOrder(payload);
      setSuccess(
        execType === 'MARKET'
          ? `${side === 'BUY' ? 'Bought' : 'Sold'} ${qtyNum} ${asset.symbol}`
          : `Limit order placed for ${qtyNum} ${asset.symbol}`,
      );
      setQuantity('');
      setLimitPrice('');
      onOrderPlaced();
    } catch (err: any) {
      setError(err?.response?.data?.message ?? 'Order failed. Try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col gap-4 rounded-lg border border-border bg-card p-4 shadow-sm">
      <div>
        <div className="flex items-center gap-2">
          <span className="font-mono text-lg font-semibold">
            {asset.symbol}
          </span>
          <span className="text-sm text-muted-foreground">
            {asset.name}
          </span>
        </div>

        <div className="mt-1 font-mono text-2xl">
          {formatCurrency(asset.currentPrice)}
        </div>

        {holding && (
          <div className="mt-1 font-mono text-xs text-muted-foreground">
            You hold {holding.quantity} {asset.symbol} · avg{' '}
            {formatCurrency(holding.avgBuyPrice)}
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 gap-1 rounded-md bg-muted p-1">
        {(['BUY', 'SELL'] as const).map((s) => (
          <button
            key={s}
            onClick={() => setSide(s)}
            className={`rounded py-1.5 text-sm font-semibold transition-colors ${
              side === s
                ? 'bg-accent text-foreground'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {s === 'BUY' ? 'Buy' : 'Sell'}
          </button>
        ))}
      </div>

      <div className="flex gap-4 text-sm">
        {(['MARKET', 'LIMIT'] as const).map((t) => (
          <label
            key={t}
            className="flex items-center gap-1.5 text-muted-foreground"
          >
            <input
              type="radio"
              name="execType"
              checked={execType === t}
              onChange={() => setExecType(t)}
              className="accent-primary"
            />

            <span className={execType === t ? 'text-foreground' : ''}>
              {t === 'MARKET' ? 'Market' : 'Limit'}
            </span>
          </label>
        ))}
      </div>

      {execType === 'LIMIT' && (
        <div>
          <label className="mb-1 block text-xs uppercase tracking-wide text-muted-foreground">
            Target price
          </label>

          <input
            type="number"
            min="0"
            step="any"
            value={limitPrice}
            onChange={(e) => setLimitPrice(e.target.value)}
            placeholder={String(asset.currentPrice)}
            className="w-full rounded-md border border-input bg-background px-3 py-2 font-mono text-sm outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
      )}

      <div>
        <div className="mb-1 flex items-center justify-between">
          <label className="text-xs uppercase tracking-wide text-muted-foreground">
            Quantity
          </label>

          <button
            onClick={setMax}
            className="text-xs text-primary hover:underline"
          >
            Max
          </button>
        </div>

        <input
          type="number"
          min="0"
          step="any"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeholder="0.00"
          className="w-full rounded-md border border-input bg-background px-3 py-2 font-mono text-sm outline-none focus:ring-2 focus:ring-ring"
        />
      </div>

      <div className="flex items-center justify-between font-mono text-sm text-muted-foreground">
        <span>Est. total</span>
        <span className="text-foreground">
          {formatCurrency(estimatedTotal)}
        </span>
      </div>

      {insufficientFunds && (
        <p className="text-xs text-destructive">
          Not enough balance for this order.
        </p>
      )}

      {insufficientHoldings && (
        <p className="text-xs text-destructive">
          You only hold {maxSellQty} {asset.symbol}.
        </p>
      )}

      {error && <p className="text-xs text-destructive">{error}</p>}

      {success && (
        <p className="text-xs text-emerald-600">
          {success}
        </p>
      )}

      <button
        disabled={!canSubmit}
        onClick={handleSubmit}
        className="mt-auto rounded-md bg-primary py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
      >
        {submitting
          ? 'Placing order…'
          : `${side === 'BUY' ? 'Buy' : 'Sell'} ${asset.symbol}${
              execType === 'LIMIT' ? ' (limit)' : ''
            }`}
      </button>
    </div>
  );
}