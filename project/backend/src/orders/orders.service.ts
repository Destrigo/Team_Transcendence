import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { GetOrdersQueryDto } from './dto/get-orders.query.dto';
import { Prisma } from '@prisma/client';
import { TradingService } from '../trading/trading.service';

@Injectable()
export class OrdersService {
  constructor(
    private prisma: PrismaService,
    private tradingService: TradingService,
  ) {}

  async getUserOrders(userId: string, query: GetOrdersQueryDto) {
    const filters: Prisma.OrderWhereInput = {
      userId,
    };

    if (query.status) {
      filters.status = query.status;
    }

    if (query.type) {
      filters.type = query.type;
    }

    if (query.assetId) {
      filters.assetId = query.assetId;
    }

    return this.prisma.order.findMany({
      where: filters,
      include: {
        asset: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  createOrder(userId: string, dto: any) {
    console.log('ORDERS SERVICE HIT');
    return this.tradingService.executeOrder(userId, dto);
  }
}