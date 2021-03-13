'use strict'

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var FacturaSchema = Schema( {
    nombre: String,
    direccion: String,
    nit: Number,
    numeroFactura: Number,
    cantidadProductos: Number,
    precio: Number,
    precio2: Number,
    total: Number,
    productos:{
        nombre: String,
        nombre2: String,
        facturaProducto: [],
        productoCategorias: {type: Schema.Types.ObjectId, ref: 'productos'}
    },
    usuario:[{
        nombre: String,
        facturaUsuario: {type: Schema.Types.ObjectId, ref: 'Usuario'}
    }],
})

module.exports = mongoose.model('facturas', FacturaSchema);