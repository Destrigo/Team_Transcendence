import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { AssetsModule } from './assets/assets.module';
import { ConfigModule } from '@nestjs/config';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [UsersModule, AuthModule, AssetsModule, ConfigModule.forRoot({ isGlobal: true }), OrdersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}