import { ForbiddenException, Injectable, BadRequestException, NotFoundException} from "@nestjs/common";
import { FriendshipStatus } from '@prisma/client';
import { PrismaService } from "src/prisma/prisma.service";


@Injectable()
export class FriendsService {

    constructor(private prisma: PrismaService) {}

    async sendFriendRequest(requesterId: string, addresseeId: string) {
        if (requesterId === addresseeId) {
            console.log("Bad request: Cannot send friend request to yourself")
            throw new BadRequestException('Cannot send friend request to yourself. ');
        }
        
        const user = await this.prisma.user.findUnique({ where: {id: addresseeId } })
        if (!user) {
            console.log("Freind request invalid: User not found ")
            throw new NotFoundException('User not found')
        }
        
        const existingFriendship = await this.prisma.friendships.findFirst({
            where: {
                OR: [
                    { requesterId: requesterId, addresseeId: addresseeId, status: { in: [FriendshipStatus.pending, FriendshipStatus.accepted] } },
                    { requesterId: addresseeId, addresseeId: requesterId, status: { in: [FriendshipStatus.pending, FriendshipStatus.accepted] } },
                ]
            }
        });
        if (existingFriendship) {
            console.log("Friend request invalid: Already friends. ");
            throw new BadRequestException('Friendship already exists')
        }
        console.log("Friend request valid");
        return this.prisma.friendships.create({
            data: {
                requesterId,
                addresseeId,
                status: FriendshipStatus.pending,
            }
        });

    }

    async getFriends(userId: string) {
        const friendships = await this.prisma.friendships.findMany({
            where: { 
                status: FriendshipStatus.accepted,
                OR: [
                    { requesterId: userId },
                    { addresseeId: userId },
                ]
            }
        });
        return friendships;
    }

    async getPendingRequests(userId: string) {
        const pendingRequests = await this.prisma.friendships.findMany({
            where: {
                status: FriendshipStatus.pending,
                addresseeId: userId,
            }
        });
        return pendingRequests;
    }

    async acceptRequest(friendshipId: string, userId: string) {
        const friendshipRequest = await this.prisma.friendships.findUnique({
            where: { id: friendshipId }
        });
        if (!friendshipRequest) throw new NotFoundException('Friendship not found. ');

        if (friendshipRequest.addresseeId !== userId) {
            console.log("Trying to accept a request not adressed to the user. ")
            throw new ForbiddenException('Not authorised')
        }
        const updateStatus = await this.prisma.friendships.update({
             where:{ id: friendshipId },
            data: { status: FriendshipStatus.accepted },
        });

        return updateStatus;
    }

    async declineRequest(friendshipId: string, userId: string) {
        const friendshipRequest = await this.prisma.friendships.findUnique({
            where: { id: friendshipId },
        });
        if (!friendshipRequest) { throw new NotFoundException('Friendship Not Found'); }

        if (friendshipRequest.addresseeId !== userId) {
            console.log("Trying to decline a request not addressed to the user. ")
            throw new ForbiddenException('Not authorised');
        }

        const updateStatus = await this.prisma.friendships.update({
            where: {id: friendshipId },
            data: { status: FriendshipStatus.declined },
        });

        return updateStatus;
    }

    async removeFriend(friendshipId: string, userId: string) {
        const existingFriendship = await this.prisma.friendships.findUnique({
            where: { id: friendshipId },
        });

        if (!existingFriendship) { throw new NotFoundException('Friendship not found'); }

        if (existingFriendship.requesterId !== userId && existingFriendship.addresseeId !== userId) {
            throw new ForbiddenException('Request not authorised');
        }

        await this.prisma.friendships.delete({
            where: { id: friendshipId },
        });
        
        return { message: 'Friend removed' };
    }

}