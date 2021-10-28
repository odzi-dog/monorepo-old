import { Injectable, CanActivate, ExecutionContext, HttpException, HttpStatus } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";

import { ITokenContext } from "@app/shared";
import { TokenService } from "src/modules/token/services";
import { Request } from 'express';
import { AuthService } from "src/modules/auth/services";

@Injectable()
export class ApiAuthGuard implements CanActivate {
  constructor(
    private readonly authService: AuthService,
    private readonly tokenService: TokenService,
  ) {}

  async canActivate(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context).getContext();
    const { req } = ctx;

    ctx.token = await this.validateToken(req);
    return true;
  };

  async validateToken(req: Request): Promise<ITokenContext | null> {
    // Authorizing
    const secret = req?.headers?.authorization?.replace('Bearer ', '');
    const context = await this.authService.authorizeToken(secret);
    return context;
  };
};