import { ObjectType, Field } from '@nestjs/graphql';
import { ETokenType, IToken } from "@app/shared";
import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Profile, TokenPermissions } from 'src/types/models';
import * as mongoose from 'mongoose';
import { ObjectId } from "src/types";

export type TokenDocument = Token & mongoose.Document;

@Schema()
@ObjectType()
export class Token implements IToken {
  @Prop({ type: String, enum: [...Object.keys(ETokenType)], required: true })
  type: ETokenType;

  @Prop({ required: true })
  @Field()
  secret: string;

  @Prop({ type: Array, required: false })
  namespaces?: Array<ObjectId>;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Profile', required: false })
  @Field(type => Profile, { nullable: true })
  profile?: ObjectId;
  
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'TokenPermissions', required: true })
  @Field(type => TokenPermissions)
  permissions: ObjectId;
};

export const TokenSchema = SchemaFactory.createForClass(Token);