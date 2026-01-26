import { Document } from 'mongoose';
export type TreatedByDocument = TreatedBy & Document;
export declare class TreatedBy {
    treatedByName: string;
}
export declare const TreatedBySchema: import("mongoose").Schema<TreatedBy, import("mongoose").Model<TreatedBy, any, any, any, Document<unknown, any, TreatedBy, any, {}> & TreatedBy & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, TreatedBy, Document<unknown, {}, import("mongoose").FlatRecord<TreatedBy>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<TreatedBy> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
