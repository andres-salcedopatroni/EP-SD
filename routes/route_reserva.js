var express = require('express');
var router = express.Router();
const Reserva=require('../schemas/reserva');

//Obtener
router.get('/', async function(req, res, next) {
  try{
    const reserva=await Reserva.find();
    res.json(reserva);
  }
  catch(err){
    res.status(400).json(err);
  }
});

//Crear
router.post('/crear', async function(req, res, next) {
  try{
    res.json(await Reserva.create(req.body));
  }
  catch(err){
    res.status(400).json(err);
  }
});


module.exports = router;