const express = require('express')
const router = express.Router()
const productsController = require('../controllers/product.controller')
// const contentsController = require ('../controllers/content.controller')
const usersController = require('../controllers/user.controller')
const loginController = require ('../controllers/login.controller')
const jwtMiddelware = require ("../middleware/jwt")

router.get('/users', usersController.getUsers)
router.get('/user/:id', usersController.getOneUser)
router.post('/addUser', usersController.addUser)
router.delete('/deleteUser/:id', jwtMiddelware.verificar, usersController.deleteUser)
router.put('/updateUser/:id', jwtMiddelware.verificar, usersController.updateUser)
router.post ('/validacion', loginController.login)

//------------------------------------------- product -----------------------------------------------------

router.get('/products/nombre?', productsController.getProducts)
router.get('/product/:id', productsController.getOneProduct)
router.post('/addproduct', productsController.addProduct)
router.delete('/deleteproduct/:id', jwtMiddelware.verificar, productsController.deleteProduct)
router.put('/updateproduct/:id', jwtMiddelware.verificar, productsController.updateProduct)

// ---------------------------------------- Favorite games --------------------------------------------------------

// router.get('/games', contentsController.getContents)
// router.get('/game/:id', contentsController.getOneContent)
// router.post('/addgame', jwtMiddelware.verificar, contentsController.addContent)
// router.delete('/deletegame/:id', jwtMiddelware.verificar, contentsController.deleteContent)
// router.put('/updategame/:id', jwtMiddelware.verificar,  contentsController.updateContent)




module.exports = router