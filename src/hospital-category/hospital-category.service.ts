import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  HospitalCategory,
  HospitalCategoryDocument,
} from './schema/hospital-category.schema';
import { Model } from 'mongoose';

@Injectable()
export class HospitalCategoryService {
  constructor(
    @InjectModel(HospitalCategory.name)
    private doctorModel: Model<HospitalCategoryDocument>,
  ) {}

  async create(requestBody: any): Promise<any> {
    const response = await this.doctorModel.create(requestBody);
    return response;
  }
  async findAll(): Promise<any> {
    const response = await this.doctorModel.find().exec();
    return response;
  }

  async deleteById(id: string): Promise<any> {
    console.log(id, 'id');
    const response = await this.doctorModel.findByIdAndDelete({ _id: id });
    return response;
  }
}
