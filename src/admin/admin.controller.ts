import { Body, Controller, Post } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminLoginDto } from './dto/admin.login.dto';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminServices: AdminService) {}

  @Post()
  async create(@Body() requestBody: AdminLoginDto): Promise<any> {
    try {
      const response = await this.adminServices.create(requestBody);
      return {
        message: 'Admin create  successfully',
        data: response,
        success: true,
        statusCode: 201,
      };
    } catch (error) {
      console.log(error);
      return {
        message: 'Error creating Admin',
        data: null,
        success: false,
        statusCode: 500,
        error: error.message,
      };
    }
  }

  @Post('/login')
  async login(@Body() requestBody: AdminLoginDto): Promise<any> {
    try {
      const response = await this.adminServices.create(requestBody);
      return {
        message: 'Admin create  successfully',
        data: response,
        success: true,
        statusCode: 201,
      };
    } catch (error) {
      console.log(error);
      return {
        message: 'Error creating Admin',
        data: null,
        success: false,
        statusCode: 500,
        error: error.message,
      };
    }
  }
}
