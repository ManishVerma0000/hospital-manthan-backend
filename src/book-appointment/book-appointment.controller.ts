import { Body, Controller, Post } from '@nestjs/common';
import { BookAppointmentService } from './book-appointment.service';
import { BookAppointmentDto } from './dto/book-appointment.dto';

@Controller('book-appointment')
export class BookAppointmentController {
  constructor(
    private readonly bookAppointementService: BookAppointmentService,
  ) {}

  @Post()
  async create(@Body() requestBody: BookAppointmentDto): Promise<any> {
    try {
      const response = await this.bookAppointementService.create(requestBody);
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
}
