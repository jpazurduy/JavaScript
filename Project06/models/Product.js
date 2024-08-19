const mongoose = require("mongoose");

const productScheme = new mongoose.Schema({
    name: {type: String, required: true},
    price: {type: String, required: true},
    quantity: {type: String, required: true},
    description: {type: String, required: true},
    image: {type: String, required: true},
});

const Product = mongoose.model("Product", productScheme);

module.expports = Product;