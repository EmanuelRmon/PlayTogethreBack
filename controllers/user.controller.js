const userModel = require('../models/user.model')
require('dotenv').config()
const jwt = require('jsonwebtoken')

exports.getUsers = async(req, res)=>{
    try {
        let data = await userModel.find()
        res.status(200).json(data)
    } catch (error) {
        console.log(error.message);
        res.status(500).send({error:"Ha ocurrido un error comunicate con el admin"})
    }
}
exports.getOneUser = async(req, res)=>{
    try {
        regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/ //---------validacion de email bien escrito, (se puede poner en el env mejor)----------------//
        if (regexEmail.test(req.params.email)) {
            let email = req.params.email
            let user = await userModel.findOne({email: email})
            if (user) {
                res.json(user)
            }else{
                res.send({error: "not an existing id"})
            }
        }

    } catch (error) {
        console.log(error.message);
        res.send({error:"Something happened, get in touch with admin"})     
    }
}
exports.addUser = async(req, res)=>{
    try {
        regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/ //---------validacion de email bien escrito, (se puede poner en el env mejor)----------------//

        let user = req.body
        if (!user.imagen) {
            user.imagen = "https://t3.ftcdn.net/jpg/05/17/79/88/360_F_517798849_WuXhHTpg2djTbfNf0FQAjzFEoluHpnct.jpg"
        }
        let email = user.email
        if (regexEmail.test(email)) {
            let searchUser = await userModel.findOne({email: email})
                 
            if (!searchUser) {
    
                let newUser = new userModel(user)
                await newUser.save()
                res.json(newUser)
            }else{
                res.send({error: "user's email already in use"})
            }
        }else{
            res.send({error: "not a valid email"})
        }

    } catch (error) {
        console.log(error.message);
        res.send({error:"Something happened, get in touch with admin"})   
    }
}
exports.deleteUser = async(req, res)=>{
    try {
        let id = req.params.id
        if (id.length == 24) {
            let user = await userModel.findById(id)

            if (user) {
                let deletedUser = await userModel.findOneAndDelete({_id: id})
                res.json(deletedUser)
            }else{
                res.send({error: "not an exisisting id"})
            }

        }else{
            res.send({error: "not a valid id"})
        }
    } catch (error) {
        console.log(error.message);
        res.send({error:"Something happened, get in touch with admin"})   
    }
}
exports.updateUser = async (req, res)=> {
    try {
        let regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/
        let id = await req.params.id
        let body = req.body
        if (regexEmail.test(body.email)) {
            if (id.length == 24) {
                let user = await userModel.findById(id)
                if (user) {
                    // user.nombre = body.nombre
                    // user.apellido = body.apellido
                    // user.edad = body.edad
                    // user.activo = body.activo
                    Object.assign(user, body)
                    await userModel.findOneAndUpdate({_id:id},user)
                    res.status(200).send("modificado")
                } else {
                    res.status(400).send({error:"Usuario no encontrado"})
                }
            } else {
                console.log("Id proporcionada no es correcta");
                res.status(400).send({error:"Id no contiene los caracteres suficientes"})
            }
        } else {
            res.status(400).send({error: "Correo Invalido"})
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).send({error:"Ha ocurrido un error comunicate con el admin"})
    }
}
