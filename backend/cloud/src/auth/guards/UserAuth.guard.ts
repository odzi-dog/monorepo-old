import { Injectable, CanActivate, ExecutionContext, HttpException, HttpStatus } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { AuthService } from "src/modules/auth/services";

import { Request } from 'express';
import { ProfilesService } from "src/modules/profiles/services";
export interface IRequest extends Request {
  session: any;
};

@Injectable()
export class UserAuthGuard implements CanActivate {
  constructor(
    private readonly authService: AuthService,
    private readonly profilesService: ProfilesService,
  ) {}

  async canActivate(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context).getContext();
    const { req } = ctx;

    ctx.user = await this.validateUserToken(req);
    if (ctx.user == null) {
      // Trying to get token information from Authorization Header
      ctx.token = await this.validateRobotToken(req)
      if (ctx.token == null) {
        throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
      };
    };
    return true;
  };

  async validateUserToken(req: IRequest) {
    // Validating token
    return null;
  };

  async validateRobotToken(req: IRequest) {
    // Authorizing
    const secret = req.headers.authorization.replace('Bearer ', '');
    const context = await this.authService.authorizeToken(secret);
    return context;
  };
};