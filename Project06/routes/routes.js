const express = require("express")
const Router = express.Router()

const productController = require("./../controllers/product.controller")

// endpoints

Router.get("/products", productController.listProducts)
Router.post("/product", productController.saveProduct)
Router.patch("/product", productController.updateProduct)
Router.delete("/product", productController.deleteProduct)
// Router.get("/product", productController.deleteProduct)


module.exports = Router