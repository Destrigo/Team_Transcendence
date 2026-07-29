import { IsOptional, IsString, Matches, Length, IsIn } from 'class-validator';

export class UpdateProfileDto {
  @IsOptional()
  @IsString()
  @Length(3, 50)
  @Matches(/^[a-zA-Z0-9_]+$/, { message: 'username can only contain letters, numbers, underscores' })
  username?: string;

  @IsOptional()
  @IsString()
  @Length(1, 100)
  displayName?: string;

  @IsOptional()
  @IsIn(['en', 'fr', 'nl'])
  language?: string;
}