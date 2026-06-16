import { Body, Controller, Get, Post, Query, Req , UseGuards } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { GetOrdersQueryDto } from './dto/get-orders.query.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  getOrders(@Req() req, @Query() query: GetOrdersQueryDto) {
    console.log('REQ USER:', req.user);
    return this.ordersService.getUserOrders(req.user.userId, query);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  createOrder(@Req() req, @Body() dto: CreateOrderDto) {
    console.log('REQ USER:', req.user);
    return this.ordersService.createOrder(req.user.userId, dto);
  }
}