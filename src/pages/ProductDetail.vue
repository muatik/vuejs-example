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
import ProductService from '@/services/ProductService'
import ProductPrice from '@/components/ProductPrice'
import AddToCart from '@/components/AddToCart'

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

<style scoped>
.product-header {
  font-size: 130%;
  border-bottom: 1px solid #f0f0f0;
  padding-bottom: 10px;
  margin-bottom: 10px;
}
.btn-add-cart {
  background-color: #0315ff;
  color: #fff;
}
.product-price {
  font-size:130%
}
</style>
