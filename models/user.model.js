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
    age:{
        type: Number,
        required: true
    },
    active:{
        type: Boolean,
    },
    gender:{
        type: String,
        required: true
    },
    country:{
        type: String,
        required: true
    }, 
    password: {
        type: String,
        required: true
    }
},{
    versionKey: false
}
)

module.exports = mongoose.model('model', usersModel)


//---------MODEL---------//

/*
{
"name": "Emanuel",
"lastname": "Rodriguez",
"email": "emanuel@gmail.com",
"age": 18,x
"active": true,
"gender": "Male",
"country": "Colombia",
"password": "Ucategui.BIT"
}
*/  