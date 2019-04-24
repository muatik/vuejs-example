<template>
  <div class="container-fluid ">
    <div class="row my-4">
      <div class="col-md-4">
        <img :src="product.image" class="img-thumbnail" width="100%" height="300" />
      </div>
      <div class="col-md-7">

        <h1 class="product-header">{{product.title}}</h1>

        <ul>
          <li v-for="(attr, index) in product.attributes" :key="index">
            {{attr}}
          </li>
        </ul>

        <product-price :product="product" class="product-price my-4"></product-price>
        <add-to-cart :product="product"></add-to-cart>

      </div>
    </div>
  </div>
</template>

<script>
import ProductService from '../services/ProductService'
import ProductPrice from './ProductPrice'
import AddToCart from './CartButton'

export default {
  name: 'ProductDetail',
  components: {ProductPrice, AddToCart},
  data () {
    return {
      product: null
    }
  },
  created () {
    this.product = ProductService.findById(this.$route.params.productId)
  }
}
</script>
