import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ProfilesService } from 'src/modules/profiles/services';
import axios from 'axios';

@Injectable()
export class AuthService {
  constructor(
    private readonly profilesService: ProfilesService,
  ) {}

  // authorizeUser
  async authorizeUser(tokenId: string) {
    const token = await this.fetchToken(tokenId);
    
    if (token.userId == null) throw new HttpException('Invalid Payload', HttpStatus.BAD_REQUEST)
    
    // Getting information about this user
    const email = token.userId;

    // Checking if this user exists
    let profile = await this.profilesService.findProfildByEmail(email);
    if (!profile) {
      // Creating new profile
      profile = await this.profilesService.createProfile({ email });
    };

    return profile;
  };

  // fetchToken
  async fetchToken(token: string) {
    return await axios.get(`https://api.odzi.dog:3000/${token}`)
      .then((res) => res.data)
  };
};