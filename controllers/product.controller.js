const favoriteGameModel = require('../models/favoriteGame.model')
const productModel = require('../models/product.model')
const productsModel = require('../models/product.model')

exports.getProducts = async(req, res)=>{
    try {
        let nombre = req.params.nombre
        if (nombre) {
            let data = await productModel.find({nombre:{$regex: nombre, $options: 'i'}})
            res.status(200).json(data)
        } else {
          let dataProducts = await productModel.find();
          res.status(200).json(dataProducts);
    
        }
      } catch (error) {
        console.log(error.message);
        res.status(500).send({ error: "Ha ocurrido algo comunicate con el admin" });
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
        console.log(error.message);
        res.send({error: "Ha ocurrido algo comunicate con el admin"})
    }
}
exports.addProduct = async(req, res)=>{
    try {
        let product = req.body
        let nombre = product.nombre
        let buscarproducto = await productsModel.findOne({nombre: nombre})

        if (!buscarproducto) {
            let newProduct = new productsModel(product)
            await newProduct.save()
            res.json(newProduct)
        }else{
            res.send({error: "No se puede crear 2 productos iguales"})
        }
        
        
        
    } catch (error) {
        console.log(error.message);
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
        console.log(error.message);
        res.send({error: "Ha ocurrido algo comunicate con el admin"})
    }
}
exports.updateProduct = async (req, res)=>{
    try {
        let nombre = req.params.nombre
        let update = req.body
        let updateProduct = await productModel.findOne({nombre : nombre});
        if (updateProduct) {
            Object.assign(updateProduct, update)
            await updateProduct.save()
            res.json(updateProduct)
        } else {
            res.status(404).send({error: "No se encuentra ningún producto"})
            console.log(update);
            
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).send({error: "Ha ocurrido algo, comunícate con el administrador"})
    }
}
