import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Permission } from '../permissions'; 

import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AuthTokenDocument = AuthToken & Document;

@Schema()
@ObjectType()
export class AuthToken {
  @Prop()
  @Field(type => Int)
  userId: number;

  @Prop()
  @Field(type => Int)
  tokenId: number;

  @Field(type => [Permission])
  permissions?: [Permission]
};

export const AuthTokenSchema = SchemaFactory.createForClass(AuthToken);