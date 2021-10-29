import { TRelationalProp, ITokenPermissions } from '../../';

// Exporting INamespaceMember interface
export interface INamespaceMember {
  profile: string;
  permissions: TRelationalProp<ITokenPermissions>;
};