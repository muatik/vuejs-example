import Vue from 'vue'

export default {
  namespaced: true,
  state: {
    counter: 0,
    orderLines: []
  },
  getters: {
    totalAmount (state) {
      if (state.orderLines.length < 2) {
        return 0
      }
      return state.orderLines.reduce((initialOrderLine, orderLine) => {
        return initialOrderLine + orderLine.getAmount()
      }, 0)
    }
  },
  mutations: {
    addOrderLine (state, orderLine) {
      state.orderLines.push(orderLine)
      state.counter++
    },
    removeOrderLine (state, orderLine) {
      Vue.delete(state.orderLines, orderLine.id, orderLine)
      state.counter--
    }
  }
}
