import { IsOptional, IsDate } from 'class-validator';
import { Transform } from 'class-transformer';

function toDate({ value }: { value?: string }) {
  if (!value) return undefined;
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? value : date;
}

export class DateRangeDto {
  @IsOptional()
  @Transform(toDate)
  @IsDate()
  from?: Date;

  @IsOptional()
  @Transform(toDate)
  @IsDate()
  to?: Date;
}