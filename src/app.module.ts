import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactoModule } from './contacto/contacto.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [ContactoModule,
    MongooseModule.forRoot('mongodb+srv://apiagenda:Prueba2023@cluster0.jtmtjg5.mongodb.net/?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
