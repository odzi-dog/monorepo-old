import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../../../types/models';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('user') private userModel: Model<UserDocument>,
  ) {}

  // 
  // findUserAccount
  async findUserAccount(userId?: number, email?: string): Promise<User | undefined> {
    const user = await this.userModel.findOne({ 
      $or: [ 
        userId ? { id: userId } : {}, 
        email ? { email: email } : {},
      ],
    });
    
    return (user?.id === userId || user?.email === email) ? user : undefined;
  }
};