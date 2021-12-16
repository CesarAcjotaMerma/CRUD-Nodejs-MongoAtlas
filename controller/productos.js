const { response, request } = require('express');
const bcryptjs = require('bcryptjs');

const indexProducto = {};
const Producto = require('../models/producto');

indexProducto.detailproductoGet = async(req = request, res = response) => {

    const producto = await Producto.findById(req.params.id).lean();

    res.render('productos/detalle_producto',{producto})
}


indexProducto.relatedProductosGet = async(req = request, res = response) => {

    //const productoshome = await Producto.find({}).lean();
    //console.log(productoshome);
    const productosR = await Producto.find({}).lean().limit(4).sort({'createdAt': 1});
    //console.log(productos)
    res.render('productos/detalle_producto',{productosR});

}

indexProducto.contactos = async(req = request, res = response) => {

    res.render('contactos/contactos')
}

indexProducto.productosGet = async(req = request, res = response) => {

    //const productoshome = await Producto.find({}).lean();
    //console.log(productoshome);
    const productos = await Producto.find({}).lean();
    //console.log(productos)
    res.render('productos/Productos',{productos});

}

indexProducto.productosGetDetails = async(req, res = response) => {
    const { id } = req.params;
    const producto = await Producto.findById( id );
    res.redirect('/productos');
}

// indexProducto.productoPost = async(req, res = response) => {

//     //const categorias = await Categoria.find({}).lean();
//     //const usuarios = await Usuario.find({}).lean();
//     res.render('productos/nuevoProducto',{usuarios});
// }

indexProducto.productoCreate = async(req, res) => {
    
    const { nombre,estado,precio,descripcion,img } = req.body

    const producto = new Producto({nombre,estado,precio,descripcion,img})
    await producto.save();
    res.send('Se realizó correctamente la insersion del producto a la BD');
    //res.sender('Se realizó correctamente la insersion del producto a la BD');
    // res.redirect('/productos')
}

indexProducto.editproducto = async (req,res) =>{
    const producto= await Producto.findById(req.params.id).lean();
    //const usuarios =  await Usuario.find({}).lean();
    //const categorias =  await Categoria.find({}).lean();

    res.render('productos/edit',{producto})
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