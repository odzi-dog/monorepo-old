// Importing dependencies
import { IAuthResourceCallback, IAuthResourceConfig, IAuthResourceDesign } from '@app/shared';
import { ObjectType, Field } from '@nestjs/graphql';

// Exporting AuthResourceConfigObject
@ObjectType()
export class AuthResourceConfigObject implements IAuthResourceConfig {
  @Field(type => AuthResourceCallbackObject)
  callback: IAuthResourceCallback;

  @Field(type => AuthResourceDesignObject)
  design: IAuthResourceDesign;
};

// In-Depth objects
// - Callback
@ObjectType()
class AuthResourceCallbackObject implements IAuthResourceCallback {
  @Field({ nullable: false })
  url: string;
};

// - Design
@ObjectType()
class AuthResourceDesignObject implements IAuthResourceDesign {
  @Field({ nullable: true })
  logotype?: string

  // Colors
  @Field({ nullable: true })
  backgroundColor?: string

  @Field({ nullable: true })
  containerColor?: string;

  @Field({ nullable: true })
  accentColor?: string;

  // Texts
  @Field({ nullable: true })
  headerText?: string;
  
  @Field({ nullable: true })
  descriptionText?: string;
  
  @Field({ nullable: true })
  footerText?: string;
};