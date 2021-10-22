import { InputType, Field } from '@nestjs/graphql';
import { ETokenPermissionType, ITokenPermission } from '@app/shared';

@InputType()
export class TokenPermissionInput implements ITokenPermission {
  @Field(type => ETokenPermissionType)
  type: ETokenPermissionType
};