import { Injectable } from '@nestjs/common';
import { AuthToken, AuthTokenDocument } from 'src/types/models';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TokenService {
  constructor(
    @InjectModel('token') private token: Model<AuthTokenDocument>,
  ) {}

  // getToken
  async getToken(token: string): Promise<AuthToken> {
    return this.token.findOne({ id: token });
  }
};