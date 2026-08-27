import { Body, Controller, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { MessagesService } from './messages.service';
import { NotificationsService } from '../notifications/notifications.service';
import { SocialGateway } from '../social.gateway';

@Controller('messages')
@UseGuards(JwtAuthGuard)
export class MessagesController {
  constructor(
    private readonly messagesService: MessagesService,
    private readonly notifications: NotificationsService,
    private readonly socialGateway: SocialGateway,
  ) {}

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

    await this.notifications.notify(otherUserId, {
      type: 'message',
      title: 'New message',
      body: message.content.slice(0, 80),
      data: { fromUserId: senderId },
    });
    return message;
  }

  @Get(':otherUserId')
  getConversation(@CurrentUser('userId') userId: string, @Param('otherUserId') otherUserId: string) {
    return this.messagesService.getConversation(userId, otherUserId);
  }

  @Put(':otherUserId/read')
  markAsRead(@CurrentUser('userId') userId: string, @Param('otherUserId') otherUserId: string) {
    return this.messagesService.markAsRead(userId, otherUserId);
  }
}
