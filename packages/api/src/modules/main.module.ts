import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';

// Importing modules
import * as ModuleList from '../startup/imports';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://dog:5jmVn7kiMuvnN355@cluster0.8nu2l.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'),

    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),

    ...Object.values(ModuleList)
  ],
})
export class AppModule {}