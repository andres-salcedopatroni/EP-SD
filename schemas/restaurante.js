const mongoose=require('mongoose');
const Schema = mongoose.Schema;
const restauranteSchema=new Schema({
    nombre:String,
    ubicacion:String,
});
module.exports=mongoose.model('Restaurante', restauranteSchema,'Restaurante');