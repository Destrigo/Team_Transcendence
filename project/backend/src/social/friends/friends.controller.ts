import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { FriendsService } from './friends.service';
import { NotificationsService } from '../notifications/notifications.service';

@Controller('friends')
@UseGuards(JwtAuthGuard)
export class FriendsController {
  constructor(
    private readonly friendsService: FriendsService,
    private readonly notifications: NotificationsService,
  ) {}

  @Post('request/:userId')
  async sendRequest(@CurrentUser('userId') requesterId: string, @Param('userId') addresseeId: string) {
    const request = await this.friendsService.sendRequest(requesterId, addresseeId);
    await this.notifications.notify(addresseeId, {
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

  @Put(':id/accept')
  async acceptRequest(@CurrentUser('userId') userId: string, @Param('id') friendshipId: string) {
    const friendship = await this.friendsService.acceptRequest(friendshipId, userId);
    await this.notifications.notify(friendship.requesterId, {
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
