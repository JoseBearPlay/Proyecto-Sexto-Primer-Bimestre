'use strict'

var Usuario = require("../modelos/usuario.model");
var bcrypt = require("bcrypt-nodejs");
var jwt = require("../servicios/jwt");

function ejemplo(req, res){
    res.status(200).send({mensaje: 'Esto es un mensaje de la venta online'});
}

function agregar(req, res){
    var usuarioModel = new Usuario();
    var params = req.body;

    if(params.email && params.username && params.password){

        usuarioModel.nombre = params.nombre;
        usuarioModel.username = params.username;
        usuarioModel.email = params.email;
        usuarioModel.rol = 'ADMIN';
        usuarioModel.image = null;

        Usuario.find({
            $or: [
                {username: usuarioModel.username},
                {email: usuarioModel.email}
            ]
        }).exec((err, usuarioEncontrado)=>{
            if(err) return res.status(500).send({mensaje:'Error en la peticion del usuario'});

            if(usuarioEncontrado && usuarioEncontrado.length >= 1){
                return res.status(500).send({mensaje: 'El usuario ya existe'});
            }else{
                bcrypt.hash(params.password, null, null, (err, passwordEncriptada)=>{
                    usuarioModel.password = passwordEncriptada;

                    usuarioModel.save((err, usuarioGuardado)=>{
                        if(err) return res.status(500).send({mensaje: 'Error en la peticion de guardar usuario'});

                        if(usuarioGuardado){
                            res.status(200).send({usuarioGuardado})
                        }else{
                            res.status(404).send({mensaje: 'No se a podido Guarad el usuario'});
                        }
                    })
                })
            }
        })
    }
}

function agregarCliente(req, res){
    var usuarioModel = new Usuario();
    var params = req.body;

    if(req.user.rol === 'ADMIN'){

    if(params.email && params.username && params.password){

        usuarioModel.nombre = params.nombre;
        usuarioModel.username =params.username;
        usuarioModel.email = params.email;
        usuarioModel.rol = 'CLIENTE';
        usuarioModel.image = null;

        Usuario.find({
            $or: [
                {username: usuarioModel.username},
                {email: usuarioModel.email}
            ]
        }).exec((err, clienteEncontrado)=>{
            if(err) return res.status(500).send({mensaje: 'Error en la peticion'});

            if(clienteEncontrado && clienteEncontrado.length >= 1){
                return res.status(500).send({mensaje: 'El usuario ya existe'});
            }else{
                bcrypt.hash(params.password, null, null, (err, passwordEncriptada)=>{
                    usuarioModel.password = passwordEncriptada;

                    usuarioModel.save((err, clienteGuardado)=>{
                        if(err) return res.status(500).send({mensaje: 'Error en la peticion de guardar el cliente'});

                        if(clienteGuardado){
                            res.status(200).send({clienteGuardado})
                        }else{
                            res.status(500).send({mensaje: 'No se a podido guardar el cliente'})
                        }
                    })
                })
            }
        })
    }
    }else{
        res.status(500).send({mensaje: 'Solo el rol tipo admin puede crear clientes'});
    }
}

function login(req, res){
    var params = req.body;

    var email  = params.email;
    var password = params.password;

    Usuario.findOne({email: email},(err, user)=>{
        if(err) return res.status(500).send({mensaje: 'Error en la peticion'});

        if(user){
            bcrypt.compare(password, user.password, (err, check)=>{
                if(check){
                    if(params.getToken){
                        return res.status(200).send({
                            token: jwt.crearToken(user)
                        })
                    }else{
                        user.password = undefined;
                        return res.status(200).send({user});
                    }
                }else{
                    return res.status(500).send({mensaje: 'El usuario no se ha podido identificar'});
                }
            })
        }else{
            return res.status(500).send({mensaje: 'Imposible identificar al usuario'});
        }
    })
}

function editarUsuario(req, res) {
    var idUsuario = req.params.id;
    var params = req.body;

    delete params.password;

   if(req.user.rol === "CLIENTE"){
    
    Usuario.findByIdAndUpdate(idUsuario, params, { new: true }, (err, usuarioActualizado) => {
        if (err) return res.status(500).send({ mensaje: 'Error en la peticion' });
        if (!usuarioActualizado) return res.status(500).send({ mensaje: 'No se a podido editar al Usuario' });

        return res.status(200).send({ usuarioActualizado })
    })
    }else{
        res.status(400).send({ mensaje: 'Solo el rol ADMIN puede editar'})
    }
}


function editarRoles(req, res){
    var idUsuario = req.params.id;
    var params = req.body;

    if(req.user.rol != 'ADMIN'){
        return res.status(500).send({mensaje: 'No posee los permisos para editar el rol'});
    }

    Usuario.findByIdAndUpdate(idUsuario, params, {new: true},(err, rolActualizado)=>{
        if(err) return res.status(500).send({mensaje: 'Error en la peticion'});
        if(!rolActualizado) return res.status(500).send({mensaje: 'No se ha podido editar el rol'});

        return res.status(200).send({ rolActualizado });
    })
}

function eliminarUsuario(req, res){
    var idUsuario = req.params.id;
    var params = req.body;

    if(req.user.rol === "CLIENTE"){
        Usuario.findByIdAndRemove(idUsuario, params, (err, usuarioBorrado) =>{
            if(err) return res.status(500).send({ mensaje: 'Error en la petición'});
            if(!usuarioBorrado) return res.status(500).send({ mensaje: 'No se a podido eliminar la empresa'});

            return res.status(200).send({ usuarioBorrado });
        })
    }else{
        res.status(400).send({ mensaje: 'Solo el rol ADMIN puede eliminar'});
    }

}


module.exports = {
    ejemplo,
    agregar,
    agregarCliente,
    login,
    editarUsuario,
    editarRoles,
    eliminarUsuario
}