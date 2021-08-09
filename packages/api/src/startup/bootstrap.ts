import { NestFactory } from '@nestjs/core';
import { AppModule } from '../modules/main.module';
import * as session from 'express-session';
import * as passport from 'passport';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'; 
import * as fs from 'fs';

export default async function(): Promise<void> {
  const httpsOptions = {
    key: fs.readFileSync('../secrets/server.key'),
    cert: fs.readFileSync('../secrets/server.cert'),
  };

  const app = await NestFactory.create(AppModule, { 
    httpsOptions: process.env.ENVIRONMENT == "PRODUCTION" ? httpsOptions : {}, 
  });
  
  const config = new DocumentBuilder()
    .setTitle('Auth Odzi')
    .setDescription('auth.odzi.dog api documentation')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.use(session({
    secret: 'dev-secret',
    resave: false,
    saveUninitialized: false,
  }));

  app.use(passport.initialize());
  app.use(passport.session());

  app.enableCors();
  await app.listen(3000);
};