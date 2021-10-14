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
    usuario: { 
        type: Schema.Types.ObjectId,
        ref:'usuario' 
    },
    
    precio: {
        type: Number,
        required: [true, 'EL precio es obligatorio'],
    },
    categoria: { 
        type: Schema.Types.ObjectId, 
        ref:'categoria'
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
});

module.exports = model( 'Producto', ProductoSchema );
