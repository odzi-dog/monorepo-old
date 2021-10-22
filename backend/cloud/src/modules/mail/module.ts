import { Module } from '@nestjs/common';

import * as Services from 'src/modules/mail/services';

@Module({
  providers: [...Object.values(Services)],
})
export class MailModule {};