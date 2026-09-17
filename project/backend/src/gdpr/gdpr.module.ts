import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { MailModule } from '../common/mail/mail.module';
import { GdprController } from './gdpr.controller';
import { GdprService } from './gdpr.service';

@Module({
  imports: [PrismaModule, MailModule],
  controllers: [GdprController],
  providers: [GdprService],
})
export class GdprModule {}
