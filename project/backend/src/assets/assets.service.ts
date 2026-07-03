import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { MarketDataService } from './market-data.service';
import { AssetType, Prisma } from '@prisma/client';

export interface AssetQueryParams {
  q?: string;
  type?: 'CRYPTO' | 'STOCK';
  sort?: 'price' | 'change' | 'name' | 'volume' | 'marketCap'; // sort field
  order?: 'asc' | 'desc';
  page?: number;
  limit?: number;
}

@Injectable()
export class AssetsService {
  constructor(
    private prisma: PrismaService,
    private marketData: MarketDataService,
  ) {}

  async findAll(query: AssetQueryParams) {
    const {
      q,
      type,
      sort = 'marketCap',
      order = 'desc',
      page = 1,
      limit = 20,
    } = query;

    const where: Prisma.AssetWhereInput = { isActive: true };

    if (q) {
      where.OR = [
        { name: { contains: q, mode: 'insensitive' } },
        { symbol: { contains: q, mode: 'insensitive' } },
      ];
    }

    if (type) {
      where.type = type as AssetType;
    }

    const sortFieldMap: Record<string, string> = {
      price: 'currentPrice',
      change: 'change24h',
      name: 'name',
      volume: 'volume24h',
      marketCap: 'marketCap',
    };
    const orderBy = { [sortFieldMap[sort] || 'marketCap']: order };

    const [assets, total] = await Promise.all([
      this.prisma.asset.findMany({
        where,
        orderBy,
        skip: (page - 1) * limit,
        take: limit,
      }),
      this.prisma.asset.count({ where }),
    ]);

    return {
      data: assets,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async findBySymbol(symbol: string) {
    const asset = await this.prisma.asset.findUnique({
      where: { symbol: symbol.toUpperCase() },
    });

    if (!asset) {
      throw new NotFoundException(`Asset ${symbol} not found`);
    }

    return asset;
  }

  async findById(id: string) {
    const asset = await this.prisma.asset.findUnique({
      where: { id },
    });

    if (!asset) {
      throw new NotFoundException(`Asset not found`);
    }

    return asset;
  }

  async getPriceHistory(symbol: string, days: number = 30) {
    const asset = await this.findBySymbol(symbol);

    if (asset.type === 'CRYPTO' && asset.coingeckoId) {
      const history = await this.marketData.getCryptoHistory(
        asset.coingeckoId,
        days,
      );

      return history.map(([timestamp, price]) => ({
        time: Math.floor(timestamp / 1000),
        value: price,
      }));
    }

    return [];
  }
}
