import { CashlessInsurance } from './schema/cashless-insurance.schema';
import { Model } from 'mongoose';
export declare class CashlessInsuranceCompanyService {
    private govermentPanelModel;
    constructor(govermentPanelModel: Model<CashlessInsurance>);
    create(requestBody: any): Promise<CashlessInsurance>;
    findAll(): Promise<CashlessInsurance[]>;
    deleteById(id: string): Promise<(import("mongoose").Document<unknown, {}, CashlessInsurance, {}, {}> & CashlessInsurance & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }) | null>;
}
