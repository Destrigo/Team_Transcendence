import { IsEnum, IsOptional, IsUUID } from 'class-validator';
import { OrderStatus, OrderType } from '@prisma/client';

export class GetOrdersQueryDto {
  @IsOptional()
  @IsEnum(OrderStatus)
  status?: OrderStatus;

  @IsOptional()
  @IsEnum(OrderType)
  type?: OrderType;

  @IsOptional()
  @IsUUID()
  assetId?: string;
}