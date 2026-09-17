import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { MailService } from '../common/mail/mail.service';

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
  constructor(
    private readonly prisma: PrismaService,
    private readonly mail: MailService,
  ) {}

  async exportUserData(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: EXPORT_USER_SELECT,
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const [orders, holdings, portfolioSnapshots, messages, friendships] = await Promise.all([
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
      this.prisma.message.findMany({
        where: { OR: [{ senderId: userId }, { receiverId: userId }] },
        orderBy: { createdAt: 'desc' },
      }),
      this.prisma.friendship.findMany({
        where: { OR: [{ requesterId: userId }, { addresseeId: userId }] },
      }),
    ]);

    const result = {
      exportedAt: new Date().toISOString(),
      profile: this.serialize(user),
      orders: orders.map((o) => this.serialize(o)),
      holdings: holdings.map((h) => this.serialize(h)),
      portfolioSnapshots: portfolioSnapshots.map((s) => this.serialize(s)),
      messages: messages.map((m) => this.serialize(m)),
      friends: friendships.map((f) => this.serialize(f)),
    };

    // Best-effort: the export already succeeded and is on its way to the
    // user regardless of whether this confirmation email goes out.
    await this.mail.send(
      user.email,
      'Your PaperTrade data export is ready',
      `Hi ${user.username},\n\nYour personal data export was generated on ${result.exportedAt}. If you did not request this, please contact the team immediately.\n\n— PaperTrade`,
    );

    return result;
  }

  async deleteAccount(userId: string, password: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, passwordHash: true, email: true, username: true },
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
      // Also scrubs notifications *other* users hold that reference this
      // account (a friend-request or message notification stores the other
      // party's id in `data`) — otherwise clicking one afterwards points at
      // a user that no longer exists.
      await tx.notification.deleteMany({
        where: {
          OR: [
            { userId },
            { data: { path: ['fromUserId'], equals: userId } },
            { data: { path: ['byUserId'], equals: userId } },
          ],
        },
      });
      await tx.message.deleteMany({ where: { OR: [{ senderId: userId }, { receiverId: userId }] } });
      await tx.friendship.deleteMany({ where: { OR: [{ requesterId: userId }, { addresseeId: userId }] } });
      await tx.portfolioSnapshot.deleteMany({ where: { userId } });
      await tx.order.deleteMany({ where: { userId } });
      await tx.holding.deleteMany({ where: { userId } });
      await tx.user.delete({ where: { id: userId } });
    });

    // Sent after the account is gone — using the email/username captured
    // before deletion, since the row no longer exists to read them from.
    await this.mail.send(
      user.email,
      'Your PaperTrade account has been deleted',
      `Hi ${user.username},\n\nYour PaperTrade account and all associated data have been permanently deleted, as requested. If you did not request this, please contact the team immediately.\n\n— PaperTrade`,
    );

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
