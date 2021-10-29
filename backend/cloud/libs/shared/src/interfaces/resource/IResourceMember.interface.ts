import { TRelationalProp, ITokenPermissions } from "../../";

// Exporting IResourceMember interface
export interface IResourceMember {
  memberId: string;
  permissions: TRelationalProp<ITokenPermissions>;
};