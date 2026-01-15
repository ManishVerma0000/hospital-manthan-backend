import { Document, Types } from "mongoose";
export type HospitalDocument = Hospital & Document;
export declare class Hospital {
    hospitalName: string;
    hospitalType: Types.ObjectId;
    contactNumber: string;
    whatsapp: string;
    email: string;
    city: string;
    mapDirection: string;
    location: string;
    iconUrl: string;
    imageUrls: string[];
    timings: {
        days: string;
        time: string;
    }[];
    treatmentList: Types.ObjectId[];
    cashlessList: Types.ObjectId[];
    panelList: Types.ObjectId[];
}
export declare const HospitalSchema: import("mongoose").Schema<Hospital, import("mongoose").Model<Hospital, any, any, any, Document<unknown, any, Hospital, any, {}> & Hospital & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Hospital, Document<unknown, {}, import("mongoose").FlatRecord<Hospital>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Hospital> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
