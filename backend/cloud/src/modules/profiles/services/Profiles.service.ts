import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Profile, ProfileDocument } from 'src/types/models';
import { IProfile } from '@app/shared';
import { ObjectId } from 'src/types';
import * as mongoose from 'mongoose';

@Injectable()
export class ProfilesService {
  constructor(
    @InjectModel('profile') private profileModel: Model<ProfileDocument>,
  ) {}

  // findProfile
  async findProfile(id?: ObjectId): Promise<Profile | undefined> {
    const _id = typeof id === "string" ? mongoose.Types.ObjectId(id) : id;
    return await this.profileModel.findOne({ _id: id  });
  };

  // findProfileByEmail
  async findProfildByEmail(email: string) {
    return await this.profileModel.findOne({ email });
  };

  // createProfile
  async createProfile(options: { email: string, username?: string }) {
    const profile = new this.profileModel(<IProfile>{ email: options.email, username: options.username });
    return await profile.save();
  };
};