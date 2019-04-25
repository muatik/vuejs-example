<template>
  <button type="button" class="btn btn-sm btn-add-cart" @click.prevent="addToCart">
    <i class="fas fa-cart-plus"></i> Add Chart
  </button>
</template>

<script>
import OrderLine from '../entities/OrderLine'

export default {
  name: 'AddToChart',
  props: ['product'],
  data () {
    return {
      cart: null,
      quantity: 1
    }
  },
  created () {
    this.cart = this.$store.state.cartStore.cart
  },
  methods: {
    addToCart () {
      this.$store.commit('cartStore/addOrderLine', new OrderLine(this.product, this.quantity))
      this.$emit('onAddToChart')
    }
  }
}
</script>
