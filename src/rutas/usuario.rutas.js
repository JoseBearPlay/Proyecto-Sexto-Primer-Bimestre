'use strict'

var express = require("express");
var usuarioControlador = require("../controladores/usuario.controlador");
var md_auth = require("../middlewares/authentication");

var api = express.Router();
api.get('/ejemplo', usuarioControlador.ejemplo);
api.post('/registrarUsuario', usuarioControlador.agregar);
api.post('/registrarCliente', md_auth.ensureAuth, usuarioControlador.agregarCliente);
api.post('/login', usuarioControlador.login);
api.put('/editarUsuario/:id', md_auth.ensureAuth, usuarioControlador.editarUsuario);
api.put('/editarRol/:id', md_auth.ensureAuth, usuarioControlador.editarRoles);
api.delete('/eliminarCliente/:id', md_auth.ensureAuth, usuarioControlador.eliminarUsuario);

module.exports = api;