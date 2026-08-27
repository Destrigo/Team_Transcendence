import { Controller, Get, Put, Param, Query, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { NotificationsService } from './notifications.service';

@Controller('notifications')
@UseGuards(JwtAuthGuard)
export class NotificationsController {
  constructor(private readonly notifications: NotificationsService) {}

  @Get()
  list(@CurrentUser('userId') userId: string, @Query('limit') limit?: string) {
    return this.notifications.list(userId, limit ? Number(limit) : undefined);
  }

  @Get('unread-count')
  unreadCount(@CurrentUser('userId') userId: string) {
    return this.notifications.unreadCount(userId);
  }

  @Put(':id/read')
  markAsRead(@CurrentUser('userId') userId: string, @Param('id') id: string) {
    return this.notifications.markAsRead(id, userId);
  }

  @Put('read-all')
  markAllAsRead(@CurrentUser('userId') userId: string) {
    return this.notifications.markAllAsRead(userId);
  }
}
