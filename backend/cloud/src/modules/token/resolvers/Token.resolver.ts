import { ETokenPermissionType, ITokenContext } from '@app/shared';
import { HttpException, HttpStatus, UseGuards } from '@nestjs/common';
import { Resolver, ResolveField, Parent, Mutation, Args, Context } from '@nestjs/graphql';
import { ApiAuthGuard } from 'src/auth';
import { PermissionsService } from 'src/modules/permissions/services';
import { TokenService } from 'src/modules/token/services';
import { TokenPermissionsInput } from 'src/types/inputs';
import { Token, TokenPermissions } from 'src/types/models';

@Resolver(of => Token)
export class TokenResolver {
  constructor(
    private readonly permissionsService: PermissionsService,
    private readonly tokenService: TokenService,
  ) {}

  // resolve permissions field
  @ResolveField('permissions', returns => TokenPermissions)
  public async resolvePermissions(
    @Parent() parent: Token
  ): Promise<TokenPermissions> {
    return this.permissionsService.fetchPermissions(parent.secret);
  };

  // resolve namespaces field

  // ReplicateToken mutation
  @UseGuards(ApiAuthGuard)
  @Mutation(returns => Token)
  public async ReplicateToken(
    @Context('token') token: ITokenContext,
    @Args('permissions', { nullable: true }) newPermissions?: TokenPermissionsInput,
  ) {
    // Checking permissions
    const permissions = this.permissionsService.parse(token.permissions);
    if (permissions.has(ETokenPermissionType.REPLICATE_TOKEN)) {
      // Replicating token and returning it
      const token = await this.tokenService.createUserToken(newPermissions?.list ?? []);
      return token;
    } else {
      throw new HttpException('Insufficient permissions', HttpStatus.UNAUTHORIZED);
    };
  };
};