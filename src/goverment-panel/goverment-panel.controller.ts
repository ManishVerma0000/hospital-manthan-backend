import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { GovermentPanelService } from './goverment-panel.service';
import { CreateGovernmentPanelDto } from './dto/create-government-panel.dto';

@Controller('goverment-panel')
export class GovermentPanelController {
  constructor(private readonly govermentPanelService: GovermentPanelService) {}

  @Post()
  async create(@Body() requestBody: CreateGovernmentPanelDto): Promise<any> {
    try {
      const response = await this.govermentPanelService.create(requestBody);
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
      const response = await this.govermentPanelService.findAll();
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
    try {
      const deleted = await this.govermentPanelService.deleteById(id);
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

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() requestBody: CreateGovernmentPanelDto,
  ): Promise<any> {
    try {
      const updated = await this.govermentPanelService.updateById(
        id,
        requestBody,
      );
      return {
        message: 'Government panel updated successfully',
        data: updated,
        success: true,
        statusCode: 200,
      };
    } catch (error) {
      return {
        message: error.message || 'Error updating government panel',
        data: null,
        success: false,
        statusCode: 500,
      };
    }
  }
}
