// user.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type GovermentPanelDocument = GovermentPanel & Document;

@Schema()
export class GovermentPanel {
  @Prop({ required: true })
  panelName: string;
}

export const GovermentPanelSchema =
  SchemaFactory.createForClass(GovermentPanel);
