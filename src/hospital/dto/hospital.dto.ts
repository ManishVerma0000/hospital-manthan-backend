// create-hospital.dto.ts
import {
  IsString,
  IsNotEmpty,
  IsArray,
  IsOptional,
  IsUrl,
  IsEmail,
  ValidateNested,
} from 'class-validator';
import { TimingDto } from './timing.dto';
export class CreateHospitalDto {
  @IsString()
  @IsNotEmpty()
  hospitalName: string;

  @IsString()
  @IsNotEmpty()
  hospitalType: string;

  @IsString()
  @IsNotEmpty()
  contactNumber: string;

  @IsString()
  @IsNotEmpty()
  whatsAppNumber: string;

  @IsEmail()
  @IsNotEmpty()
  emailAddress: string;

  @IsString()
  @IsNotEmpty()
  iconImageUrl: string;

  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  @IsNotEmpty()
  mapDirection: string;

  @IsString()
  @IsNotEmpty()
  location: string;

  @IsString()
  @IsNotEmpty()
  hospitalDetails: string;

  @IsString()
  @IsNotEmpty()
  insuranceCompany: string;

  @IsString()
  @IsNotEmpty()
  cashlessInsuranceCompany: string;

  @IsString()
  @IsNotEmpty()
  governmentPanelName: string;

  // multiple images
  @IsArray()
  @IsString({ each: true })
  imageUrl: string[];

  // timings array
  @IsArray()
  @ValidateNested({ each: true })
  timing: TimingDto[];
}
