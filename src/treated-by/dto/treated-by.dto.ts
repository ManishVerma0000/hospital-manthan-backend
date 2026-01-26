import { IsString, IsNotEmpty } from 'class-validator';

export class TreatedByDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}
