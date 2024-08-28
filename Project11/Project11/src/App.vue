<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/init">Init</RouterLink>
    <RouterLink to="/services">Services</RouterLink>
    <RouterLink to="/product">Product</RouterLink>
  </nav>
  
  

  <RouterView />
</template>

<style scoped>


</style>
