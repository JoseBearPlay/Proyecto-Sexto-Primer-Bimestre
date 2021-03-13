'use strict'

var jwt = require('jwt-simple');
var moment = require('moment');
var secret = 'clave_secreta_Venta_Online'

exports.crearToken = function(user){
    var payload = {
        sub: user._id,
        nombre: user.nombre,
        username: user.username,
        email: user.email,
        rol: user.rol,
        image: user.image,
        iat: moment().unix(),
        exp: moment().add(20, 'days').unix
    };
    return jwt.encode(payload, secret);
};