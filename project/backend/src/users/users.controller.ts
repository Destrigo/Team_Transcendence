import { Controller, Get, UseGuards, Req, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import type { Request } from 'express';
import { DepositDto } from './dto/deposit.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get('me')
  getMe(@Req() req: Request) {
    return this.usersService.getMe(req.user);
  }

  @Get()
  getUsers() {
    return this.usersService.getAllUsers();
  }

  @UseGuards(JwtAuthGuard)
  @Post('deposit')
  addBalance(
    @Req() req,
    @Body() dto: DepositDto
  ) {
    return this.usersService.addBalance(req.user.userId, dto.amount);
  }
}