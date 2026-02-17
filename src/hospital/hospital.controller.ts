import {
  Body,
  Controller,
  Get,
  Post,
  Delete,
  Param,
  HttpStatus,
  HttpException,
  Put,
} from '@nestjs/common';

import { HospitalService } from './hospital.service';
import { CreateHospitalDto } from './dto/hospital.dto';

@Controller('hospital')
export class HospitalController {
  constructor(private readonly hospitalServices: HospitalService) {}

  /* ---------------- Create ---------------- */
  @Post()
  async create(@Body() requestBody: CreateHospitalDto): Promise<any> {
    try {
      const response = await this.hospitalServices.create(requestBody);
      return {
        message: 'Hospital created successfully',
        data: response,
        success: true,
        statusCode: HttpStatus.CREATED,
      };
    } catch (error) {
      console.error(error);

      throw new HttpException(
        {
          message: 'Error creating Hospital',
          data: null,
          success: false,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  /* ---------------- List ---------------- */
  @Get('/list')
  async getListOFHospitals(): Promise<any> {
    try {
      const response = await this.hospitalServices.getListOfHospitals();

      return {
        message: 'Hospital list retrieved successfully',
        data: response,
        success: true,
        statusCode: HttpStatus.OK,
      };
    } catch (error) {
      console.error(error);

      throw new HttpException(
        {
          message: 'Error fetching Hospitals',
          data: null,
          success: false,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  /* ---------------- Delete ---------------- */
  @Delete(':id')
  async deleteHospital(@Param('id') id: string): Promise<any> {
    try {
      const deleted = await this.hospitalServices.deleteById(id);
      if (!deleted) {
        throw new HttpException('Hospital not found', HttpStatus.NOT_FOUND);
      }
      return {
        message: 'Hospital deleted successfully',
        data: deleted,
        success: true,
        statusCode: HttpStatus.OK,
      };
    } catch (error) {
      console.error(error);
      throw new HttpException(
        {
          message: error.message || 'Error deleting Hospital',
          data: null,
          success: false,
        },
        error.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  /* ---------------- Update ---------------- */
  @Put(':id')
  async updateHospital(
    @Param('id') id: string,
    @Body() requestBody: CreateHospitalDto,
  ): Promise<any> {
    try {
      const updated = await this.hospitalServices.update(id, requestBody);

      return {
        message: 'Hospital updated successfully',
        data: updated,
        success: true,
        statusCode: HttpStatus.OK,
      };
    } catch (error) {
      console.error(error);

      throw new HttpException(
        {
          message: error.message || 'Error updating Hospital',
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
      const response = await this.hospitalServices.getHospitalDetails(id);
      // console.log(response)
      return {
        message: 'Hospital Details  fetched successfully',
        data: response,
        success: true,
        statusCode: 200,
      };
    } catch (error) {
      console.log(error,'error')
      return {
        message: 'Error fetching Hospital details',
        data: null,
        success: false,
        statusCode: 500,
        error: error.message,
      };
    }
  }
}
