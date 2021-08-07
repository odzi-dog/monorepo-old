import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../modules/auth/services';
import { AuthToken, User } from 'src/types/models';

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
    
    let returnUser = <User & { token: AuthToken }>user.user;
    returnUser.token = user.token;
    return returnUser;
  }
}