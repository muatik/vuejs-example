<template>
  <div class="py-5 bg-light">
    <div class="container">
      <div class="row">

        <div v-for="product in products" :key="product.id" class="col-sm-12 col-md-6 col-lg-3">
          <router-link class="card mb-4 shadow-sm py-0" :to="getProductUrl(product)">

            <img class="product-image" :src="product.image" width="100%" height="200" />

            <div class="card-body">
              <p class="product-title">
                {{product.title}}
              </p>
              <product-price :product="product"></product-price>
            </div>

          </router-link>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import ProductPrice from './ProductPrice'

export default {
  name: 'ProductList',
  components: {ProductPrice},
  data () {
    return {
      products: []
    }
  },
  created () {
    this.products = this.$store.state.products.products
  },
  methods: {
    getProductUrl (product) {
      return {
        'name': 'ProductDetail',
        params: {'productId': product.id, 'productTitle': product.title.replace(' ', '-')}}
    }
  }
}
</script>

<style scoped>
a.card {
  text-decoration: none;
}
.product-title {
  color: black;
}
.product-image {
  border-bottom: 2px solid #f0f0f0;
}
</style>
