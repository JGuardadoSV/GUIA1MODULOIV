import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();


  const config = new DocumentBuilder()
    .setTitle('Administración de contacto - API')
    .setDescription('Este proyecto es de prueba para conocer el mundo de las Apis')
    .setVersion('1.0')
    .addTag('Contactos APP')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);



  await app.listen(3000);
}
bootstrap();
