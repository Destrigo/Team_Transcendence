import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PriceFeedGateway } from './price-feed.gateway';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [
    PrismaModule,
    JwtModule.register({ secret: process.env.JWT_ACCESS_SECRET }),
  ],
  providers: [PriceFeedGateway],
  exports: [PriceFeedGateway],
})
export class WebsocketModule {}
