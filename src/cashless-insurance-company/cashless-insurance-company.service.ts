import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CashlessInsurance } from './schema/cashless-insurance.schema';
import { Model } from 'mongoose';
@Injectable()
export class CashlessInsuranceCompanyService {
  constructor(
    @InjectModel(CashlessInsurance.name)
    private govermentPanelModel: Model<CashlessInsurance>,
  ) {}

  async create(requestBody: any): Promise<CashlessInsurance> {
    const response = await this.govermentPanelModel.create(requestBody);
    return response;
  }
  async findAll(): Promise<CashlessInsurance[]> {
    const response = await this.govermentPanelModel.find().exec();
    return response;
  }
  async deleteById(id: string) {
    return this.govermentPanelModel.findByIdAndDelete(id);
  }
}
