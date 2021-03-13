'use strict'

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CategoriaSchema = Schema ({
    nombreCategoria: String,
    descripcionCategoria: String,
    productos: {
        nombreProducto: String,
        descripcion: String,
        nombreProducto2: String,
        descripcion2:String,
        categoriaProductos: []
    },

    productoCategoria: {type: Schema.Types.ObjectId, ref:'productos'}
})

module.exports = mongoose.model('categorias', CategoriaSchema);