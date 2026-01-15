import { Document, Types } from 'mongoose';
export type CategoriesDocument = Categories & Document;
export declare class Categories {
    categoryName: string;
    labelName: string;
    imageUrl: string;
    iconImage: string;
}
export declare const CategoriesSchema: import("mongoose").Schema<Categories, import("mongoose").Model<Categories, any, any, any, Document<unknown, any, Categories, any, {}> & Categories & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Categories, Document<unknown, {}, import("mongoose").FlatRecord<Categories>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Categories> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
