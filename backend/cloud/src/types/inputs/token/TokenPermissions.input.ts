import { InputType, Field } from '@nestjs/graphql';
import { TokenPermissionInput } from './TokenPermission.input';

@InputType()
export class TokenPermissionsInput {
  @Field(type => [TokenPermissionInput])
  list: TokenPermissionInput[];
};