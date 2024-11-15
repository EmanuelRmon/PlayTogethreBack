const userModel = require('../models/user.model')

exports.getUsers = async(req, res)=>{
    try {
        let dataUsers = await userModel.find()
        res.json(dataUsers)
    } catch (error) {
        console.log(error);
        res.send({error:"Something happened, get in touch with admin"})       
    }
}
exports.getOneUser = async(req, res)=>{
    try {
        let id = req.params.id
        if (id.length == 24) {
            let user = await userModel.findOne({_id: id})
            if (user) {
                res.json(user)
            }else{
                res.send({error: "not an existing id"})
            }
        }else{
            res.send({error: "not a valid id"})
        }
    } catch (error) {
        console.log(error);
        res.send({error:"Something happened, get in touch with admin"})     
    }
}
exports.addUser = async(req, res)=>{
    try {
        regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ //---------validacion de email bien escrito, (se puede poner en el env mejor)----------------//

        let user = req.body
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
        console.log(error);
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
        console.log(error);
        res.send({error:"Something happened, get in touch with admin"})   
    }
}
exports.updateUser = async(req, res)=>{
    try {
        let id = req.params.id
        let update = req.body
        
        if (id.length == 24) {
            if (user) {
                let user = await userModel.findOne({_id: id})
                
                Object.assign(user, update)
                // user.name = update.name
                // user.lastname = update.lastname
                // user.email = update.email
                // user.age = update.age
                // user.gender = update.gender
                // user.country = update.country

                let updatedUser = await userModel.updateOne({_id: id}, user)
                res.json(user)
            } else{
                res.send({error: "not an existing id"})
            }
        }else{
            res.send({error: "not a valid id"})
        }

    } catch (error) {
        console.log(error);
        res.send({error:"Something happened, get in touch with admin"})   
    }
}