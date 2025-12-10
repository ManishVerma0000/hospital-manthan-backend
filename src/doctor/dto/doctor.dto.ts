import { IsString, IsNotEmpty, IsArray, IsOptional, IsUrl } from 'class-validator';

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

  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty()
  treatmentProvide: string[];

  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty()
  timing: string[];

  @IsString()
  @IsNotEmpty()
  workingFrom: string;

  @IsString()
  @IsNotEmpty()
  qualificationAndExperience: string;

  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty()
  about: string[];

  @IsString()
  @IsNotEmpty()
  imageUrl: string;
}
