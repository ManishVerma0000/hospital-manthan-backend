// timing.dto.ts
import { IsString, IsNotEmpty } from 'class-validator';

export class TimingDto {
  @IsString()
  @IsNotEmpty()
  days: string;

  @IsString()
  @IsNotEmpty()
  startTime: string;

  @IsString()
  @IsNotEmpty()
  endTime: string;
}
