import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Permission } from '../permissions'; 

import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AuthTokenDocument = AuthToken & Document;

@Schema()
export class AuthToken {
  @Prop()
  id: string;

  @Prop()
  userId: string;

  @Prop(type => [Permission])
  permissions?: [Permission]
};

export const AuthTokenSchema = SchemaFactory.createForClass(AuthToken);