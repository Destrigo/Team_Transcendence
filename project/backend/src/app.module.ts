import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { AssetsModule } from './assets/assets.module';
import { ConfigModule } from '@nestjs/config';
import { OrdersModule } from './orders/orders.module';
import { TradingModule } from './trading/trading.module';

@Module({
  imports: [UsersModule, AuthModule, AssetsModule, ConfigModule.forRoot({ isGlobal: true }), OrdersModule, TradingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}