import { Body, Controller, Get, Post } from '@nestjs/common';
import { HospitalService } from './hospital.service';
import { CreateHospitalDto } from './dto/hospital.dto';

@Controller('hospital')
export class HospitalController {
  constructor(private readonly hospitalServices: HospitalService) {}
  @Post()
  async create(@Body() requestBody: CreateHospitalDto): Promise<any> {
    try {
      const response = await this.hospitalServices.create(requestBody);
      return {
        message: 'Hospital created successfully',
        data: response,
        success: true,
        statusCode: 201,
      };
    } catch (error) {
      return {
        message: 'Error creating Hospital',
        data: null,
        success: false,
        statusCode: 500,
        error: error.message,
      };
    }
  }

  @Get('/list')
  async getListOFHospitals(): Promise<any> {
    try {
      const response = await this.hospitalServices.getListOfHospitals();
      return {
        message: 'Hospital  list retrieved successfully',
        data: response,
        success: true,
        statusCode: 201,
      };
    } catch (error) {
      return {
        message: 'Error fetching Hospitals',
        data: null,
        success: false,
        statusCode: 500,
        error: error.message,
      };
    }
  }
}
