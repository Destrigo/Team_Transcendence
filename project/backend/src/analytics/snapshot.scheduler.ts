import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SnapshotScheduler {
  private readonly logger = new Logger(SnapshotScheduler.name);

  constructor(private prisma: PrismaService) {}

  @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
  async takeSnapshots(): Promise<void> {
    this.logger.log('Taking daily portfolio snapshots...');

    try {
      const users = await this.prisma.user.findMany({
        select: {
          id: true,
          balance: true,
          holdings: {
            include: { asset: { select: { currentPrice: true } } },
          },
        },
      });

      const today = new Date();
      today.setHours(0, 0, 0, 0);
      let count = 0;

      for (const user of users) {
        const holdingsValue = user.holdings.reduce(
          (sum, h) => sum + Number(h.quantity) * Number(h.asset.currentPrice),
          0,
        );
        const balance = Number(user.balance);
        const totalValue = balance + holdingsValue;

        await this.prisma.portfolioSnapshot.upsert({
          where: { userId_snapshotDate: { userId: user.id, snapshotDate: today } },
          update: { totalValue, balance, holdingsValue },
          create: { userId: user.id, totalValue, balance, holdingsValue, snapshotDate: today },
        });

        count++;
      }

      this.logger.log(`Snapshots written for ${count} users`);
    } catch (error) {
      this.logger.error(`Snapshot job failed: ${error.message}`);
    }
  }
}
