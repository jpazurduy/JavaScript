const express = require("express")
const Router = express.Router()

const productController = require("./../controllers/product.controller")

// endpoints

Router.get("/product", productController.listProducts)
// Router.get("/product", productController.getProduct)
// Router.get("/product", productController.saveProduct)
// Router.get("/product", productController.updateProduct)
// Router.get("/product", productController.deleteProduct)


module.exports = Router