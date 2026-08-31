import {
  IsOptional,
  IsDate,
  Validate,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';
import { Transform } from 'class-transformer';

function toDate({ value }: { value?: string }) {
  if (!value) return undefined;

  const date = new Date(value);

  return Number.isNaN(date.getTime()) ? value : date;
}

@ValidatorConstraint({ name: 'dateRange', async: false })
class DateRangeValidator implements ValidatorConstraintInterface {
  validate(from: Date | undefined, args: ValidationArguments) {
    const dto = args.object as DateRangeDto;

    if (!from || !dto.to) {
      return true;
    }

    return from.getTime() <= dto.to.getTime();
  }

  defaultMessage() {
    return 'from must be before or equal to to';
  }
}

export class DateRangeDto {
  @IsOptional()
  @Transform(toDate)
  @IsDate()
  @Validate(DateRangeValidator)
  from?: Date;

  @IsOptional()
  @Transform(toDate)
  @IsDate()
  to?: Date;
}