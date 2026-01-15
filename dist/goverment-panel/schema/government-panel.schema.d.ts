import { Document, Types } from 'mongoose';
export type GovermentPanelDocument = GovermentPanel & Document;
export declare class GovermentPanel {
    panelName: string;
}
export declare const GovermentPanelSchema: import("mongoose").Schema<GovermentPanel, import("mongoose").Model<GovermentPanel, any, any, any, Document<unknown, any, GovermentPanel, any, {}> & GovermentPanel & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, GovermentPanel, Document<unknown, {}, import("mongoose").FlatRecord<GovermentPanel>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<GovermentPanel> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
