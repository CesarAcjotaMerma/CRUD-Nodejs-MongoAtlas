
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
        type: String,
        required: true,
        emun: ['USER1', 'USER_2']
    },
    //usuario : [{ type: Schema.Types.ObjectId, ref: 'Usuario' }],
    
    precio: {
        type: Float,
        required: [true, 'EL precio es obligatorio'],
    },
    categoria: {
        type: String,
        required: true,
        emun: ['CAT1', 'CAT_2']
    },
    //categoria : [{ type: Schema.Types.ObjectId, ref: 'Categoria' }],
    
    descripcion: {
        type: String,
        required: [true, 'La descripcion es obligatorio']
    },
    disponible: {
        type: Boolean,
        default: false
    },
    img: {
        type: String,
    }
});


ProductoSchema.methods.toJSON = function() {
    const { __v, descripcion, ...producto  } = this.toObject();
    return producto;
}

//exporta el modelo y crea la coleccion dentro de nuestra bd
module.exports = model( 'Producto', ProductoSchema );
