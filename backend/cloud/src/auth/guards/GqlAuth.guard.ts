import { Injectable, CanActivate, ExecutionContext, HttpException, HttpStatus } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";

import { Request } from 'express';
import { ProfilesService } from "src/modules/profiles/services";
export interface IRequest extends Request {
  session: any;
};

@Injectable()
export class GqlAuthGuard implements CanActivate {
  constructor(
    private readonly profilesService: ProfilesService,
  ) {}

  async canActivate(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context).getContext();
    const { req } = ctx;

    ctx.user = await this.validateToken(req);
    if (ctx.user == undefined) {
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
    };
    return true;
  };

  async validateToken(req: IRequest) {
    const profile = await this.profilesService.findProfile(req?.session?.uid);
    return profile;
  };
};