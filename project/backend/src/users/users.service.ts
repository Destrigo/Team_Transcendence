import {
  BadRequestException,
  ConflictException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { SearchUsersDto } from './dto/search-users.dto';
import * as fs from 'fs';
import * as path from 'path';
import { NotificationsService } from '../social/notifications/notifications.service';

const PUBLIC_PROFILE_SELECT = {
  id: true,
  username: true,
  displayName: true,
  avatarUrl: true,
  isOnline: true,
  lastSeen: true,
  createdAt: true,
} satisfies Prisma.UserSelect;

const OWN_PROFILE_SELECT = {
  ...PUBLIC_PROFILE_SELECT,
  email: true,
  balance: true,
  language: true,
  twoFactorEnabled: true,
  oauthProvider: true,
} satisfies Prisma.UserSelect;

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name);

  constructor(
    private prisma: PrismaService,
    private notifications: NotificationsService,
  ) {}

  // A notification failure here is a secondary side-effect of an already
  // successful profile/balance change and shouldn't turn that into a 500.
  private async notifyBestEffort(userId: string, input: Parameters<NotificationsService['notify']>[1]) {
    try {
      await this.notifications.notify(userId, input);
    } catch (err) {
      this.logger.warn(`Failed to notify ${userId}: ${err}`);
    }
  }

  async createUser(data: {
    email: string;
    username: string;
    passwordHash: string;
  }) {
    return this.prisma.user.create({ data });
  }

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }

  async getMe(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: OWN_PROFILE_SELECT,
    });
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  async updateProfile(userId: string, dto: UpdateProfileDto) {
    if (dto.username) {
      const existing = await this.prisma.user.findUnique({
        where: { username: dto.username },
      });
      if (existing && existing.id !== userId) {
        throw new ConflictException('Username already taken');
      }
    }

    try {
      const updated = await this.prisma.user.update({
        where: { id: userId },
        data: dto,
        select: OWN_PROFILE_SELECT,
      });

      // Only a real profile change is worth a notification — this endpoint
      // is also how the language switcher persists its choice, and nobody
      // needs to be told they changed their own language.
      if (dto.username !== undefined || dto.displayName !== undefined) {
        await this.notifyBestEffort(userId, {
          type: 'profile_updated',
          title: 'Profile updated',
          body: 'Your profile information was updated.',
        });
      }

      return updated;
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === 'P2025') {
        throw new NotFoundException('User not found');
      }
      throw e;
    }
  }

  async updateAvatar(userId: string, file: Express.Multer.File) {
    if (!file) {
      throw new BadRequestException('No file uploaded');
    }

    const current = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { avatarUrl: true },
    });

    const avatarUrl = `/uploads/avatars/${file.filename}`;

    const updated = await this.prisma.user.update({
      where: { id: userId },
      data: { avatarUrl },
      select: OWN_PROFILE_SELECT,
    });


    if (current?.avatarUrl) {
      const oldPath = path.join(
        process.cwd(),
        current.avatarUrl.replace(/^\//, ''),
      );
      fs.unlink(oldPath, () => {
      });
    }

    await this.notifyBestEffort(userId, {
      type: 'profile_updated',
      title: 'Profile updated',
      body: 'Your avatar was updated.',
    });

    return updated;
  }

  async getPublicProfile(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      select: PUBLIC_PROFILE_SELECT,
    });
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  async searchUsers(query: SearchUsersDto) {
    const { q, page = 1, limit = 20 } = query;

    const where: Prisma.UserWhereInput = q
      ? {
          OR: [
            { username: { contains: q, mode: 'insensitive' } },
            { displayName: { contains: q, mode: 'insensitive' } },
          ],
        }
      : {};

    const [items, total] = await Promise.all([
      this.prisma.user.findMany({
        where,
        select: PUBLIC_PROFILE_SELECT,
        skip: (page - 1) * limit,
        take: limit,
        orderBy: { username: 'asc' },
      }),
      this.prisma.user.count({ where }),
    ]);

    return {
      items,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  async addBalance(userId: string, amount: number) {
    if (amount <= 0) {
      throw new BadRequestException('Amount must be > 0');
    }
    try {
      const user = await this.prisma.user.update({
        where: { id: userId },
        data: { balance: { increment: amount } },
        select: OWN_PROFILE_SELECT,
      });

      await this.notifyBestEffort(userId, {
        type: 'deposit',
        title: 'Deposit successful',
        body: `Your account was credited $${amount.toFixed(2)}.`,
      });

      return user;
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === 'P2025') {
        throw new NotFoundException('User not found');
      }
      throw e;
    }
  }
}