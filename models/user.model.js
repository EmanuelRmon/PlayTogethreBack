const mongoose = require('mongoose')

const usersModel = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    active:{
        type: Boolean,
    },
    password: {
        type: String,
        required: true
    },
    imagen: {
        type: String,
        required: false
    },
    Nusuario: {
        type: String,
        required: true
    }
},{
    versionKey: false
}
)

module.exports = mongoose.model('User', usersModel)


//---------MODEL---------//

/*
{
"name": "Emanuel",
"lastname": "Rodriguez",
"email": "emanuel@gmail.com",
"active": true,
"password": "Ucategui.BIT",
"Nusuario": "MrSinister943"
}
*/  