import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { AuthCodeType } from 'src/types/enums';
import { Document } from 'mongoose';

export type AuthCodeDocument = AuthCode & Document;

@Schema()
export class AuthCode {
  @Prop({ required: true, unique: true })
  id: number;

  @Prop({ type: String, required: true })
  type: AuthCodeType;

  @Prop({ required: false })
  userId?: number;

  @Prop({ required: false })
  userEmail?: string
};

export const AuthCodeSchema = SchemaFactory.createForClass(AuthCode);