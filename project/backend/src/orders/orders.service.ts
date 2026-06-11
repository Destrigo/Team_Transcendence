import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}

  async getUserOrders(userId: string, filters: any) {
    return this.prisma.order.findMany({
      where: {
        userId,
        ...filters,
      },
      include: {
        asset: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async createOrder(userId: string, dto: CreateOrderDto) {
    const asset = await this.prisma.asset.findUnique({
      where: { id: dto.assetId },
    });

    if (!asset) {
      throw new Error('Asset not found');
    }

    const price =
      dto.orderType === 'MARKET' ? asset.currentPrice : dto.price;

    if (!price) {
      throw new Error('Price is required for LIMIT order');
    }

    const total = Number(price) * Number(dto.quantity);

    const order = await this.prisma.order.create({
      data: {
        userId,
        assetId: dto.assetId,
        type: dto.type,
        orderType: dto.orderType,
        quantity: dto.quantity,
        price,
        total,
      },
    });

    return order;
  }
}