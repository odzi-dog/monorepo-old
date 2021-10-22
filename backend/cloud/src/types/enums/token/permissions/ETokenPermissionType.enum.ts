import { ETokenPermissionType } from '@app/shared';
import { registerEnumType } from '@nestjs/graphql';

registerEnumType(ETokenPermissionType, { name: 'ETokenPermissionType' });