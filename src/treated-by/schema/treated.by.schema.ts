import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TreatedByDocument = TreatedBy & Document;

@Schema({ timestamps: true })
export class TreatedBy {

  @Prop({ required: true, trim: true })
  treatedByName: string;

}

export const TreatedBySchema =
  SchemaFactory.createForClass(TreatedBy);
