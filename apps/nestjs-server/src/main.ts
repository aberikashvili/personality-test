/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3333;

  const swaggerConfig = new DocumentBuilder()
    .setTitle('PersonaliTy Test')
    .setDescription('The personality test API description')
    .setVersion('1.0')
    // .addTag('Api')
    .build();
  const swagerDocument = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('swagger-ui', app, swagerDocument);

  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
