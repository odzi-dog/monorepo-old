import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { ObjectType, Field } from '@nestjs/graphql';
import { IAuthRequest } from '@app/shared';
import { Document } from 'mongoose';

export type AuthRequestDocument = AuthRequest & Document;

// Exporting AuthRequest Object Class
@Schema()
@ObjectType()
export class AuthRequest implements IAuthRequest {
  @Prop({ required: true })
  code: string;
  
  @Prop({ required: true })
  @Field({ nullable: true })
  email: string;
};

export const AuthRequestSchema = SchemaFactory.createForClass(AuthRequest);