import { Api } from "./Api"

export default {
    showProducts: () => {
        return Api().get("/products")
    },
    showProduct(id) {
        return Api().get("/product"+id)
    },
    saveProduct(data) {
        return Api().post("/product")
    },
    updateProduct(id, data) {

    },
    deleteProduct(id) {

    }

}