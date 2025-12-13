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

  @IsString({ each: true })
  @IsNotEmpty()
  treatmentProvide: string;

  @IsString({ each: true })
  @IsNotEmpty()
  timing: string;

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
