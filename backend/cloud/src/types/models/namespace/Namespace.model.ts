import { ObjectType, Field } from '@nestjs/graphql';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { INamespace, INamespaceMember } from '@app/shared';
import { ObjectId } from 'src/types';
import { NamespaceMemberObject } from 'src/types/objects';
import * as mongoose from 'mongoose';

export type NamespaceDocument = Namespace & mongoose.Document;

@ObjectType()
@Schema()
export class Namespace implements INamespace {
  @Field(type => String, { nullable: false })
  _id?: ObjectId
  
  @Field({ nullable: false })
  @Prop({ required: true, unique: true, lowercase: true })
  slug: string;

  // @Field()
  @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'Resource', required: true, default: [] })
  resources: ObjectId[];

  @Field(type => [NamespaceMemberObject], { nullable: false })
  @Prop({ type: [Object], required: true, default: [] })
  members: INamespaceMember[];
};

export const NamespaceSchema = SchemaFactory.createForClass(Namespace);