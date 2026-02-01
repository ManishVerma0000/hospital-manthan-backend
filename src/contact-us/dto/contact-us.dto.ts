import { IsString, IsNotEmpty, IsOptional, IsEmail } from 'class-validator';

export class ContactUsDto {

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  mobileNumber: string;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  @IsOptional()
  remark?: string;
}
