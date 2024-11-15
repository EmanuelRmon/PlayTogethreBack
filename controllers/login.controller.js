const userModel = require("../models/user.model");

exports.login = async (req, res) => {
    try {
        let infoUser = req.body
        let user = await userModel.findOne ({email: infoUser.email})

        if (user) {
            let clave = infoUser.password
            if (user.password == clave) {
                res.send ({msj: "ingreso correto"})
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