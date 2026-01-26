import { CreateHospitalDto } from './dto/hospital.dto';
import { Hospital, HospitalDocument } from './schema/hospital.schema';
import { Model, Types } from 'mongoose';
export declare class HospitalService {
    private hospitalModel;
    constructor(hospitalModel: Model<HospitalDocument>);
    getHello(): string;
    create(createHospitalDto: CreateHospitalDto): Promise<import("mongoose").Document<unknown, {}, HospitalDocument, {}, {}> & Hospital & import("mongoose").Document<Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }>;
    getListOfHospitals(): any;
    deleteById(id: string): Promise<(import("mongoose").Document<unknown, {}, HospitalDocument, {}, {}> & Hospital & import("mongoose").Document<Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }) | null>;
    getHospitalDetails(id: string): Promise<(import("mongoose").Document<unknown, {}, HospitalDocument, {}, {}> & Hospital & import("mongoose").Document<Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }) | null>;
}
