<script setup>
import axios from "axios"
import { ref } from "vue"

const products = ref([])

async function getProducts() {
  const { data } = await axios.get("http://localhost:3000/products") 
  products.value = data

}

getProducts()
</script>

<template>
  <h1>Init</h1>
  
  <table class="table table-striped">
            <thead>
                <tr>
                    <!-- <th>ID</th> -->
                    <th>NAME</th>
                    <th>PRICE</th>
                    <th>QUANTITY</th>
                    <th>DESCRIPTION</th>
                    <th>IMAGE</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="prod in products" :key="prod._id">
                    <!-- <td>{{ prod._id }}</td> -->
                    <td>{{ prod.name }}</td>
                    <td>{{ prod.price }}</td>
                    <td>{{ prod.quantity }}</td>
                    <td>{{ prod.description }}</td>
                    <td>
                        <img :src="prod.image" alt="", width="100">
                    </td>
                </tr>
            </tbody>
        </table>

</template>

<style scoped>

</style>
