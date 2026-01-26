import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TreatedBy, TreatedByDocument } from './schema/treated.by.schema';
import { TreatedByDto } from './dto/treated-by.dto';



@Injectable()
export class TreatedByService {
  constructor(
    @InjectModel(TreatedBy.name)
    private treatedByModel: Model<TreatedByDocument>,
  ) {}

  async create(dto: TreatedByDto) {
    return await this.treatedByModel.create(dto);
  }

  async findAll() {
    return await this.treatedByModel.find().sort({ createdAt: -1 });
  }

  async deleteById(id: string) {
    return await this.treatedByModel.findByIdAndDelete(id);
  }
}
