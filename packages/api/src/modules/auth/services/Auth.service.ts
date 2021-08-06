import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { UsersService } from 'src/modules/user/services';
import { uuid } from 'uuidv4';

import { UserDocument, AuthTokenDocument, AuthCodeDocument, AuthCode, User, AuthToken } from '../../../types/models'
import { Model } from 'mongoose';
import { AuthCodeService } from './AuthCode.service';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel('user') private userModel: Model<UserDocument>,
    @InjectModel('token') private tokenModel: Model<AuthTokenDocument>,
    @InjectModel('authCode') private authCodeModel: Model<AuthCodeDocument>,
    
    private usersService: UsersService,
    private authCodeService: AuthCodeService,
  ) {}

  async validateUser(email: string, code: number): Promise<{ user: User, token: AuthToken } | User> {
    // Checking authCode
    const authCode = await this.authCodeService.findAuthCode(code);

    if (authCode) {
      // Finding user account
      const user = await this.usersService.findUserAccount(null, email);

      if (user) {
        // Authorize user using this
        // auth code
        return await this._authorizeAccount(user, code);
      } else {
        // Create new user using this auth code
        return await this._registerAccount(email, code)
      };
    } else {
      throw new BadRequestException();
    };
  }

  // 
  // authorizeAccount
  private async _authorizeAccount(user: User, code: number): Promise<{ user: User, token: AuthToken }> {
    // Getting account and code
    const authCode = await this.authCodeService.findAuthCode(code);
    
    if ((authCode && user) && (user.id === authCode.userId || user.email === authCode.userEmail)) {
      // Clearing authCode
      await this.authCodeModel.deleteOne({ id: code });
      
      // Creating token
      const token = new this.tokenModel({ id: uuid(), userId: user.id || user.email });
      await token.save();

      return { user, token };
    } else {
      throw new BadRequestException();
    };
  };

  // 
  // registerAccount
  private async _registerAccount(email: string, code?: number): Promise<{ user: User, token: AuthToken } | User> {
    const account = new this.userModel({ email: email });
    const user = await account.save();

    // Returning user account
    if (code) {
      return await this._authorizeAccount(user, code);
    } else {
      return await this.usersService.findUserAccount(null, email);
    };
  };
};
