import { ApiProperty } from "@nestjs/swagger";


export class CreateContactoDto {
    @ApiProperty({
        description: 'El id del contacto',
        type:Number
      })
    idContacto:number;

    @ApiProperty({
        description: 'El nombre del contacto',
        type:String
      })
    nombre:string;

    @ApiProperty({
        description: 'El número de telefono del contacto',
        type:Number
      })
    telefono:number;

    @ApiProperty({
        description: 'El email del contacto',
        type:String
      })
    email:string;
}
