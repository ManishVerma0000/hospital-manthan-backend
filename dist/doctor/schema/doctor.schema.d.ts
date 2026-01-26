import { Document, Types } from 'mongoose';
export type DoctorDocument = Doctor & Document;
export declare class Doctor {
    hospital: Types.ObjectId;
    contactNumber: string;
    name: string;
    whatsAppNumber: string;
    status: boolean;
    treatmentProvide: string[];
    timings: {
        day: string;
        time: string;
    }[];
    workingFrom: string;
    qualificationAndExperience: string;
    about: string;
    imageUrl: string[];
}
export declare const DoctorSchema: import("mongoose").Schema<Doctor, import("mongoose").Model<Doctor, any, any, any, Document<unknown, any, Doctor, any, {}> & Doctor & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Doctor, Document<unknown, {}, import("mongoose").FlatRecord<Doctor>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Doctor> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
