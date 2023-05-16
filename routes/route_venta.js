var express = require('express');
var router = express.Router();
const Venta=require('../schemas/venta');

//Obtener venta
router.get('/', async function(req, res, next) {
  try{
    const venta=await Venta.find();
    console.log(venta);
    res.json(venta);
  }
  catch(err){
    console.log(err);
    res.json({ message: err });
  }
});

//Crear venta
router.post('/crear', async function(req, res, next) {
  try{
    console.log(req.body)
    res.json(await Venta.create(req.body));
  }
  catch(err){
    console.log(err);
    res.json({ message: err });
  }
});


module.exports = router;