<template>
  <div class="py-5 bg-light">
    <div class="container">
      <div class="row">

        <div v-for="product in products" :key="product.id" class="col-sm-12 col-md-6 col-lg-3">
          <!-- <router-link class="card mb-4 shadow-sm py-0" :to="getProductUrl(product)"> -->
          <a class="card mb-4 shadow-sm py-0">

            <img class="product-image" :src="product.image" width="100%" height="200" />

            <div class="card-body">
              <p class="product-title">
                {{product.title}}
              </p>
              <p>{{product.price}}</p>
              <!-- <product-price :product="product"></product-price> -->
            </div>

          </a>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductList',
  data () {
    return {
      products: []
    }
  },
  created () {
    this.products = this.$store.state.products.products
  }
}
</script>
