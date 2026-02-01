import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({
  timestamps: true,
})
export class BookAppointment extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  branch: string;

  @Prop({ required: true })
  service: string;

  @Prop({ required: true })
  phone: string;

  @Prop({ required: true })
  date: string;

  @Prop({
    type: Types.ObjectId,
    ref: 'Doctor', // must match model name
    required: false,
  })
  doctorId?: Types.ObjectId;

  @Prop({
    type: Types.ObjectId,
    ref: 'Surgery', // must match model name
    required: false,
  })
  surgeryId?: Types.ObjectId;
}

export const BookAppointmentSchema =
  SchemaFactory.createForClass(BookAppointment);
