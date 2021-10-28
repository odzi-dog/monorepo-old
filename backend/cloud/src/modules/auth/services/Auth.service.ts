import { Injectable } from '@nestjs/common';
import { ITokenContext, ETokenType, ETokenPermissionType, ITokenPermission } from '@app/shared';
import { ProfilesService } from 'src/modules/profiles/services';
import { TokenService } from 'src/modules/token/services';
import { PermissionsService } from 'src/modules/permissions/services';
import { Profile } from 'src/types/models';

@Injectable()
export class AuthService {
  constructor(
    private readonly profilesService: ProfilesService,
    private readonly permissionsService: PermissionsService,
    private readonly tokenService: TokenService,
  ) {}

  // public authorizeToken
  public async authorizeToken(
    secret: string,
  ): Promise<ITokenContext | null> {
    // Fetching token
    const token = await this.tokenService.fetchToken(secret);

    if (token) {
      // Token information
      const secret = token.secret;
      const namespaces = [];
      const permissions = (await this.permissionsService.fetchPermissions(token.secret));
      const profile: Profile | null = token.profile ? await this.profilesService.findProfile(token.profile) : null;

      // Checking token type
      if (permissions.list.find((x) => x.type === ETokenPermissionType.USER_TOKEN)) {
        // Fetching user's namespaces and adding them to
        // namespaces array
        // +todo

        // Temporary
        // +todo fix
        permissions.list.push(
          ...Object.keys(ETokenPermissionType).map((x) => {
            return <ITokenPermission>{
              type: x
            }
          })
        );
      };

      // Returning ITokenContext
      return <ITokenContext>{
        secret,
        namespaces,
        profile,
        permissions,
      };
    } else {
      return null;
    };
  };
};