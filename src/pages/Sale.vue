<template>
  <div class="container-fluid">
    <h2 class="py-4 text-center border-bottom">Sale</h2>
    <product-list
      :products="products"></product-list>
  </div>
</template>

<script>
import ProductList from '@/components/ProductList'

export default {
  name: 'Sale',
  components: {ProductList},
  data() {
    return {
      products: []
    }
  },
  created () {
    this.products = this.$store.state.productsStore.products
  }
}
</script>
