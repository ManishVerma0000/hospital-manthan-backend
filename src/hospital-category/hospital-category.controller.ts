import { Body, Controller, Get, Post } from '@nestjs/common';

import { stat } from 'fs';
import { HospitalCategoryService } from './hospital-category.service';
import { CreateHospitalCategoryDto } from './dto/hospital-category.dto';

@Controller('doctor')
export class HospitalCategoryController {
  constructor(
    private readonly hospitalCategoryService: HospitalCategoryService,
  ) {}

  @Post()
  async create(@Body() requestBody: CreateHospitalCategoryDto): Promise<any> {
    try {
      const response = await this.hospitalCategoryService.create(requestBody);
      return {
        message: 'Hospital Category created successfully',
        data: response,
        success: true,
        statusCode: 201,
      };
    } catch (error) {
      console.log(error);
      return {
        message: 'Error creating Hospital Category',
        data: null,
        success: false,
        statusCode: 500,
        error: error.message,
      };
    }
  }

  @Get('/list')
  async findAll(): Promise<any> {
    try {
      const response = await this.hospitalCategoryService.findAll();
      return {
        message: 'Hospital Category fetched successfully',
        data: response,
        success: true,
        statusCode: 200,
      };
    } catch (error) {
      return {
        message: 'Error fetching Hospital Category',
        data: null,
        success: false,
        statusCode: 500,
        error: error.message,
      };
    }
  }
}
