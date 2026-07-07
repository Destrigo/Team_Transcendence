import { IsNumber, Min } from 'class-validator';

export class DepositDto {
  @IsNumber()
  @Min(1)
  amount: number;
}