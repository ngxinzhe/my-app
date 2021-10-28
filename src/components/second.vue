<template>
<div>
  <h1>***SECOND PAGE***</h1>
  <router-link to="/">HOME PAGE</router-link>
  <br>
  <router-link to="/api">API PAGE</router-link>
  <br>
  <router-link to="/bootstrap">BOOTSTRAP PAGE</router-link>
  <br>
  <hr>
  <br>
  <product-list-two></product-list-two>

</div>
</template>

<script>
import ProductListTwo from './ProductListTwo.vue'

export default {
  name: "second",
  components: {
    'product-list-two': ProductListTwo
  }
}
</script>

<style scoped>

</style>