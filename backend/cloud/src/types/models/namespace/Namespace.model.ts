import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { INamespace } from '@app/shared';
import * as mongoose from 'mongoose';

export type NamespaceDocument = Namespace & mongoose.Document;

@Schema()
export class Namespace implements INamespace {
  @Prop({ required: true })
  slug: string
};

export const NamespaceSchema = SchemaFactory.createForClass(Namespace);