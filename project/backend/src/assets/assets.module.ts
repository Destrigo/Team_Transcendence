import { Module } from '@nestjs/common';
import { AssetsController } from './assets.controller';
import { AssetsService } from './assets.service';
import { MarketDataService } from './market-data.service';
import { PrismaModule } from '../prisma/prisma.module';
import { WebsocketModule } from '../websocket/websocket.module';

@Module({
  imports: [PrismaModule, WebsocketModule],
  controllers: [AssetsController],
  providers: [AssetsService, MarketDataService],
  exports: [AssetsService, MarketDataService],
})
export class AssetsModule {}
