import { Model } from 'mongoose';
import { TreatedBy, TreatedByDocument } from './schema/treated.by.schema';
import { TreatedByDto } from './dto/treated-by.dto';
export declare class TreatedByService {
    private treatedByModel;
    constructor(treatedByModel: Model<TreatedByDocument>);
    create(dto: TreatedByDto): Promise<import("mongoose").Document<unknown, {}, TreatedByDocument, {}, {}> & TreatedBy & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, TreatedByDocument, {}, {}> & TreatedBy & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    })[]>;
    deleteById(id: string): Promise<(import("mongoose").Document<unknown, {}, TreatedByDocument, {}, {}> & TreatedBy & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }) | null>;
    updateById(id: string, payload: TreatedByDto): Promise<(import("mongoose").Document<unknown, {}, TreatedByDocument, {}, {}> & TreatedBy & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }) | null>;
}
