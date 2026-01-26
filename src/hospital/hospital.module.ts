import { Module } from '@nestjs/common';
import { HospitalController } from './hospital.controller';
import { HospitalService } from './hospital.service';
import { DatabaseModule } from 'src/db/conn';
import { MongooseModule } from '@nestjs/mongoose';
import { Hospital, HospitalSchema } from './schema/hospital.schema';
import {
  InsuranceCompany,
  InsuranceCompanySchema,
} from 'src/insurance-company/schema/insurance-company.schema';
import {
  CashlessInsurance,
  CashlessInsuranceSchema,
} from 'src/cashless-insurance-company/schema/cashless-insurance.schema';
import {
  GovermentPanel,
  GovermentPanelSchema,
} from 'src/goverment-panel/schema/government-panel.schema';

@Module({
  imports: [
    DatabaseModule,
    MongooseModule.forFeature([
      { name: Hospital.name, schema: HospitalSchema },
      {
        name: InsuranceCompany.name,
        schema: InsuranceCompanySchema,
      },
      {
        name: CashlessInsurance.name,
        schema: CashlessInsuranceSchema,
      },
      {
        name: GovermentPanel.name,
        schema: GovermentPanelSchema,
      },
    ]),
  ],
  controllers: [HospitalController],
  providers: [HospitalService],
})
export class HospitalModule {}
