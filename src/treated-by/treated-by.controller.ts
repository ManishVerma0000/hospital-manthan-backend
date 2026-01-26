import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

import { TreatedByService } from './treated-by.service';
import { TreatedByDto } from './dto/treated-by.dto';

@Controller('treated-by')
export class TreatedByController {
  constructor(private readonly treatedByService: TreatedByService) {}

  /* CREATE */
  @Post()
  async create(@Body() body: TreatedByDto): Promise<any> {
    try {
      const response = await this.treatedByService.create(body);

      return {
        message: 'Treated By created successfully',
        data: response,
        success: true,
        statusCode: 201,
      };
    } catch (error) {
      console.error(error);

      return {
        message: 'Error creating Treated By',
        data: null,
        success: false,
        statusCode: 500,
        error: error.message,
      };
    }
  }

  /* LIST */
  @Get('list')
  async findAll(): Promise<any> {
    try {
      const response = await this.treatedByService.findAll();

      return {
        message: 'Treated By fetched successfully',
        data: response,
        success: true,
        statusCode: 200,
      };
    } catch (error) {
      return {
        message: 'Error fetching Treated By',
        data: null,
        success: false,
        statusCode: 500,
        error: error.message,
      };
    }
  }

  /* DELETE */
  @Delete(':id')
  async delete(@Param('id') id: string) {
    try {
      const deleted = await this.treatedByService.deleteById(id);

      return {
        message: 'Treated By deleted successfully',
        success: true,
        data: deleted,
        statusCode: 200,
      };
    } catch (error) {
      return {
        message: error.message || 'Delete failed',
        success: false,
        data: null,
        statusCode: 500,
      };
    }
  }
}
