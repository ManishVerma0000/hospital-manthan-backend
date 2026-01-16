import { Body, Controller, Post } from '@nestjs/common';
import { SurgeryService } from './surgery.service';
import { CreateSurgeryDto } from './dto/CreateSurgeryDto';

@Controller('surgery')
export class SurgeryController {
  constructor(private readonly surgeryService: SurgeryService) {}

  @Post()
  createSurgery(@Body() dto: CreateSurgeryDto) {
    return this.surgeryService.createSurgery(dto);
  }
}
