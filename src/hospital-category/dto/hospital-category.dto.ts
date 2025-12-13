import {
  IsString,
  IsNotEmpty,
} from 'class-validator';

export class CreateHospitalCategoryDto {
  @IsString()
  @IsNotEmpty()
  hospitalCategory: string;
}
