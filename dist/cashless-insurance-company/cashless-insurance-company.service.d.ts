import { CashlessInsurance } from './schema/cashless-insurance.schema';
import { Model } from 'mongoose';
export declare class CashlessInsuranceCompanyService {
    private govermentPanelModel;
    constructor(govermentPanelModel: Model<CashlessInsurance>);
    create(requestBody: any): Promise<CashlessInsurance>;
    findAll(): Promise<CashlessInsurance[]>;
}
