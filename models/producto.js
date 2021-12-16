const { Schema, model } = require('mongoose');

const ProductoSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    estado: {
        type: Boolean,
        default: true
    },    
    precio: {
        type: Number,
        required: [true, 'EL precio es obligatorio'],
    },
    descripcion: {
        type: String,
        required: [true, 'La descripcion es obligatorio']
    },
    disponible: {
        type: Boolean,
        default: true
    },
    img: {
        type: String,
    }
},
{ 
    timestamps: true 
});

module.exports = model( 'Producto', ProductoSchema );
