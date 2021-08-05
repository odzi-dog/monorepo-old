import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../../../types/models';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('user') private userModel: Model<UserDocument>,
  ) {}

  async findOneById(id: number) {
    return this.userModel.findOne({ id });
  };
};