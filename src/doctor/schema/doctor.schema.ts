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

  @Prop({ required: true })
  treatmentProvide: string[];

  @Prop({  required: true })
  timing: string[];

  @Prop({ required: true })
  workingFrom: string;

  @Prop({ required: true })
  qualificationAndExperience: string;

  @Prop({ required: true })
  about: string;

  @Prop({ type: [String], required: true })
  imageUrl: string;
}

export const DoctorSchema = SchemaFactory.createForClass(Doctor);
