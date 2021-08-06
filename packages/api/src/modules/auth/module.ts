import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema, AuthTokenSchema, AuthCodeSchema } from '../../types/models';
import { MailService } from '../mail/services';

import { UsersModule } from '../user/module';

import * as services from './services';
import * as controllers from './controllers';

import { PassportModule } from '@nestjs/passport';  
import { LocalStrategy } from 'src/auth';

import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../../auth';
import { SessionSerializer } from 'src/auth';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
    MongooseModule.forFeature([
      { 
        name: 'user', 
        schema: UserSchema,
      },
      {
        name: 'token',
        schema: AuthTokenSchema,
      },
      {
        name: 'authCode',
        schema: AuthCodeSchema,
      }])
  ],
  providers: [...Object.values(services), LocalStrategy, SessionSerializer, MailService],
  controllers: [...Object.values(controllers)],
})
export class AuthModule {};