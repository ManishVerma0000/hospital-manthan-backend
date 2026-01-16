import { Body, Controller, Get, Post } from '@nestjs/common';
import { SurgeryService } from './surgery.service';
import { CreateSurgeryDto } from './dto/CreateSurgeryDto';

@Controller('surgery')
export class SurgeryController {
  constructor(private readonly surgeryService: SurgeryService) {}

  @Post()
  async createSurgery(@Body() dto: CreateSurgeryDto) {
    try {
      const response = await this.surgeryService.createSurgery(dto);
      return {
        message: 'Surgery is  created successfully',
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
        const response = await this.surgeryService.findAll();
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
}
