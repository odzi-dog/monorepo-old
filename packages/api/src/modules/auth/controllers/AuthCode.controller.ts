import {
  Get,
  Query,
  Param,
  Controller,
  NotFoundException,
} from '@nestjs/common';
import { ApiTags, ApiQuery, ApiParam } from '@nestjs/swagger';
import { UsersService } from 'src/modules/user/services';
import { AuthCodeType } from 'src/types/enums';
import { AuthCode } from 'src/types/models';
import { AuthCodeService } from '../services';

@ApiTags('AuthCode')
@Controller('auth/code')
export class AuthCodeController {
  constructor(
    private readonly service: AuthCodeService,
    private readonly usersService: UsersService,
  ) {}

  @Get('/')
  @ApiQuery({
    type: String,
    name: "email",
    example: "soglacen@gmail.com",
    required: true
  })
  async get(
    @Query('email') userEmail: string,
  ): Promise<{ type: AuthCodeType, userId?: string | number, sent: Boolean }> {
    const user = await this.usersService.findUserAccount(null, userEmail);

    if (user) {
      // Creating user authCode
      return { type: AuthCodeType.AUTH, userId: user.id, sent: await this.service.createAuthCode(user) };
    } else {
      // Creating guest authCode
      return { type: AuthCodeType.REGISTER, sent: await this.service.createRegisterCode(userEmail) };
    };
  }

  @Get('/:code')
  @ApiQuery({
    type: String,
    name: 'email',
    required: true
  })
  @ApiParam({
    type: Number,
    name: 'code',
    required: true,
  })
  async check(
    @Param('code') code: number,
    @Query('email') email: string, 
  ): Promise<AuthCode> {
    const authCode = await this.service.findAuthCode(code);

    if (authCode && (authCode.userEmail === email)) {
      return authCode;
    } else {
      throw new NotFoundException();
    };
  };
}
