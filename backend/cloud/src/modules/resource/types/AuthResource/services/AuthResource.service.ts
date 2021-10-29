// Importing
import { EResourceType } from '@app/shared';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { NamespaceService } from 'src/modules/namespace/services';
import { ResourceService } from 'src/modules/resource/services';
import { ObjectId } from 'src/types';
import { AuthResourceInput } from 'src/types/inputs';
import { AuthResourceObject } from 'src/types/objects';

// Exporting AuthResourceService
@Injectable()
export class AuthResourceService {
  constructor(
    private readonly resourceService: ResourceService,
    private readonly namespaceService: NamespaceService,
  ) {}

  // public fetch
  public async fetch(id: ObjectId): Promise<AuthResourceObject> {
    // Fetching this AuthResource
    const resource = await this.resourceService.fetchOne(EResourceType.AUTH_RESOURCE, id);

    // Fetching namespace
    const namespace = await this.resourceService.fetchNamespace(id);

    // "Translating" this resource into AuthResourceObject
    const authResource: AuthResourceObject = {
      _id: id,
      config: {
        callback: resource.config.callback,
        design: resource.config.design ?? {}
      },
      members: resource.members,
      namespace
    };

    return authResource;
  };

  // public create
  public async create(
    namespaceId: ObjectId,
    config: AuthResourceInput,
  ): Promise<AuthResourceObject> {
    // Fetching this namespace
    const namespace = await this.namespaceService.fetchOne(namespaceId);

    if (!namespace) throw new HttpException('This namespace doesn\'t exists', HttpStatus.NOT_FOUND);

    // Creating new resource
    const resource = await this.resourceService.create(EResourceType.AUTH_RESOURCE, config);

    // Assigning this resource to this namespace
    this.namespaceService.assignResource(namespace._id, resource);

    // Converting this resource to
    const authResource: AuthResourceObject = {
      _id: resource._id,
      config,

      // +todo
      members: [],
      namespace,
    };

    return authResource;
  };
};