'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductoSchema = Schema ({
    nombre: String,
    descripcion: String,
    stock: {
        existencia: Number,
        cantidadMinima: Number,
        productosStock:[]
    },
    usuarioProducto: {type: Schema.Types.ObjectId, ref: 'Usuario'}
})

module.exports = mongoose.model('productos', ProductoSchema);