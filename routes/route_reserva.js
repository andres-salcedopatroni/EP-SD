var express = require('express');
var router = express.Router();
const Reserva=require('../schemas/reserva');

//Obtener patrocinio
router.get('/', async function(req, res, next) {
  try{
    const reserva=await Reserva.find();
    res.json(reserva);
  }
  catch(err){
    console.log(err);
    res.json({ message: err });
  }
});

//Crear patrocinio
router.post('/crear', async function(req, res, next) {
  try{
    console.log(req.body)
    res.json(await Reserva.create(req.body));
  }
  catch(err){
    console.log(err);
    res.json({ message: err });
  }
});


module.exports = router;