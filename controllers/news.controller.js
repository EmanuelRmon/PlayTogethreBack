const newsModel = require ('../models/news.model')

exports.getNews =  async (req,res) => {
    try {
        let name = req.params.id
        if (name) {
            let data = await newsModel.find ({name: {$regex:name,$options:'i'}})
            res.status(200).json (data)
        }else{
            let dataNews = await newsModel.find()
            res.status(200).json(dataNews)
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).send({error:"Something happened, get in touch with admin"}) 
    }
}

exports.getOneNews = async (req,res) => {
    try {
        let id = req.params.id
        if (id.lenght == 24) {
            let OneNews = await newsModel.findOne({_id:id})
            if (OneNews) {
                res.json(OneNews)
            }else{
                res.send({error: "Not An Existing ID"})
            }
        }else{
            res.send({error: "Not A Valid ID"})
        }
    } catch (error) {
        console.log(error.message);
        res.send({error:"Something happened, get in touch with admin"}) 
    }
}

exports.addNews = async (req,res) => {
    try {
        let newNews = req.body
        let nombre = newNews.nombre
        let searchNews = await newsModel.findOne({nombre: nombre})
        if (!searchNews) {
            let news = new newsModel(newNews)
            await news.save()
            res.json(news)
        }else{
            res.send({error:"Cant Create two News With the Same Information"})
        }

    } catch (error) {
        console.log(error.message);
        res.send({error:"Something happened, get in touch with admin"})
    }
}

exports.deleteNews = async (req,res) =>{
    try {
        let id = req.params.id
        if (id.lenght == 24) {
            let news = await newsModel.findById(id)
            if (news) {
                let deletedNews = await newsModel.findOneAndDelete({_id:id})
                res.json(deletedNews)
            }else{
                res.send({error:"Not An Existing Product"})
            }
        }else {
            res.send({error: "Incorrect ID"})
        }
    } catch (error) {
        console.log(error.message);
        res.send({error:"Something happened, get in touch with admin"})
    }
}

exports.updateNews = async (req,res) => {
    try {
        let id = req.params.id
        let newNews = req.body
        if (id.lenght == 24) {
            let news = await newsModel.findById(id)
            if (news) {
                Object.assign(game, newNews)
                let updatedNews = await newsModel.updateOne({_id:id},news)
                res.json(updatedNews)
            }else{
                res.send({error: "Not News Found"})
            }
        }else{
            res.send({error:"Incorrect ID"})
        }
    } catch (error) {
        console.log(error.message);
        res.send({error: "Ha ocurrido algo comunicate con el admin"})
    }
}