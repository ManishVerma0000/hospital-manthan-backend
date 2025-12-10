import { Body, Controller, Get, Post } from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { CreateDoctorDto } from './dto/doctor.dto';

@Controller('doctor')
export class DoctorController {
  constructor(private readonly doctorService: DoctorService) {}

  @Post()
  async create(@Body('name') requestBody: CreateDoctorDto): Promise<any> {
    try {
      const response = await this.doctorService.create(requestBody);
      return response;
    } catch (error) {
      return error;
    }
  }

  @Get('/doctors/list')
  async findAll(): Promise<any> {
    try {
      const response = await this.doctorService.findAll();
      return response;
    } catch (error) {
      return error;
    }
  }
}
