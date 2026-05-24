import { Module } from '@nestjs/common';
import { AssetsController } from './assets.controller';
import { AssetsService } from './assets.service';
import { MarketDataService } from './market-data.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [AssetsController],
  providers: [AssetsService, MarketDataService],
  exports: [AssetsService, MarketDataService],
  // ↑ Export both so other modules can use them:
  //   - TradingModule needs MarketDataService.getCurrentPrice()
  //   - WebSocketModule needs MarketDataService.getAllPrices()
})
export class AssetsModule {}
