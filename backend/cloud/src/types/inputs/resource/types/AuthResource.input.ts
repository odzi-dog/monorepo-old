import { IAuthResourceCallback, IAuthResourceDesign, IAuthResourceInput } from '@app/shared';
import { InputType, Field } from '@nestjs/graphql';

// Exporting AuthResourceInput InputType
@InputType()
export class AuthResourceInput implements IAuthResourceInput {
  @Field(type => AuthResourceCallbackInput, { nullable: false })
  callback: IAuthResourceCallback;
  
  @Field(type => AuthResourceDesignInput, { nullable: true })
  design?: IAuthResourceDesign;
};

// In-depth input types
// - Callback
@InputType()
class AuthResourceCallbackInput implements IAuthResourceCallback {
  @Field({ nullable: false })
  url: string;
};

// - Design
@InputType()
class AuthResourceDesignInput implements IAuthResourceDesign {
  @Field({ nullable: true })
  logotype?: string

  // Colors
  @Field({ nullable: true })
  backroundColor?: string

  @Field({ nullable: true })
  containerColor?: string;

  // Texts
  @Field({ nullable: true })
  headerText?: string;
  
  @Field({ nullable: true })
  descriptionText?: string;
  
  @Field({ nullable: true })
  footerText?: string;
};