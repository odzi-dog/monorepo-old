import { ETokenPermissionType, ITokenContext } from '@app/shared';
import { HttpException, HttpStatus, UseGuards } from '@nestjs/common';
import { Query, Resolver, ResolveField, Parent, Mutation, Args, Context } from '@nestjs/graphql';
import { ApiAuthGuard } from 'src/auth';
import { PermissionsService } from 'src/modules/permissions/services';
import { ProfilesService } from 'src/modules/profiles/services';
import { TokenService } from 'src/modules/token/services';
import { ObjectId } from 'src/types';
import { TokenPermissionsInput } from 'src/types/inputs';
import { Profile, Token, TokenPermissions } from 'src/types/models';

@Resolver(of => Token)
export class TokenResolver {
  constructor(
    private readonly permissionsService: PermissionsService,
    private readonly profilesService: ProfilesService,
    private readonly tokenService: TokenService,
  ) {}

  // Query token
  @UseGuards(ApiAuthGuard)
  @Query(returns => Token)
  public async fetchToken(
    @Args('secret', { nullable: true }) secret: string,
    @Context('token') token?: ITokenContext
  ) {
    // Checking token secret
    if (!secret && !token) throw new HttpException('Invalid token', HttpStatus.BAD_REQUEST);

    // Fetching token
    return await this.tokenService.fetchToken(secret ?? token.secret);
  };

  // resolve permissions field
  @ResolveField('permissions', returns => TokenPermissions)
  public async resolvePermissions(
    @Parent() parent: Token
  ): Promise<TokenPermissions> {
    return await this.permissionsService.fetchPermissions(parent.secret);
  };

  // resolve namespaces field

  // resolve profile field
  @ResolveField('profile', returns => Profile)
  public async resolveProfile(
    @Parent() parent: Token
  ) {
    return await this.profilesService.findProfile(parent.profile);
  };

  // ReplicateToken mutation
  @UseGuards(ApiAuthGuard)
  @Mutation(returns => Token)
  public async ReplicateToken(
    @Context('token') tokenContext: ITokenContext,
    @Args('permissions', { nullable: true }) newPermissions?: TokenPermissionsInput,
  ) {
    // Checking permissions
    const permissions = this.permissionsService.parse(tokenContext.permissions);
    if (permissions.has(ETokenPermissionType.REPLICATE_TOKEN)) {
      // Replicating token and returning it
      const token = await this.tokenService.createUserToken(tokenContext.profile?._id, newPermissions?.list ?? []);
      return token;
    } else {
      throw new HttpException('Insufficient permissions', HttpStatus.UNAUTHORIZED);
    };
  };
};