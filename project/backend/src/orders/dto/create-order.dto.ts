import { IsEnum, IsNumber, IsUUID, Min } from 'class-validator';
import { OrderType, OrderExecutionType } from '@prisma/client';

export class CreateOrderDto {
  @IsUUID()
  assetId: string;

  @IsEnum(OrderType)
  type: OrderType;

  @IsEnum(OrderExecutionType)
  orderType: OrderExecutionType;

  @IsNumber()
  @Min(0.00000001)
  quantity: number;

  // только для LIMIT ордеров
  price?: number;
}