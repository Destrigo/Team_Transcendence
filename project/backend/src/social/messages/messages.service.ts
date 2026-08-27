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

  // Cursor pagination, newest page first: pass `before` (an earlier page's
  // oldest message id) to load older history, same shape as a scroll-up
  // "load more". Returned newest-first — the caller reverses for display.
  async getConversation(userId: string, otherUserId: string, limit = 50, before?: string) {
    const where = {
      OR: [
        { senderId: userId, receiverId: otherUserId },
        { senderId: otherUserId, receiverId: userId },
      ],
    };

    const messages = await this.prisma.message.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      take: Math.min(limit, 100) + 1,
      ...(before ? { cursor: { id: before }, skip: 1 } : {}),
    });

    const hasMore = messages.length > limit;
    return { messages: messages.slice(0, limit), hasMore };
  }

  async markAsRead(userId: string, otherUserId: string) {
    return this.prisma.message.updateMany({
      where: { receiverId: userId, senderId: otherUserId, isRead: false },
      data: { isRead: true },
    });
  }

  /** Unread message count per sender, for the conversation-list badges. */
  async getUnreadCounts(userId: string): Promise<Array<{ senderId: string; count: number }>> {
    const grouped = await this.prisma.message.groupBy({
      by: ['senderId'],
      where: { receiverId: userId, isRead: false },
      _count: { _all: true },
    });
    return grouped.map((g) => ({ senderId: g.senderId, count: g._count._all }));
  }
}
