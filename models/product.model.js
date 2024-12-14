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
    "nombre": "televisor",
    "precio": 1500000,
    "disponible": true,
    "descripcion": 'TV OLED de 43" marca Samsung',
    "tipo": "electrodomestico",
    "marca": "Samsung",
    "serie":"tv1230LED43",
    "imagen": ""
}
*/