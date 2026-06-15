import { Module } from '@nestjs/common';
import { PriceFeedGateway } from './price-feed.gateway';

@Module({
  providers: [PriceFeedGateway],
  exports: [PriceFeedGateway],
})
export class WebsocketModule {}
