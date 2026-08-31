import { Body, Controller, Get, Logger, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { parseQueryInt } from '../../common/parse-query-int';
import { MessagesService } from './messages.service';
import { NotificationsService, CreateNotificationInput } from '../notifications/notifications.service';
import { SocialGateway } from '../social.gateway';

@Controller('messages')
@UseGuards(JwtAuthGuard)
export class MessagesController {
  private readonly logger = new Logger(MessagesController.name);

  constructor(
    private readonly messagesService: MessagesService,
    private readonly notifications: NotificationsService,
    private readonly socialGateway: SocialGateway,
  ) {}

  private async notifyBestEffort(userId: string, input: CreateNotificationInput) {
    try {
      await this.notifications.notify(userId, input);
    } catch (err) {
      this.logger.warn(`Failed to send notification to ${userId}: ${err}`);
    }
  }

  // REST fallback for sending a message (the primary path is the
  // `message:send` websocket event) — kept in sync so a message sent
  // through either path shows up live for a connected recipient.
  @Post(':otherUserId')
  async sendMessage(
    @CurrentUser('userId') senderId: string,
    @Param('otherUserId') otherUserId: string,
    @Body('content') content: string,
  ) {
    const message = await this.messagesService.sendMessage(senderId, otherUserId, content);

    this.socialGateway.emitToUser(otherUserId, 'message:new', message);
    this.socialGateway.emitToUser(senderId, 'message:new', message);

    await this.notifyBestEffort(otherUserId, {
      type: 'message',
      title: 'New message',
      body: message.content.slice(0, 80),
      data: { fromUserId: senderId },
    });
    return message;
  }

  // Must come before the ':otherUserId' route below, or Nest would try to
  // match "unread-counts" itself as a user id.
  @Get('unread-counts')
  getUnreadCounts(@CurrentUser('userId') userId: string) {
    return this.messagesService.getUnreadCounts(userId);
  }

  @Get(':otherUserId')
  getConversation(
    @CurrentUser('userId') userId: string,
    @Param('otherUserId') otherUserId: string,
    @Query('limit') limit?: string,
    @Query('before') before?: string,
  ) {
    return this.messagesService.getConversation(userId, otherUserId, parseQueryInt(limit), before);
  }

  @Put(':otherUserId/read')
  markAsRead(@CurrentUser('userId') userId: string, @Param('otherUserId') otherUserId: string) {
    return this.messagesService.markAsRead(userId, otherUserId);
  }
}
