import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AccessTokenGuard } from '../common/guards/access-token.guard';
import { PrismaModule } from '../prisma/prisma.module';
import { GdprController } from './gdpr.controller';
import { GdprService } from './gdpr.service';

@Module({
  imports: [PrismaModule, JwtModule.register({})],
  controllers: [GdprController],
  providers: [GdprService, AccessTokenGuard],
})
export class GdprModule {}
