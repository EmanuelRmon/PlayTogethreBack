const mongoose = require('mongoose')
require('dotenv').config()

const connectDB = async ()=>{
    try {
        let mongoURI = process.env.DB_MONGO
        await mongoose.connect(mongoURI)
        console.log("Connected to DB");


    } catch (error) {
        console.log(error);
        console.log("Impossible to connect to DB");

    }
}

module.exports = connectDB