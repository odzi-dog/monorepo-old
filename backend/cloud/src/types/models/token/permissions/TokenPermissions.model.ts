import { ObjectType, Field } from '@nestjs/graphql';
import { ITokenPermission, ITokenPermissions } from '@app/shared';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { TokenPermission } from 'src/types/objects';
import * as mongoose from 'mongoose';

export type TokenPermissionsDocument = TokenPermissions & mongoose.Document;

@Schema()
@ObjectType()
export class TokenPermissions implements ITokenPermissions {
  @Prop({ required: true })
  @Field()
  version: string;

  @Prop({ type: Array, required: true })
  @Field(type => [TokenPermission])
  list: Array<ITokenPermission>;
};

export const TokenPermissionsSchema = SchemaFactory.createForClass(TokenPermissions);