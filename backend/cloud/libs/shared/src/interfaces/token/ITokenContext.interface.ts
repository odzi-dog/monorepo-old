import { IProfile, ITokenPermissions, TRelationalProp } from '@app/shared';

// Exporting ITokenContext interface
export interface ITokenContext {
  secret: string;
  profile?: IProfile;
  namespaces: Array<string>;
  permissions: ITokenPermissions;
};