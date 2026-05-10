import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { MarketDataService } from './market-data.service';
import { AssetType, Prisma } from '@prisma/client';

/**
 * AssetsService
 *
 * Handles all database queries related to assets.
 * The MarketDataService writes prices to the DB.
 * This service reads them and returns them to the controller.
 */

export interface AssetQueryParams {
  q?: string;                                          // search term
  type?: 'CRYPTO' | 'STOCK';                           // filter by type
  sort?: 'price' | 'change' | 'name' | 'volume' | 'marketCap'; // sort field
  order?: 'asc' | 'desc';                              // sort direction
  page?: number;                                       // page number (1-based)
  limit?: number;                                      // items per page
}

@Injectable()
export class AssetsService {
  constructor(
    private prisma: PrismaService,
    private marketData: MarketDataService,
  ) {}

  /**
   * List all assets with search, filter, sort, and pagination.
   *
   * Examples:
   *   GET /api/assets                         → all assets, sorted by market cap
   *   GET /api/assets?q=bit                   → search "bit" (matches Bitcoin)
   *   GET /api/assets?type=CRYPTO             → only crypto
   *   GET /api/assets?sort=price&order=desc   → most expensive first
   *   GET /api/assets?page=2&limit=10         → page 2, 10 per page
   */
  async findAll(query: AssetQueryParams) {
    const {
      q,
      type,
      sort = 'marketCap',
      order = 'desc',
      page = 1,
      limit = 20,
    } = query;

    // Build the WHERE clause
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

    // Map friendly sort names to database column names
    const sortFieldMap: Record<string, string> = {
      price: 'currentPrice',
      change: 'change24h',
      name: 'name',
      volume: 'volume24h',
      marketCap: 'marketCap',
    };
    const orderBy = { [sortFieldMap[sort] || 'marketCap']: order };

    // Run both queries in parallel: data + total count
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

  /**
   * Get a single asset by its symbol (e.g., "BTC", "AAPL").
   */
  async findBySymbol(symbol: string) {
    const asset = await this.prisma.asset.findUnique({
      where: { symbol: symbol.toUpperCase() },
    });

    if (!asset) {
      throw new NotFoundException(`Asset ${symbol} not found`);
    }

    return asset;
  }

  /**
   * Get a single asset by its UUID.
   */
  async findById(id: string) {
    const asset = await this.prisma.asset.findUnique({
      where: { id },
    });

    if (!asset) {
      throw new NotFoundException(`Asset not found`);
    }

    return asset;
  }

  /**
   * Get price history for chart rendering.
   * For crypto: fetches from CoinGecko API.
   * For stocks: would need Finnhub historical endpoint (or cache).
   *
   * Returns array of { time: number (unix seconds), value: number }
   * compatible with Lightweight Charts.
   */
  async getPriceHistory(symbol: string, days: number = 30) {
    const asset = await this.findBySymbol(symbol);

    if (asset.type === 'CRYPTO' && asset.coingeckoId) {
      const history = await this.marketData.getCryptoHistory(asset.coingeckoId, days);

      // Transform CoinGecko format [timestamp_ms, price]
      // to Lightweight Charts format { time: unix_seconds, value: price }
      return history.map(([timestamp, price]) => ({
        time: Math.floor(timestamp / 1000),
        value: price,
      }));
    }

    // For stocks without history API, return empty array
    // The frontend should handle this gracefully
    return [];
  }
}
