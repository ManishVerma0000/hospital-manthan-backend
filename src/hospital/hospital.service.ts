import { Injectable } from '@nestjs/common';
import { CreateHospitalDto } from './dto/hospital.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Hospital, HospitalDocument } from './schema/hospital.schema';
import { Model } from 'mongoose';
@Injectable()
export class HospitalService {
  constructor(
    @InjectModel(Hospital.name)
    private hospitalModel: Model<HospitalDocument>,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }
  create(requestBody: CreateHospitalDto): any {
    const hospital = new this.hospitalModel(requestBody);
    return hospital.save();
  }
  getListOfHospitals(): any {
    return this.hospitalModel.find().exec();
  }
}
