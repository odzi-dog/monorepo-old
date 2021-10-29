import { IProfile, ITokenPermissions } from '../';

// Exporting ITokenContext interface
export interface ITokenContext {
  secret: string;
  profile?: IProfile;
  namespaces: Array<string>;
  permissions: ITokenPermissions;
};