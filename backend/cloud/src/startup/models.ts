import * as models from 'src/types/models';
import { MongooseModule } from '@nestjs/mongoose';

export const ModelsImports = MongooseModule.forFeature([
  { 
    name: 'profile', 
    schema: models.ProfileSchema,
  },
]);