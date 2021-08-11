import { Injectable } from "@nestjs/common";
import * as mailer from "nodemailer";

@Injectable()
export class MailService {
  private client = mailer.createTransport({
    host: String(process.env.MAIL_HOST),
    port: Number(process.env.MAIL_PORT),
    secure: Boolean(process.env.MAIL_IS_SECURE) || false,
    auth: {
      user: process.env.MAIL_AUTH_USER,
      pass: process.env.MAIL_AUTH_PASS,
    },
  });

  async sendEmail(options: { to: string, subject: string, text: string, html: string }): Promise<any> {    
    const mail = this.client.sendMail({
      from: '"odzi auth" <auth@odzi.dog>',
      ...options
    });

    return mail;
  };
};