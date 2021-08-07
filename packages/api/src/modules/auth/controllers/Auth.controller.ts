import {
  Get,
  Post,
  UseGuards,
  Request,
  Controller,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from '../services';
import { AuthenticatedGuard } from 'src/auth';
import { User, AuthToken } from 'src/types/models';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Post('/login')
  async login(
    @Request() req,
  ): Promise<{ user: User, token: AuthToken }> {
    const user = await this.service.validateUser(req.body.username, req.body.password);
    return user;
  }

  @Get('profile')
  getProfile() {
    
  }
}
