'use strict'

var express = require("express");
var categoariaControlador = require("../controladores/categoria.controlador");
var md_auth = require("../middlewares/authentication");

var api = express.Router();
api.get('/ejemploCategrias', categoariaControlador.ejemplo);
api.post('/agregarCategoria', md_auth.ensureAuth, categoariaControlador.agregarCategoria);
api.post('/agregarCategoria2', md_auth.ensureAuth, categoariaControlador.agregarCategoria2);
api.post('/agregarCategoria3', md_auth.ensureAuth, categoariaControlador.agregarCategoria3);
api.put('/editarCategoria/:id', md_auth.ensureAuth, categoariaControlador.editarCategoria);
api.get('/obtenerCategoria/:id', md_auth.ensureAuth, categoariaControlador.visualizarCategoriasporId);
api.get('/obtenerCategorias', md_auth.ensureAuth, categoariaControlador.visualizarCategorias);
api.get('/obtenerCategoriasCliente', md_auth.ensureAuth, categoariaControlador.visualizarCategoriasCliente);
api.delete('/eliminarCategoria/:id', md_auth.ensureAuth, categoariaControlador.eliminarCategoria);

module.exports = api;

