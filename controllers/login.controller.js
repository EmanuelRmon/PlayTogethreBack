const e = require("express");
const userModel = require("../models/user.model");
const jwt = require ("jsonwebtoken")
require ("dotenv")


exports.login = async (req, res) => {
    try {
        let data = req.body
        console.log();
        
        let user = await userModel.findOne({email:data.email})
        if(user){
            if (user.password == data.password) {

                let payload = {
                    id: user._id,
                    name: user.name
                }
                let JWT_SECRET_KEY = process.env.SECRET_KEY_JWT

                let token = jwt.sign(payload, JWT_SECRET_KEY, {expiresIn:"24h"})
                res.status(200).json(token)
            } else {
                res.status(400).send({error:"Password incorrecto!"})
            }
        } else {
            res.status(400).send({error:"Email incorrecto!"})
        }

    } catch (error) {
        console.log(error.message);
        res.status(500).send({error:"Ha ocurrido algo comunicate con el admin"})
    }
}