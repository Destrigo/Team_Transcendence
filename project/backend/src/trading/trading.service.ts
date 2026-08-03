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
    const order = await this.prisma.order.findUnique({ where: { id: orderId } });
    if (!order || order.status !== OrderStatus.PENDING) {
      return null;
    }

    const asset = await this.prisma.asset.findUnique({ where: { id: order.assetId } });
    if (!asset) {
      throw new NotFoundException('Asset not found');
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

      this.eventEmitter.emit('order.filled', { orderId: filled.id, userId: order.userId });
      return filled;
    } catch (err) {
      if (err instanceof BadRequestException) {
        await this.cancelOrder(order.id, order.userId);
        this.eventEmitter.emit('order.cancelled', {
          orderId: order.id,
          userId: order.userId,
          reason: err.message,
        });
        return null;
      }
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

  private async executeBuy(userId: string, dto: CreateOrderDto, existingOrderId?: string) {
    const asset = await this.prisma.asset.findUnique({ where: { id: dto.assetId } });
    if (!asset) {
      throw new NotFoundException('Asset not found');
    }

    const price = new Prisma.Decimal(asset.currentPrice);
    const total = price.mul(dto.quantity);

    const filledOrder = await this.prisma.$transaction(async (tx) => {
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
    const asset = await this.prisma.asset.findUnique({ where: { id: dto.assetId } });
    if (!asset) {
      throw new NotFoundException('Asset not found');
    }

    const price = new Prisma.Decimal(asset.currentPrice);
    const total = price.mul(dto.quantity);

    const filledOrder = await this.prisma.$transaction(async (tx) => {
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
    const holding = await tx.holding.findUnique({
      where: { userId_assetId: { userId, assetId } },
    });

    if (!holding) {
      return tx.holding.create({
        data: { userId, assetId, quantity, avgBuyPrice: buyPrice },
      });
    }

    const oldQty = new Prisma.Decimal(holding.quantity);
    const oldAvgPrice = new Prisma.Decimal(holding.avgBuyPrice);
    const addedQty = new Prisma.Decimal(quantity);
    const newQty = oldQty.add(addedQty);

    const newAvgPrice = oldQty
      .mul(oldAvgPrice)
      .add(addedQty.mul(buyPrice))
      .div(newQty);

    return tx.holding.update({
      where: { userId_assetId: { userId, assetId } },
      data: { quantity: newQty, avgBuyPrice: newAvgPrice },
    });
  }

  private async cleanupZeroHolding(
    tx: Prisma.TransactionClient,
    userId: string,
    assetId: string,
  ) {
    const holding = await tx.holding.findUnique({
      where: { userId_assetId: { userId, assetId } },
    });
    if (holding && new Prisma.Decimal(holding.quantity).isZero()) {
      await tx.holding.delete({
        where: { userId_assetId: { userId, assetId } },
      });
    }
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