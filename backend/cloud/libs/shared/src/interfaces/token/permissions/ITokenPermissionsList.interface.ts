import { ITokenPermission } from "./ITokenPermission.interface";

// Exporting ITokenPermissions interface
export interface ITokenPermissions {
  version: string;
  list: ITokenPermission[];
};