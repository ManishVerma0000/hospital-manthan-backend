import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  HttpStatus,
  HttpException,
} from '@nestjs/common';

import { HospitalCategoryService } from './hospital-category.service';
import { CreateHospitalCategoryDto } from './dto/hospital-category.dto';

@Controller('hospital-category')
export class HospitalCategoryController {
  constructor(
    private readonly hospitalCategoryService: HospitalCategoryService,
  ) {}

  /* ---------------- Create ---------------- */
  @Post()
  async create(
    @Body() requestBody: CreateHospitalCategoryDto,
  ): Promise<any> {
    try {
      const response =
        await this.hospitalCategoryService.create(
          requestBody,
        );

      return {
        message:
          'Hospital Category created successfully',
        data: response,
        success: true,
        statusCode: HttpStatus.CREATED,
      };
    } catch (error) {
      console.error(error);

      throw new HttpException(
        {
          message:
            'Error creating Hospital Category',
          success: false,
          data: null,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  /* ---------------- List ---------------- */
  @Get('/list')
  async findAll(): Promise<any> {
    try {
      const response =
        await this.hospitalCategoryService.findAll();

      return {
        message:
          'Hospital Category fetched successfully',
        data: response,
        success: true,
        statusCode: HttpStatus.OK,
      };
    } catch (error) {
      console.error(error);

      throw new HttpException(
        {
          message:
            'Error fetching Hospital Category',
          success: false,
          data: null,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  /* ---------------- Delete ---------------- */
  @Delete(':id')
  async delete(
    @Param('id') id: string,
  ): Promise<any> {
    try {
      const deleted =
        await this.hospitalCategoryService.deleteById(
          id,
        );

      if (!deleted) {
        throw new HttpException(
          'Hospital Category not found',
          HttpStatus.NOT_FOUND,
        );
      }
      return {
        message:
          'Hospital Category deleted successfully',
        success: true,
        data: deleted,
        statusCode: HttpStatus.OK,
      };
    } catch (error) {
      console.error(error);

      throw new HttpException(
        {
          message:
            error.message ||
            'Error deleting Hospital Category',
          success: false,
          data: null,
        },
        error.status ||
          HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
