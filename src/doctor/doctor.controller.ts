import { Body, Controller, Get, Post } from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { CreateDoctorDto } from './dto/doctor.dto';
import { stat } from 'fs';

@Controller('doctor')
export class DoctorController {
  constructor(private readonly doctorService: DoctorService) {}

  @Post()
  async create(@Body() requestBody: CreateDoctorDto): Promise<any> {
    try {
      const response = await this.doctorService.create(requestBody);
      console.log(response,'response')
      return {
        message: 'Doctor created successfully',
        data: response,
        success: true,
        statusCode: 201,
      };
    } catch (error) {
      console.log(error)
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
      const response = await this.doctorService.findAll();
      return {
        message: 'Doctors fetched successfully',
        data: response,
        success: true,
        statusCode: 200,
      };
    } catch (error) {
      return {
        message: 'Error fetching doctors',
        data: null,
        success: false,
        statusCode: 500,
        error: error.message,
      };
    }
  }
}
