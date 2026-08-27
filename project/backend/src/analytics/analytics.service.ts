import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { OrderStatus } from '@prisma/client';
import { buildTextPdf } from './pdf-report';

export interface PortfolioDataPoint {
  date: string;
  totalValue: number;
  balance: number;
  holdingsValue: number;
}

export interface TradeStats {
  totalTrades: number;
  totalPnl: number;
  bestTrade: { symbol: string; pnl: number } | null;
  worstTrade: { symbol: string; pnl: number } | null;
}

export interface AllocationItem {
  symbol: string;
  name: string;
  value: number;
  percentage: number;
}

@Injectable()
export class AnalyticsService {
  constructor(private prisma: PrismaService) {}

  async getPortfolioHistory(
    userId: string,
    from?: Date,
    to?: Date,
  ): Promise<PortfolioDataPoint[]> {
    const snapshots = await this.prisma.portfolioSnapshot.findMany({
      where: {
        userId,
        ...(from || to
          ? {
              snapshotDate: {
                ...(from ? { gte: from } : {}),
                ...(to ? { lte: to } : {}),
              },
            }
          : {}),
      },
      orderBy: { snapshotDate: 'asc' },
    });

    return snapshots.map((s) => ({
      date: s.snapshotDate.toISOString().split('T')[0],
      totalValue: Number(s.totalValue),
      balance: Number(s.balance),
      holdingsValue: Number(s.holdingsValue),
    }));
  }

  async getAllocation(userId: string): Promise<AllocationItem[]> {
    const [holdings, user] = await Promise.all([
      this.prisma.holding.findMany({
        where: { userId },
        include: {
          asset: { select: { symbol: true, name: true, currentPrice: true } },
        },
      }),
      this.prisma.user.findUnique({
        where: { id: userId },
        select: { balance: true },
      }),
    ]);

    const holdingsValue = holdings.reduce(
      (sum, h) => sum + Number(h.quantity) * Number(h.asset.currentPrice),
      0,
    );
    const cash = Number(user?.balance ?? 0);
    const totalValue = holdingsValue + cash;

    if (totalValue === 0) return [];

    const items: AllocationItem[] = holdings
      .filter((h) => Number(h.quantity) > 0)
      .map((h) => {
        const value = Number(h.quantity) * Number(h.asset.currentPrice);
        return {
          symbol: h.asset.symbol,
          name: h.asset.name,
          value,
          percentage: (value / totalValue) * 100,
        };
      });

    if (cash > 0) {
      items.push({
        symbol: 'USD',
        name: 'Cash',
        value: cash,
        percentage: (cash / totalValue) * 100,
      });
    }

    return items;
  }

  async getTradeStats(
    userId: string,
    from?: Date,
    to?: Date,
  ): Promise<TradeStats> {
    const orders = await this.prisma.order.findMany({
      where: {
        userId,
        status: OrderStatus.FILLED,
        ...(from || to
          ? {
              filledAt: {
                ...(from ? { gte: from } : {}),
                ...(to ? { lte: to } : {}),
              },
            }
          : {}),
      },
      include: { asset: { select: { symbol: true, currentPrice: true } } },
    });

    if (orders.length === 0) {
      return { totalTrades: 0, totalPnl: 0, bestTrade: null, worstTrade: null };
    }

    const bySymbol: Record<string, { symbol: string; pnl: number }> = {};

    for (const o of orders) {
      const symbol = o.asset.symbol;
      if (!bySymbol[symbol]) bySymbol[symbol] = { symbol, pnl: 0 };

      const fillPrice = Number(o.price);
      const qty = Number(o.quantity);
      const currentPrice = Number(o.asset.currentPrice);
      const pnl =
        o.type === 'BUY'
          ? (currentPrice - fillPrice) * qty
          : (fillPrice - currentPrice) * qty;
      bySymbol[symbol].pnl += pnl;
    }

    const perSymbol = Object.values(bySymbol);
    const totalPnl = perSymbol.reduce((sum, s) => sum + s.pnl, 0);
    const sorted = [...perSymbol].sort((a, b) => b.pnl - a.pnl);

    return {
      totalTrades: orders.length,
      totalPnl,
      bestTrade: sorted[0] ?? null,
      worstTrade: sorted[sorted.length - 1] ?? null,
    };
  }

  async getTrades(userId: string, from?: Date, to?: Date) {
    return this.prisma.order.findMany({
      where: {
        userId,
        status: OrderStatus.FILLED,
        ...(from || to
          ? {
              filledAt: {
                ...(from ? { gte: from } : {}),
                ...(to ? { lte: to } : {}),
              },
            }
          : {}),
      },
      include: { asset: { select: { symbol: true, name: true } } },
      orderBy: { filledAt: 'desc' },
    });
  }

  async exportCsv(userId: string, from?: Date, to?: Date): Promise<string> {
    const trades = await this.getTrades(userId, from, to);
    const header = 'Date,Symbol,Name,Type,Quantity,Price,Total\n';

    if (trades.length === 0) return header;

    const rows = trades
      .map((t) =>
        [
          t.filledAt?.toISOString() ?? '',
          t.asset.symbol,
          t.asset.name,
          t.type,
          t.quantity,
          t.price,
          t.total,
        ].join(','),
      )
      .join('\n');

    return header + rows;
  }

  async exportPdf(userId: string, from?: Date, to?: Date): Promise<Buffer> {
    const [stats, allocation, trades, portfolio] = await Promise.all([
      this.getTradeStats(userId, from, to),
      this.getAllocation(userId),
      this.getTrades(userId, from, to),
      this.getPortfolioHistory(userId, from, to),
    ]);

    const range =
      from || to
        ? `Range: ${from?.toISOString().slice(0, 10) ?? '...'} -> ${to?.toISOString().slice(0, 10) ?? '...'}`
        : 'Range: all time';

    const latest = portfolio[portfolio.length - 1];
    const lines: string[] = [
      `Generated: ${new Date().toISOString()}`,
      range,
      '',
      '--- Summary ---',
      `Portfolio value: ${latest ? Number(latest.totalValue).toFixed(2) : 'n/a'}`,
      `Total trades: ${stats.totalTrades}`,
      `Total P&L (by symbol mark): ${stats.totalPnl.toFixed(2)}`,
      `Best trade: ${stats.bestTrade ? `${stats.bestTrade.symbol} ${stats.bestTrade.pnl.toFixed(2)}` : '-'}`,
      `Worst trade: ${stats.worstTrade ? `${stats.worstTrade.symbol} ${stats.worstTrade.pnl.toFixed(2)}` : '-'}`,
      '',
      '--- Allocation ---',
      ...(allocation.length === 0
        ? ['No holdings']
        : allocation.map(
            (a) =>
              `${a.symbol} (${a.name}): ${a.value.toFixed(2)} (${a.percentage.toFixed(1)}%)`,
          )),
      '',
      '--- Recent trades (max 25) ---',
      ...(trades.length === 0
        ? ['No filled trades']
        : trades.slice(0, 25).map((t) => {
            const date = t.filledAt?.toISOString().slice(0, 10) ?? '';
            return `${date} ${t.type} ${t.asset.symbol} qty=${t.quantity} @ ${t.price} total=${t.total}`;
          })),
    ];

    return buildTextPdf('Trading Analytics Report', lines);
  }
}
