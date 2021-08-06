import { Resolver, Query, Args, Int, ResolveField, Parent } from "@nestjs/graphql";
import { UsersService } from '../services';
import { User } from '../../../types/models';

@Resolver(of => User)
export class UsersResolver{
  constructor(
    private service: UsersService
  ) {}

  @Query(returns => User)
  async user(@Args('id', { type: () => Int }) id: number) {
    return this.service.findUserAccount(id);
  };
}