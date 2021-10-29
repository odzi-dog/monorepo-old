import { IProfile, IToken } from '../../';

// Exporting IAuthResponse interface
export interface IAuthResponse {
  user: IProfile;
  token: IToken;
};