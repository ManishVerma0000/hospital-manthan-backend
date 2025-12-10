// user.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type DoctorDocument = Doctor & Document;

@Schema()
export class Doctor {
  @Prop({ required: true })
  hospital: string;

  @Prop({ required: true })
  contactNumber: string;

  @Prop({ required: true })
  whatsAppNumber: string;

  @Prop({ type: [String], required: true })
  treatmentProvide: string[];

  @Prop({ type: [String], required: true })
  timing: string[];

  @Prop({ type: [String], required: true })
  workingFrom: string;

  @Prop({ type: [String], required: true })
  qualificationAndExperience: string;

  @Prop({ type: [String], required: true })
  about: string[];

  @Prop({ type: [String], required: true })
  imageUrl: string;
}

export const DoctorSchema = SchemaFactory.createForClass(Doctor);
