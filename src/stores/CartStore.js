import Vue from 'vue'

export default {
  namespaced: true,
  state: {
    counter: 0,
    orderLines: {}
  },
  getters: {
    totalAmount (state) {
      if (state.orderLines.length < 2) {
        return 0
      }
      return Object.values(state.orderLines).reduce((initialOrderLine, orderLine) => {
        return initialOrderLine + orderLine.getAmount()
      }, 0)
    }
  },
  mutations: {
    addOrderLine (state, orderLine) {
      const id = orderLine.product.id
      if (id in state.orderLines) {
        state.orderLines[id].quantity++
      } else {
        Vue.set(state.orderLines, id, orderLine)
        state.counter++
      }
    },
    removeOrderLine (state, orderLine) {
      Vue.delete(state.orderLines, orderLine.product.id)
    },
    descreaseQuantity (state, orderLine) {
      const id = orderLine.product.id
      if (orderLine.quantity === 1) {
        Vue.delete(state.orderLines, id, orderLine)
        state.counter--
      } else {
        orderLine.quantity--
      }
    }
  }
}
