import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../modules/auth/services';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(email: string, authCode: string): Promise<any> {
    const user = await this.authService.validateUser(email, Number(authCode));
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}