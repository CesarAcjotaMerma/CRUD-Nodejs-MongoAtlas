const { response, request } = require('express');
const bcryptjs = require('bcryptjs');

const indexHome = {};
const Producto = require('../models/producto');

indexHome.indexGet = async(req = request, res = response) => {
    
    const producto = await Producto.find({}).lean().limit(4).sort({'updatedAt': -1});

    res.render('index',{producto});
    //console.log(productos)
}

module.exports = indexHome;