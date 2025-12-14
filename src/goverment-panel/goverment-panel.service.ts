import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  GovermentPanel,
  GovermentPanelDocument,
} from './schema/government-panel.schema';
import { Model } from 'mongoose';

@Injectable()
export class GovermentPanelService {
  constructor(
    @InjectModel(GovermentPanel.name)
    private doctorModel: Model<GovermentPanelDocument>,
  ) {}

  async create(requestBody: any): Promise<any> {
    const response=await this.doctorModel.create(requestBody);
    return response;
  }
  async findAll(): Promise<any[]> {
    const response=await this.doctorModel.find().exec();
    return response
  }
  
}
