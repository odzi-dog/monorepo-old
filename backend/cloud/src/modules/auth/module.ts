import { Module } from '@nestjs/common';
import { ModelsImports } from 'src/startup/models';
import { Services } from 'src/startup/services';

import * as resolvers from 'src/modules/auth/resolvers';

@Module({
  imports: [ModelsImports],
  providers: [...Object.values(resolvers), ...Object.values(Services)],
})
export class AuthModule {}