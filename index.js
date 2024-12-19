const express = require('express')
const router = require('./routes/router')
const connectDB = require('./config/db')
const app = express()
require('dotenv').config()
const cors = require('cors')

app.use(cors())
app.use(express.json())
let PORT = process.env.PORT
// http://localhost:3000/api  --------------URL BASE
app.use('/api', router)
connectDB()

app.listen(PORT || 3000, ()=>{
    console.log(`Server running on port : ${PORT}`);

})

