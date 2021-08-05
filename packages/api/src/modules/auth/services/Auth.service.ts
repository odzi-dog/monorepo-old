import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';

import { UsersService } from 'src/modules/user/services';

import { UserDocument, AuthTokenDocument } from '../../../types/models'
import { Model } from 'mongoose';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel('user') userModel: Model<UserDocument>,
    @InjectModel('token') tokenModel: Model<AuthTokenDocument>,
  
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(userId: number): Promise<any> {
    const user = await this.usersService.findOneById(userId);
    return user;
  }

  async login(user: any) {
    const payload = { username: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
};
