import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { BookAppointment } from './schema/book-appointment.schema';
import { Model } from 'mongoose';
@Injectable()
export class BookAppointmentService {
  constructor(
    @InjectModel(BookAppointment.name)
    private bookAppointment: Model<BookAppointment>,
  ) {}

  async create(requestBody: any): Promise<any> {
    const response = await this.bookAppointment.create(requestBody);
    return response;
  }

  async getList(){
    const response=await this.bookAppointment.find()
    return response;
  }
}
