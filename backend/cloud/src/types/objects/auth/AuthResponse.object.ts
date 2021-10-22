import { ObjectType, Field } from '@nestjs/graphql';
import { IAuthResponse } from '@app/shared';
import { Profile, Token } from 'src/types/models';

@ObjectType()
export class AuthResponse implements IAuthResponse {
  @Field(type => Profile)
  user: Profile;
  
  @Field(type => Token)
  token: Token;
};