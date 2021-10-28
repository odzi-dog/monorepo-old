// Importing dependencies
import { ObjectType, Field } from '@nestjs/graphql';
import { IResource, IAuthResourceConfig, IResourceMember, INamespace } from "@app/shared";
import { AuthResourceConfigObject } from 'src/types/objects';
import { ObjectId } from 'src/types';

// Exporting AuthResource object
@ObjectType()
export class AuthResourceObject implements Omit<IResource<IAuthResourceConfig>, 'type'> {
  @Field(type => String, { nullable: false })
  _id: ObjectId;
  
  @Field(type => AuthResourceConfigObject, { nullable: false })
  config: IAuthResourceConfig;

  // +todo
  namespace: INamespace;
  members: IResourceMember[];
};