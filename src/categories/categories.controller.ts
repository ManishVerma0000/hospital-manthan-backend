import {
  Body,
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Put,
} from '@nestjs/common';

import { CreateCategoryDto } from './dto/categories.dto';
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(
    private readonly categoryService: CategoriesService,
  ) {}

  /* ---------------- Create ---------------- */
  @Post()
  async create(@Body() requestBody: CreateCategoryDto): Promise<any> {
    try {
      const response =
        await this.categoryService.create(requestBody);

      return {
        message: 'Category created successfully',
        data: response,
        success: true,
        statusCode: 201,
      };
    } catch (error) {
      return {
        message: 'Error creating category',
        data: null,
        success: false,
        statusCode: 500,
        error: error.message,
      };
    }
  }

  /* ---------------- List ---------------- */
  @Get('/list')
  async findAll(): Promise<any> {
    try {
      const response =
        await this.categoryService.findAll();

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

  /* ---------------- Delete ---------------- */
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<any> {
    try {
      const response =
        await this.categoryService.deleteById(id);

      return {
        message: 'Category deleted successfully',
        data: response,
        success: true,
        statusCode: 200,
      };
    } catch (error) {
      return {
        message: 'Error deleting category',
        data: null,
        success: false,
        statusCode: 500,
        error: error.message,
      };
    }
  }

  /* ---------------- Update ---------------- */
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() requestBody: Partial<CreateCategoryDto>,
  ): Promise<any> {
    try {
      const response = await this.categoryService.updateById(id, requestBody);

      return {
        message: 'Category updated successfully',
        data: response,
        success: true,
        statusCode: 200,
      };
    } catch (error) {
      return {
        message: error.message || 'Error updating category',
        data: null,
        success: false,
        statusCode: 500,
        error: error.message,
      };
    }
  }
}
