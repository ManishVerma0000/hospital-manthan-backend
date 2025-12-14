import { Module } from '@nestjs/common';
import { CashlessInsuranceCompanyController } from './cashless-insurance-company.controller';
import { CashlessInsuranceCompanyService } from './cashless-insurance-company.service';

@Module({
  controllers: [CashlessInsuranceCompanyController],
  providers: [CashlessInsuranceCompanyService]
})
export class CashlessInsuranceCompanyModule {}
