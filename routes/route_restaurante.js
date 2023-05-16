var express = require('express');
var router = express.Router();
const Restaruante=require('../schemas/restaurante');

//Obtener productos
router.get('/', async function(req, res, next) {
  try{
    const producto=await Producto.find();
    console.log(producto);
    res.json(producto);
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
    const restaurantes= await Restaruante.find();
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

//Crear producto
router.post('/crear', async function(req, res, next) {
  try{
    console.log(req.body)
    res.json(await Producto.create(req.body));
  }
  catch(err){
    console.log(err);
    res.json({ message: err });
  }
});

//Actualizar producto
router.put('/actualizar', async function(req, res, next) {
  try{
    res.json(await Producto.updateOne({"codigoVendedor": req.query.codigoVendedor,"nombre":req.query.nombre}, req.body));
  }
  catch(err){
    console.log(err);
    res.json({ message: err });
  }
});

//Eliminar producto
router.delete('/eliminar', async function(req, res, next) {
  try{
    res.json(await Producto.deleteOne({"codigoVendedor": req.query.codigoVendedor,"nombre":req.query.nombre}));
  }
  catch(err){
    console.log(err);
    res.json({ message: err });
  }
});

module.exports = router;
