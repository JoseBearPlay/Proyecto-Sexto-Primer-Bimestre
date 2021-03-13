'use strict'

var express = require("express");
var productoControlador = require("../controladores/producto.controlador");
var md_auth = require("../middlewares/authentication");

var api = express.Router();
api.get('/ejemploProductos', productoControlador.ejemplo);
api.post('/agregarProducto', md_auth.ensureAuth, productoControlador.agregarProducto);
api.post('/agregarProducto2', md_auth.ensureAuth, productoControlador.agregarProducto2);
api.post('/agregarProducto3', md_auth.ensureAuth, productoControlador.agregarProducto3);
api.post('/agregarProducto4', md_auth.ensureAuth, productoControlador.agregarProducto4);
api.post('/agregarProducto5', md_auth.ensureAuth, productoControlador.agregarProducto5);
api.post('/agregarProducto6', md_auth.ensureAuth, productoControlador.agregarProducto6);
api.put('/editarProducto/:id', md_auth.ensureAuth, productoControlador.editarProducto);
api.get('/obtenerProducto/:id', md_auth.ensureAuth, productoControlador.visualizarProductosporId);
api.get('/obtenerProductos', md_auth.ensureAuth, productoControlador.visualizarProductos);
api.get('/obtenerProductosNombre', md_auth.ensureAuth, productoControlador.visualizarProductosporNombre);
api.delete('/EliminarProducto/:id', md_auth.ensureAuth, productoControlador.eliminarProducto);

module.exports = api;