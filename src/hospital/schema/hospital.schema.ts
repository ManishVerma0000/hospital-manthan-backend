import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type HospitalDocument = Hospital & Document;

@Schema({ timestamps: true })
export class Hospital {
  @Prop({ required: true })
  hospitalName: string;

  @Prop({ required: true })
  hospitaldetails: string;

  @Prop({ type: Types.ObjectId, required: true })
  hospitalType: Types.ObjectId;

  @Prop({ required: true })
  contactNumber: string;

  @Prop({ required: true })
  whatsapp: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  city: string;

  @Prop({ required: true })
  mapDirection: string;

  @Prop({ required: true })
  location: string;

  @Prop()
  iconUrl: string;

  @Prop({ type: [String], default: [] })
  imageUrls: string[];

  @Prop({ type: [String], default: [] })
  firstStepImageUrls: string[];

  @Prop({
    type: [
      {
        days: { type: String },
        time: { type: String },
      },
    ],
    default: [],
  })
  timings: {
    days: string;
    time: string;
  }[];

  // ---------- STEP 2 ----------
  @Prop({ type: [Types.ObjectId], ref: 'InsuranceCompany', default: [] })
  treatmentList: Types.ObjectId[];

  @Prop({
    type: [Types.ObjectId],
    ref: 'CashlessInsurance',
    default: [],
  })
  cashlessList: Types.ObjectId[];

  @Prop({ type: [Types.ObjectId], ref: 'GovermentPanel', default: [] })
  panelList: Types.ObjectId[];
}

export const HospitalSchema = SchemaFactory.createForClass(Hospital);
