const { response, request } = require('express');
const bcryptjs = require('bcryptjs');

const indexCart = {};
const Producto = require('../models/producto');

// indexCart.cartGet = async(req = request, res = response) => {
    
//     const producto = await Producto.find({}).lean().limit(4).sort({'updatedAt': -1});

//     res.render('index',{producto});
//     //console.log(productos)
// }

indexCart.pageCart = async(req = request, res = response) => {

    res.render('carts/cart')
}

module.exports = indexCart;