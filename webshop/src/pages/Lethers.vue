<template>
  <div class="container-fluid">
    <h2 class="py-4 text-center border-bottom">Lether</h2>
    <product-list
      :products="products"></product-list>
  </div>
</template>

<script>
import ProductList from '@/components/ProductList'

export default {
  name: 'Lethers',
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
