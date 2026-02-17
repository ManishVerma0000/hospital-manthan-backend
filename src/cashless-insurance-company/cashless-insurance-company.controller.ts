import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CashlessInsuranceCompanyService } from './cashless-insurance-company.service';
import { CreateCashlessInsuranceDto } from './dto/create-cashless-insurance.dto';

@Controller('cashless-insurance-company')
export class CashlessInsuranceCompanyController {
  constructor(
    private readonly cashlessInsuranceCompanyService: CashlessInsuranceCompanyService,
  ) {}

  @Post()
  async create(@Body() requestBody: CreateCashlessInsuranceDto): Promise<any> {
    try {
      const response =
        await this.cashlessInsuranceCompanyService.create(requestBody);
      return {
        message: 'Government panel created successfully',
        data: response,
        success: true,
        statusCode: 201,
      };
    } catch (error) {
      console.log(error);
      return {
        message: 'Error creating doctor',
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
      const response = await this.cashlessInsuranceCompanyService.findAll();
      return {
        message: 'Government panels fetched successfully',
        data: response,
        success: true,
        statusCode: 200,
      };
    } catch (error) {
      return {
        message: 'Error fetching government panels',
        data: null,
        success: false,
        statusCode: 500,
        error: error.message,
      };
    }
  }



  @Delete(':id')
  async delete(@Param('id') id: string): Promise<any> {
    try {
      const deleted =
        await this.cashlessInsuranceCompanyService.deleteById(id);

      if (!deleted) {
        return {
          message: 'Cashless insurance not found',
          success: false,
          data: null,
          statusCode: 404,
        };
      }

      return {
        message: 'Cashless insurance deleted successfully',
        success: true,
        data: deleted,
        statusCode: 200,
      };
    } catch (error) {
      return {
        message: 'Error deleting cashless insurance',
        success: false,
        data: null,
        statusCode: 500,
        error: error.message,
      };
    }
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() requestBody: CreateCashlessInsuranceDto,
  ): Promise<any> {
    try {
      const updated =
        await this.cashlessInsuranceCompanyService.updateById(
          id,
          requestBody,
        );

      if (!updated) {
        return {
          message: 'Cashless insurance not found',
          success: false,
          data: null,
          statusCode: 404,
        };
      }

      return {
        message: 'Cashless insurance updated successfully',
        success: true,
        data: updated,
        statusCode: 200,
      };
    } catch (error) {
      return {
        message: 'Error updating cashless insurance',
        success: false,
        data: null,
        statusCode: 500,
        error: error.message,
      };
    }
  }
}
