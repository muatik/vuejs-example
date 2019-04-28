import Vue from 'vue'

export default {
  name: 'CustomerStore',
  namespaced: true,
  state: {
    customer: null
  },
  actions: {
    setCustomer (context, customer) {
      context.state.customer = customer
    },
    addAddress (context, address) {
      // @TODO: check if customer object is valid
      return new Promise((resolve, reject) => {
        context.state.customer.addresses.push(address)
        resolve()
      })
    },
    deleteAddress (context, address) {
      return new Promise((resolve, reject) => {
        const addresses = context.state.customer.addresses
        const index = addresses.findIndex(i => address.name === i.name)
        Vue.delete(context.state.customer.addresses, index)
        resolve()
      })
    }
  }
}
