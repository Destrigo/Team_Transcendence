import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../prisma/prisma.service';

/**
 * MarketDataService
 *
 * Fetches live prices from external APIs and stores them in the database.
 * Two sources:
 *   - CoinGecko: crypto prices (free, no API key, ~30 calls/min)
 *   - Finnhub: stock prices (free tier, API key required, 60 calls/min)
 *
 * The service runs on a schedule (cron jobs) and updates the assets table.
 * Other services read prices from the DB — they never call external APIs directly.
 *
 * If an API call fails, the service logs a warning and serves cached prices
 * from the database (the last successfully fetched values).
 */
@Injectable()
export class MarketDataService {
  private readonly logger = new Logger(MarketDataService.name);
  private lastCryptoPrices: Record<string, any> = {};
  private lastStockPrices: Record<string, any> = {};

  constructor(
    private prisma: PrismaService,
    private config: ConfigService,
  ) {}

  // ─── COINGECKO (CRYPTO) ───────────────────────────────────────
  //
  // Free tier: ~10-30 calls/min, no API key needed.
  // One call returns prices for ALL coins at once.
  // Docs: https://docs.coingecko.com/reference/simple-price
  //

  /**
   * Runs every 30 seconds.
   * Fetches current prices for all active crypto assets in one API call.
   */
  @Cron(CronExpression.EVERY_30_SECONDS)
  async fetchCryptoPrices(): Promise<void> {
    try {
      // 1. Get all crypto assets from the database
      const cryptoAssets = await this.prisma.asset.findMany({
        where: { type: 'CRYPTO', isActive: true },
      });

      if (cryptoAssets.length === 0) return;

      // 2. Build the CoinGecko API URL
      //    We send all coin IDs in one request (comma-separated)
      const ids = cryptoAssets
        .map((a) => a.coingeckoId)
        .filter(Boolean)
        .join(',');

      const baseUrl = this.config.get('COINGECKO_API_URL', 'https://api.coingecko.com/api/v3');
      const url = `${baseUrl}/simple/price?ids=${ids}&vs_currencies=usd&include_24hr_change=true&include_24hr_vol=true&include_market_cap=true`;

      // 3. Fetch from CoinGecko
      const response = await fetch(url);

      if (!response.ok) {
        this.logger.warn(`CoinGecko returned ${response.status} — serving cached prices`);
        return;
      }

      const data = await response.json();

      // 4. Update each asset in the database
      //
      // CoinGecko response format:
      // {
      //   "bitcoin": {
      //     "usd": 67432.12,
      //     "usd_24h_change": 2.34,
      //     "usd_24h_vol": 28934567890,
      //     "usd_market_cap": 1234567890000
      //   },
      //   "ethereum": { ... }
      // }
      //
      let updatedCount = 0;

      for (const asset of cryptoAssets) {
        if (!asset.coingeckoId || !data[asset.coingeckoId]) continue;

        const priceData = data[asset.coingeckoId];

        await this.prisma.asset.update({
          where: { id: asset.id },
          data: {
            currentPrice: priceData.usd ?? 0,
            change24h: priceData.usd_24h_change ?? 0,
            volume24h: priceData.usd_24h_vol ?? 0,
            marketCap: priceData.usd_market_cap ?? 0,
            priceUpdatedAt: new Date(),
          },
        });

        updatedCount++;
      }

      // 5. Cache the latest prices in memory (for quick access)
      this.lastCryptoPrices = data;

      this.logger.log(`Updated ${updatedCount} crypto prices`);

      // TODO: When you implement the WebSocket price gateway,
      // broadcast the updated prices here:
      //
      // this.priceGateway.broadcastPrices(updatedAssets);
      //
    } catch (error) {
      this.logger.error(`Failed to fetch crypto prices: ${error.message}`);
      // Don't throw — the cron job should keep running.
      // The database still has the last good prices.
    }
  }

  /**
   * Fetches 30-day price history for a single crypto asset.
   * Used for the price chart on the asset detail page.
   *
   * Returns an array of [timestamp, price] pairs.
   */
  async getCryptoHistory(coingeckoId: string, days: number = 30): Promise<Array<[number, number]>> {
    try {
      const baseUrl = this.config.get('COINGECKO_API_URL', 'https://api.coingecko.com/api/v3');
      const url = `${baseUrl}/coins/${coingeckoId}/market_chart?vs_currency=usd&days=${days}`;

      const response = await fetch(url);

      if (!response.ok) {
        this.logger.warn(`CoinGecko history returned ${response.status}`);
        return [];
      }

      const data = await response.json();

      // Response format: { prices: [[timestamp, price], ...], ... }
      return data.prices || [];
    } catch (error) {
      this.logger.error(`Failed to fetch crypto history: ${error.message}`);
      return [];
    }
  }

  // ─── FINNHUB (STOCKS) ─────────────────────────────────────────
  //
  // Free tier: 60 calls/min, API key required.
  // One call per symbol — 5 stocks = 5 calls.
  // Docs: https://finnhub.io/docs/api/quote
  //
  // IMPORTANT: Stock markets are only open Mon-Fri ~9:30-16:00 ET.
  // Outside trading hours, prices don't change.
  // The API still returns the last known price, which is fine.
  //

  /**
   * Runs every 60 seconds.
   * Fetches current prices for each stock asset one at a time.
   */
  @Cron('*/60 * * * * *') // Every 60 seconds
  async fetchStockPrices(): Promise<void> {
    const apiKey = this.config.get('FINNHUB_API_KEY');

    // Skip if no API key configured
    if (!apiKey || apiKey === 'your_finnhub_key_here') {
      return;
    }

    try {
      const stockAssets = await this.prisma.asset.findMany({
        where: { type: 'STOCK', isActive: true },
      });

      if (stockAssets.length === 0) return;

      const baseUrl = this.config.get('FINNHUB_API_URL', 'https://finnhub.io/api/v1');
      let updatedCount = 0;

      for (const asset of stockAssets) {
        if (!asset.finnhubSymbol) continue;

        try {
          // Finnhub requires one call per symbol
          const url = `${baseUrl}/quote?symbol=${asset.finnhubSymbol}&token=${apiKey}`;
          const response = await fetch(url);

          if (!response.ok) {
            this.logger.warn(`Finnhub returned ${response.status} for ${asset.symbol}`);
            continue;
          }

          const data = await response.json();

          // Finnhub response format:
          // {
          //   "c": 178.72,    ← current price
          //   "d": 2.35,      ← change (absolute)
          //   "dp": 1.33,     ← change (percent)
          //   "h": 179.63,    ← high of the day
          //   "l": 176.21,    ← low of the day
          //   "o": 177.50,    ← open price
          //   "pc": 176.37,   ← previous close
          //   "t": 1709812800 ← timestamp
          // }

          if (data.c && data.c > 0) {
            await this.prisma.asset.update({
              where: { id: asset.id },
              data: {
                currentPrice: data.c,
                change24h: data.dp ?? 0,
                priceUpdatedAt: new Date(),
              },
            });

            updatedCount++;
          }
        } catch (err) {
          this.logger.warn(`Failed to fetch ${asset.symbol}: ${err.message}`);
        }

        // Small delay between requests to be polite to the API
        await this.delay(200);
      }

      this.logger.log(`Updated ${updatedCount} stock prices`);
    } catch (error) {
      this.logger.error(`Failed to fetch stock prices: ${error.message}`);
    }
  }

  // ─── HELPERS ──────────────────────────────────────────────────

  /**
   * Get the current price for an asset from the database.
   * Used by the trading engine when executing orders.
   */
  async getCurrentPrice(assetId: string): Promise<number> {
    const asset = await this.prisma.asset.findUnique({
      where: { id: assetId },
      select: { currentPrice: true },
    });

    return asset ? Number(asset.currentPrice) : 0;
  }

  /**
   * Get all current prices. Used to broadcast via WebSocket.
   */
  async getAllPrices(): Promise<Array<{ symbol: string; price: number; change24h: number }>> {
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
