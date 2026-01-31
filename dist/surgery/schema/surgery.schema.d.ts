import { Document, Types } from 'mongoose';
export type SurgeryDocument = Surgery & Document;
export declare class Surgery {
    surgeryName: string;
    paragraph: string;
    diseaseNeme?: string;
    surgeryCategory: Types.ObjectId;
    duration: string;
    recoveryTime: string;
    treatedBy: Types.ObjectId;
    costingRange: string;
    icon?: string;
    images?: string[];
    symptoms?: {
        subcategory: string;
        paragraph?: string;
    }[];
    procedureTimeline?: {
        step: string;
        typeProcedure?: string;
        duration?: string;
        medication?: string;
    }[];
    benefits?: string[];
    risks?: string[];
    recoveryTimeline?: {
        stage?: string;
        mention?: string;
        lightCare?: string;
    }[];
    faqs?: {
        question: string;
        answer: string;
    }[];
}
export declare const SurgerySchema: import("mongoose").Schema<Surgery, import("mongoose").Model<Surgery, any, any, any, Document<unknown, any, Surgery, any, {}> & Surgery & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Surgery, Document<unknown, {}, import("mongoose").FlatRecord<Surgery>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Surgery> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
