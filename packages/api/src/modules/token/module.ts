import { Module } from '@nestjs/common';
import { AuthTokenSchema } from 'src/types/models';
import { MongooseModule } from '@nestjs/mongoose'; 

import * as controllers from 'src/modules/token/controllers';
import * as services from 'src/modules/token/services';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'token',
        schema: AuthTokenSchema,
      },
    ])
  ],
  controllers: [...Object.values(controllers)],
  providers: [...Object.values(services)],
})
export class TokenModule {}