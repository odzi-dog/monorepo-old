// Importing
import { Resolver, Query, Args, Mutation, Context } from '@nestjs/graphql';
import { AuthResourceObject } from 'src/types/objects';
import { AuthResourceService } from 'src/modules/resource/types/AuthResource/services';
import { HttpException, HttpStatus, UseGuards } from '@nestjs/common';
import { UserAuthGuard } from 'src/auth';
import { ETokenPermissionType, ITokenContext } from '@app/shared';
import { AuthResourceInput } from 'src/types/inputs';
import { PermissionsService } from 'src/modules/permissions/services';

// Exporting AuthResourceResolver
@Resolver(of => AuthResourceObject)
export class AuthResourceResolver {
  constructor(
    private readonly service: AuthResourceService,
    private readonly permissionsService: PermissionsService,
  ) {}
  
  // Public Query getAuthResource
  @Query(returns => AuthResourceObject)
  public async getAuthResource(
    @Args('id') id: string
  ): Promise<AuthResourceObject> {
    return await this.service.fetch(id);
  };

  // Mutation createAuthResource
  @UseGuards(UserAuthGuard)
  @Mutation(returns => AuthResourceObject)
  public async CreateAuthResource(
    @Context('token') token: ITokenContext,
    
    // Namespace
    @Args('namespace') namespaceId: string,

    // AuthResourceInput
    @Args('config') config: AuthResourceInput,  
  ) {
    // Checking permissions
    const permissions = this.permissionsService.parse(token.permissions);
    if (permissions.has(ETokenPermissionType.CREATE_RESOURCE)) {
      // Creating new resource
      return await this.service.create(namespaceId, config);
    } else {
      throw new HttpException('Insufficient permissions', HttpStatus.FORBIDDEN);
    };
  };
};