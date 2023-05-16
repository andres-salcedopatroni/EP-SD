var express = require('express');
var router = express.Router();
const Restaurante=require('../schemas/restaurante');

//Obtener restaurantes
router.get('/', async function(req, res, next) {
  try{
    const restaurante=await Restaurante.find();
    console.log(restaurante);
    res.json(restaurante);
  }
  catch(err){
    console.log(err);
    res.json({ message: err });
  }
});

//Obtener filtro-Completo
router.get('/filtro', async function(req, res, next) {
  try{
    const texto= req.query.nombre.trim();
    const restaurantes= await Restaurante.find();
    const filtro=[];
    if(texto=='')
      res.json(producto);
    else {
      for (let p in restaurantes) {
        var elemento=restaurantes[p].toJSON();
        if(elemento.nombre.includes(texto))
          filtro.push(elemento);
      }
      res.json(filtro); 
    }
  }
  catch(err){
    res.status(400).json(err);
  }
});

//Crear restaurante
router.post('/crear', async function(req, res, next) {
  try{
    console.log(req.body)
    res.json(await Restaurante.create(req.body));
  }
  catch(err){
    console.log(err);
    res.json({ message: err });
  }
});

//Actualizar restaurante
router.put('/actualizar', async function(req, res, next) {
  try{
    res.json(await Restaurante.updateOne({"codigoVendedor": req.query.codigoVendedor,"nombre":req.query.nombre}, req.body));
  }
  catch(err){
    console.log(err);
    res.json({ message: err });
  }
});

//Eliminar restaurante
router.delete('/eliminar', async function(req, res, next) {
  try{
    res.json(await Restaurante.deleteOne({"codigoVendedor": req.query.codigoVendedor,"nombre":req.query.nombre}));
  }
  catch(err){
    console.log(err);
    res.json({ message: err });
  }
});

module.exports = router;
