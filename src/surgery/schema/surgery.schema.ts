import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type SurgeryDocument = Surgery & Document;

@Schema({ timestamps: true })
export class Surgery {
  // BASIC DETAILS
  @Prop({ required: true })
  surgeryName: string;

  @Prop({ required: true })
  paragraph: string;

  @Prop()
  diseaseNeme?: string;

  @Prop({
  type: Types.ObjectId,
  ref: 'Categories', // must match model name
  required: true,
})
surgeryCategory: Types.ObjectId;


  @Prop({ required: true })
  duration: string;

  @Prop({ required: true })
  recoveryTime: string;

  @Prop({
    type: Types.ObjectId,
    ref: 'TreatedBy', // 👈 Must match model name
    required: true,
  })
  treatedBy: Types.ObjectId;

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
