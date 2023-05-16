const mongoose=require('mongoose');
const Schema = mongoose.Schema;
const reservaSchema=new Schema({
    nombreRestaurante:String,
    fecha:String,
    hora:String,
    numeroPersonas:Number,
    estado:String,
    codigoUsuario:String,
});
module.exports=mongoose.model('Reserva',reservaSchema,'Reserva');