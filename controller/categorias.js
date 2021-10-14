const { response, request } = require('express');
const bcryptjs = require('bcryptjs');

const indexCategoria = {};
const Categoria = require('../models/categoria');
const Usuario = require('../models/usuario');

indexCategoria.categoriasGet = async(req = request, res = response) => {

    const categorias = await Categoria.aggregate(
        
        [
            {$match:{estado:true}},
            {
                $lookup:
                {
                    from:"usuarios",
                    localField:"usuario",
                    foreignField:"_id",
                    as: "categoria_usuario"
                }
            },
            { $unwind: "$categoria_usuario"}
        ]
    );
    res.render('categorias/Categorias',{categorias});
}

indexCategoria.categoriaPost = async(req, res = response) => {
    const collecctionUsuario =  await Usuario.find({}).lean();
    res.render('categorias/nuevaCategoria',{collecctionUsuario});
}
indexCategoria.categoriaCreate = async(req, res) => {
    
    const { nombre, estado, usuario} = req.body;
    const categoria = new Categoria({ nombre, estado, usuario });

    // Guardar en BD
    await categoria.save();
    res.redirect('/categorias');
    
}
indexCategoria.editCategoria = async (req,res) =>{
    const categoria= await Categoria.findById(req.params.id).lean();

    const collecctionUsuario =  await Usuario.find({}).lean();

    res.render('categorias/edit',{categoria,collecctionUsuario});
}

indexCategoria.categoriaPut = async(req, res = response) => {

    await Categoria.findByIdAndUpdate( req.params.id,req.body);

    res.redirect("/categorias")
}

indexCategoria.categoriaPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - usuariosPatch'
    });
}

indexCategoria.categoriasDelete = async(req, res = response) => {

    const { id } = req.params;

    const categoria = await Categoria.findByIdAndDelete( id );

    res.redirect('/categorias');

}
module.exports = indexCategoria;