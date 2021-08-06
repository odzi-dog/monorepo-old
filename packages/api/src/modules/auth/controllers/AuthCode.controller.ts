import {
  Get,
  Query,
  Controller,
} from '@nestjs/common';
import { ApiTags, ApiQuery } from '@nestjs/swagger';
import { UsersService } from 'src/modules/user/services';
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
  ): Promise<AuthCode> {
    const user = await this.usersService.findUserAccount(null, userEmail);

    if (user) {
      // Creating user authCode
      return await this.service.createAuthCode(user);
    } else {
      // Creating guest authCode
      return await this.service.createRegisterCode(userEmail);
    };
  }
}
