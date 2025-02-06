const express = require('express')
const router = express.Router()


const productsController = require('../controllers/product.controller')
const gameController = require('../controllers/favoriteGame.controller')
const usersController = require('../controllers/user.controller')
const loginController = require ('../controllers/login.controller')
const { desencriptarToken } = require('../middleware/jwt')
const jwt = require('../middleware/jwt')
const newsController = require ('../controllers/news.controller')



router.get('/users',jwt.desencriptarToken, usersController.getUsers)
router.get('/user/:email', usersController.getOneUser)
router.post('/addUser', usersController.addUser)
router.delete('/deleteUser/:id', usersController.deleteUser)
router.put('/updateUser/:email', usersController.updateUser)
router.post('/validacion', loginController.login)
//------------------------------------------- product -----------------------------------------------------

router.get('/products/:nombre?',desencriptarToken, productsController.getProducts)
router.get('/product/:id', productsController.getOneProduct)
router.post('/addproduct', productsController.addProduct)
router.delete('/deleteproduct/:id', productsController.deleteProduct)
router.put('/updateproduct/:nombre', productsController.updateProduct)

// ---------------------------------------- Favorite games --------------------------------------------------------

router.get('/games/:name?', gameController.getgames)
router.get('/game/:id', gameController.getOneGame)
router.post('/addgame', gameController.addGame)
router.delete('/deletegame/:id', gameController.deleteGame)
router.put('/updategame/:id', gameController.updateGame)

//---------------------------------------------- News -------------------------------------------------------------

router.get ('/news', newsController.getNews)
router.get ('/getonenews/:id', newsController.getOneNews)
router.post ('/addnews', newsController.addNews)
router.delete ('/deletNews/:id', newsController.deleteNews)
router.put ('/updateNews/:id', newsController.updateNews)


module.exports = router