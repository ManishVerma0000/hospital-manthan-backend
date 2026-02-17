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
    private govermentPanelModel: Model<GovermentPanelDocument>,
  ) {}

  async create(requestBody: any): Promise<any> {
    const response = await this.govermentPanelModel.create(requestBody);
    return response;
  }
  async findAll(): Promise<any[]> {
    const response = await this.govermentPanelModel.find().exec();
    return response;
  }
  async deleteById(id: string): Promise<any> {
    const response = await this.govermentPanelModel
      .findByIdAndDelete(id)
      .exec();
    return response;
  }

  async updateById(id: string, payload: any): Promise<any> {
    const updated = await this.govermentPanelModel
      .findByIdAndUpdate(id, payload, { new: true })
      .exec();

    return updated;
  }
}
