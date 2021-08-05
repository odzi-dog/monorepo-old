import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/types/models';

import * as resolvers from './resolvers';
import * as services from './services';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'user', schema: UserSchema }])],
  providers: [...Object.values(resolvers), ...Object.values(services)],
  exports: [...Object.values(services)],
})
export class UsersModule {};