import { Module } from '@nestjs/common';
import { BookAppointmentController } from './book-appointment.controller';
import { BookAppointmentService } from './book-appointment.service';
import { DatabaseModule } from 'src/db/conn';
import { MongooseModule } from '@nestjs/mongoose';
import {
  BookAppointment,
  BookAppointmentSchema,
} from './schema/book-appointment.schema';
import { Doctor, DoctorSchema } from 'src/doctor/schema/doctor.schema';
import { Surgery, SurgerySchema } from 'src/surgery/schema/surgery.schema';

@Module({
  imports: [
    DatabaseModule,
    MongooseModule.forFeature([
      { name: BookAppointment.name, schema: BookAppointmentSchema },
      { name: Doctor.name, schema: DoctorSchema },
      { name: Surgery.name, schema: SurgerySchema },
    ]),
  ],
  controllers: [BookAppointmentController],
  providers: [BookAppointmentService],
})
export class BookAppointmentModule {}
