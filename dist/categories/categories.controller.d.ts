import { CreateCategoryDto } from './dto/categories.dto';
import { CategoriesService } from './categories.service';
export declare class CategoriesController {
    private readonly categoryService;
    constructor(categoryService: CategoriesService);
    create(requestBody: CreateCategoryDto): Promise<any>;
    findAll(): Promise<any>;
    delete(id: string): Promise<any>;
    update(id: string, requestBody: Partial<CreateCategoryDto>): Promise<any>;
}
