<template>
    <h1>Product</h1>
    {{ products }}
</template>

<script>
import {ref , onMounted } from "vue"
import productService from "../../../Services/product.service";


const products = ref([])

onMounted(() => getProducts() )

async function getProducts() {
    console.log("getProducts")
    const { data } = await productService.getProducts()
    products.value = data
}
</script>