const express = require('express')
const router = express.Router()
const productsController = require('../controllers/product.controller')
const gameController = require('../controllers/favoriteGame.controller')
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

router.get('/products', productsController.getProducts)
router.get('/product/:id', productsController.getOneProduct)
router.post('/addproduct', jwtMiddelware.verificar, productsController.addProduct)
router.delete('/deleteproduct/:id', jwtMiddelware.verificar, productsController.deleteProduct)
router.put('/updateproduct/:id', jwtMiddelware.verificar, productsController.updateProduct)

// ---------------------------------------- Favorite games --------------------------------------------------------

router.get('/games', gameController.getgames)
router.get('/game/:id', gameController.getOneGame)
router.post('/addgame', gameController.addGame)
router.delete('/deletegame/:id', jwtMiddelware.verificar, gameController.deleteGame)
router.put('/updategame/:id', jwtMiddelware.verificar,  gameController.updateGame)




module.exports = router