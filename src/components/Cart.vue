<template>
  <div class="container-fluid">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Product</th>
          <th scope="col">Price</th>
          <th scope="col">Quantity</th>
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
          <td>
            <select v-model="orderLine.quantity">
              <option
                v-for="i in 10" :key="i"
                :selected="i == orderLine.quantity">{{i}}</option>
            </select>
          </td>
        </tr>
      </tbody>
    </table>

    {{totalAmount}}
  </div>
</template>

<script>
export default {
  name: 'Cart',
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
