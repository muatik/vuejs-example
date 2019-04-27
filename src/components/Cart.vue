<template>
  <div class="container">
    <h2>Shopping Cart</h2>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Product</th>
          <th scope="col">Price</th>
          <th scope="col" class="text-right">Quantity</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(orderLine, index) in orderLines" :key="index">
          <td>
            <div class="media">
              <img class="align-self-start mr-3" :src="orderLine.product.image" height="60">
              <div class="media-body">
                <h5 class="mt-0">{{orderLine.product.title}}</h5>
                <!-- <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p> -->
                <p><a href="" @click.prevent="removeFromCard(orderLine)">Delete</a></p>
              </div>
            </div>

          </td>
          <td>{{orderLine.product.price}}</td>
          <td class="text-right">
            <select v-model="orderLine.quantity">
              <option
                v-for="i in 10" :key="i"
                :selected="i == orderLine.quantity">{{i}}</option>
            </select>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="row my-4">
      <div class="col-12">
        <div class="text-right total-price">
          <p class="price">Total: {{totalAmount}}</p>
          <span class="text-muted">VAT + Shipping cost included</span>
        </div>
        <router-link 
          :to="checkoutUrl"
          class="btn btn-checkout float-right">Proceed to checkout</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  data() {
    return {
      checkoutUrl: {'name': 'checkout'}
    }
  },
  computed: {
    totalAmount () {
      return this.$store.getters['cartStore/totalAmount']
    },
    orderLines () {
      return this.$store.state.cartStore.orderLines
    }
  },
  methods: {
    removeFromCard (orderLine) {
      this.$store.commit('cartStore/removeOrderLine', orderLine)
    }
  }
}
</script>

<style scoped>
@media (max-width: 767px) {
  .btn-checkout {
    display: block;
    width: 100%;
  }
}

.btn-checkout {
  color: #212529;
  background-color: #ffc107;
  border-color: #ffc107;
}
.total-price {
  border-top: 2px solid #eaeaea;
  padding: 10px;
  margin: 10px;
}
.total-price .price {
    font-weight: bold;
    color: #dc0345;
    font-size: 1.2em;
}
</style>
