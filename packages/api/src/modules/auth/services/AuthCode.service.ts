import { Injectable } from "@nestjs/common";
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { AuthCode, AuthCodeDocument, User } from "src/types/models";
import { AuthCodeType } from 'src/types/enums';
import { MailService } from "src/modules/mail/services";
import { AuthCodeTemplate } from "src/mail/templates";

@Injectable()
export class AuthCodeService {
  constructor(
    @InjectModel('authCode') private authCodeModel: Model<AuthCodeDocument>,

    private readonly mailService: MailService,
  ) {}

  // 
  // createAuthCode
  async createAuthCode(user: User): Promise<AuthCode> {
    const code = Math.floor(1000 + Math.random() * 9000);
    const authCode = new this.authCodeModel({ id: code, type: AuthCodeType.AUTH, userId: user.id });
    
    await this.sendAuthCodeToEmail(user.email, code.toString());
    return await authCode.save();
  };

  // createRegisterCode
  async createRegisterCode(email: string): Promise<AuthCode> {
    const code = Math.floor(1000 + Math.random() * 9000);
    const authCode = new this.authCodeModel({ id: code, type: AuthCodeType.REGISTER, userEmail: email });
    
    await this.sendAuthCodeToEmail(email, code.toString());
    return await authCode.save();
  };

  // 
  // findAuthCode
  async findAuthCode(codeId: number): Promise<AuthCode | undefined> {
    const authCode = await this.authCodeModel.findOne({ id: codeId });
    return authCode;
  }

  // 
  // sendAuthCodeToEmail
  private async sendAuthCodeToEmail(email: string, code: string): Promise<any> {
    return this.mailService.sendEmail({ to: email, subject: `Код: ${code}`, text: `Код авторизации на сервисе auth.odzi.dog: ${code}`, html: new AuthCodeTemplate(code).html() });
  };
};