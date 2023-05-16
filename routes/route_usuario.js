var express = require('express');
var router = express.Router();
const Usuario=require('../schemas/usuario');

//Obtener usuario
router.get('/ingreso', async function(req, res, next) {
  try{
    const usuario=await Usuario.findOne({"codigo": req.query.dni_ruc, "clave": req.query.clave},{"codigo":1,"nombre":1,"tipo":1});
    if(usuario)
    res.json(usuario);
    else
    res.status(400).json("No existe el usuario");
    console.log(usuario);
   
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
    const usuario= await Usuario.find();
    const filtro=[];
    if(texto=='')
      res.json(usuario);
    else {
      for (let u in usuario) {
        var elemento=usuario[u].toJSON();
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

//Obtener usuario
router.get('/obtener', async function(req, res, next) {
  try{
    const usuario=await Usuario.findOne({"dni_ruc": req.query.dni_ruc},{"dni_ruc":1,"nombre":1,"tipo":1});
    if(usuario)
    res.json(usuario);
    else
    res.status(400).json("No usuario ingresado");
    console.log(usuario);
    
  }
  catch(err){
    console.log(err);
    res.json({ message: err });
  }
});


//Obtener usuarios
router.get('/usuarios', async function(req, res, next) {
  try{
    const usuario=await Usuario.find({},{"dni_ruc":1,"nombre":1,"tipo":1});
    console.log(usuario);
    res.json(usuario);
  }
  catch(err){
    console.log(err);
    res.json({ message: err });
  }
});

//Crear usuario
router.post('/crear', async function(req, res, next) {
  try{
    console.log(req.body)
    res.json(await Usuario.create(req.body));
  }
  catch(err){
    console.log(err);
    res.status(400).json({message: err});
  }
});

//Actualizar usuario
router.put('/actualizar', async function(req, res, next) {
  try{
    res.json(await Usuario.updateOne({"dni_ruc": req.query.dni_ruc}, req.body));
  }
  catch(err){
    console.log(err);
    res.json({ message: err });
  }
});

//Eliminar usuario
router.delete('/eliminar', async function(req, res, next) {
  try{
    const eliminado=await Usuario.deleteOne({"dni_ruc": req.query.dni_ruc});
    console.log(eliminado);
    res.json(eliminado);
  }
  catch(err){
    console.log(err);
    res.json({ message: err });
  }
});


module.exports = router;
