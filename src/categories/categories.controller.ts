import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCategoryDto } from './dto/categories.dto';
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoryService: CategoriesService) {}
  @Get('/list')
  async findAll(): Promise<any> {
    try {
      const response = await this.categoryService.findAll();
      return {
        message: 'Categories fetched successfully',
        data: response,
        success: true,
        statusCode: 200,
      };
    } catch (error) {
      return {
        message: 'Error fetching categories',
        data: null,
        success: false,
        statusCode: 500,
        error: error.message,
      };
    }
  }
}
