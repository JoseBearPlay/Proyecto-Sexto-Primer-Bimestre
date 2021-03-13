'use strict'

var express = require("express");
var facturaControlador = require("../controladores/factura.controlador");
var md_auth = require("../middlewares/authentication");

var api = express.Router();
api.get('/ejemploFacturas', facturaControlador.ejemplo);
api.post('/agregarFactura', md_auth.ensureAuth, facturaControlador.crearFactura);
api.post('/agregarFactura2', md_auth.ensureAuth, facturaControlador.crearFactura2);
api.post('/agregarFactura3', md_auth.ensureAuth, facturaControlador.crearFactura3);
api.post('/agregarFactura4', md_auth.ensureAuth, facturaControlador.crearFactura4);
api.get('/obtenrFacturas', md_auth.ensureAuth, facturaControlador.listarFacturas);
module.exports = api;