import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SurgeryDocument = Surgery & Document;

@Schema({ timestamps: true })
export class Surgery {
  // BASIC DETAILS
  @Prop({ required: true })
  surgeryName: string;

  @Prop()
  diseaseNeme?: string;

  @Prop({ required: true })
  surgeryCategory: string;

  @Prop({ required: true })
  duration: string;

  @Prop({ required: true })
  recoveryTime: string;

  @Prop({ required: true })
  treatedBy: string;

  @Prop({ required: true })
  costingRange: string;

  // IMAGES
  @Prop()
  icon?: string;

  @Prop({ type: [String], default: [] })
  images?: string[];

  // SYMPTOMS
  @Prop({
    type: [
      {
        subcategory: { type: String, required: true },
        paragraph: { type: String },
      },
    ],
    default: [],
  })
  symptoms?: {
    subcategory: string;
    paragraph?: string;
  }[];

  // PROCEDURE TIMELINE
  @Prop({
    type: [
      {
        step: { type: String, required: true },
        typeProcedure: { type: String },
        duration: { type: String },
        medication: { type: String },
      },
    ],
    default: [],
  })
  procedureTimeline?: {
    step: string;
    typeProcedure?: string;
    duration?: string;
    medication?: string;
  }[];

  // BENEFITS & RISKS
  @Prop({ type: [String], default: [] })
  benefits?: string[];

  @Prop({ type: [String], default: [] })
  risks?: string[];

  // RECOVERY TIMELINE
  @Prop({
    type: [
      {
        stage: { type: String },
        mention: { type: String },
        lightCare: { type: String },
      },
    ],
    default: [],
  })
  recoveryTimeline?: {
    stage?: string;
    mention?: string;
    lightCare?: string;
  }[];

  // FAQ
  @Prop({
    type: [
      {
        question: { type: String, required: true },
        answer: { type: String, required: true },
      },
    ],
    default: [],
  })
  faqs?: {
    question: string;
    answer: string;
  }[];
}

export const SurgerySchema = SchemaFactory.createForClass(Surgery);
