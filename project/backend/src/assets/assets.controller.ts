import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { AssetsService } from './assets.service';
import { Public } from '../common/decorators/public.decorator';

@Controller('assets')
export class AssetsController {
  constructor(private assetsService: AssetsService) {}

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

  @Public()
  @Get(':symbol/history')
  async getHistory(
    @Param('symbol') symbol: string,
    @Query('days', new ParseIntPipe({ optional: true })) days = 30,
  ) {
    return this.assetsService.getPriceHistory(symbol, days);
  }

  @Public()
  @Get(':symbol')
  async findBySymbol(@Param('symbol') symbol: string) {
    return this.assetsService.findBySymbol(symbol);
  }
}
