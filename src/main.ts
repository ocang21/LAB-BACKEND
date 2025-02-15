import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DocumentBuilder, SwaggerModule}from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  app.enableCors({
    origin: '*',
    // credentials: true,
  });

  const config = new DocumentBuilder()
    .setTitle('Lab Backend')
    .setDescription('AHMAD FAUZAN - 105841107522')
    .setVersion('0.1')
    .addTag('Lab')
    .addBearerAuth()
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, documentFactory); 

  await app.listen(process.env.PORT ?? 3000)
}
bootstrap();