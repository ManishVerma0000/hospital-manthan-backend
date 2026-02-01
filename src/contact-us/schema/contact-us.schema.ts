import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  timestamps: true,
})
export class ContactUs extends Document {

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  mobileNumber: string;

  @Prop()
  email?: string;

  @Prop({ required: true })
  city: string;

  @Prop()
  remark?: string;
}

export const ContactUsSchema = SchemaFactory.createForClass(ContactUs);
