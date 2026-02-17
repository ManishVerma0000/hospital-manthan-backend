import { Categories, CategoriesDocument } from './schema/categories.schema';
import { Model } from 'mongoose';
export declare class CategoriesService {
    private categoryModel;
    constructor(categoryModel: Model<CategoriesDocument>);
    create(requestBody: any): Promise<Categories>;
    findAll(): Promise<Categories[]>;
    deleteById(id: string): Promise<import("mongoose").Document<unknown, {}, CategoriesDocument, {}, {}> & Categories & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }>;
    updateById(id: string, payload: Partial<Categories>): Promise<Categories>;
}
