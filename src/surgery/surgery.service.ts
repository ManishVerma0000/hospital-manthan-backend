import { Injectable } from '@nestjs/common';
import { CreateSurgeryDto } from './dto/CreateSurgeryDto';
import { InjectModel } from '@nestjs/mongoose';
import { Surgery, SurgeryDocument } from './schema/surgery.schema';
import { Model } from 'mongoose';
@Injectable()
export class SurgeryService {
  constructor(
    @InjectModel(Surgery.name)
    private readonly surgeryModel: Model<SurgeryDocument>,
  ) {}
  async createSurgery(dto: CreateSurgeryDto) {
    const cleanedPayload = {
      ...dto,
      benefits: dto.benefits?.filter(Boolean),
      risks: dto.risks?.filter(Boolean),
      images: dto.images?.filter(Boolean),
      symptoms: dto.symptoms?.filter((s) => s.subcategory),
      procedureTimeline: dto.procedureTimeline
        ?.filter((p) => p.step) // keep only valid rows
        .map((p) => ({
          step: p.step.trim(),
          typeProcedure: p.typeProcedure,
          duration: p.duration,
          medication: p.medication,
        })),
      recoveryTimeline: dto.recoveryTimeline?.filter(
        (r) => r.stage || r.mention || r.lightCare,
      ),
      faqs: dto.faqs?.filter((f) => f.question && f.answer),
    };
    const surgery = new this.surgeryModel(cleanedPayload);
    const savedSurgery = await surgery.save();
    return {
      success: true,
      message: 'Surgery created successfully',
      data: savedSurgery,
    };
  }

  async findAll() {
    const response = await this.surgeryModel.find();
    return response;
  }

  async deleteById(id: string) {
    return this.surgeryModel.findByIdAndDelete(id);
  }
}
