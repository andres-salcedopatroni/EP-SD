var express = require('express');
var router = express.Router();
const Restaurante=require('../schemas/restaurante');


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

//Crear
router.post('/crear', async function(req, res, next) {
  try{
    res.json(await Restaurante.create(req.body));
  }
  catch(err){
    res.status(400).json(err);
  }
});


module.exports = router;
