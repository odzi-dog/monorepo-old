import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Token, TokenDocument, TokenPermissionsDocument, TokenPermissions } from "src/types/models";
import { ETokenType, ITokenPermission } from "@app/shared";
import { Model } from "mongoose";

@Injectable()
export class TokenService {
  constructor(
    @InjectModel('Token')
    private readonly Token: Model<TokenDocument>,

    @InjectModel('TokenPermissions')
    private readonly TokenPermissions: Model<TokenPermissionsDocument>,
  ) {}

  // public createUserToken
  public async createUserToken(permissions?: Array<ITokenPermission>) {
    // Creating permissions instance
    const permissionsInstance = await (new this.TokenPermissions({ version: 0, list: [...permissions] })).save();

    // Creating token instance
    const tokenInstance = new this.Token({
      type: ETokenType.USER,
      secret: this._randomIdentifier(16),
      permissions: permissionsInstance._id,
    });

    return await tokenInstance.save();
  };

  // public fetchToken
  public async fetchToken(secret: string): Promise<Token> {
    return await this.Token.findOne({ secret });
  };

  // private _randomIdentifier
  private _randomIdentifier(length = 12): string {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    };

    return result;
  };
};