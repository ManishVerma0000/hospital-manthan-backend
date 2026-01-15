import { HospitalCategoryDocument } from './schema/hospital-category.schema';
import { Model } from 'mongoose';
export declare class HospitalCategoryService {
    private doctorModel;
    constructor(doctorModel: Model<HospitalCategoryDocument>);
    create(requestBody: any): Promise<any>;
    findAll(): Promise<any>;
    deleteById(id: string): Promise<any>;
}
