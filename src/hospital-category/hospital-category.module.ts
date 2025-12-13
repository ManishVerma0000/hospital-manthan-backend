import { Module } from '@nestjs/common';
import { HospitalCategoryService } from './hospital-category.service';
import { HospitalCategoryController } from './hospital-category.controller';
import { DatabaseModule } from 'src/db/conn';
import { MongooseModule } from '@nestjs/mongoose';
import {
  HospitalCategory,
  HospitalCategorySchema,
} from './schema/hospital-category.schema';

@Module({
  imports: [
    DatabaseModule,
    MongooseModule.forFeature([
      { name: HospitalCategory.name, schema: HospitalCategorySchema },
    ]),
  ],
  providers: [HospitalCategoryService],
  controllers: [HospitalCategoryController],
})
export class HospitalCategoryModule {}
