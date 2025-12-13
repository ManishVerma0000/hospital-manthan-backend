// user.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type InsuranceCompanyDocument = InsuranceCompany & Document;

@Schema()
export class InsuranceCompany {
  @Prop({ required: true })
  hospitalCategory: string;
}

export const InsuranceCompanySchema =
  SchemaFactory.createForClass(InsuranceCompany);
