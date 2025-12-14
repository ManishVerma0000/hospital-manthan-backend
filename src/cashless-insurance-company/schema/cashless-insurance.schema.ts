import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  timestamps: true,
})
export class CashlessInsurance extends Document {
  @Prop({
    required: true,
    unique: true,
    trim: true,
  })
  cashlessInsuranceCompany: string;
}

export const CashlessInsuranceSchema =
  SchemaFactory.createForClass(CashlessInsurance);
