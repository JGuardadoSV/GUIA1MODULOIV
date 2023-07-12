import * as mongoose from 'mongoose'

export const Contacto = new mongoose.Schema({
    idContacto:Number,
    nombre:String,
    telefono:Number,
    email:String
    
});
