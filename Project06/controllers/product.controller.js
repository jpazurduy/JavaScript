
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

async function updateProduct(req, res) {
    try {
       const { id } = res.params
       const body = req.body
       const product = await Product.findByIdAndUpdate(id, body, { new: true})
       return resizeTo.json({message: "Product updated"})


    } catch (error) {
        console.log("Error")
        return res.status(500).json({
            status: 500,
            message: "Server Error"
        });
    }
}


async function deleteProduct(req, res) {
    try {
       const { id } = res.params
       
       const product = await Product.findByIdAndDelete(id)
       return resizeTo.json({message: "Product deleted"})


    } catch (error) {
        console.log("Error")
        return res.status(500).json({
            status: 500,
            message: "Server Error"
        });
    }
}


module.exports = {
    listProducts,
    saveProduct,
    updateProduct,
    updateProduct,
    deleteProduct
}