import { HospitalCategoryService } from './hospital-category.service';
import { CreateHospitalCategoryDto } from './dto/hospital-category.dto';
export declare class HospitalCategoryController {
    private readonly hospitalCategoryService;
    constructor(hospitalCategoryService: HospitalCategoryService);
    create(requestBody: CreateHospitalCategoryDto): Promise<any>;
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
