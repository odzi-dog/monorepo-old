import { TRelationalProp, ITokenPermissions } from "@app/shared";

// Exporting INamespaceMember interface
export interface INamespaceMember {
  profile: string;
  permissions: TRelationalProp<ITokenPermissions>;
};