import { Injectable } from '@nestjs/common';
import { CreateContactoDto } from './dto/create-contacto.dto';
import { UpdateContactoDto } from './dto/update-contacto.dto';
import { Contacto } from './interface/contacto.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ContactoService {

  constructor(@InjectModel('Contacto') private readonly contactoModel:Model<Contacto>){}

/*
  async create(createContactoDto: CreateContactoDto):Promise<Contacto> {
    const nuevo= new this.contactoModel(createContactoDto);
     return await nuevo.save();
  }
*/
  async create(createContactoDto: CreateContactoDto): Promise<Contacto> {
    const contacto = await this.contactoModel.create(createContactoDto);
    return contacto.save();
  }

  async findAll():Promise<Contacto[]> {
    return await this.contactoModel.find();
  }

  async findOne(id: string):Promise<Contacto>  {
    return await this.contactoModel.findOne({_id:id});
  }

  
/*
  update(id: number, updateContactoDto: UpdateContactoDto) {
    return `This action updates a #${id} contacto`;
  }
*/
  async update(id: string, updateContactoDto: UpdateContactoDto): Promise<Contacto> {
    return this.contactoModel.findByIdAndUpdate(id, updateContactoDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Contacto> {
    return this.contactoModel.findByIdAndRemove(id).exec();
  }
}
