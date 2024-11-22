const userModel = require("../models/user.model");
const jwt = require ("jsonwebtoken")
require ("dotenv").config ()


exports.login = async (req, res) => {
    try {
        let regexEmail = /[a-zA-Z0-9]+([.][a-zA-Z0-9]+)@[a-zA-Z0-9]+([.][a-zA-Z0-9]+)[.][a-zA-Z]{2,5}/
        let infoUser = req.body
        let user = await userModel.findOne ({email: infoUser.email})
        if (regexEmail.test(email)) {

           if (user) {
                let clave = infoUser.password
                if (user.password == clave) {
                    let SECRET_KEY_JWT = process.env.SECRET_KEY_JWT
                    let = payLoad = {
                        id: user._id,
                        nombre: user.nombre,
                        roll: user.roll
                    }
                    let token = jwt.sign (payLoad, SECRET_KEY_JWT, {expiresIn: "24h"})
                    res.send({token})
                } else {
                    res.send ({msj: "credenciales invalidas"})
                }
            } else {
                res.send ({msj: "credenciales invalidas"})
            }
        } else {
            res.status(400).send ({error: "invalid email"})
        }


    } catch (error) {
        console.log(error);
        res.send ({error: "Ha ocurrido un error comunicate con el admin"})
    }
}