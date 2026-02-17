import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
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

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.surgeryService.deleteById(id);
  }

  @Get(':id')
  async getSurgery(@Param('id') id: string) {
    try {
      const response = await this.surgeryService.getSurgeryDetails(id);
      return {
        message: 'Surgery Details  fetched successfully',
        data: response,
        success: true,
        statusCode: 200,
      };
    } catch (error) {
      return {
        message: 'Error fetching Surgery details',
        data: null,
        success: false,
        statusCode: 500,
        error: error.message,
      };
    }
  }

  @Put(':id')
  async updateSurgery(
    @Param('id') id: string,
    @Body() dto: CreateSurgeryDto,
  ) {
    try {
      const response = await this.surgeryService.updateSurgery(id, dto);
      return {
        message: 'Surgery updated successfully',
        data: response.data,
        success: true,
        statusCode: 200,
      };
    } catch (error) {
      return {
        message: error.message || 'Error updating Surgery',
        data: null,
        success: false,
        statusCode: 500,
        error: error.message,
      };
    }
  }
}
