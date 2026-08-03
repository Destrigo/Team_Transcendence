import type { Holding } from '../types/types';

function formatCurrency(value: number) {
  return value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: value < 1 ? 6 : 2,
  });
}

interface HoldingsTableProps {
  holdings: Holding[];
  onSelectHolding: (holding: Holding) => void;
}

export default function HoldingsTable({
  holdings,
  onSelectHolding,
}: HoldingsTableProps) {
  if (holdings.length === 0) {
    return (
      <div className="rounded-lg border border-border bg-card p-4 text-sm text-muted-foreground">
        No holdings yet. Buy an asset to see it here.
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-border bg-card shadow-sm">
      <div className="border-b border-border px-3 py-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
        Your holdings
      </div>

      <div>
        {holdings.map((h) => {
          const isUp = h.pnl >= 0;

          return (
            <button
              key={h.assetId}
              onClick={() => onSelectHolding(h)}
              className="grid w-full grid-cols-[1fr_auto] items-center gap-1 border-b border-border px-3 py-2.5 text-left transition-colors last:border-b-0 hover:bg-accent/60"
            >
              <span>
                <span className="flex items-center gap-2">
                  <span className="font-mono text-sm font-semibold">
                    {h.symbol}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">
                    {h.quantity}
                  </span>
                </span>

                <span className="text-xs text-muted-foreground">
                  avg {formatCurrency(h.avgBuyPrice)}
                </span>
              </span>

              <span className="text-right">
                <span className="block font-mono text-sm">
                  {formatCurrency(h.currentValue)}
                </span>

                <span
                  className={`block font-mono text-xs ${
                    isUp ? 'text-emerald-600' : 'text-destructive'
                  }`}
                >
                  {isUp ? '+' : ''}
                  {formatCurrency(h.pnl)} ({isUp ? '+' : ''}
                  {h.pnlPercent.toFixed(2)}%)
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}