const mongoose = require('mongoose')

const productsModel = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    disponible: {
        type: Boolean,
        required: false
    },
    descripcion:{
        type: String,
        required: false
    },
    tipo: {
        type: String,
        required: false
    },
    marca:{
        type: String,
        required: false
    },
    serie: {
        type: String,
        required: false
    },
    imagen: {
        type: String,
        required: true
    }
},{
    versionKey: false
})

module.exports = mongoose.model('product', productsModel)

/*
{
    "nombre": "Mortal Kombat 1 (PC)",
    "precio": "82.000 COP",
    "imagen": "https://products.eneba.games/resized-products/3oAoBB--byY83zfMLoB4iFxNV3e-zyTjTfPuIIBEHBI_350x200_2x-0.jpg"
}
*/