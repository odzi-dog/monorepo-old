import { Module } from '@nestjs/common';
import { ModelsImports } from 'src/startup/models';
import { Services } from 'src/startup/services';

@Module({
  imports: [ModelsImports],
  providers: [...Object.values(Services)],
})
export class PermissionsModule {};