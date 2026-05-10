import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AssetsModule } from './assets/assets.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ScheduleModule.forRoot(),   // ← REQUIRED for cron jobs
    PrismaModule,
    AuthModule,
    UsersModule,
    AssetsModule,               // ← ADD THIS
  ],
})
export class AppModule {}