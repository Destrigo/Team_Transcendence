import { Body, Controller, Delete, Get, Logger, Param, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { FriendsService } from './friends.service';
import { NotificationsService, CreateNotificationInput } from '../notifications/notifications.service';

@Controller('friends')
@UseGuards(JwtAuthGuard)
export class FriendsController {
  private readonly logger = new Logger(FriendsController.name);

  constructor(
    private readonly friendsService: FriendsService,
    private readonly notifications: NotificationsService,
  ) {}

  // The friendship mutation already succeeded by the time this runs — a
  // notification failure is a secondary side-effect and shouldn't turn a
  // successful request into a 500 the client would misread as "not sent".
  private async notifyBestEffort(userId: string, input: CreateNotificationInput) {
    try {
      await this.notifications.notify(userId, input);
    } catch (err) {
      this.logger.warn(`Failed to send notification to ${userId}: ${err}`);
    }
  }

  @Post('request/:userId')
  async sendRequest(@CurrentUser('userId') requesterId: string, @Param('userId') addresseeId: string) {
    const request = await this.friendsService.sendRequest(requesterId, addresseeId);
    await this.notifyBestEffort(addresseeId, {
      type: 'friend_request',
      title: 'New friend request',
      body: 'Someone wants to add you as a friend.',
      data: { friendshipId: request.id, fromUserId: requesterId },
    });
    return request;
  }

  @Get()
  getFriends(@CurrentUser('userId') userId: string) {
    return this.friendsService.getFriends(userId);
  }

  @Get('requests')
  getIncomingRequests(@CurrentUser('userId') userId: string) {
    return this.friendsService.getIncomingRequests(userId);
  }

  @Get('requests/outgoing')
  getOutgoingRequests(@CurrentUser('userId') userId: string) {
    return this.friendsService.getOutgoingRequests(userId);
  }

  @Put(':id/accept')
  async acceptRequest(@CurrentUser('userId') userId: string, @Param('id') friendshipId: string) {
    const friendship = await this.friendsService.acceptRequest(friendshipId, userId);
    await this.notifyBestEffort(friendship.requesterId, {
      type: 'friend_request_accepted',
      title: 'Friend request accepted',
      body: 'Your friend request was accepted.',
      data: { friendshipId: friendship.id, byUserId: userId },
    });
    return friendship;
  }

  @Put(':id/decline')
  declineRequest(@CurrentUser('userId') userId: string, @Param('id') friendshipId: string) {
    return this.friendsService.declineRequest(friendshipId, userId);
  }

  @Delete(':id')
  removeFriend(@CurrentUser('userId') userId: string, @Param('id') friendshipId: string) {
    return this.friendsService.removeFriend(friendshipId, userId);
  }
}
