// Importing dependencies
import { IResourceMember } from '@app/shared';
import { ObjectType, Field } from '@nestjs/graphql';
import { TokenPermissions } from 'src/types/models';

// Exporting ResourceMemberObject
@ObjectType()
export class ResourceMemberObject implements IResourceMember {
  @Field({ nullable: false })
  memberId: string;

  @Field(type => TokenPermissions)
  permissions
};