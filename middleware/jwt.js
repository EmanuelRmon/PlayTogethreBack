const jwt = require('jsonwebtoken')
require('dotenv').config()

exports.desencriptarToken = async (req, res, next)=> {
    let token = req.headers.authorization
    console.log(token);
    
    if (token) {
        token = token.split(' ')[1]
            console.log(token);

        let JWT_SECRET_KEY = process.env.SECRET_KEY_JWT
        jwt.verify(token, JWT_SECRET_KEY , (error, decoded)=>{
            
            if (error) {                
                res.status(401).send({error:"Token invalido"})
            } else {
                req.usuario = decoded
                next()
            }
        })

    } else {
        res.status(401).send({error:"Token no suministrado"})
    }

}
