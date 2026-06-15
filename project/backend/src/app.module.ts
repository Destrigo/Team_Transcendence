import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AssetsModule } from './assets/assets.module';
import { WebsocketModule } from './websocket/websocket.module';
import { AnalyticsModule } from './analytics/analytics.module';

// TODO: uncomment after merging pavel branch
// import { AuthModule } from './auth/auth.module';
// import { UsersModule } from './users/users.module';
// import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ScheduleModule.forRoot(),
    PrismaModule,
    AssetsModule,
    WebsocketModule,
    AnalyticsModule,
    // AuthModule,
    // UsersModule,
    // OrdersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
