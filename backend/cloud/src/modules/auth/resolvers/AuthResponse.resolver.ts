import { Resolver, ResolveField, Parent } from '@nestjs/graphql';
import { TokenService } from 'src/modules/token/services';
import { AuthResponse } from 'src/types/objects';
import { Profile, Token } from 'src/types/models';

@Resolver(of => AuthResponse)
export class AuthResponseResolver {
  constructor(
    private readonly tokenService: TokenService,
  ) {}

  // resolve user field
  @ResolveField('user', type => Profile)
  public resolveUser(
    @Parent() parent: AuthResponse
  ) {
    return parent.user;
  };

  // resolve token field
  @ResolveField('token', type => Token)
  public resolveToken(
    @Parent() parent: AuthResponse
  ) {
    return parent.token;
  };
};