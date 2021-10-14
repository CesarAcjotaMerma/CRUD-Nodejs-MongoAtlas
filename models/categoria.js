const { Schema, model } = require('mongoose');

const CategoriaSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    estado: {
        type: Boolean,
        default: true
    },
    usuario : { 
        type: Schema.Types.ObjectId, 
        ref: 'usuario' 
    }
    // usuario: {
    //     type: String,
    //     required: true,
    //     emun: ['USER1', 'USER_2']
    // },
});


module.exports = model('Categoria', CategoriaSchema );