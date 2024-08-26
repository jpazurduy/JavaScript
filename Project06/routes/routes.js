const express = require("express")
const Router = express.Router()

const productController = require("./../controllers/product.controller")

// endpoints

Router.get("/products", productController.listProducts)
Router.post("/product", productController.saveProduct)
// Router.get("/product", productController.saveProduct)
// Router.get("/product", productController.updateProduct)
// Router.get("/product", productController.deleteProduct)


module.exports = Router