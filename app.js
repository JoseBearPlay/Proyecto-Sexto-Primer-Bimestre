'use strict'

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

var usuario_rutas = require('./src/rutas/usuario.rutas');
var producto_rutas = require('./src/rutas/producto.rutas');
var categoria_rutas = require('./src/rutas/categoria.rutas');
var factura_rutas = require('./src/rutas/factura.rutas');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api', usuario_rutas);
app.use('/api', producto_rutas);
app.use('/api', categoria_rutas);
app.use('/api', factura_rutas);

module.exports = app;