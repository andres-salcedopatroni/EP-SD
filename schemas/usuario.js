const mongoose=require('mongoose');
const Schema = mongoose.Schema;
const usuarioSchema=new Schema({
    nombre:String,
    codigo:String,
    clave:String,
});
module.exports=mongoose.model('Usuario', usuarioSchema,'Usuario');