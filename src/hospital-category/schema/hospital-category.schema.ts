// user.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type HospitalCategoryDocument = HospitalCategory & Document;

@Schema()
export class HospitalCategory {
  @Prop({ required: true })
  hospitalCategory: string;
}

export const HospitalCategorySchema =
  SchemaFactory.createForClass(HospitalCategory);
