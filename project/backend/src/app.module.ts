import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SocialModule } from './social/social.module';

@Module({
  imports: [SocialModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
