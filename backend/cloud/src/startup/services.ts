import * as AuthServices from 'src/modules/auth/services';
import * as ProfilesServices from 'src/modules/profiles/services';
import * as MailServices from 'src/modules/mail/services';
import * as NamespaceServices from 'src/modules/namespace/services';
import * as TokenServices from 'src/modules/token/services';
import * as PermissionsServices from 'src/modules/permissions/services';

export const Services = [
  ...Object.values(AuthServices),
  ...Object.values(ProfilesServices),
  ...Object.values(MailServices),
  ...Object.values(NamespaceServices),
  ...Object.values(TokenServices),
  ...Object.values(PermissionsServices),
];