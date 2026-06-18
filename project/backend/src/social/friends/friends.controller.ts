import { Controller, Get, Post, Put, Delete, Param } from "@nestjs/common";
import { FriendsService } from "./friends.service";

@Controller('friends')
export class FriendsController {
    constructor(private friendsService: FriendsService) {};

    @Post('request/:userId')
    sendFriendRequest(@Param('userId') userId: string) {
        const requesterId = 'placeholder-user-id';
        return this.friendsService.sendFriendRequest(requesterId, userId);
    }

    @Get() 
    getFriends() {
        const userId = 'placeholder-user-id';
        return this.friendsService.getFriends(userId);
    }

    @Get('requests')
    getFriendRequests() {
        const  userId = 'placeholder-user-id';
        return this.friendsService.getPendingRequests(userId);
    }

    @Put(':id/accept')
    acceptFriendRequest(@Param('id') friendshipId: string) {
        const userId = 'placeholder-user-id';
        return this.friendsService.acceptRequest(friendshipId, userId);
    }

    @Put(':id/decline')
    declineFriendRequest(@Param('id') friendshipId: string) {
        const userId = 'placeholder-user-id';
        return this.friendsService.declineRequest(friendshipId, userId);
    }

    @Delete(':id')
    removeFriend(@Param('id') friendshipId: string) {
        const userId = 'placeholder-user-id';
        return this.friendsService.removeFriend(friendshipId, userId); 
    }

}