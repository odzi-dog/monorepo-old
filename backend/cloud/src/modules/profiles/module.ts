import { Module } from '@nestjs/common';
import { ModelsImports } from 'src/startup/models';
import { Services } from 'src/startup/services';

import * as resolvers from './resolvers';
import * as services from './services';

@Module({
  imports: [ModelsImports],
  providers: [...Object.values(resolvers), ...Object.values(Services)],
  exports: [...Object.values(services)],
})
export class ProfilesModule {};