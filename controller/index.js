const { response, request } = require('express');
const bcryptjs = require('bcryptjs');

const indexHome = {};
const Producto = require('../models/producto');
const Categoria = require('../models/categoria');
const Usuario = require('../models/usuario');

indexHome.indexGet = async(req = request, res = response) => {
    
    const usuarios = await Usuario.find({}).lean();
    const categorias = await Categoria.find({}).lean();
    const productos = await Producto.find({}).lean();

    res.render('index',{productos});
    console.log(productos)
}

module.exports = indexHome;