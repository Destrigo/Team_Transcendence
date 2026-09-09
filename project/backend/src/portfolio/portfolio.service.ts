import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AnalyticsService, PortfolioDataPoint } from '../analytics/analytics.service';
import { STARTING_BALANCE } from '../common/constants';

export interface HoldingView {
  assetId: string;
  symbol: string;
  name: string;
  type: string;
  logoUrl: string | null;
  quantity: number;
  avgBuyPrice: number;
  currentPrice: number;
  currentValue: number;
  costBasis: number;
  pnl: number;
  pnlPercent: number;
}

export interface PortfolioView {
  balance: number;
  holdingsValue: number;
  totalValue: number;
  totalPnl: number;
  totalPnlPercent: number;
  holdings: HoldingView[];
}

@Injectable()
export class PortfolioService {
  constructor(
    private prisma: PrismaService,
    private analytics: AnalyticsService,
  ) {}

  async getPortfolio(userId: string): Promise<PortfolioView> {
    const [user, holdings] = await Promise.all([
      this.prisma.user.findUniqueOrThrow({
        where: { id: userId },
        select: { balance: true, totalDeposited: true },
      }),
      this.prisma.holding.findMany({
        where: { userId, quantity: { gt: 0 } },
        include: { asset: true },
        orderBy: { updatedAt: 'desc' },
      }),
    ]);

    const balance = Number(user.balance);
    const totalDeposited = Number(user.totalDeposited);

    const holdingViews: HoldingView[] = holdings.map((h) => {
      const quantity = Number(h.quantity);
      const avgBuyPrice = Number(h.avgBuyPrice);
      const currentPrice = Number(h.asset.currentPrice);
      const currentValue = quantity * currentPrice;
      const costBasis = quantity * avgBuyPrice;
      const pnl = currentValue - costBasis;
      const pnlPercent = costBasis > 0 ? (pnl / costBasis) * 100 : 0;

      return {
        assetId: h.assetId,
        symbol: h.asset.symbol,
        name: h.asset.name,
        type: h.asset.type,
        logoUrl: h.asset.logoUrl,
        quantity,
        avgBuyPrice,
        currentPrice,
        currentValue,
        costBasis,
        pnl,
        pnlPercent,
      };
    });

    const holdingsValue = holdingViews.reduce((sum, h) => sum + h.currentValue, 0);
    const totalValue = balance + holdingsValue;
    // Unrealized P&L (currentValue - costBasis) drops off the books the
    // moment a position is sold, silently erasing any profit or loss that
    // was locked in. Comparing the account's total value against the
    // starting balance instead captures realized gains too, since a sale
    // shows up as extra/less cash. totalDeposited is subtracted back out so
    // a self-serve deposit (POST /users/deposit) doesn't masquerade as
    // trading profit.
    const investedBase = STARTING_BALANCE + totalDeposited;
    const totalPnl = totalValue - investedBase;
    const totalPnlPercent = investedBase > 0 ? (totalPnl / investedBase) * 100 : 0;

    return {
      balance,
      holdingsValue,
      totalValue,
      totalPnl,
      totalPnlPercent,
      holdings: holdingViews,
    };
  }

  async getHistory(userId: string, from?: Date, to?: Date): Promise<PortfolioDataPoint[]> {
    return this.analytics.getPortfolioHistory(userId, from, to);
  }
}
