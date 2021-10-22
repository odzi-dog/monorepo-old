import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { MailService } from 'src/modules/mail/services';
import { ProfilesService } from 'src/modules/profiles/services';
import { TokenService } from 'src/modules/token/services';
import { AuthRequestDocument, AuthRequest } from 'src/types/models';
import { AuthResponse } from 'src/types/objects';
import { Model } from 'mongoose';
import { ETokenPermissionType } from '@app/shared';

@Injectable()
export class AuthRequestService {
  constructor(
    private readonly mailService: MailService,
    private readonly profilesService: ProfilesService,
    private readonly tokenService: TokenService,

    @InjectModel('AuthRequest')
    private AuthRequest: Model<AuthRequestDocument>,
  ) {}

  // public request
  // - Request Authorization code
  // for proposed email ->
  // returns AuthRequest Object (without AuthCode)
  public async request(email: string): Promise<AuthRequest> {
    const code = `${Math.floor(1000 + Math.random() * 9000)}-${Math.floor(1000 + Math.random() * 9000)}`;
    const request = new this.AuthRequest({
      // Generating token
      code,
      email,
    });

    // Sending email
    await this._sendCodeViaEmail(email, code);
    
    return await request.save();
  };
  
  // public process
  // - Authorization process ->
  // returns USER token
  public async process(email: string, code: string): Promise<AuthResponse> {
    // Getting information about this AuthCode
    const codeDocument = await this.AuthRequest.findOne({ email, code });

    if (codeDocument) {
      // Checking if user with this email exists
      // or no
      let profile = await this.profilesService.findProfildByEmail(email);

      if (!profile) {
        // Creating new profile
        profile = await this.profilesService.createProfile({ email });
      };

      // Creting new user token
      const token = await this.tokenService.createUserToken([
        // Permissions Array
        // todo: move this to tokenService?
        {
          type: ETokenPermissionType.USER_TOKEN,
        },
      ]);

      // Returning AuthResponse
      const response: AuthResponse = {
        user: profile,
        // We need to manually fetch permissions
        // due to graphql???
        token: token,
      };

      // Deleting this AuthRequest
      await codeDocument.delete();

      return response;
    } else {
      throw new HttpException('Invalid AuthRequest code or email', HttpStatus.BAD_REQUEST);
    };
  };
  
  // private _sendCodeViaEmail
  private async _sendCodeViaEmail(email: string, code: string) {
    await this.mailService.sendEmail({
      to: email, 
      subject: `Код авторизации: ${code}`, 
      text: `Код авторизации на сервисе auth.odzi.dog: ${code}`, 
      html: ''
    });
  };
};