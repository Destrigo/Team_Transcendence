import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

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
}