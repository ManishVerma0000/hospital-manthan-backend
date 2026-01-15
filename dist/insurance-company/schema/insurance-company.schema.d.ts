import { Document, Types } from 'mongoose';
export type InsuranceCompanyDocument = InsuranceCompany & Document;
export declare class InsuranceCompany {
    insuranceCompany: string;
}
export declare const InsuranceCompanySchema: import("mongoose").Schema<InsuranceCompany, import("mongoose").Model<InsuranceCompany, any, any, any, Document<unknown, any, InsuranceCompany, any, {}> & InsuranceCompany & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, InsuranceCompany, Document<unknown, {}, import("mongoose").FlatRecord<InsuranceCompany>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<InsuranceCompany> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
