import { TRelationalProp, ITokenPermissions } from "@app/shared";

// Exporting IResourceMember interface
export interface IResourceMember {
  memberId: string;
  permissions: TRelationalProp<ITokenPermissions>;
};