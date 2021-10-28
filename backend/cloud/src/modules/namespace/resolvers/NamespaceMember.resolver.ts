import { Resolver, ResolveField, Parent } from '@nestjs/graphql';
import { PermissionsService } from 'src/modules/permissions/services';
import { ProfilesService } from 'src/modules/profiles/services';
import { Profile, TokenPermissions } from 'src/types/models';
import { NamespaceMemberObject } from 'src/types/objects';

@Resolver(of => NamespaceMemberObject)
export class NamespaceMemberResolver {
  constructor(
    private readonly profilesService: ProfilesService,
    private readonly permissionsService: PermissionsService,
  ) {}

  // resolve member field
  @ResolveField('profile', returns => Profile)
  public async resolveProfile(
    @Parent() parent: NamespaceMemberObject
  ): Promise<Profile> {
    return await this.profilesService.findProfile(parent.profile);
  };

  // resolve permissions field
  @ResolveField('permissions', returns => TokenPermissions)
  public async resolvePermissions(
    @Parent() parent: NamespaceMemberObject,
  ): Promise<TokenPermissions> {
    return await this.permissionsService.fetch(parent.permissions);
  };
};