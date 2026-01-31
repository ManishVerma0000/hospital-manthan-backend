import { Module } from '@nestjs/common';
import { SurgeryController } from './surgery.controller';
import { SurgeryService } from './surgery.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Surgery, SurgerySchema } from './schema/surgery.schema';
import {
  TreatedBy,
  TreatedBySchema,
} from 'src/treated-by/schema/treated.by.schema';
import {
  Categories,
  CategoriesSchema,
} from 'src/categories/schema/categories.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Surgery.name, schema: SurgerySchema },
      { name: TreatedBy.name, schema: TreatedBySchema },
      { name: Categories.name, schema: CategoriesSchema },
    ]),
  ],
  controllers: [SurgeryController],
  providers: [SurgeryService],
})
export class SurgeryModule {}
