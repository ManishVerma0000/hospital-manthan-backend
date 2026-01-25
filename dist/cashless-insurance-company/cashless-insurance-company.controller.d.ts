import { CashlessInsuranceCompanyService } from './cashless-insurance-company.service';
import { CreateCashlessInsuranceDto } from './dto/create-cashless-insurance.dto';
export declare class CashlessInsuranceCompanyController {
    private readonly cashlessInsuranceCompanyService;
    constructor(cashlessInsuranceCompanyService: CashlessInsuranceCompanyService);
    create(requestBody: CreateCashlessInsuranceDto): Promise<any>;
    findAll(): Promise<any>;
    delete(id: string): Promise<any>;
}
