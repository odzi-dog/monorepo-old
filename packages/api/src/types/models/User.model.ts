import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
@ObjectType()
export class User {
  @Prop()
  @Field(type => Int)
  id: number;

  @Prop({ unique: true })
  @Field({ nullable: false })
  email: string;
}

export const UserSchema = SchemaFactory.createForClass(User);