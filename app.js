var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cors = require('cors');
const mongoose=require('mongoose');
const bodyParser=require('body-parser')

//Rutas
const router_restaurante = require('./routes/route_restaurante');
const router_usuario = require('./routes/route_usuario');
const router_reserva = require('./routes/route_reserva');

//Conexion Mongo
const conexion_mongoose='mongodb+srv://usuario:12345@cluster0.iysppsa.mongodb.net/EP?retryWrites=true'
mongoose.connect(conexion_mongoose);

var app = express();

app.use(cors());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/restaurante', router_restaurante);
app.use('/usuario', router_usuario);
app.use('/reserva', router_reserva);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
