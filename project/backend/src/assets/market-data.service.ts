import { Injectable, Logger, Optional } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../prisma/prisma.service';
import { PriceFeedGateway } from '../websocket/price-feed.gateway';

type CoinGeckoPrice = {
  usd?: number;
  usd_24h_change?: number;
  usd_24h_vol?: number;
  usd_market_cap?: number;
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

@Injectable()
export class MarketDataService {
  private readonly logger = new Logger(MarketDataService.name);

  constructor(
    private prisma: PrismaService,
    private config: ConfigService,
    @Optional() private priceFeed: PriceFeedGateway,
  ) {}

  @Cron(CronExpression.EVERY_30_SECONDS)
  async fetchCryptoPrices(): Promise<void> {
    try {
      const cryptoAssets = await this.prisma.asset.findMany({
        where: { type: 'CRYPTO', isActive: true },
      });

      if (cryptoAssets.length === 0) return;

      const ids = cryptoAssets
        .map((a) => a.coingeckoId)
        .filter(Boolean)
        .join(',');

      const baseUrl =
        this.config.get<string>('COINGECKO_API_URL') ??
        'https://api.coingecko.com/api/v3';
      const url = `${baseUrl}/simple/price?ids=${ids}&vs_currencies=usd&include_24hr_change=true&include_24hr_vol=true&include_market_cap=true`;

      const response = await fetch(url);

      if (!response.ok) {
        this.logger.warn(`CoinGecko returned ${response.status}`);
        return;
      }

      const raw: unknown = await response.json();
      const data: Record<string, CoinGeckoPrice> = isRecord(raw)
        ? (raw as Record<string, CoinGeckoPrice>)
        : {};
      let updatedCount = 0;

      for (const asset of cryptoAssets) {
        if (!asset.coingeckoId || !data[asset.coingeckoId]) continue;

        const p = data[asset.coingeckoId];

        await this.prisma.asset.update({
          where: { id: asset.id },
          data: {
            currentPrice: p.usd ?? 0,
            change24h: p.usd_24h_change ?? 0,
            volume24h: p.usd_24h_vol ?? 0,
            marketCap: p.usd_market_cap ?? 0,
            priceUpdatedAt: new Date(),
          },
        });

        updatedCount++;
      }

      this.logger.log(`Updated ${updatedCount} crypto prices`);

      if (this.priceFeed) {
        const prices = await this.getAllPrices();
        this.priceFeed.broadcastPrices(prices);
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      this.logger.error(`Failed to fetch crypto prices: ${message}`);
    }
  }

  async getCryptoHistory(
    coingeckoId: string,
    days: number = 30,
  ): Promise<Array<[number, number]>> {
    try {
      const baseUrl =
        this.config.get<string>('COINGECKO_API_URL') ??
        'https://api.coingecko.com/api/v3';
      const url = `${baseUrl}/coins/${coingeckoId}/market_chart?vs_currency=usd&days=${days}`;
      const response = await fetch(url);

      if (!response.ok) {
        this.logger.warn(`CoinGecko history returned ${response.status}`);
        return [];
      }

      const raw: unknown = await response.json();
      if (!isRecord(raw)) return [];
      const prices = (raw as { prices?: unknown }).prices;
      return Array.isArray(prices) ? (prices as Array<[number, number]>) : [];
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      this.logger.error(`Failed to fetch crypto history: ${message}`);
      return [];
    }
  }

  // Finnhub: one call per symbol, 60 calls/min free tier
  @Cron('*/60 * * * * *')
  async fetchStockPrices(): Promise<void> {
    const apiKey = this.config.get<string>('FINNHUB_API_KEY');

    if (!apiKey || apiKey === 'your_finnhub_key_here') return;

    try {
      const stockAssets = await this.prisma.asset.findMany({
        where: { type: 'STOCK', isActive: true },
      });

      if (stockAssets.length === 0) return;

      const baseUrl =
        this.config.get<string>('FINNHUB_API_URL') ??
        'https://finnhub.io/api/v1';
      let updatedCount = 0;

      for (const asset of stockAssets) {
        if (!asset.finnhubSymbol) continue;

        try {
          const url = `${baseUrl}/quote?symbol=${asset.finnhubSymbol}&token=${apiKey}`;
          const response = await fetch(url);

          if (!response.ok) {
            this.logger.warn(
              `Finnhub returned ${response.status} for ${asset.symbol}`,
            );
            continue;
          }

          const raw: unknown = await response.json();
          const data = isRecord(raw)
            ? (raw as { c?: unknown; dp?: unknown })
            : {};
          const c = typeof data.c === 'number' ? data.c : undefined;
          const dp = typeof data.dp === 'number' ? data.dp : undefined;

          if (typeof c === 'number' && c > 0) {
            await this.prisma.asset.update({
              where: { id: asset.id },
              data: {
                currentPrice: c,
                change24h: dp ?? 0,
                priceUpdatedAt: new Date(),
              },
            });
            updatedCount++;
          }
        } catch (err) {
          const message = err instanceof Error ? err.message : String(err);
          this.logger.warn(`Failed to fetch ${asset.symbol}: ${message}`);
        }

        await this.delay(200);
      }

      this.logger.log(`Updated ${updatedCount} stock prices`);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      this.logger.error(`Failed to fetch stock prices: ${message}`);
    }
  }

  async getCurrentPrice(assetId: string): Promise<number> {
    const asset = await this.prisma.asset.findUnique({
      where: { id: assetId },
      select: { currentPrice: true },
    });
    return asset ? Number(asset.currentPrice) : 0;
  }

  async getAllPrices(): Promise<
    Array<{ symbol: string; price: number; change24h: number }>
  > {
    const assets = await this.prisma.asset.findMany({
      where: { isActive: true },
      select: { symbol: true, currentPrice: true, change24h: true },
    });
    return assets.map((a) => ({
      symbol: a.symbol,
      price: Number(a.currentPrice),
      change24h: Number(a.change24h),
    }));
  }

  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
