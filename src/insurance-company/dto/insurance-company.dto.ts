import { IsString, IsNotEmpty } from 'class-validator';

export class CreateInsuranceCompanyDto {
  @IsString()
  @IsNotEmpty()
  createInsuranceCompany: string;
}
