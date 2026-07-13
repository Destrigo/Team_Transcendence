import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { AssetsService } from './assets.service';
import { Public } from '../common/decorators/public.decorator';
import { AssetsQueryDto } from './dto/assets-query.dto';

@Controller('assets')
export class AssetsController {
  constructor(private assetsService: AssetsService) {}

  @Public()
  @Get()
  async findAll(@Query() query: AssetsQueryDto) {
    return this.assetsService.findAll({
      ...query,
      page: query.page ?? 1,
      limit: query.limit ?? 20,
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
