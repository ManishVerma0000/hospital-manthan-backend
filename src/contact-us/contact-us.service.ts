import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ContactUs } from './schema/contact-us.schema';
import { Model } from 'mongoose';

@Injectable()
export class ContactUsService {
  constructor(
    @InjectModel(ContactUs.name)
    private contactUsModel: Model<ContactUs>,
  ) {}

  async create(requestBody: any): Promise<any> {
    const response = await this.contactUsModel.create(requestBody);
    return response;
  }
}
