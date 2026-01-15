import { Categories, CategoriesDocument } from './schema/categories.schema';
import { Model } from 'mongoose';
export declare class CategoriesService {
    private categoryModel;
    constructor(categoryModel: Model<CategoriesDocument>);
    create(requestBody: any): Promise<Categories>;
    findAll(): Promise<Categories[]>;
}
