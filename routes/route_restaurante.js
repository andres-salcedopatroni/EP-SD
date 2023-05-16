var express = require('express');
var router = express.Router();
const Restaurante=require('../schemas/restaurante');

/**
 * Obtener restaurantes
 * @author Andhersson Salazar <andhersson.salazar@unmsm.edu.pe>
 * @returns {Json} 
 */
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

/**
 * Filtrar restaurantes
 * @author Andres Salcedo <andres.salcedo@unmsm.edu.pe>
 * @param {Json}  req - Objeto json que contiene el codigo del usuario y la contraseña.
 * @returns {Json}
 */
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

/**
 * Crear restaurantes
 * @author Andhersson Salazar <andhersson.salazar@unmsm.edu.pe>
 * @param {Json}  req - Objeto json que contiene los datos del restaurante.
 * @returns {Json}
 */
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

/**
 * Actualizar restaurante
 * @author Andhersson Salazar <andhersson.salazar@unmsm.edu.pe>
 * @param {Json}  req - Objeto json que contiene el codigo del usuario.
 * @returns {Json}
 */
router.put('/actualizar', async function(req, res, next) {
  try{
    res.json(await Restaurante.updateOne({"codigoVendedor": req.query.codigoVendedor,"nombre":req.query.nombre}, req.body));
  }
  catch(err){
    console.log(err);
    res.json({ message: err });
  }
});

/**
 * Eliminar restaurantes
 * @author Andres Salcedo <andres.salcedo@unmsm.edu.pe>
 * @param {Json}  req - Objeto json que contiene el codigo y nombre del restaurante a eliminar.
 * @returns {Json}
 */
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
