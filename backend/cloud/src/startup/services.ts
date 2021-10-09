import * as AuthServices from 'src/modules/auth/services';
import * as ProfilesServices from 'src/modules/profiles/services';

export const Services = [
  ...Object.values(AuthServices),
  ...Object.values(ProfilesServices),
];