import { Module } from '@nestjs/common';
import { TradingService } from './trading.service';
import { PrismaService } from '../prisma/prisma.service';
import { PriceCheckerScheduler } from './price-checker.scheduler';

@Module({
  providers: [TradingService, PrismaService, PriceCheckerScheduler],
  exports: [TradingService],
})
export class TradingModule {}