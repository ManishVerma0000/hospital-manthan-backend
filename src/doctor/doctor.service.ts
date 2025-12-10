import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Doctor, DoctorDocument } from './schema/doctor.schema';
import { Model } from 'mongoose';
import { CreateDoctorDto } from './dto/doctor.dto';

@Injectable()
export class DoctorService {
  constructor(
    @InjectModel(Doctor.name) private roleModel: Model<DoctorDocument>,
  ) {}

  async create(requestBody: CreateDoctorDto): Promise<Doctor> {
    const role = await  this.roleModel.create(requestBody);
    return role
  }

  async findAll(): Promise<Doctor[]> {
    return this.roleModel.find().exec();
  } 
}
