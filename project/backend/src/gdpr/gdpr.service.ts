import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';

const EXPORT_USER_SELECT = {
  id: true,
  email: true,
  username: true,
  displayName: true,
  avatarUrl: true,
  balance: true,
  oauthProvider: true,
  oauthId: true,
  twoFactorEnabled: true,
  language: true,
  isOnline: true,
  lastSeen: true,
  createdAt: true,
  updatedAt: true,
} satisfies Prisma.UserSelect;

@Injectable()
export class GdprService {
  constructor(private readonly prisma: PrismaService) {}

  async exportUserData(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: EXPORT_USER_SELECT,
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const [orders, holdings, portfolioSnapshots] = await Promise.all([
      this.prisma.order.findMany({
        where: { userId },
        include: {
          asset: { select: { symbol: true, name: true, type: true } },
        },
        orderBy: { createdAt: 'desc' },
      }),
      this.prisma.holding.findMany({
        where: { userId },
        include: {
          asset: { select: { symbol: true, name: true, type: true } },
        },
      }),
      this.prisma.portfolioSnapshot.findMany({
        where: { userId },
        orderBy: { snapshotDate: 'desc' },
      }),
    ]);

    return {
      exportedAt: new Date().toISOString(),
      profile: this.serialize(user),
      orders: orders.map((o) => this.serialize(o)),
      holdings: holdings.map((h) => this.serialize(h)),
      portfolioSnapshots: portfolioSnapshots.map((s) => this.serialize(s)),
      // Messages / friends will be included when those tables exist on main.
      messages: [],
      friends: [],
    };
  }

  async deleteAccount(userId: string, password: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, passwordHash: true },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    if (!user.passwordHash) {
      throw new UnauthorizedException(
        'Password confirmation is required for accounts with a password',
      );
    }

    const matches = await bcrypt.compare(password, user.passwordHash);
    if (!matches) {
      throw new UnauthorizedException('Invalid password');
    }

    await this.prisma.$transaction(async (tx) => {
      await tx.portfolioSnapshot.deleteMany({ where: { userId } });
      await tx.order.deleteMany({ where: { userId } });
      await tx.holding.deleteMany({ where: { userId } });
      await tx.user.delete({ where: { id: userId } });
    });

    return { success: true, message: 'Account deleted' };
  }

  /** Prisma Decimal / Date → JSON-safe values */
  private serialize<T>(value: T): unknown {
    return JSON.parse(
      JSON.stringify(value, (_key, v) =>
        typeof v === 'bigint' ? v.toString() : v,
      ),
    );
  }
}
