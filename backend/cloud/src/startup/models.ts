import * as models from 'src/types/models';
import { MongooseModule } from '@nestjs/mongoose';

export const ModelsImports = MongooseModule.forFeature([
  { 
    name: 'profile', 
    schema: models.ProfileSchema,
  },
  {
    name: 'Namespace',
    schema: models.NamespaceSchema,
  },
  {
    name: 'Token',
    schema: models.TokenSchema,
  },
  {
    name: 'TokenPermissions',
    schema: models.TokenPermissionsSchema,
  },
  {
    name: 'AuthRequest',
    schema: models.AuthRequestSchema,
  },
  {
    name: 'Resource',
    schema: models.ResourceSchema
  }
]);