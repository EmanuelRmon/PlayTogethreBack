const express = require('express')
const router = express.Router()
const productsController = require('../controllers/product.controller')
// const contentsController = require ('../controllers/content.controller')
const usersController = require('../controllers/user.controller')
const loginController = require ('../controllers/login.controller')

router.get('/users', usersController.getUsers)
router.get('/user/:id', usersController.getOneUser)
router.post('/addUser', usersController.addUser)
router.delete('/deleteUser/:id', usersController.deleteUser)
router.put('/updateUser/:id', usersController.updateUser)

//------------------------------------------- product -----------------------------------------------------

router.get('/products', productsController.getProducts)
router.get('/product/:id', productsController.getOneProduct)
router.post('/addproduct', productsController.addProduct)
router.delete('/deleteproduct/:id', productsController.deleteProduct)
router.put('/updateproduct/:id', productsController.updateProduct)

// ---------------------------------------- content --------------------------------------------------------

// router.get('/products', contentsController.getContents)
// router.get('/product/:id', contentsController.getOneContent)
// router.post('/addproduct', contentsController.addContent)
// router.delete('/deleteproduct/:id', contentsController.deleteContent)
// router.put('/updateproduct/:id', contentsController.updateContent)




module.exports = router