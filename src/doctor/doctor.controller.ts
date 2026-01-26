import {
  Body,
  Controller,
  Get,
  Post,
  Delete,
  Param,
  HttpStatus,
  HttpException,
} from '@nestjs/common';

import { DoctorService } from './doctor.service';
import { CreateDoctorDto } from './dto/doctor.dto';

@Controller('doctor')
export class DoctorController {
  constructor(private readonly doctorService: DoctorService) {}

  /* ---------------- Create ---------------- */
  @Post()
  async create(@Body() requestBody: CreateDoctorDto): Promise<any> {
    try {
      const response = await this.doctorService.create(requestBody);
      return {
        message: 'Doctor created successfully',
        data: response,
        success: true,
        statusCode: HttpStatus.CREATED,
      };
    } catch (error) {
      console.error(error);

      throw new HttpException(
        {
          message: 'Error creating doctor',
          data: null,
          success: false,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  /* ---------------- List ---------------- */
  @Get('/list')
  async getDoctorList(): Promise<any> {
    try {
      const response = await this.doctorService.findAll();
      return {
        message: 'Doctor list fetched successfully',
        data: response,
        success: true,
        statusCode: HttpStatus.OK,
      };
    } catch (error) {
      console.error(error);
      throw new HttpException(
        {
          message: 'Error fetching doctors',
          data: null,
          success: false,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  /* ---------------- Delete ---------------- */
  @Delete(':id')
  async deleteDoctor(@Param('id') id: string): Promise<any> {
    try {
      const deleted = await this.doctorService.deleteById(id);
      if (!deleted) {
        throw new HttpException('Doctor not found', HttpStatus.NOT_FOUND);
      }
      return {
        message: 'Doctor deleted successfully',
        data: deleted,
        success: true,
        statusCode: HttpStatus.OK,
      };
    } catch (error) {
      throw new HttpException(
        {
          message: error.message || 'Error deleting doctor',
          data: null,
          success: false,
        },
        error.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get(':id')
  async getSurgery(@Param('id') id: string) {
    try {
      const response = await this.doctorService.getDoctorDetails(id);
      return {
        message: 'Doctor Details  fetched successfully',
        data: response,
        success: true,
        statusCode: 200,
      };
    } catch (error) {
      return {
        message: 'Error fetching Doctor details',
        data: null,
        success: false,
        statusCode: 500,
        error: error.message,
      };
    }
  }
}
