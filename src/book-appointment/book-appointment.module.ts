import { Module } from '@nestjs/common';
import { BookAppointmentController } from './book-appointment.controller';
import { BookAppointmentService } from './book-appointment.service';
import { DatabaseModule } from 'src/db/conn';
import { MongooseModule } from '@nestjs/mongoose';
import { BookAppointment, BookAppointmentSchema } from './schema/book-appointment.schema';

@Module({
  imports: [
      DatabaseModule,
      MongooseModule.forFeature([
        { name: BookAppointment.name, schema: BookAppointmentSchema },
      ]),
    ],
  controllers: [BookAppointmentController],
  providers: [BookAppointmentService]
})
export class BookAppointmentModule {}
