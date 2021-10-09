import { Controller, Get, Param, Session } from '@nestjs/common';
import { ApiTags, ApiParam } from '@nestjs/swagger';
import { AuthService } from 'src/modules/auth/services';

@ApiTags('Auth')
@Controller()
export class AuthController {
  constructor(
    private readonly service: AuthService,
  ) {}

  @ApiParam({
    name: 'token',
    type: String,
    required: true,
  })
  @Get('/login/:token')
  async login(
    @Param('token') token: string,
    @Session() session,
  ): Promise<unknown> {
    const profile = await this.service.authorizeUser(token);

    // Saving profile id into session 
    if (profile) {
      session.uid = profile._id;
    };

    // Returning profile information
    return profile;
  };
};