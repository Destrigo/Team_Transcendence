import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { Prisma, OrderType, OrderStatus, OrderExecutionType } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOrderDto } from '../orders/dto/create-order.dto';

@Injectable()
export class TradingService {
  constructor(
    private prisma: PrismaService,
    private eventEmitter: EventEmitter2,
  ) {}

  async executeOrder(userId: string, dto: CreateOrderDto) {
    if (dto.orderType === OrderExecutionType.LIMIT) {
      return this.createPendingLimitOrder(userId, dto);
    }

    if (dto.orderType !== OrderExecutionType.MARKET) {
      throw new BadRequestException('Unsupported execution type');
    }

    switch (dto.type) {
      case OrderType.BUY:
        return this.executeBuy(userId, dto);
      case OrderType.SELL:
        return this.executeSell(userId, dto);
      default:
        throw new BadRequestException('Unsupported order type');
    }
  }

  private async createPendingLimitOrder(userId: string, dto: CreateOrderDto) {
    if (dto.price === undefined || dto.price === null || dto.price <= 0) {
      throw new BadRequestException('Limit orders require a positive target price');
    }

    const asset = await this.prisma.asset.findUnique({ where: { id: dto.assetId } });
    if (!asset) {
      throw new NotFoundException('Asset not found');
    }

    return this.prisma.order.create({
      data: {
        userId,
        assetId: dto.assetId,
        type: dto.type,
        orderType: dto.orderType,
        quantity: dto.quantity,
        price: dto.price,
        total: new Prisma.Decimal(dto.price).mul(dto.quantity),
        status: OrderStatus.PENDING,
      },
    });
  }

  async fillPendingOrder(orderId: string) {
    const claimed = await this.prisma.order.updateMany({
      where: {
        id: orderId,
        status: OrderStatus.PENDING,
      },
      data: {
        status: OrderStatus.PROCESSING,
      },
    });

    if (claimed.count === 0) {
      return null;
    }

    const order = await this.prisma.order.findUnique({
      where: { id: orderId },
    });

    if (!order) {
      return null;
    }

    const fillDto: CreateOrderDto = {
      assetId: order.assetId,
      type: order.type,
      orderType: OrderExecutionType.MARKET,
      quantity: Number(order.quantity),
    };

    try {
      const filled =
        order.type === OrderType.BUY
          ? await this.executeBuy(order.userId, fillDto, order.id)
          : await this.executeSell(order.userId, fillDto, order.id);

      return filled;
    } catch (err) {
      if (err instanceof BadRequestException) {
          const cancelled = await this.prisma.order.updateMany({
          where: {
            id: order.id,
            status: OrderStatus.PROCESSING,
          },
          data: {
            status: OrderStatus.CANCELLED,
          },
        });

        if (cancelled.count > 0) {
          this.eventEmitter.emit('order.cancelled', {
            orderId: order.id,
            userId: order.userId,
            reason: err.message,
          });
        }

        return null;
      }

      await this.prisma.order.updateMany({
        where: {
          id: order.id,
          status: OrderStatus.PROCESSING,
        },
        data: {
          status: OrderStatus.PENDING,
        },
      });

      throw err;
    }
  }

  async cancelOrder(orderId: string, userId: string) {
    const result = await this.prisma.order.updateMany({
      where: { id: orderId, userId, status: OrderStatus.PENDING },
      data: { status: OrderStatus.CANCELLED },
    });
    if (result.count === 0) {
      throw new BadRequestException('Order cannot be cancelled');
    }
    return { cancelled: true };
  }

  private async getAssetPriceForUpdate(tx: Prisma.TransactionClient, assetId: string): Promise<Prisma.Decimal> {

    const assets = await tx.$queryRaw<Array<{ current_price: string | number | Prisma.Decimal }>>`
      SELECT current_price FROM "Asset" WHERE id = ${assetId}::uuid FOR UPDATE
    `;

    if (!assets || assets.length === 0) {
      throw new NotFoundException('Asset not found');
    }

    return new Prisma.Decimal(assets[0].current_price);
  }

  private async executeBuy(userId: string, dto: CreateOrderDto, existingOrderId?: string) {
    const filledOrder = await this.prisma.$transaction(async (tx) => {
      const price = await this.getAssetPriceForUpdate(tx, dto.assetId);
      const total = price.mul(dto.quantity);

      const debited = await tx.user.updateMany({
        where: { id: userId, balance: { gte: total } },
        data: { balance: { decrement: total } },
      });
      
      if (debited.count === 0) {
        throw new BadRequestException('Insufficient balance');
      }

      await this.updateHoldingBuy(tx, userId, dto.assetId, dto.quantity, price);

      return this.finalizeOrder(tx, userId, dto, price, total, existingOrderId);
    });

    this.eventEmitter.emit('order.filled', { orderId: filledOrder.id, userId });
    return filledOrder;
  }

  private async executeSell(userId: string, dto: CreateOrderDto, existingOrderId?: string) {
    const filledOrder = await this.prisma.$transaction(async (tx) => {
      const price = await this.getAssetPriceForUpdate(tx, dto.assetId);
      const total = price.mul(dto.quantity);

      const debited = await tx.holding.updateMany({
        where: { userId, assetId: dto.assetId, quantity: { gte: dto.quantity } },
        data: { quantity: { decrement: dto.quantity } },
      });
      
      if (debited.count === 0) {
        throw new BadRequestException('Not enough quantity');
      }

    await this.cleanupZeroHolding(tx, userId, dto.assetId);

      await tx.user.update({
        where: { id: userId },
        data: { balance: { increment: total } },
      });

      return this.finalizeOrder(tx, userId, dto, price, total, existingOrderId);
    });

    this.eventEmitter.emit('order.filled', { orderId: filledOrder.id, userId });
    return filledOrder;
  }

  private async updateHoldingBuy(
    tx: Prisma.TransactionClient,
    userId: string,
    assetId: string,
    quantity: number,
    buyPrice: Prisma.Decimal,
  ) {
    return tx.$executeRaw`
      INSERT INTO holdings AS h
      (
          id,
          user_id,
          asset_id,
          quantity,
          avg_buy_price,
          updated_at
      )
      VALUES
      (
          gen_random_uuid(),
          ${userId}::uuid,
          ${assetId}::uuid,
          ${quantity},
          ${buyPrice},
          now()
      )
      ON CONFLICT (user_id, asset_id)
      DO UPDATE SET
          quantity = h.quantity + EXCLUDED.quantity,
          avg_buy_price =
              (
                  h.quantity * h.avg_buy_price
                  + EXCLUDED.quantity * EXCLUDED.avg_buy_price
              )
              /
              (h.quantity + EXCLUDED.quantity),
          updated_at = now();
      `;
  }

  private async cleanupZeroHolding(
    tx: Prisma.TransactionClient,
    userId: string,
    assetId: string,
  ) {
   await tx.holding.deleteMany({
      where: {
        userId,
        assetId,
        quantity: 0,
      },
    });
  }

  private finalizeOrder(
    tx: Prisma.TransactionClient,
    userId: string,
    dto: CreateOrderDto,
    price: Prisma.Decimal,
    total: Prisma.Decimal,
    existingOrderId?: string,
  ) {
    const data = {
      price,
      total,
      status: OrderStatus.FILLED,
      filledAt: new Date(),
    };

    if (existingOrderId) {
      return tx.order.update({
        where: { id: existingOrderId },
        data,
      });
    }

    return tx.order.create({
      data: {
        userId,
        assetId: dto.assetId,
        type: dto.type,
        orderType: dto.orderType,
        quantity: dto.quantity,
        ...data,
      },
    });
  }
}