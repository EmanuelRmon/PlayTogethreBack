const gameModel = require ('../models/favoriteGame.model')

exports.getgames = async (req, res) => {
    try {
        let dataGames = await gameModelModel.find()
        res.json(dataGames)
    } catch (error) {
        console.log(error);
        res.send({error:"Something happened, get in touch with admin"})       
    }
}

exports.getOneGame = async (req, res) => {
    try {
        let id = req.params.id
        if (id.length == 24) {
            let game = await gameModelModel.findOne({_id: id})
            if (game) {
                res.json(game)
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

exports.addGame = async (req, res) => {
    try {
        let newGAme = req.body
        let searchGame = await gameModel.findOne({name:newGAme.name})

        if (!searchGame) {
            let game = new gameModel(newGAme)
            await game.save()
            res.status(201).json(game)
        }else{
            res.status(400).send({error: "No se puede crear 2 productos iguales"})
        }
        
        
        
    } catch (error) {
        console.log(error);
        res.status(500).send({error: "Ha ocurrido algo comunicate con el admin"})
    }
}

exports.deleteGame = async (req, res)=> {
    try {
        let id = req.params.id
        if (id.length == 24) {
            let game = await gameModel.findById(id)
            if (game) {
                let deleteGame = await gameModel.findOneAndDelete({_id: id})
                res.json(deleteGame) 
            }else{
                res.send({error: "producto no existe"})
            }
        }else{
            res.send({error: "Id incorrecto"})
        }
               
    } catch (error) {
        console.log(error);
        res.send({error: "Ha ocurrido algo comunicate con el admin"})
    }
}

exports.updateGame = async (req, res) => {
    try {
        let id = req.params.id
        let game = req.body
        if (id.length == 24) {
            let game = await gameModel.findById(id)
            if (game) {
                Object.assign(game, update)
                let updateGame = await gameModel.updateOne({_id: id}, game)
                res.json(updateGame)
            }else{
                res.send({error: "No se escuentra ningun producto"})
            }
        }else{
            res.send({error: "Id incorrecto"})
        }

    } catch (error) {
        console.log(error);
        res.send({error: "Ha ocurrido algo comunicate con el admin"})
    }
}