import { Module } from '@nestjs/common';
import { SurgeryController } from './surgery.controller';
import { SurgeryService } from './surgery.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Surgery, SurgerySchema } from './schema/surgery.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Surgery.name, schema: SurgerySchema },
    ]),
  ],
  controllers: [SurgeryController],
  providers: [SurgeryService]
})
export class SurgeryModule {}
