import { ITokenPermissions } from '@app/shared';

// Exporting ITokenContext interface
export interface ITokenContext {
  secret: string;
  namespaces: Array<string>;
  permissions: ITokenPermissions;
};