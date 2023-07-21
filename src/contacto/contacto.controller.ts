import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContactoService } from './contacto.service';
import { CreateContactoDto } from './dto/create-contacto.dto';
import { UpdateContactoDto } from './dto/update-contacto.dto';
import { Contacto } from './interface/contacto.interface';
import { ApiBody } from '@nestjs/swagger';


@Controller('contacto')
export class ContactoController {
  constructor(private readonly contactoService: ContactoService) {}

  @ApiBody({ type: [CreateContactoDto], description:"NO envie el id" })
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
    return this.contactoService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateContactoDto: UpdateContactoDto): Promise<Contacto> {
    return this.contactoService.update(id, updateContactoDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Contacto> {
    return this.contactoService.remove(id);
  }

}
