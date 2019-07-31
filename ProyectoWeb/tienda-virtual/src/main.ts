import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from "@nestjs/platform-express";
import { join } from "path";
const cookieParser = require('cookie-parser');
import * as session from 'express-session'; // Typescript
const FileStore = require('session-file-store')(session); // Nodejs

async function bootstrap() {
  const app = await NestFactory
    .create(AppModule) as NestExpressApplication;

  app.use(
    session({
      name: 'server-session-id',
      secret: 'tiendavirtual123',
      resave: false,
      saveUninitialized: true,
      cookie: {
        secure: false
      },
      store: new FileStore()
    })
  );

  app.use(cookieParser('Secreto'));
  app.setViewEngine('ejs');
  app.setBaseViewsDir(join(__dirname, '..', '..', 'Frontend'));

  await app.listen(3000);
}
bootstrap();
