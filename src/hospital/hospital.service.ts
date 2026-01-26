import { Injectable } from '@nestjs/common';
import { CreateHospitalDto } from './dto/hospital.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Hospital, HospitalDocument } from './schema/hospital.schema';
import { Model, Types } from 'mongoose';
@Injectable()
export class HospitalService {
  constructor(
    @InjectModel(Hospital.name)
    private hospitalModel: Model<HospitalDocument>,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }
  async create(createHospitalDto: CreateHospitalDto) {
    const hospital = new this.hospitalModel({
      ...createHospitalDto,
      hospitalType: new Types.ObjectId(createHospitalDto.hospitalType),
      treatmentList: createHospitalDto.treatmentList.map(
        (id) => new Types.ObjectId(id),
      ),
      cashlessList: createHospitalDto.cashlessList.map(
        (id) => new Types.ObjectId(id),
      ),
      panelList: createHospitalDto.panelList.map(
        (id) => new Types.ObjectId(id),
      ),
    });

    return hospital.save();
  }

  getListOfHospitals(): any {
    return this.hospitalModel.find().exec();
  }
  async deleteById(id: string) {
    return this.hospitalModel.findByIdAndDelete(id);
  }

  async getHospitalDetails(id: string) {
    return await this.hospitalModel
      .findById(id)
      // Populate Relations
      .populate('treatmentList') // InsuranceCompany
      .populate('cashlessList') // CashlessInsuranceCompany
      .populate('panelList') // GovernmentPanel
      .populate('hospitalType') // Category (if ref added)
      .exec();
  }
}
