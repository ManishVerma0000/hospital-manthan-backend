import { Doctor, DoctorDocument } from './schema/doctor.schema';
import { Model } from 'mongoose';
import { CreateDoctorDto } from './dto/doctor.dto';
export declare class DoctorService {
    private doctorModel;
    constructor(doctorModel: Model<DoctorDocument>);
    create(requestBody: CreateDoctorDto): Promise<Doctor>;
    findAll(): Promise<Doctor[]>;
}
