// Importing dependencies
import { IResource, EResourceType, IResourceMember, TResourceConfig } from '@app/shared';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type ResourceDocument = mongoose.Document & Resource;

// Exporting Resource class and schema
@Schema()
export class Resource implements Omit<IResource<TResourceConfig>, 'namespace'> {
  @Prop({ type: String, enum: Object.keys(EResourceType), required: true })
  type: EResourceType;

  @Prop({ type: Object, required: true })
  config: TResourceConfig;

  @Prop({ type: [Object], required: false })
  members: IResourceMember[];
};

export const ResourceSchema = SchemaFactory.createForClass(Resource);