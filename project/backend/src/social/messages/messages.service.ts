import { BadRequestException, ForbiddenException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { FriendshipStatus } from "@prisma/client"


@Injectable()
export class MessageService {

    constructor(private prisma: PrismaService) {}

    async sendMessage(senderId: string, receiverId: string, content: string) {
        if (senderId === receiverId) {
           throw new ForbiddenException('Cannot send messages to yourself');
        }

        const recipiant = await this.prisma.user.findUnique({ where: { id: receiverId}, select: { id: true }});
        if  (!recipiant) {
            throw new BadRequestException('Users does not exist');
        }

        const receiverExists = await this.prisma.friendships.findFirst({
            where: {
                OR: [
                    { requesterId: senderId, addresseeId: receiverId, status: FriendshipStatus.accepted },
                    { requesterId: receiverId, addresseeId: senderId, status: FriendshipStatus.accepted },
                ]
            }
        })

        if (!receiverExists) {
            throw new BadRequestException('Users are not friends')
        }

        const createMessage = await this.prisma.messages.create({
            data: {
                senderId,
                receiverId,
                content: content,
            }
        })

        return createMessage;
    }

    async getConversation(userId: string, otherUserId: string) {
        const chatLog = await this.prisma.messages.findMany({
            where: {
                OR: [
                    { receiverId: userId, senderId: otherUserId },
                    { receiverId: otherUserId, senderId: userId },
                ]
            },
            orderBy: { createdAt: 'asc' }  
        })
        return chatLog;
    }

    async markAsRead(userId: string, otherUserId: string) {
        const messageStatus = await this.prisma.messages.updateMany({
            where:  { receiverId: userId, senderId: otherUserId, isRead: false },
            data:   { isRead: true },
        })

        return messageStatus;
    }
}