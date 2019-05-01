<template>
  <router-link class="btn btn-outline-primary" :to="cartRoute">
    <i class="fas fa-shopping-cart"></i>
    <span class="badge">{{counter}}</span>
  </router-link>
</template>

<script>
export default {
  name: 'CartButton',
  data () {
    return {
      cartRoute: {'name': 'cart'}
    }
  },
  computed: {
    counter () {
      return this.$store.state.cartStore.counter
    }
  }
}
</script>
<style scoped>
.badge {
  border: 1px solid white;
}
</style>
