import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async getAllUsers() {
    return this.prisma.user.findMany();
  }

  async createUser(data: {
  email: string;
  username: string;
  password_hash: string;
  }) {
    return this.prisma.user.create({
      data,
    });
  }
  
  async findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  async getMe(authUser: any) {
  return this.prisma.user.findUnique({
    where: {
      id: authUser.userId,
    },
    select: {
      id: true,
      email: true,
      username: true,
      avatar_url: true,
      created_at: true,
    },
  });
  }

  async addBalance(userId: string, amount: number) {
    if (amount <= 0) {
      throw new BadRequestException('Amount must be > 0');
    }

    const user = await this.prisma.user.update({
      where: { id: userId },
      data: {
        balance: {
          increment: amount,
        },
      },
    });

    const { password_hash, two_factor_secret, ...safeUser } = user;

    return safeUser;
  }
}