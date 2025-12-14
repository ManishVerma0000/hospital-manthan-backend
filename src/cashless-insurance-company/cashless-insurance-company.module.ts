import { Module } from '@nestjs/common';
import { CashlessInsuranceCompanyController } from './cashless-insurance-company.controller';
import { CashlessInsuranceCompanyService } from './cashless-insurance-company.service';
import { DatabaseModule } from 'src/db/conn';
import { MongooseModule } from '@nestjs/mongoose';
import {
  CashlessInsurance,
  CashlessInsuranceSchema,
} from './schema/cashless-insurance.schema';

@Module({
  imports: [
    DatabaseModule,
    MongooseModule.forFeature([
      { name: CashlessInsurance.name, schema: CashlessInsuranceSchema },
    ]),
  ],
  controllers: [CashlessInsuranceCompanyController],
  providers: [CashlessInsuranceCompanyService],
})
export class CashlessInsuranceCompanyModule {}
