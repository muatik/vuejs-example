<template>
  <router-link class="btn btn-outline-primary" :to="cartRoute">
    <i class="fas fa-shopping-cart"></i>
    <span class="badge badge-primary">{{counter}}</span>
  </router-link>
</template>

<script>
export default {
  name: 'CartButton',
  data() {
    return {
      cartRoute: {'name': 'cart'}
    }
  },
  computed: {
    counter() {
      return 4
      // return this.$store.state.cart.counter
    }
  }
}
</script>
