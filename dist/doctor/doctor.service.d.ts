import { Doctor, DoctorDocument } from './schema/doctor.schema';
import { Model } from 'mongoose';
import { CreateDoctorDto } from './dto/doctor.dto';
export declare class DoctorService {
    private doctorModel;
    constructor(doctorModel: Model<DoctorDocument>);
    create(requestBody: CreateDoctorDto): Promise<Doctor>;
    findAll(): Promise<Doctor[]>;
    deleteById(id: string): Promise<import("mongoose").Document<unknown, {}, DoctorDocument, {}, {}> & Doctor & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }>;
}
