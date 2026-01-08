import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { BookAppointment } from './schema/book-appointment.schema';
import { Model } from 'mongoose';
@Injectable()
export class BookAppointmentService {
  constructor(
    @InjectModel(BookAppointment.name)
    private govermentPanelModel: Model<BookAppointment>,
  ) {}

  async create(requestBody: any): Promise<any> {
    const response = await this.govermentPanelModel.create(requestBody);
    return response;
  }
}
