import { Document, Types } from 'mongoose';
export type HospitalCategoryDocument = HospitalCategory & Document;
export declare class HospitalCategory {
    hospitalCategory: string;
}
export declare const HospitalCategorySchema: import("mongoose").Schema<HospitalCategory, import("mongoose").Model<HospitalCategory, any, any, any, Document<unknown, any, HospitalCategory, any, {}> & HospitalCategory & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, HospitalCategory, Document<unknown, {}, import("mongoose").FlatRecord<HospitalCategory>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<HospitalCategory> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
