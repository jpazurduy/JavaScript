
const Product = require("./../models/Product");


async function listProducts(req, res) {
    try {
        console.log("listProducts")
        console.log(req.json)
        const products = await Product.find();
        return res.json(products);
    } catch (error) {
        console.log("Error")
        return res.status(500).json({
            status: 500,
            message: "Server Error"
        });
    }
}

async function saveProduct(req, res) {
    try {
        console.log("SaveProduct")
        const product = new Product(req.body);
        await product.save();

        return res.json(product);

    } catch (error) {
        console.log("Error")
        return res.status(500).json({
            status: 500,
            message: "Server Error"
        });
    }
}


// listProducts)
// getProduct)
// saveProduct)
// updateProduct)
// deleteProduct)

module.exports = {
    listProducts,
    saveProduct
}