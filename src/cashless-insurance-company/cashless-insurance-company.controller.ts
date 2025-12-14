import { Body, Controller, Post } from '@nestjs/common';
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
}
