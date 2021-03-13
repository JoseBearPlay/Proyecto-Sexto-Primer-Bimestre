'use strict'

var Categorias = require("../modelos/categoria.model");

function ejemplo(req, res){
    return res.status(200).send({mensaje: 'Ejemplo desde Categorias'});
}

function agregarCategoria(req, res){
    var categoriasModel = new Categorias();
    var params = req.body;

    if(req.user.rol === 'ADMIN'){
        if(params.nombreCategoria && params.descripcionCategoria){
            categoriasModel.nombreCategoria = params.nombreCategoria;
            categoriasModel.descripcionCategoria = params.descripcionCategoria;
            categoriasModel.productos = {
                nombreProducto: "Telescopio" ,
                descripcion: "Telescopio para observar las estrellas." ,
                nombreProducto2: "Lentes ",
                descripcion2:"Lentes para mejorar el lente del telescopio",
                categoriaProductos: []
            }

            categoriasModel.save((err, categoriaGuardada)=>{
                if(err) return res.status(500).send({mensaje: 'Error en la petición de la categoria'});
                if(!categoriaGuardada) return res.status(500).send({mensaje: 'Error al agregar el producto'});

                return res.status(200).send({categoriaGuardada});
            })
        }else{
            return res.status(500).send({mensaje: 'Agregue todos los campos necesarios'});
        }
    }else{
        return res.status(500).send({mensaje: 'Solo el rol tipo Admin puede agregar Categorias'});
    }
}

function agregarCategoria2(req, res){
    var categoriasModel = new Categorias();
    var params = req.body;

    if(req.user.rol === 'ADMIN'){
        if(params.nombreCategoria && params.descripcionCategoria){
            categoriasModel.nombreCategoria = params.nombreCategoria;
            categoriasModel.descripcionCategoria = params.descripcionCategoria;
            categoriasModel.productos = {
                nombreProducto: "Sudadera",
                descripcion: "Sudadera con logo de NASA",
                nombreProducto2: "Taza",
                descripcion2: "Taza con logo de planetas",
                categoriaProductos: []
            }

            categoriasModel.save((err, categoriaGuardada)=>{
                if(err) return res.status(500).send({mensaje: 'Error en la petición de la categoria'});
                if(!categoriaGuardada) return res.status(500).send({mensaje: 'Error al agregar el producto'});

                return res.status(200).send({categoriaGuardada});
            })
        }else{
            return res.status(500).send({mensaje: 'Agregue todos los campos necesarios'});
        }
    }else{
        return res.status(500).send({mensaje: 'Solo el rol tipo Admin puede agregar Categorias'});
    }
}

function agregarCategoria3(req, res){
    var categoriasModel = new Categorias();
    var params = req.body;

    if(req.user.rol === 'ADMIN'){
        if(params.nombreCategoria && params.descripcionCategoria){
            categoriasModel.nombreCategoria = params.nombreCategoria;
            categoriasModel.descripcionCategoria = params.descripcionCategoria;
            categoriasModel.productos = {
                nombreProducto: "Libro",
                descripcion: "Libro sobre el cosmos y universo",
                nombreProducto2: "Revista",
                descripcion2: "Cientificos de la Astronomia moderna",
                categoriaProductos: []
            }

            categoriasModel.save((err, categoriaGuardada)=>{
                if(err) return res.status(500).send({mensaje: 'Error en la petición de la categoria'});
                if(!categoriaGuardada) return res.status(500).send({mensaje: 'Error al agregar el producto'});

                return res.status(200).send({categoriaGuardada});
            })
        }else{
            return res.status(500).send({mensaje: 'Agregue todos los campos necesarios'});
        }
    }else{
        return res.status(500).send({mensaje: 'Solo el rol tipo Admin puede agregar Categorias'});
    }
}


function editarCategoria (req, res){
    var idCategoria = req.params.id;
    var params = req.body;

    if(req.user.rol === 'ADMIN'){
        Categorias.findByIdAndUpdate(idCategoria, params, {new: true},(err, categoriaActualizada)=>{
            if(err) return res.status(500).send({mensaje: 'Error en la peticion'});
            if(!categoriaActualizada) return res.status(500).send({mensaje: 'Error el actualizar la categoria'});

            return res.status(200).send({ categoriaActualizada });
        })
    }else{
        return res.status(500).send({mensaje: 'Solo el rol tipo Admin puede editar Categorias'});
    }
}

function visualizarCategoriasporId(req, res){
    var categoriaId = req.params.id;

    if(req.user.rol != 'ADMIN'){
        return res.status(500).send({mensaje: 'No posee los permisos para ver la categorias'});
    }

    Categorias.findById(categoriaId, (err, categoriaEncontrada)=>{
        if(err) return res.status(500).send({mensaje: 'Error en la petcion'});
        if(!categoriaEncontrada) return res.status(500).send({mensaje: 'Error al buscar la categoria'});

        return res.status(500).send({ categoriaEncontrada });
    })
}

function visualizarCategorias(req, res){
    if(req.user.rol != 'ADMIN'){
        return res.status(500).send({mensaje: 'No posee los permisos para ver todas las categorias'});
    }

    Categorias.find().exec((err, categorias)=>{
        if(err) return res.status(500).send({mensaje: 'Error en la peticion'});
        if(!categorias) return res.status(500).send({mensaje: 'Error al buscar la categoria'});
    
        return res.status(200).send({categorias});
    })
}

function eliminarCategoria(req, res){
    var idCategoria = req.params.id;
    var params = req.body;

    if(req.user.rol === 'ADMIN'){
        Categorias.findByIdAndRemove(idCategoria, params,(err, categoriaBorrada)=>{
            if(err) return res.status(500).send({mensaje: 'Error en la peticion'});
            if(!categoriaBorrada) return res.status(500).send({mensaje: 'Error al eliminar la categoria'});

            return res.status(200).send({ categoriaBorrada });
        })
    }else{
        return res.status(500).send({mensaje: 'Solo el rol tipo Admin puede eliminar'});
    }
}

function visualizarCategoriasCliente(req, res){
    var nombreCategoria = req.body;

    if(req.user.rol != 'CLIENTE'){
        return res.status(500).send({mensaje: 'No es un rol de tipo CLIENTE para buscar por nombre'});
    }

    Categorias.findOne(nombreCategoria,(err, categoriaEncontrada)=>{
        if(err) return res.status(500).send({mensaje: 'Error en la peticion'});
        if(!categoriaEncontrada) return res.status(500).send({mensaje: 'Error al ver las categorias'});
    
        return res.status(200).send({ categoriaEncontrada });
    })
}

module.exports ={
    ejemplo,
    agregarCategoria,
    agregarCategoria2,
    agregarCategoria3,
    editarCategoria,
    visualizarCategoriasporId,
    visualizarCategorias,
    eliminarCategoria,
    visualizarCategoriasCliente
}