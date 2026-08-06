import { IsEnum, IsNumber, ValidateIf, IsUUID, Min } from 'class-validator';
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

  @ValidateIf(o => o.orderType === OrderExecutionType.LIMIT)
  @IsNumber()
  @Min(0.00000001)
  price?: number;
}