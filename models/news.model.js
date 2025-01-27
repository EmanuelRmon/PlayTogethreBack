const mongoose = require ('mongoose')
const link = require ('../routes/router')

const newsModel = mongoose.Schema ({
    nombre: {
        type: String,
        required: true
    }, 
    descripcion:{
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

module.exports = mongoose.model('news', newsModel)