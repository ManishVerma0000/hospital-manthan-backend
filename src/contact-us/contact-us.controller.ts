import { Body, Controller, Get, Post } from '@nestjs/common';
import { ContactUsService } from './contact-us.service';
import { ContactUsDto } from './dto/contact-us.dto';

@Controller('contact-us')
export class ContactUsController {
  constructor(private readonly contactUsService: ContactUsService) {}

  @Post()
  async create(@Body() requestBody: ContactUsDto): Promise<any> {
    try {
      const response = await this.contactUsService.create(requestBody);
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
  async list() {
    try {
      const response = await this.contactUsService.getList();
      return {
        message: 'Government panel list retrieved successfully',
        data: response,
        success: true,
        statusCode: 201,
      };
    } catch (error) {
      console.log(error);
      return {
        message: 'Error creating retrieved',
        data: null,
        success: false,
        statusCode: 500,
        error: error.message,
      };
    }
  }

}
