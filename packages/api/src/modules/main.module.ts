import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

// Importing modules
import * as ModuleList from '../startup/imports';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot('mongodb+srv://dog:5jmVn7kiMuvnN355@cluster0.8nu2l.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'),

    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),

    ...Object.values(ModuleList)
  ],
})
export class AppModule {}