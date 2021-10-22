import { IProfile, IToken } from '@app/shared';

// Exporting IAuthResponse interface
export interface IAuthResponse {
  user: IProfile;
  token: IToken;
};