import { Document } from 'mongoose';
export declare class CashlessInsurance extends Document {
    cashlessInsuranceCompany: string;
}
export declare const CashlessInsuranceSchema: import("mongoose").Schema<CashlessInsurance, import("mongoose").Model<CashlessInsurance, any, any, any, Document<unknown, any, CashlessInsurance, any, {}> & CashlessInsurance & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, CashlessInsurance, Document<unknown, {}, import("mongoose").FlatRecord<CashlessInsurance>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<CashlessInsurance> & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}>;
