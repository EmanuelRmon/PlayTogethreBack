const userModel = require("../models/user.model");
const jwt = require ("jsonwebtoken")
require ("dotenv").config ()
exports.login = async (req, res) => {
    try {
        let infoUser = req.body
        let user = await userModel.findOne ({email: infoUser.email})

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
                res.status({token})
            } else {
                res.send ({msj: "credenciales invalidas"})
            }
        } else {
            res.send ({msj: "credenciales invalidas"})
        }


    } catch (error) {
        console.log(error);
        res.send ({error: "Ha ocurrido un error comunicate con el admin"})
    }
}