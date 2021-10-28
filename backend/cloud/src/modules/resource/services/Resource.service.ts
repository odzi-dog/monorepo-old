// Importing dependencies
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Namespace, Resource, ResourceDocument } from "src/types/models";
import { Model } from 'mongoose';
import { EResourceType, TResourceConfig } from "@app/shared";
import { ObjectId } from "src/types";
import { NamespaceService } from "src/modules/namespace/services";

// Exporting ResourceService
@Injectable()
export class ResourceService {
  constructor(
    @InjectModel('Resource')
    private readonly Resource: Model<ResourceDocument>,

    private readonly namespaceService: NamespaceService,
  ) {}

  // public fetchOne
  public async fetchOne(type: EResourceType, id: ObjectId): Promise<ResourceDocument> {
    return await this.Resource.findOne({ type, _id: id });
  };

  // public fetchNamespace
  public async fetchNamespace(id: ObjectId): Promise<Namespace> {
    return await this.namespaceService.findResourceNamespace(id);
  };

  // public create
  public async create(type: EResourceType, config: TResourceConfig) {
    const resource = new this.Resource({
      type,
      config,
      members: [],
    });
    return await resource.save();
  };
};