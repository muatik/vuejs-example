<template>
  <div class="container-fluid">
    <product-list></product-list>
  </div>
</template>

<script>
import ProductList from './ProductList'
export default {
  name: 'Index',
  components: {ProductList}
}
</script>
