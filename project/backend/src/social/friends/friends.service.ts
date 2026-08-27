import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { FriendshipStatus, Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';

const SERIALIZATION_FAILURE = 'P2034';

@Injectable()
export class FriendsService {
  constructor(private prisma: PrismaService) {}

  async sendRequest(requesterId: string, addresseeId: string) {
    if (requesterId === addresseeId) {
      throw new BadRequestException('Cannot send a friend request to yourself');
    }

    const addressee = await this.prisma.user.findUnique({
      where: { id: addresseeId },
      select: { id: true },
    });
    if (!addressee) {
      throw new NotFoundException('User not found');
    }

    // The unique index only covers the ordered (requester, addressee) pair, so
    // it can't by itself stop two people sending each other a request at the
    // same instant — each would land on a different ordered pair. Serializable
    // isolation makes the check-then-act atomic instead: whichever transaction
    // commits second sees a write conflict and retries against the now-visible row.
    try {
      return await this.prisma.$transaction(
        (tx) => this.createOrRetryRequest(tx, requesterId, addresseeId),
        { isolationLevel: Prisma.TransactionIsolationLevel.Serializable },
      );
    } catch (err) {
      if (err instanceof Prisma.PrismaClientKnownRequestError && err.code === SERIALIZATION_FAILURE) {
        return this.createOrRetryRequest(this.prisma, requesterId, addresseeId);
      }
      throw err;
    }
  }

  private async createOrRetryRequest(
    db: Prisma.TransactionClient | PrismaService,
    requesterId: string,
    addresseeId: string,
  ) {
    const existing = await db.friendship.findFirst({
      where: {
        OR: [
          { requesterId, addresseeId },
          { requesterId: addresseeId, addresseeId: requesterId },
        ],
      },
    });

    if (existing) {
      if (existing.status === FriendshipStatus.DECLINED) {
        // Let a previously-declined request be retried instead of being stuck forever.
        return db.friendship.update({
          where: { id: existing.id },
          data: {
            status: FriendshipStatus.PENDING,
            requesterId,
            addresseeId,
          },
        });
      }
      throw new BadRequestException('A friend request already exists between these users');
    }

    return db.friendship.create({
      data: { requesterId, addresseeId, status: FriendshipStatus.PENDING },
    });
  }

  async getFriends(userId: string) {
    const friendships = await this.prisma.friendship.findMany({
      where: {
        status: FriendshipStatus.ACCEPTED,
        OR: [{ requesterId: userId }, { addresseeId: userId }],
      },
      include: {
        requester: { select: { id: true, username: true, displayName: true, avatarUrl: true, isOnline: true, lastSeen: true } },
        addressee: { select: { id: true, username: true, displayName: true, avatarUrl: true, isOnline: true, lastSeen: true } },
      },
    });

    return friendships.map((f) =>
      f.requesterId === userId
        ? { friendshipId: f.id, ...f.addressee }
        : { friendshipId: f.id, ...f.requester },
    );
  }

  /** Bare friend-id list, used by the social gateway to target presence broadcasts. */
  async getFriendIds(userId: string): Promise<string[]> {
    const friendships = await this.prisma.friendship.findMany({
      where: {
        status: FriendshipStatus.ACCEPTED,
        OR: [{ requesterId: userId }, { addresseeId: userId }],
      },
      select: { requesterId: true, addresseeId: true },
    });
    return friendships.map((f) => (f.requesterId === userId ? f.addresseeId : f.requesterId));
  }

  async areFriends(userIdA: string, userIdB: string): Promise<boolean> {
    const friendship = await this.prisma.friendship.findFirst({
      where: {
        status: FriendshipStatus.ACCEPTED,
        OR: [
          { requesterId: userIdA, addresseeId: userIdB },
          { requesterId: userIdB, addresseeId: userIdA },
        ],
      },
      select: { id: true },
    });
    return !!friendship;
  }

  async getIncomingRequests(userId: string) {
    return this.prisma.friendship.findMany({
      where: { status: FriendshipStatus.PENDING, addresseeId: userId },
      include: {
        requester: { select: { id: true, username: true, displayName: true, avatarUrl: true } },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async acceptRequest(friendshipId: string, userId: string) {
    const friendship = await this.prisma.friendship.findUnique({ where: { id: friendshipId } });
    if (!friendship) throw new NotFoundException('Friend request not found');
    if (friendship.addresseeId !== userId) {
      throw new ForbiddenException('This request is not addressed to you');
    }
    if (friendship.status !== FriendshipStatus.PENDING) {
      throw new BadRequestException('This request is no longer pending');
    }

    return this.prisma.friendship.update({
      where: { id: friendshipId },
      data: { status: FriendshipStatus.ACCEPTED },
    });
  }

  async declineRequest(friendshipId: string, userId: string) {
    const friendship = await this.prisma.friendship.findUnique({ where: { id: friendshipId } });
    if (!friendship) throw new NotFoundException('Friend request not found');
    if (friendship.addresseeId !== userId) {
      throw new ForbiddenException('This request is not addressed to you');
    }

    return this.prisma.friendship.update({
      where: { id: friendshipId },
      data: { status: FriendshipStatus.DECLINED },
    });
  }

  async removeFriend(friendshipId: string, userId: string) {
    const friendship = await this.prisma.friendship.findUnique({ where: { id: friendshipId } });
    if (!friendship) throw new NotFoundException('Friendship not found');
    if (friendship.requesterId !== userId && friendship.addresseeId !== userId) {
      throw new ForbiddenException('Not a participant in this friendship');
    }

    await this.prisma.friendship.delete({ where: { id: friendshipId } });
    return { message: 'Friend removed' };
  }
}
