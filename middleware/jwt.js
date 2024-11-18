const jwt = require ("jsonwebtoken")

exports.verificar = async (req, res, next) => {
    try {
        let token = req.headers.authorization
        token = token.slplit (' ') [1]
        let SECRET_KEY_JWT = process.env.SECRET_KEY_JWT
        jwt.verify ( token, SECRET_KEY_JWT, (error, decoded) => {

            if (error) {
                res.send ({error: "Ha ocurrido algo comunicate con el admin"})
            }

        }
       
       
    } catch (error) {
        console.log(error);
        res.send ({error: "Ha ocurrido algo comunicate con el admin"})
    }
}