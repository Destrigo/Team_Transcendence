import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { BadRequestException, NotFoundException } from "@nestjs/common";

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
                    { requesterId: requesterId, addresseeId: addresseeId },
                    { requesterId: addresseeId, addresseeId: requesterId },
                ]
            }
        });
        if (existingFriendship) {
            console.log("Friend erquest invalid: Already friends. ");
            throw new BadRequestException('Friendship already exists')
        }
        console.log("Friend request valid");
        return this.prisma.friendships.create({
            data: {
                requesterId,
                addresseeId,
                status: 'pending',
            }
        });

    }

    async getFriends(userId: string) {
        const friendships = await this.prisma.friendships.findMany({
            where: {
                OR: [
                    { requesterId: userId },
                    { addresseeId: userId },
                ]
            }
        });
        return friendships;
    }

    async getPendingRequests(userId: string) {
        
    }

    async acceptRequest(friendshipId: string, userId: string) {}

    async declineRequest(friendshipId: string, userId: string) {}

    async removeFriend(friendshipId: string, userId: string) {}

}