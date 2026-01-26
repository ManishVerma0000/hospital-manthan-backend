// user.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type DoctorDocument = Doctor & Document;

@Schema({ timestamps: true })
export class Doctor {
  @Prop({ type: Types.ObjectId, ref: 'Hospital', required: true })
  hospital: Types.ObjectId;

  @Prop({ required: true })
  contactNumber: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  whatsAppNumber: string;

  @Prop({ required: true })
  status: boolean;

  @Prop({ type: [String], required: true })
  treatmentProvide: string[];

  // ✅ UPDATED TIMINGS
  @Prop({
    type: [
      {
        day: { type: String, required: true },
        time: { type: String, required: true },
      },
    ],
    required: true,
  })
  timings: {
    day: string;
    time: string;
  }[];

  @Prop({ required: true })
  workingFrom: string;

  @Prop({ required: true })
  qualificationAndExperience: string;

  @Prop({ required: true })
  about: string;

  @Prop({ type: [String], required: true })
  imageUrl: string[];
}

export const DoctorSchema = SchemaFactory.createForClass(Doctor);
