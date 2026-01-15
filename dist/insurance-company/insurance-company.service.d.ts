import { InsuranceCompanyDocument } from './schema/insurance-company.schema';
import { Model } from 'mongoose';
export declare class InsuranceCompanyService {
    private insuranceCompany;
    constructor(insuranceCompany: Model<InsuranceCompanyDocument>);
    create(requestBody: any): Promise<any>;
    findAll(): Promise<any>;
    deleteById(id: string): Promise<any>;
}
