import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContactoService } from './contacto.service';
import { CreateContactoDto } from './dto/create-contacto.dto';
import { UpdateContactoDto } from './dto/update-contacto.dto';
import { Contacto } from './interface/contacto.interface';


@Controller('contacto')
export class ContactoController {
  constructor(private readonly contactoService: ContactoService) {}

  @Post()
  create(@Body() createContactoDto: CreateContactoDto) {
    return this.contactoService.create(createContactoDto);
  }

  @Get() 
  findAll(): Promise<Contacto[]> {
    return this.contactoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Contacto>  {
    return this.contactoService.findOne(+id);
  }

}
