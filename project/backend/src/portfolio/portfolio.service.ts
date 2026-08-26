import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

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
  constructor(private prisma: PrismaService) {}

  async getPortfolio(userId: string): Promise<PortfolioView> {
    const [user, holdings] = await Promise.all([
      this.prisma.user.findUniqueOrThrow({
        where: { id: userId },
        select: { balance: true },
      }),
      this.prisma.holding.findMany({
        where: { userId, quantity: { gt: 0 } },
        include: { asset: true },
        orderBy: { updatedAt: 'desc' },
      }),
    ]);

    const balance = Number(user.balance);

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
    const costBasisTotal = holdingViews.reduce((sum, h) => sum + h.costBasis, 0);
    const totalPnl = holdingsValue - costBasisTotal;
    const totalPnlPercent = costBasisTotal > 0 ? (totalPnl / costBasisTotal) * 100 : 0;

    return {
      balance,
      holdingsValue,
      totalValue: balance + holdingsValue,
      totalPnl,
      totalPnlPercent,
      holdings: holdingViews,
    };
  }
}
