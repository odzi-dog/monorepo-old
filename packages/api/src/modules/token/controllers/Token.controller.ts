import {
  Get,
  Param,
  Controller,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TokenService } from 'src/modules/token/services';
import { AuthToken } from 'src/types/models';

@ApiTags('Token')
@Controller()
export class TokenController {
  constructor(
    private service: TokenService,
  ) {}

  @Get('/:token')
  async get(
    @Param('token') token: string,
  ): Promise<AuthToken> {
    return this.service.getToken(token);
  };
};