import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

// Importing modules
import * as ModuleList from '../startup/imports';

// Importing enums
import 'src/types/enums';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URL),

    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      context: ({ req }) => ({ req }),
      cors: {
        origin: process.env.MODE === 'PRODUCTION' ? 'https://cloud.odzi.dog' : 'http://localhost:3000',
        credentials: true,
      },
    }),
    
    ...Object.values(ModuleList),
  ],
})
export class AppModule {}