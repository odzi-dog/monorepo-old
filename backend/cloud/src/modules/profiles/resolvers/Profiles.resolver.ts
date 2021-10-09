import { Resolver, Query, Args, Context } from '@nestjs/graphql';
import { ProfilesService } from 'src/modules/profiles/services';
import { Profile } from 'src/types/models';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/guards';

@Resolver(of => Profile)
export class ProfilesResolver{
  constructor(
    private service: ProfilesService,
  ) {}

  @UseGuards(GqlAuthGuard)
  @Query(returns => Profile)
  async me(@Context('user') user: Profile) {
    return user;
  };

  @Query(returns => Profile)
  async profile(@Args('uid', { type: () => String }) uid: string) {
    return this.service.findProfile(uid);
  };
}