import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Doctor, DoctorDocument } from './schema/doctor.schema';
import { Model } from 'mongoose';
import { CreateDoctorDto } from './dto/doctor.dto';

@Injectable()
export class DoctorService {
  constructor(
    @InjectModel(Doctor.name) private doctorModel: Model<DoctorDocument>,
  ) {}

  async create(requestBody: CreateDoctorDto): Promise<Doctor> {
    const role = await this.doctorModel.create(requestBody);
    return role;
  }

  async findAll(): Promise<Doctor[]> {
    return this.doctorModel
      .find()
      .populate({
        path: 'hospital',
        select: 'hospitalName city contactNumber email location', // optional
      })
      .exec();
  }

  async deleteById(id: string) {
    const deleted =
      await this.doctorModel.findByIdAndDelete(id);

    if (!deleted) {
      throw new NotFoundException('Doctor not found');
    }

    return deleted;
  }

  async getDoctorDetails(id: string) {
    return await this.doctorModel.findOne({ _id: id });
  }
}
