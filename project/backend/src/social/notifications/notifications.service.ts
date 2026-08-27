import { forwardRef, ForbiddenException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';
import { SocialGateway } from '../social.gateway';

export interface CreateNotificationInput {
  type: string;
  title: string;
  body: string;
  data?: Prisma.InputJsonValue;
}

@Injectable()
export class NotificationsService {
  constructor(
    private readonly prisma: PrismaService,
    @Inject(forwardRef(() => SocialGateway))
    private readonly gateway: SocialGateway,
  ) {}

  async notify(userId: string, input: CreateNotificationInput) {
    const notification = await this.prisma.notification.create({
      data: {
        userId,
        type: input.type,
        title: input.title,
        body: input.body,
        data: input.data,
      },
    });

    this.gateway.emitToUser(userId, 'notification:new', notification);
    return notification;
  }

  async list(userId: string, limit = 30) {
    return this.prisma.notification.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      take: Math.min(limit, 100),
    });
  }

  async unreadCount(userId: string) {
    return this.prisma.notification.count({ where: { userId, isRead: false } });
  }

  async markAsRead(notificationId: string, userId: string) {
    const notification = await this.prisma.notification.findUnique({ where: { id: notificationId } });
    if (!notification) throw new NotFoundException('Notification not found');
    if (notification.userId !== userId) throw new ForbiddenException('Not your notification');

    const updated = await this.prisma.notification.update({
      where: { id: notificationId },
      data: { isRead: true },
    });

    // A user can have several tabs/devices open, each holding its own socket
    // (see SocialGateway) — broadcast so the read state doesn't go stale on
    // the ones that didn't trigger this call.
    this.gateway.emitToUser(userId, 'notification:read', { id: notificationId });
    return updated;
  }

  async markAllAsRead(userId: string) {
    const result = await this.prisma.notification.updateMany({
      where: { userId, isRead: false },
      data: { isRead: true },
    });

    this.gateway.emitToUser(userId, 'notifications:allRead', {});
    return result;
  }
}
