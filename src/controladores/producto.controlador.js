'use strict'

var Productos = require('../modelos/productos.model');

function ejemplo(req, res){
    res.status(200).send({mensaje: 'Ejemplo desde el controlador de productos'});
}

function agregarProducto(req, res){
    var productosModel = new Productos();
    var params = req.body;
    
    if(req.user.rol === 'ADMIN'){
    if(params.nombre && params.descripcion){
        productosModel.nombre = params.nombre;
        productosModel.descripcion = params.descripcion;
        productosModel.stock = {
            existencia: 10,
            cantidadMinima: 9,
            productosStock: []
        }

        productosModel.save((err, productoGuardado)=>{
            if(err) return res.status(500).send({mensaje: 'Error en la peticion del Producto'});
            if(!productoGuardado) return res.status(500).send({mensaje: 'Error al agregar el Producto'});

            return res.status(200).send({productoGuardado});
        })
    }else{
        return res.status(500).send({mensaje: 'Rellene todos los campos necesarios'});
    }
    }else{
        return res.status(500).send({mensaje: 'Solo el rol de tipo Admin puede agregar Productos'});
    }
}


function agregarProducto2(req, res){
    var productosModel = new Productos();
    var params = req.body;
    
    if(req.user.rol === 'ADMIN'){
    if(params.nombre && params.descripcion){
        productosModel.nombre = params.nombre;
        productosModel.descripcion = params.descripcion;
        productosModel.stock = {
            existencia: 15,
            cantidadMinima: 14,
            productosStock: []
        }

        productosModel.save((err, productoGuardado)=>{
            if(err) return res.status(500).send({mensaje: 'Error en la peticion del Producto'});
            if(!productoGuardado) return res.status(500).send({mensaje: 'Error al agregar el Producto'});

            return res.status(200).send({productoGuardado});
        })
    }else{
        return res.status(500).send({mensaje: 'Rellene todos los campos necesarios'});
    }
    }else{
        return res.status(500).send({mensaje: 'Solo el rol de tipo Admin puede agregar Productos'});
    }
}


function agregarProducto3(req, res){
    var productosModel = new Productos();
    var params = req.body;
    
    if(req.user.rol === 'ADMIN'){
    if(params.nombre && params.descripcion){
        productosModel.nombre = params.nombre;
        productosModel.descripcion = params.descripcion;
        productosModel.stock = {
            existencia: 8,
            cantidadMinima: 7,
            productosStock: []
        }

        productosModel.save((err, productoGuardado)=>{
            if(err) return res.status(500).send({mensaje: 'Error en la peticion del Producto'});
            if(!productoGuardado) return res.status(500).send({mensaje: 'Error al agregar el Producto'});

            return res.status(200).send({productoGuardado});
        })
    }else{
        return res.status(500).send({mensaje: 'Rellene todos los campos necesarios'});
    }
    }else{
        return res.status(500).send({mensaje: 'Solo el rol de tipo Admin puede agregar Productos'});
    }
}


function agregarProducto4(req, res){
    var productosModel = new Productos();
    var params = req.body;
    
    if(req.user.rol === 'ADMIN'){
    if(params.nombre && params.descripcion){
        productosModel.nombre = params.nombre;
        productosModel.descripcion = params.descripcion;
        productosModel.stock = {
            existencia: 21,
            cantidadMinima: 20,
            productosStock: []
        }

        productosModel.save((err, productoGuardado)=>{
            if(err) return res.status(500).send({mensaje: 'Error en la peticion del Producto'});
            if(!productoGuardado) return res.status(500).send({mensaje: 'Error al agregar el Producto'});

            return res.status(200).send({productoGuardado});
        })
    }else{
        return res.status(500).send({mensaje: 'Rellene todos los campos necesarios'});
    }
    }else{
        return res.status(500).send({mensaje: 'Solo el rol de tipo Admin puede agregar Productos'});
    }
}


function agregarProducto5(req, res){
    var productosModel = new Productos();
    var params = req.body;
    
    if(req.user.rol === 'ADMIN'){
    if(params.nombre && params.descripcion){
        productosModel.nombre = params.nombre;
        productosModel.descripcion = params.descripcion;
        productosModel.stock = {
            existencia: 31,
            cantidadMinima: 30,
            productosStock: []
        }

        productosModel.save((err, productoGuardado)=>{
            if(err) return res.status(500).send({mensaje: 'Error en la peticion del Producto'});
            if(!productoGuardado) return res.status(500).send({mensaje: 'Error al agregar el Producto'});

            return res.status(200).send({productoGuardado});
        })
    }else{
        return res.status(500).send({mensaje: 'Rellene todos los campos necesarios'});
    }
    }else{
        return res.status(500).send({mensaje: 'Solo el rol de tipo Admin puede agregar Productos'});
    }
}


function agregarProducto6(req, res){
    var productosModel = new Productos();
    var params = req.body;
    
    if(req.user.rol === 'ADMIN'){
    if(params.nombre && params.descripcion){
        productosModel.nombre = params.nombre;
        productosModel.descripcion = params.descripcion;
        productosModel.stock = {
            existencia: 4,
            cantidadMinima: 3,
            productosStock: []
        }

        productosModel.save((err, productoGuardado)=>{
            if(err) return res.status(500).send({mensaje: 'Error en la peticion del Producto'});
            if(!productoGuardado) return res.status(500).send({mensaje: 'Error al agregar el Producto'});

            return res.status(200).send({productoGuardado});
        })
    }else{
        return res.status(500).send({mensaje: 'Rellene todos los campos necesarios'});
    }
    }else{
        return res.status(500).send({mensaje: 'Solo el rol de tipo Admin puede agregar Productos'});
    }
}

function editarProducto(req, res){
    var idProducto = req.params.id;
    var params = req.body;

    delete params.password;

    if(req.user.rol === 'ADMIN'){
        Productos.findByIdAndUpdate(idProducto, params, {new: true},(err, productoActualizado)=>{
            if(err) return res.status(500).send({mensaje: 'Error en la peticion'});
            if(!productoActualizado) return res.status(500).send({mensaje: 'Error  al actualizar el usuario'});

            return res.status(200).send({productoActualizado});
        })
    }else{
        return res.status(500).send({mensaje: 'Solo el rol tipo admin puede editar'});
    }
}

function visualizarProductosporId(req, res){
    var productoId = req.params.id;

    if(req.user.rol != 'ADMIN'){
        return res.status(500).send({mensaje: 'No posee los permisos para buscar el producto'});
    }

        Productos.findById(productoId, (err, productoEncontrado)=>{
            if(err) return res.status(500).send({mensaje: 'Error en la peticion'});
            if(!productoEncontrado) return res.status(500).send({mensaje: 'Error al buscar el producto'});

            return res.status(200).send({ productoEncontrado });
        })
}

function visualizarProductos(req, res){

    if(req.user.rol != 'ADMIN'){
        return res.status(500).send({mensaje:'No posee los permisos para ver todos los productos'});
    }

    Productos.find().exec((err, productos)=>{
        if(err) return res.status(500).send({mensaje: 'Error en la peticion de buscar productos'});
        if(!productos) return res.status(500).send({mensaje: 'Error al buscar los productos'});

        return res.status(200).send({productos})
    })
}

function eliminarProducto(req, res){
    var idProducto = req.params.id;
    var params = req.body;

    if(req.user.rol === 'ADMIN'){
       Productos.findByIdAndRemove(idProducto, params, (err, productoBorrado)=>{
        if(err) return res.status(500).send({mensaje: 'Error en la peticion'});
        if(!productoBorrado) return res.status(500).send({mensaje: 'Error  al actualizar el usuario'});

        return res.status(200).send({ productoBorrado });

       })
        
    }else{
        return res.status(500).send({mensaje: 'Solo el Rol tipo ADMIN puede eliminar Productos'});
    }
}

function visualizarProductosporNombre(req, res){
    var productoNombre = req.body;
    
    if(req.user.rol != 'CLIENTE'){
    return res.status(500).send({mensaje: 'No es un rol de tipo CLIENTE para buscar por nombre'});
    }

    Productos.findOne(productoNombre,(err, productoEncontrado)=>{
        if(err) return res.status(500).send({mensaje:'Error en la peticion'});
        if(!productoEncontrado) return res.status(500).send({mensaje: 'Error al buscar el producto'});

        return res.status(200).send({ productoEncontrado });
    })
}



module.exports = {
    ejemplo,
    agregarProducto,
    agregarProducto2,
    agregarProducto3,
    agregarProducto4,
    agregarProducto5,
    agregarProducto6,
    editarProducto,
    visualizarProductosporId,
    visualizarProductos,
    eliminarProducto,
    visualizarProductosporNombre
}