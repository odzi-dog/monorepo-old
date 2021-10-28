import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Namespace, NamespaceDocument, ResourceDocument } from 'src/types/models';
import { ObjectId } from 'src/types';
import { ETokenPermissionType, INamespaceMember, ITokenPermission } from '@app/shared';
import { PermissionsService } from 'src/modules/permissions/services';

// Exporting NamespaceService
@Injectable()
export class NamespaceService {
  constructor(
    @InjectModel('Namespace')
    private readonly Namespace: Model<NamespaceDocument>,

    private readonly permissionsService: PermissionsService,
  ) {}

  // public fetchOne
  public async fetchOne(id?: ObjectId) {
    return await this.Namespace.findOne({ _id: id }).exec();
  };

  // public create
  public async create(
    profileId: ObjectId,
    options: {
      slug: string,
    },
  ): Promise<Namespace> {
    // Creating new namespace
    const namespace = await (new this.Namespace({
      slug: options.slug,
      permissions: [],
      members: [],
    })).save();

    // Adding this user to this namespace
    return await this.assignUser(profileId, namespace._id, [{ type: ETokenPermissionType.NAMESPACE_ADMIN }]);
  };

  // public findResourceNamespace
  public async findResourceNamespace(resourceId: ObjectId): Promise<Namespace> {
    return await this.Namespace.findOne({ resources: { $in: [resourceId] } });
  };

  // public assignUser
  public async assignUser(profileId: ObjectId, namespaceId: ObjectId, permissions?: Array<ITokenPermission>) {
    // Fetching this namespace
    const namespace = await this.Namespace.findOne({ _id: namespaceId });

    if (namespace) {
      // Creating permissions object
      const permissionsInstance = await this.permissionsService.create(permissions ?? []);

      // Updating Namespace object
      const member: INamespaceMember = {
        profile: String(profileId),
        permissions: permissionsInstance._id,
      };
      if (namespace.members.find((x) => x.profile == profileId)) {
        Object.assign(namespace.members.find((x) => x.profile == profileId), member);
      } else {
        namespace.members.push(member);
      };

      await namespace.updateOne(namespace);
      return this.fetchOne(namespace._id);
    } else {
      throw new HttpException('Namespace not found', HttpStatus.NOT_FOUND);
    };
  };

  // public assignResourceWithId
  public async assignResource(namespaceId: ObjectId, resource: ResourceDocument) {
    // Fetching this namespace
    const namespace = await this.fetchOne(namespaceId);
    if (await this.findResourceNamespace(resource._id)) throw new HttpException('This resource already assigned to a namespace', HttpStatus.BAD_REQUEST);

    // +Do some Resource checks in future? I dunno

    // Adding this resourceId to resources array
    namespace.resources.push(resource._id);
    return await namespace.updateOne(namespace);
  };
};