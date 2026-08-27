import { BadRequestException, ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { FriendsService } from '../friends/friends.service';

const MAX_MESSAGE_LENGTH = 2000;

@Injectable()
export class MessagesService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly friends: FriendsService,
  ) {}

  async sendMessage(senderId: string, receiverId: string, content: string) {
    if (senderId === receiverId) {
      throw new ForbiddenException('Cannot send messages to yourself');
    }

    const trimmed = content?.trim();
    if (!trimmed) {
      throw new BadRequestException('Message cannot be empty');
    }
    if (trimmed.length > MAX_MESSAGE_LENGTH) {
      throw new BadRequestException(`Message cannot exceed ${MAX_MESSAGE_LENGTH} characters`);
    }

    const receiver = await this.prisma.user.findUnique({
      where: { id: receiverId },
      select: { id: true },
    });
    if (!receiver) {
      throw new BadRequestException('User does not exist');
    }

    const areFriends = await this.friends.areFriends(senderId, receiverId);
    if (!areFriends) {
      throw new ForbiddenException('You can only message users you are friends with');
    }

    return this.prisma.message.create({
      data: { senderId, receiverId, content: trimmed },
    });
  }

  async getConversation(userId: string, otherUserId: string) {
    return this.prisma.message.findMany({
      where: {
        OR: [
          { senderId: userId, receiverId: otherUserId },
          { senderId: otherUserId, receiverId: userId },
        ],
      },
      orderBy: { createdAt: 'asc' },
    });
  }

  async markAsRead(userId: string, otherUserId: string) {
    return this.prisma.message.updateMany({
      where: { receiverId: userId, senderId: otherUserId, isRead: false },
      data: { isRead: true },
    });
  }
}
