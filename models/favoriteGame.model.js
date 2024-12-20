const mongoose = require ('mongoose')

const gameModel = mongoose.Schema({
    name: {
        type: String, 
        required: true
    },

    description: {
        type: String,
        required: true
    },

    imagen: {
        type: String,
        required: true
    },

    disponibilidad: {
        type: String,
        required: true
    }
},{
    versionKey: false
})

module.exports = mongoose.model ('game', gameModel)


//---------MODEL---------//

/*
{
"name": "FIFA 25",
"Description": "FIFA 2025",
"imagen":"https://sm.ign.com/t/ign_es/gallery/f/fc-25-scre/fc-25-screenshots_6awn.600.jpg",
"disponibilidad": "PS5 - XBOX Series - Nintendo Switch"
}
*/