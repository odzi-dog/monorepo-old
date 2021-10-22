import { ObjectType, Field, InputType } from '@nestjs/graphql';
import { ETokenPermissionType, ITokenPermission } from '@app/shared';

@ObjectType()
export class TokenPermission implements ITokenPermission {
  @Field(type => ETokenPermissionType)
  type: ETokenPermissionType
};