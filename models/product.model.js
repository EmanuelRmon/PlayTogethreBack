const mongoose = require('mongoose')
const  link  = require('../routes/router')

const productsModel = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    precio: {
        type: String,
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
    imagen: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
},{
    versionKey: false
})

module.exports = mongoose.model('product', productsModel)

/*
{
    "nombre": "Marvel's Spider-Man 2 (PS5)",
    "precio": "202.500",
    "imagen": "https://products.eneba.games/resized-products/zvgANbZx9d5gtMFT6ME6ntFeA5uzXdsEObDJdxeZ1-Q_350x200_2x-0.jpg",
    "link": "https://www.eneba.com/psn-marvels-spider-man-2-ps5-psn-key-latam"
}
*/