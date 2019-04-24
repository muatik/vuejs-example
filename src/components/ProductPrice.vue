<template>
  <div class="price-section">
    <p class="price my-0">
      ${{product.price}}
      <span v-if="hasDiscount()" class="text-muted discountFrom">${{product.discountFrom}}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'ProductPrice',
  props: ['product'],
  methods: {
    hasDiscount () {
      return 'discountFrom' in this.product
    }
  }
}
</script>

<style scoped>
.price {
  font-weight: bold;
  color: #dc0345;
}
.discountFrom{
  text-decoration: line-through;
}
</style>
