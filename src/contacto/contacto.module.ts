import { Module } from '@nestjs/common';
import { ContactoService } from './contacto.service';
import { ContactoController } from './contacto.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Contacto } from './schema/contacto.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:'Contacto',schema:Contacto}])],
  controllers: [ContactoController],
  providers: [ContactoService]
})
export class ContactoModule {}
