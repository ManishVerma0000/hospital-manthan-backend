import {
  IsArray,
  IsEmail,
  IsMongoId,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";

class TimingDto {
  @IsString()
  days: string;

  @IsString()
  time: string;
}

export class CreateHospitalDto {
  @IsString()
  @IsNotEmpty()
  hospitalName: string;

  @IsMongoId()
  hospitalType: string;

  @IsString()
  contactNumber: string;

  @IsString()
  whatsapp: string;

  @IsEmail()
  email: string;

  @IsString()
  city: string;

  @IsString()
  mapDirection: string;

  @IsString()
  location: string;

  @IsOptional()
  @IsString()
  iconUrl?: string;

  @IsArray()
  @IsString({ each: true })
  imageUrls: string[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TimingDto)
  timings: TimingDto[];

  // ---------- STEP 2 ----------
  @IsArray()
  @IsMongoId({ each: true })
  treatmentList: string[];

  @IsArray()
  @IsMongoId({ each: true })
  cashlessList: string[];

  @IsArray()
  @IsMongoId({ each: true })
  panelList: string[];
}
