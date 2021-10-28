import { Module } from '@nestjs/common';
import { ModelsImports } from 'src/startup/models';

import { Services } from 'src/startup/services';
import * as Resolvers from './resolvers';

@Module({
  imports: [ModelsImports],
  providers: [...Object.values(Services), ...Object.values(Resolvers)],
})
export class NamespaceModule {};