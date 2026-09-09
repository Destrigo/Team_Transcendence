import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import type { Holding } from '../types/types';
import { formatCurrency } from '../utils/format';

interface PortfolioHoldingsTableProps {
  holdings: Holding[];
}

export default function PortfolioHoldingsTable({ holdings }: PortfolioHoldingsTableProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  if (holdings.length === 0) {
    return (
      <div className="flex flex-col items-center gap-1 rounded-lg border border-border bg-card py-16 text-center">
        <p className="text-sm font-medium">{t('portfolio.emptyPortfolio')}</p>
        <p className="text-sm text-muted-foreground">{t('portfolio.startTrading')}</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-lg border border-border bg-card shadow-sm">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border bg-muted text-xs uppercase tracking-wide text-muted-foreground">
            <th className="px-3 py-2 text-left">{t('portfolio.asset')}</th>
            <th className="px-3 py-2 text-right">{t('portfolio.quantity')}</th>
            <th className="px-3 py-2 text-right">{t('portfolio.avgBuyPrice')}</th>
            <th className="px-3 py-2 text-right">{t('portfolio.currentPrice')}</th>
            <th className="px-3 py-2 text-right">{t('portfolio.currentValue')}</th>
            <th className="px-3 py-2 text-right">{t('portfolio.pnl')}</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {holdings.map((h) => {
            const isUp = h.pnl >= 0;
            return (
              <tr
                key={h.assetId}
                onClick={() => navigate(`/markets/${h.symbol}`)}
                className="cursor-pointer transition-colors hover:bg-accent/60"
              >
                <td className="px-3 py-2.5">
                  <div className="flex items-center gap-2">
                    {h.logoUrl && <img src={h.logoUrl} alt={h.symbol} className="h-6 w-6 rounded-full" />}
                    <div>
                      <div className="font-mono text-sm font-semibold">{h.symbol}</div>
                      <div className="text-xs text-muted-foreground">{h.name}</div>
                    </div>
                  </div>
                </td>
                <td className="px-3 py-2.5 text-right font-mono">{h.quantity}</td>
                <td className="px-3 py-2.5 text-right font-mono">{formatCurrency(h.avgBuyPrice)}</td>
                <td className="px-3 py-2.5 text-right font-mono">{formatCurrency(h.currentPrice)}</td>
                <td className="px-3 py-2.5 text-right font-mono">{formatCurrency(h.currentValue)}</td>
                <td
                  className={`px-3 py-2.5 text-right font-mono ${isUp ? 'text-emerald-600' : 'text-destructive'}`}
                >
                  {isUp ? '+' : ''}
                  {formatCurrency(h.pnl)} ({isUp ? '+' : ''}
                  {h.pnlPercent.toFixed(2)}%)
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
