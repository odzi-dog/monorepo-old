import { Module } from '@nestjs/common';
import { ModelsImports } from 'src/startup/models';

import { Services } from 'src/startup/services';
import { Resolvers } from './types';

@Module({
  imports: [ModelsImports],
  providers: [...Object.values(Services), ...Object.values(Resolvers)]
})
export class ResourceModule {}