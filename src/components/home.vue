<template>
<div>

  <h1>*** HOME PAGE***</h1>
  <router-link to="/second">SECOND PAGE</router-link>
  <br>
  <router-link to="/api">API PAGE</router-link>
  <br>
  <router-link to="/bootstrap">BOOTSTRAP PAGE</router-link>
  <br>
  <hr>
  <br>
  <product-list-one></product-list-one>

</div>
</template>

<script>
import ProductListOne from './ProductListOne.vue'

export default {
  name: "home",
  components: {
    'product-list-one': ProductListOne

  }
}
</script>

<style scoped>

</style>