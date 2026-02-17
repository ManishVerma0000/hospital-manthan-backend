import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  InsuranceCompany,
  InsuranceCompanyDocument,
} from './schema/insurance-company.schema';
import { Model } from 'mongoose';

@Injectable()
export class InsuranceCompanyService {
  constructor(
    @InjectModel(InsuranceCompany.name)
    private insuranceCompany: Model<InsuranceCompanyDocument>,
  ) {}

  create(requestBody: any): Promise<any> {
    const response = this.insuranceCompany.create(requestBody);
    return response;
  }

  findAll(): Promise<any> {
    const response = this.insuranceCompany.find().exec();
    return response;
  }

  async deleteById(id: string): Promise<any> {
    const response = await this.insuranceCompany.findByIdAndDelete(id).exec();
    return response;
  }

  async updateById(id: string, payload: any): Promise<any> {
    const updated = await this.insuranceCompany
      .findByIdAndUpdate(id, payload, { new: true })
      .exec();

    return updated;
  }
}
