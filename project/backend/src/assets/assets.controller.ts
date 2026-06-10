import { Controller, Get, Param, Query } from '@nestjs/common';
import { AssetsService } from './assets.service';
import { Public } from '../common/decorators/public.decorator';

/**
 * AssetsController
 *
 * Public endpoints — no authentication required.
 * Anyone can browse assets and see prices.
 * Trading requires auth (handled by the trading module).
 */
@Controller('assets')
export class AssetsController {
  constructor(private assetsService: AssetsService) {}

  /**
   * GET /api/assets
   * GET /api/assets?q=bitcoin
   * GET /api/assets?type=CRYPTO&sort=price&order=desc&page=1&limit=10
   */
  @Public()
  @Get()
  async findAll(
    @Query('q') q?: string,
    @Query('type') type?: 'CRYPTO' | 'STOCK',
    @Query('sort') sort?: 'price' | 'change' | 'name' | 'volume' | 'marketCap',
    @Query('order') order?: 'asc' | 'desc',
    @Query('page') page?: string,
    @Query('limit') limit?: string,
  ) {
    return this.assetsService.findAll({
      q,
      type,
      sort,
      order,
      page: page ? parseInt(page, 10) : 1,
      limit: limit ? parseInt(limit, 10) : 20,
    });
  }

  /**
   * GET /api/assets/BTC
   * GET /api/assets/AAPL
   */
  @Public()
  @Get(':symbol')
  async findBySymbol(@Param('symbol') symbol: string) {
    return this.assetsService.findBySymbol(symbol);
  }

  /**
   * GET /api/assets/BTC/history?days=30
   * Returns price data formatted for Lightweight Charts.
   */
  @Public()
  @Get(':symbol/history')
  async getHistory(
    @Param('symbol') symbol: string,
    @Query('days') days?: string,
  ) {
    return this.assetsService.getPriceHistory(
      symbol,
      days ? parseInt(days, 10) : 30,
    );
  }
}
