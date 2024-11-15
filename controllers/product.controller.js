const productsModel = require('../models/product.model')

exports.getProducts = async(req, res)=>{
    try {
        let dataProducts = await productsModel.find()
        res.json(dataProducts)

    } catch (error) {
        console.log(error);
        res.send({error: "Ha ocurrido algo comunicate con el admin"})
    }
}
exports.getOneProduct = async(req, res)=>{
    try {
        let id = req.params.id
        if (id.length == 24) {
            let product = await productsModel.findOne({_id: id})
            if (product) {
                res.json(product)
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
exports.addProduct = async(req, res)=>{
    try {
        let product = req.body
        let serie = product.serie
        let buscarproducto = await productsModel.findOne({serie: serie})

        if (!buscarproducto) {
            let newProduct = new productsModel(product)
            await newProduct.save()
            res.json(newProduct)
        }else{
            res.send({error: "No se puede crear 2 productos iguales"})
        }
        
        
        
    } catch (error) {
        console.log(error);
        res.send({error: "Ha ocurrido algo comunicate con el admin"})
    }
}
exports.deleteProduct = async (req, res)=>{
    try {
        let id = req.params.id
        if (id.length == 24) {
            let product = await productsModel.findById(id)
            if (product) {
                let deleteProduct = await productsModel.findOneAndDelete({_id: id})
                res.json(deleteProduct) 
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
exports.updateProduct = async (req, res)=>{
    try {
        let id = req.params.id
        let update = req.body
        if (id.length == 24) {
            let product = await productsModel.findById(id)
            if (product) {
                Object.assign(product, update)
                let updateProduct = await productsModel.updateOne({_id: id}, product)
                res.json(updateProduct)
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