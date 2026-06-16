import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOrderDto } from '../orders/dto/create-order.dto';
import { OrderType, OrderStatus, Prisma } from '@prisma/client';

@Injectable()
export class TradingService {
  constructor(private prisma: PrismaService) {}

    async executeOrder(
    userId: string,
    dto: CreateOrderDto,
    ) {

    console.log({
  userId,
  assetId: dto.assetId,
  quantity: dto.quantity,
  type: dto.type,
});
    switch (dto.type) {
        case OrderType.BUY:
        return this.executeBuy(userId, dto);

        case OrderType.SELL:
        return this.executeSell(userId, dto);

        default:
        throw new BadRequestException(
            'Unsupported order type',
        );
    }
    }

    private async executeBuy(
    userId: string,
    dto: CreateOrderDto,
    ) {
    const asset = await this.prisma.asset.findUnique({
        where: { id: dto.assetId },
    });

    if (!asset) {
        throw new NotFoundException('Asset not found');
    }

    const user = await this.prisma.user.findUnique({
        where: { id: userId },
    });

    if (!user) {
    throw new NotFoundException('User not found');
    }

    const total =
        Number(asset.currentPrice) * dto.quantity;

    if (Number(user.balance) < total) {
        throw new BadRequestException(
        'Insufficient balance',
        );
    }

    return this.prisma.$transaction(async (tx) => {
        await tx.user.update({
        where: { id: userId },
        data: {
            balance: {
            decrement: total,
            },
        },
        });

        await this.updateHoldingBuy(
        tx,
        userId,
        dto.assetId,
        dto.quantity,
        Number(asset.currentPrice),
        );

        return this.createFilledOrder(
        tx,
        userId,
        dto,
        Number(asset.currentPrice),
        total,
        );
    });
    }

    private async executeSell(
    userId: string,
    dto: CreateOrderDto,
    ) {
    const holding =
        await this.prisma.holding.findUnique({
        where: {
            userId_assetId: {
            userId,
            assetId: dto.assetId,
            },
        },
        });

    if (!holding) {
        throw new BadRequestException(
        'Asset not owned',
        );
    }

    if (Number(holding.quantity) < dto.quantity) {
        throw new BadRequestException(
        'Not enough quantity',
        );
    }

    const asset = await this.prisma.asset.findUnique({
    where: { id: dto.assetId },
    });

    if (!asset) {
    throw new NotFoundException('Asset not found');
    }

    const total =
        Number(asset.currentPrice) * dto.quantity;
        
    return this.prisma.$transaction(async (tx) => {
        await tx.user.update({
        where: { id: userId },
        data: {
            balance: {
            increment: total,
            },
        },
        });

        await this.updateHoldingSell(
        tx,
        userId,
        dto.assetId,
        dto.quantity,
        );

        return this.createFilledOrder(
        tx,
        userId,
        dto,
        Number(asset.currentPrice),
        total,
        );
    });
    }

    private async updateHoldingBuy(
    tx: Prisma.TransactionClient,
    userId: string,
    assetId: string,
    quantity: number,
    buyPrice: number,
    ) {
    const holding = await tx.holding.findUnique({
        where: {
        userId_assetId: {
            userId,
            assetId,
        },
        },
    });

    if (!holding) {
        return tx.holding.create({
        data: {
            userId,
            assetId,
            quantity,
            avgBuyPrice: buyPrice,
        },
        });
    }

    const oldQty = Number(holding.quantity);
    const oldAvgPrice = Number(holding.avgBuyPrice);

    const newQty = oldQty + quantity;

    const newAvgPrice =
        (oldQty * oldAvgPrice + quantity * buyPrice) /
        newQty;

    return tx.holding.update({
        where: {
        userId_assetId: {
            userId,
            assetId,
        },
        },
        data: {
        quantity: newQty,
        avgBuyPrice: newAvgPrice,
        },
    });
    }

    private async updateHoldingSell(
    tx: Prisma.TransactionClient,
    userId: string,
    assetId: string,
    quantity: number,
    ) {

    const holding = await tx.holding.findUnique({
        where: {
        userId_assetId: {
            userId,
            assetId,
        },
        },
    });

    if (!holding) {
    throw new NotFoundException('Holding not found');
    }

    const remainingQuantity =
        Number(holding.quantity) - quantity;

    if (remainingQuantity < 0) {
    throw new BadRequestException(
        'Not enough quantity',
    );
    }

    if (remainingQuantity === 0) {
    return tx.holding.delete({
        where: {
        userId_assetId: {
            userId,
            assetId,
        },
        },
    });
    }

    return tx.holding.update({
        where: {
        userId_assetId: {
            userId,
            assetId,
        },
        },
        data: {
        quantity: remainingQuantity,
        },
    });
    }

    private createFilledOrder(
    tx: Prisma.TransactionClient,
    userId: string,
    dto: CreateOrderDto,
    price: number,
    total: number,
    ) {
    return tx.order.create({
        data: {
        userId,
        assetId: dto.assetId,
        type: dto.type,
        orderType: dto.orderType,
        quantity: dto.quantity,
        price,
        total,
        status: OrderStatus.FILLED,
        filledAt: new Date(),
        },
    });
    }
}

