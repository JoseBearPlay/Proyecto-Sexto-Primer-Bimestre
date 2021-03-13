'use strict'

var Facturas = require('../modelos/factura.model');
const { param } = require('../rutas/usuario.rutas');

function ejemplo(req, res){
    res.status(200).send({mensaje: 'Ejemplo desde Facturas'});
}

function crearFactura(req, res){
    var facturasModel = new Facturas();
    var params = req.body;

    if(req.user.rol === 'ADMIN'){
    if(params.nombre && params.direccion && params.nit && params.numeroFactura 
        && params.cantidadProductos && params.precio && params.precio2 && params.total){
            facturasModel.nombre = params.nombre;
            facturasModel.direccion = params.direccion;
            facturasModel.nit = params.nit;
            facturasModel.numeroFactura = params.numeroFactura;
            facturasModel.cantidadProductos = params.cantidadProductos;
            facturasModel.precio = params.precio;
            facturasModel.precio2 = params.precio2;
            facturasModel.total = facturasModel.precio + facturasModel.precio2;
            facturasModel.productos = {
                nombre: "Telescopio",
                nombre2: "Revista",
                facturaProducto: [],
            }
            facturasModel.usuario ={
                nombre: "Sergio Miguel Aquino"
            }

            facturasModel.save((err, facturaGuardada)=>{
                if(err) return res.status(500).send({mensaje: 'Error en la peticion'});
                if(!facturaGuardada) return res.status(500).send({mensaje: 'No se pudo agregar la factura'});

                return res.status(200).send({ facturaGuardada });
            })
        }else{
            return res.status(500).send({mensaje: 'Rellene todos los campos'});
        }
    }else{
        return res.status(500).send({mensaje: 'Solo el rol ADMIN puede agregar facturas'});
    }
}

function crearFactura2(req, res){
    var facturasModel = new Facturas();
    var params = req.body;

    if(req.user.rol === 'ADMIN'){
    if(params.nombre && params.direccion && params.nit && params.numeroFactura 
        && params.cantidadProductos && params.precio && params.precio2 && params.total){
            facturasModel.nombre = params.nombre;
            facturasModel.direccion = params.direccion;
            facturasModel.nit = params.nit;
            facturasModel.numeroFactura = params.numeroFactura;
            facturasModel.cantidadProductos = params.cantidadProductos;
            facturasModel.precio = params.precio;
            facturasModel.precio2 = params.precio2;
            facturasModel.total = facturasModel.precio + facturasModel.precio2;
            facturasModel.productos = {
                nombre: "Sudadera",
                nombre2: "Lentes ",
                facturaProducto: [],
            }
            facturasModel.usuario ={
                nombre: "Carlos Andres Donis"
            }

            facturasModel.save((err, facturaGuardada)=>{
                if(err) return res.status(500).send({mensaje: 'Error en la peticion'});
                if(!facturaGuardada) return res.status(500).send({mensaje: 'No se pudo agregar la factura'});

                return res.status(200).send({ facturaGuardada });
            })
        }else{
            return res.status(500).send({mensaje: 'Rellene todos los campos'});
        }
    }else{
        return res.status(500).send({mensaje: 'Solo el rol ADMIN puede agregar facturas'});
    }
}

function crearFactura3(req, res){
    var facturasModel = new Facturas();
    var params = req.body;

    if(req.user.rol === 'ADMIN'){
    if(params.nombre && params.direccion && params.nit && params.numeroFactura 
        && params.cantidadProductos && params.precio && params.precio2 && params.total){
            facturasModel.nombre = params.nombre;
            facturasModel.direccion = params.direccion;
            facturasModel.nit = params.nit;
            facturasModel.numeroFactura = params.numeroFactura;
            facturasModel.cantidadProductos = params.cantidadProductos;
            facturasModel.precio = params.precio;
            facturasModel.precio2 = params.precio2;
            facturasModel.total = facturasModel.precio + facturasModel.precio2;
            facturasModel.productos = {
                nombre: "Taza",
                nombre2: "Libro",
                facturaProducto: [],
            }
            facturasModel.usuario ={
                nombre: "Walter Jose Molina"
            }

            facturasModel.save((err, facturaGuardada)=>{
                if(err) return res.status(500).send({mensaje: 'Error en la peticion'});
                if(!facturaGuardada) return res.status(500).send({mensaje: 'No se pudo agregar la factura'});

                return res.status(200).send({ facturaGuardada });
            })
        }else{
            return res.status(500).send({mensaje: 'Rellene todos los campos'});
        }
    }else{
        return res.status(500).send({mensaje: 'Solo el rol ADMIN puede agregar facturas'});
    }
}

function crearFactura4(req, res){
    var facturasModel = new Facturas();
    var params = req.body;

    if(req.user.rol === 'ADMIN'){
    if(params.nombre && params.direccion && params.nit && params.numeroFactura 
        && params.cantidadProductos && params.precio && params.precio2 && params.total){
            facturasModel.nombre = params.nombre;
            facturasModel.direccion = params.direccion;
            facturasModel.nit = params.nit;
            facturasModel.numeroFactura = params.numeroFactura;
            facturasModel.cantidadProductos = params.cantidadProductos;
            facturasModel.precio = params.precio;
            facturasModel.precio2 = params.precio2;
            facturasModel.total = facturasModel.precio + facturasModel.precio2;
            facturasModel.productos = {
                nombre: "Telescopio",
                nombre2: "Lentes",
                facturaProducto: [],
            }
            facturasModel.usuario ={
                nombre: "Julio Rodrigo Barrientos"
            }

            facturasModel.save((err, facturaGuardada)=>{
                if(err) return res.status(500).send({mensaje: 'Error en la peticion'});
                if(!facturaGuardada) return res.status(500).send({mensaje: 'No se pudo agregar la factura'});

                return res.status(200).send({ facturaGuardada });
            })
        }else{
            return res.status(500).send({mensaje: 'Rellene todos los campos'});
        }
    }else{
        return res.status(500).send({mensaje: 'Solo el rol ADMIN puede agregar facturas'});
    }
}


function listarFacturas(req, res){
    if(req.user.rol != 'ADMIN'){
        return res.status(500).send({mensaje: 'No posee los permisos para listar Facturas'});
    }

    Facturas.find().exec((err, facturas)=>{
        if(err) return res.status(500).send({mensaje: 'Error en lapeticion'});
        if(!facturas) return res.status(500).send({mensaje: 'Error al listar las facturas'});

        return res.status(200).send({ facturas });
    })
}



module.exports = {
    ejemplo,
    crearFactura, 
    crearFactura2,
    crearFactura3,
    crearFactura4,
    listarFacturas,
}