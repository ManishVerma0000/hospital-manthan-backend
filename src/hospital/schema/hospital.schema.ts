// user.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Timing } from '../../hospital/schema/timing.schema';
export type HospitalDocument = Hospital & Document;

@Schema()
export class Hospital {
  @Prop({ required: true })
  hospitalName: string;

  @Prop({ required: true })
  hospitalType: string;

  @Prop({ required: true })
  contactNumber: string;

  @Prop({ required: true })
  whatsAppNumber: string;

  @Prop({ required: true })
  emailAddress: string;

  @Prop({ required: true })
  iconImageUrl: string;

  @Prop({ required: true })
  city: string;

  @Prop({ required: true })
  mapDirection: string;

  @Prop({ required: true })
  location: string;

  @Prop({ required: true })
  hospitalDetails: string;

  @Prop({ required: true })
  insuranceCompany: string;

  @Prop({ required: true })
  cashlessInsuranceCompany: string;

  @Prop({ required: true })
  governmentPanelName: string;

  @Prop({ required: true })
  imageUrl: string;

  @Prop({ type: [Timing], required: true })
  timing: Timing[];
}

export const HospitalSchema = SchemaFactory.createForClass(Hospital);
