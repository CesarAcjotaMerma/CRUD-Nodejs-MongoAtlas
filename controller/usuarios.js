const { response, request } = require('express');
const bcryptjs = require('bcryptjs');

const indexUsuario = {};
const Usuario = require('../models/usuario');

indexUsuario.usuariosGet = async(req = request, res = response) => {
    
    const usuarios = await Usuario.find({}).lean();
    res.render('usuarios/index',{usuarios});
}

indexUsuario.usuariosPost = async(req, res = response) => {
    res.render('usuarios/index');
}

indexUsuario.usuariosCreate = async(req, res) => {
    
    const { nombre, correo, password, rol,img } = req.body;
    const usuario = new Usuario({ nombre, correo, password, rol,img });

    // Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync( password, salt );

    // Guardar en BD
    await usuario.save();
    res.redirect('/');
    
}

indexUsuario.editUsuario = async (req,res) =>{
    const usuario= await Usuario.findById(req.params.id).lean();
    console.log(usuario.password)

    res.render('usuarios/edit',{usuario})
}

indexUsuario.usuariosPut = async(req, res = response) => {
    
    const { id } = req.params;
    const { _id, password, google, correo, ...resto } = req.body;

    if ( password ) {
        // Encriptar la contraseña
        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync( password, salt );
    }

    const usuario = await Usuario.findByIdAndUpdate( id, resto );

    res.redirect("/")
}

indexUsuario.usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - usuariosPatch'
    });
}

indexUsuario.usuariosDelete = async (req, res) => {

    const { id } = req.params;

    const usuario = await Usuario.findByIdAndDelete( id );

    res.redirect('/');
}

module.exports = indexUsuario;