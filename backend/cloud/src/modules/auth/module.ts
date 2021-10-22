import { Module } from '@nestjs/common';
import { ModelsImports } from 'src/startup/models';
import { Services } from 'src/startup/services';

import * as Resolvers from 'src/modules/auth/resolvers';

@Module({
  imports: [ModelsImports],
  providers: [...Object.values(Resolvers), ...Object.values(Services)],
})
export class AuthModule {}