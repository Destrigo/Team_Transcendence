import { Injectable, Logger } from '@nestjs/common';
import { Interval } from '@nestjs/schedule';
import { OrderStatus, OrderType, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { TradingService } from './trading.service';

@Injectable()
export class PriceCheckerScheduler {
  private readonly logger = new Logger(PriceCheckerScheduler.name);

  private isRunning = false;

  constructor(
    private prisma: PrismaService,
    private tradingService: TradingService,
  ) {}

  @Interval(30_000)
  async checkPendingOrders() {
    if (this.isRunning) {
      this.logger.warn('Previous price-check run still in progress, skipping this tick');
      return;
    }

    this.isRunning = true;
    try {
      await this.runCheck();
    } catch (err) {
      this.logger.error('Price-checker run failed', err instanceof Error ? err.stack : err);
    } finally {
      this.isRunning = false;
    }
  }

  private async runCheck() {
    const pendingOrders = await this.prisma.order.findMany({
      where: { status: OrderStatus.PENDING },
      include: { asset: true },
    });

    if (pendingOrders.length === 0) {
      return;
    }

    const toFill = pendingOrders.filter((order) => {
      const target = new Prisma.Decimal(order.price);
      const current = new Prisma.Decimal(order.asset.currentPrice);


      return order.type === OrderType.BUY
        ? current.lte(target)
        : current.gte(target);
    });

    if (toFill.length === 0) {
      return;
    }

    this.logger.log(`Filling ${toFill.length} limit order(s) whose target price was reached`);

    for (const order of toFill) {
      try {
        await this.tradingService.fillPendingOrder(order.id);
      } catch (err) {
        this.logger.error(
          `Failed to fill order ${order.id}`,
          err instanceof Error ? err.stack : err,
        );
      }
    }
  }
}