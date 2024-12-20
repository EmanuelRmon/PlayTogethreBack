const userModel = require("../models/user.model");
const jwt = require ("jsonwebtoken")
require ("dotenv").config ()


exports.login = async (req, res) => {
    try {
        let body = req.body
        let user = await userModel.findOne({email: body.email})
        if (user) {
            if (user.password == body.password) {

                let payload = {
                    id: user._id,
                    name: user.name,
                }
                let JWT_SECRET_KEY = process.env.JWT_SECRET_KEY

                let token = jwt.sign(payload, JWT_SECRET_KEY, {expiresIn:"1h"})
                res.status(200).json(token)
            } else {
                res.status(400).send({error:"Password incorrecto!"})
            }
        } else {
            res.status(400).send({error:"Email incorrecto!"})
        }

    } catch (error) {
        res.status(500).send({error:"Ha ocurrido algo comunicate con el admin"})
    }
}