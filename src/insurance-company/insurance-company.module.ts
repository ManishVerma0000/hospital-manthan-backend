import { Module } from '@nestjs/common';
import { InsuranceCompanyService } from './insurance-company.service';
import { InsuranceCompanyController } from './insurance-company.controller';
import { DatabaseModule } from 'src/db/conn';
import { MongooseModule } from '@nestjs/mongoose';
import {
  InsuranceCompany,
  InsuranceCompanySchema,
} from './schema/insurance-company.schema';

@Module({
  imports: [
    DatabaseModule,
    MongooseModule.forFeature([
      { name: InsuranceCompany.name, schema: InsuranceCompanySchema },
    ]),
  ],
  providers: [InsuranceCompanyService],
  controllers: [InsuranceCompanyController],
})
export class InsuranceCompanyModule {}
