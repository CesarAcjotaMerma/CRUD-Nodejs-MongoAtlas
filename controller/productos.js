const { response, request } = require('express');
const bcryptjs = require('bcryptjs');

const indexProducto = {};
const Producto = require('../models/producto');
const Categoria = require('../models/categoria');
const Usuario = require('../models/usuario');

indexProducto.detailproductoGet = async(req = request, res = response) => {

    const producto = await Producto.findById(req.params.id).lean();

    res.render('productos/detalle_producto',{producto})
}

indexProducto.contactos = async(req = request, res = response) => {

    res.render('contactos/contactos')
}

indexProducto.productosGet = async(req = request, res = response) => {

    const productos = await Producto.find({}).lean();
    //console.log(productos)
    res.render('productos/Productos',{productos});
    res.render('index',{productos});

}

indexProducto.productosGetDetails = async(req, res = response) => {
    const { id } = req.params;
    const producto = await Producto.findById( id );
    res.redirect('/productos');
}

indexProducto.productoPost = async(req, res = response) => {

    const categorias = await Categoria.find({}).lean();
    const usuarios = await Usuario.find({}).lean();
    res.render('productos/nuevoProducto',{categorias,usuarios});
}

indexProducto.productoCreate = async(req, res) => {
    
    const { nombre,estado,precio,descripcion,img} = req.body

    const producto = new Producto({nombre,estado,precio,descripcion,img})
    await producto.save();
    res.redirect('/productos')
}

indexProducto.editproducto = async (req,res) =>{
    const producto= await Producto.findById(req.params.id).lean();
    const usuarios =  await Usuario.find({}).lean();
    const categorias =  await Categoria.find({}).lean();

    res.render('productos/edit',{producto,usuarios,categorias})
}

indexProducto.productoPut = async(req, res = response) => {
    
    await Producto.findByIdAndUpdate( req.params.id,req.body);

    res.redirect("/productos")
}

indexProducto.productoPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - usuariosPatch'
    });
}

indexProducto.productosDelete = async(req, res = response) => {
    const { id } = req.params;
    const producto = await Producto.findByIdAndDelete( id );
    res.redirect('/productos');
}

module.exports = indexProducto;