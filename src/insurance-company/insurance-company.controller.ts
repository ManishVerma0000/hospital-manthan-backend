import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { InsuranceCompanyService } from './insurance-company.service';
import { CreateInsuranceCompanyDto } from './dto/insurance-company.dto';

@Controller('insurance-company')
export class InsuranceCompanyController {
  constructor(
    private readonly hospitalCategoryService: InsuranceCompanyService,
  ) {}

  @Post()
  async create(@Body() requestBody: CreateInsuranceCompanyDto): Promise<any> {
    try {
      const response = await this.hospitalCategoryService.create(requestBody);
      return {
        message: 'Insurance Company created successfully',
        data: response,
        success: true,
        statusCode: 201,
      };
    } catch (error) {
      console.log(error);
      return {
        message: 'Error creating Insurance Company',
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
        message: 'Insurance Company fetched successfully',
        data: response,
        success: true,
        statusCode: 200,
      };
    } catch (error) {
      return {
        message: 'Error fetching Insurance Company',
        data: null,
        success: false,
        statusCode: 500,
        error: error.message,
      };
    }
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    try {
      const deleted = await this.hospitalCategoryService.deleteById(id);
      return {
        message: 'Insurance Company deleted successfully',
        success: true,
        data: deleted,
        statusCode: 200,
      };
    } catch (error) {
      return {
        message: error.message || 'Error deleting Insurance Company',
        success: false,
        data: null,
        statusCode: 500,
      };
    }
  }
}
