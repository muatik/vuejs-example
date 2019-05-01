<template>
  <div>
    <index-carousel
      :slides="slides"></index-carousel>
    <product-list
      :products="products"></product-list>
  </div>
</template>

<script>
import ProductList from '@/components/ProductList'
import IndexCarousel from '@/components/IndexCarousel'

export default {
  name: 'Index',
  components: {ProductList, IndexCarousel},
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
