import { Resolver, Mutation, Args } from '@nestjs/graphql'
import { AuthRequestService } from 'src/modules/auth/services';
import { Profile, AuthRequest } from 'src/types/models';
import { AuthResponse } from 'src/types/objects';

@Resolver(of => Profile)
export class AuthResolver {
  constructor(
    private readonly authRequest: AuthRequestService,
  ) {}

  // RequestAuth mutation
  @Mutation(returns => AuthRequest)
  public async RequestAuth(
    @Args('email') email: string,
  ): Promise<AuthRequest> {
    return await this.authRequest.request(email);
  };

  // ProcessAuthentication mutation
  @Mutation(returns => AuthResponse)
  public async ProcessAuthentication(
    @Args('email') email: string,
    @Args('code') code: string,
  ): Promise<AuthResponse> {
    return await this.authRequest.process(email, code);
  };
};