import { CreateSurgeryDto } from './dto/CreateSurgeryDto';
import { Surgery, SurgeryDocument } from './schema/surgery.schema';
import { Model } from 'mongoose';
export declare class SurgeryService {
    private readonly surgeryModel;
    constructor(surgeryModel: Model<SurgeryDocument>);
    createSurgery(dto: CreateSurgeryDto): Promise<{
        success: boolean;
        message: string;
        data: import("mongoose").Document<unknown, {}, SurgeryDocument, {}, {}> & Surgery & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
            _id: import("mongoose").Types.ObjectId;
        }> & {
            __v: number;
        };
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, SurgeryDocument, {}, {}> & Surgery & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    })[]>;
    deleteById(id: string): Promise<(import("mongoose").Document<unknown, {}, SurgeryDocument, {}, {}> & Surgery & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }) | null>;
    getSurgeryDetails(id: string): Promise<(import("mongoose").Document<unknown, {}, SurgeryDocument, {}, {}> & Surgery & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }) | null>;
    updateSurgery(id: string, dto: CreateSurgeryDto): Promise<{
        success: boolean;
        message: string;
        data: import("mongoose").Document<unknown, {}, SurgeryDocument, {}, {}> & Surgery & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
            _id: import("mongoose").Types.ObjectId;
        }> & {
            __v: number;
        };
    }>;
}
