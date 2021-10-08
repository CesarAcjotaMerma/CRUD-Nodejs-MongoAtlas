const { Schema, model } = require('mongoose');

const CategoriaSchema = Schema({
    name: {
        type: String,
        required: [true, 'El rol es obligatorio']
    },
    estado: {
        type: Boolean,
        default: false
    },
    usuario : [{ type: ObjectId, ref: 'Usuario' }]
    // usuario: {
    //     type: String,
    //     required: true,
    //     emun: ['USER1', 'USER_2']
    // },
});


module.exports = model( 'Categoria', CategoriaSchema );