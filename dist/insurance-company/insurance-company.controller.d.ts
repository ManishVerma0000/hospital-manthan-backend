import { InsuranceCompanyService } from './insurance-company.service';
import { CreateInsuranceCompanyDto } from './dto/insurance-company.dto';
export declare class InsuranceCompanyController {
    private readonly hospitalCategoryService;
    constructor(hospitalCategoryService: InsuranceCompanyService);
    create(requestBody: CreateInsuranceCompanyDto): Promise<any>;
    findAll(): Promise<any>;
    delete(id: string): Promise<{
        message: string;
        success: boolean;
        data: any;
        statusCode: number;
    } | {
        message: any;
        success: boolean;
        data: null;
        statusCode: number;
    }>;
}
