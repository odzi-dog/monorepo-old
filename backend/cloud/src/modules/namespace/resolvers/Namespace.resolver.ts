import { ETokenPermissionType, ITokenContext } from '@app/shared';
import { HttpException, HttpStatus, UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver, Context } from '@nestjs/graphql';
import { UserAuthGuard } from 'src/auth';
import { PermissionsService } from 'src/modules/permissions/services';
import { Namespace } from 'src/types/models';
import { NamespaceService } from '../services';

@Resolver(of => Namespace)
export class NamespaceResolver {
  constructor(
    private readonly namespaceService: NamespaceService,
    private readonly permissionsService: PermissionsService,
  ) {}

  // Query

  // Mutation
  @UseGuards(UserAuthGuard)
  @Mutation(returns => Namespace)
  public async CreateNamespace(
    @Args('slug') slug: string,
    @Context('token') token: ITokenContext,
  ) {
    // Checking token Permissions
    const permissions = this.permissionsService.parse(token.permissions);
    if (permissions.has(ETokenPermissionType.CREATE_NAMESPACE)) {
      // Creating new namespace with this slug
      return await this.namespaceService.create(token.profile._id, { slug });
    } else {
      throw new HttpException('Insufficient token permission', HttpStatus.FORBIDDEN);
    };
  };
};