import { Document } from 'mongoose';
export declare class Timing {
    days: string;
    startTime: string;
    endTime: string;
}
export declare const TimingSchema: import("mongoose").Schema<Timing, import("mongoose").Model<Timing, any, any, any, Document<unknown, any, Timing, any, {}> & Timing & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Timing, Document<unknown, {}, import("mongoose").FlatRecord<Timing>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Timing> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
