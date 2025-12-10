// user.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type CategoriesDocument = Categories & Document;

@Schema()
export class Categories {
  @Prop({ required: true })
  categoryName: string;

  @Prop({ required: true })
  labelName: string;

  @Prop({ required: true })
  imageUrl: string;

  @Prop({ required: true })
  iconImage: string;
}

export const CategoriesSchema = SchemaFactory.createForClass(Categories);
