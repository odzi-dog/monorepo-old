// Importing dependencies
import { INamespaceMember } from '@app/shared';
import { ObjectType, Field } from '@nestjs/graphql';
import { Profile, TokenPermissions } from 'src/types/models';

// Exporting NamespaceMemberObject
@ObjectType()
export class NamespaceMemberObject implements INamespaceMember {
  @Field(type => Profile, { nullable: false })
  profile: string;

  @Field(type => TokenPermissions)
  permissions
};