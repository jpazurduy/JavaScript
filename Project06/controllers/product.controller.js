
const Product = require("./../models/Product");


async function listProducts(req, res) {
    try {
        const products = await Product.find();
        return res.json(products);
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: "Server Error"
        });
    }
}

async function saveProduct(req, res) {
    try {

        const product = new Product(req.body);
        await product.saveProduct();

        return res.json(product);

    } catch (error) {
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
    listProducts
}