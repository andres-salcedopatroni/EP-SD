var express = require('express');
var router = express.Router();
const Usuario=require('../schemas/usuario');

/**
 * Ingreso de usuario
 * @author Andres Salcedo <andres.salcedo@unmsm.edu.pe>
 * @param {Json}  req - Objeto json que contiene el codigo del usuario y la contraseña.
 * @returns {Json}
 */
router.get('/ingreso', async function(req, res, next) {
  try{
    const usuario=await Usuario.findOne({"codigo": req.query.dni_ruc, "clave": req.query.clave},{"codigo":1,"nombre":1,"tipo":1});
    if(usuario)
    res.json(usuario);
    else
    res.status(400).json("No existe el usuario");
  }
  catch(err){
    res.status(400).json(err);
  }
});

/**
 * Obtener un usuario
 * @author Andhersson Salazar <andhersson.salazar@unmsm.edu.pe>
 * @param {Json}  req - Objeto json que contiene el codigo del usuario.
 * @returns {Json}
 */
router.get('/obtener', async function(req, res, next) {
  try{
    const usuario=await Usuario.findOne({"codigo": req.query.dni_ruc},{"nombre":1,"codigo":1});
    if(usuario)
    res.json(usuario);
    else
    res.status(400).json("No usuario ingresado");
    
  }
  catch(err){
    res.status(400).json({message: err});
  }
});


/**
 * Crear un usuario
 * @author Andres Salcedo <andres.salcedo@unmsm.edu.pe>
 * @param {Json}  req - objeto json con datos del usuario que será creado.
 * @returns {Json}
 */
router.post('/crear', async function(req, res, next) {
  try{
    res.json(await Usuario.create(req.body));
  }
  catch(err){
    res.status(400).json({message: err});
  }
});


module.exports = router;
