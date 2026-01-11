import { Type } from 'class-transformer';
import {
  IsString,
  IsNotEmpty,
  IsArray,
  IsOptional,
  IsUrl,
  ValidateNested,
} from 'class-validator';

export class CreateDoctorDto {
  @IsString()
  @IsNotEmpty()
  hospital: string;

  @IsString()
  @IsNotEmpty()
  contactNumber: string;

  @IsString()
  @IsNotEmpty()
  whatsAppNumber: string;

  @IsString({ each: true })
  @IsNotEmpty()
  treatmentProvide: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TimingDto)
  timings: TimingDto[];

  @IsString()
  @IsNotEmpty()
  workingFrom: string;

  @IsString()
  @IsNotEmpty()
  qualificationAndExperience: string;

  @IsString({ each: true })
  @IsNotEmpty()
  about: string;

  @IsString()
  @IsNotEmpty()
  imageUrl: string;
}

export class TimingDto {
  @IsString()
  @IsNotEmpty()
  day: string;

  @IsString()
  @IsNotEmpty()
  time: string;
}
