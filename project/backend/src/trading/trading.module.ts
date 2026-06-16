import { Module } from '@nestjs/common';
import { TradingService } from './trading.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  providers: [TradingService, PrismaService],
  exports: [TradingService],
})
export class TradingModule {}