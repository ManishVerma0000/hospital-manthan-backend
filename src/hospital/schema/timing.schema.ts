import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Timing {
  @Prop({ required: true })
  days: string; 

  @Prop({ required: true })
  startTime: string; 

  @Prop({ required: true })
  endTime: string;
}
export const TimingSchema = SchemaFactory.createForClass(Timing);

