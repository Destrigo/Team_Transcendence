import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

const STARTING_BALANCE = 10000;
const CACHE_TTL_MS = 60_000; // 1 minute

export interface LeaderboardEntry {
  rank: number;
  userId: string;
  username: string;
  displayName: string | null;
  avatarUrl: string | null;
  totalValue: number;
  pnlPercent: number;
}

@Injectable()
export class LeaderboardService {
  constructor(private readonly prisma: PrismaService) {}

  private cache: { computedAt: number; entries: LeaderboardEntry[] } | null = null;

  async getLeaderboard(page = 1, limit = 50) {
    const entries = await this.getRankedEntries();

    const safeLimit = Math.min(Math.max(limit, 1), 100);
    const safePage = Math.max(page, 1);
    const start = (safePage - 1) * safeLimit;

    return {
      data: entries.slice(start, start + safeLimit),
      meta: {
        page: safePage,
        limit: safeLimit,
        total: entries.length,
        totalPages: Math.ceil(entries.length / safeLimit),
      },
    };
  }

  async getRank(userId: string) {
    const entries = await this.getRankedEntries();
    return entries.find((e) => e.userId === userId) ?? null;
  }

  private async getRankedEntries(): Promise<LeaderboardEntry[]> {
    if (this.cache && Date.now() - this.cache.computedAt < CACHE_TTL_MS) {
      return this.cache.entries;
    }

    const users = await this.prisma.user.findMany({
      select: {
        id: true,
        username: true,
        displayName: true,
        avatarUrl: true,
        balance: true,
        holdings: {
          select: {
            quantity: true,
            asset: { select: { currentPrice: true } },
          },
        },
      },
    });

    const entries = users
      .map((user) => {
        const holdingsValue = user.holdings.reduce(
          (sum, h) => sum + Number(h.quantity) * Number(h.asset.currentPrice),
          0,
        );
        const totalValue = Number(user.balance) + holdingsValue;
        const pnlPercent = ((totalValue - STARTING_BALANCE) / STARTING_BALANCE) * 100;

        return {
          userId: user.id,
          username: user.username,
          displayName: user.displayName,
          avatarUrl: user.avatarUrl,
          totalValue,
          pnlPercent,
        };
      })
      .sort((a, b) => b.totalValue - a.totalValue)
      .map((entry, index) => ({ rank: index + 1, ...entry }));

    this.cache = { computedAt: Date.now(), entries };
    return entries;
  }
}
