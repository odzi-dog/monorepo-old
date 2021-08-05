import {
  Get,
  Post,
  UseGuards,
  Request,
  Response,
  Body,
  Controller,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from '../services';
import { LoginGuard } from 'src/auth';
import { AuthenticatedGuard } from 'src/auth';
import * as passport from 'passport';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @UseGuards(LoginGuard)
  @Post('/login')
  async login(
    @Request() req,
  ): Promise<any> {
    return req.user;
  }

  @UseGuards(AuthenticatedGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
