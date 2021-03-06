import { ETokenPermissionType, ITokenPermissions, ITokenPermission } from '@app/shared';
import { InjectModel } from "@nestjs/mongoose";
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { TokenService } from 'src/modules/token/services';
import { TokenPermissions, TokenPermissionsDocument } from "src/types/models";
import { Model } from "mongoose";
import { ObjectId } from 'src/types';

// ParsedPermissions class
class ParsedPermissions {
  private permissions: ITokenPermissions;

  constructor(permissions: ITokenPermissions) {
    this.permissions = permissions;
  };

  // public has
  public has(permission: ETokenPermissionType): Boolean {
    if (this.permissions.list.find((x) => x.type === permission)) {
      return true;
    } else {
      return false;
    };
  };
};

@Injectable()
export class PermissionsService {
  constructor(
    private readonly tokenService: TokenService,

    @InjectModel('TokenPermissions')
    private readonly TokenPermissions: Model<TokenPermissionsDocument>,
  ) {}

  // public create
  public async create(permissions?: Array<ITokenPermission>) {
    return await (new this.TokenPermissions({ version: 0, list: [...permissions] })).save();
  };

  // public fetch
  public async fetch(id: ObjectId) {
    return await this.TokenPermissions.findOne({ _id: id });
  };

  // public fetchPermissions
  // wtf is this? refactor this fucking piece of shit, please
  public async fetchPermissions(secret: string): Promise<TokenPermissions> {
    // Fetching token instance
    const tokenInstance = await this.tokenService.fetchToken(secret);

    if (tokenInstance) {
      // Fetching permissions instance
      let permissionsInstance = await this.TokenPermissions.findOne({ _id: tokenInstance.permissions });
      if (!permissionsInstance) throw new HttpException('PermissionsInstance for this token does not exist', HttpStatus.BAD_REQUEST);

      // Returning token permissions
      return permissionsInstance;
    } else {
      throw new HttpException('Invalid token in TokenService.fetchPermissions call', HttpStatus.BAD_REQUEST);
    };
  };

  // public parse
  public parse(permissions: ITokenPermissions) {
    return new ParsedPermissions(permissions);
  };
};