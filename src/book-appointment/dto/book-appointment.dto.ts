import { IsString, IsNotEmpty } from 'class-validator';

export class BookAppointmentDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  service: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsString()
  @IsNotEmpty()
  branch: string;

  @IsString()
  @IsNotEmpty()
  date: string;

  @IsString()
  doctorId?: string | '';

  @IsString()
  surgeryId?: string | '';
}
