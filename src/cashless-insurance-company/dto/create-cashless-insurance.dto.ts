import { IsString, IsNotEmpty } from 'class-validator';

export class CreateCashlessInsuranceDto {
  @IsString()
  @IsNotEmpty()
  cashlessInsuranceCompany: string;
}
