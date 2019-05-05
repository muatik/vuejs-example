import ProductService from '@/services/ProductService'

export default {
  state: {
    isFetchingList: false,
    products: []
  },
  mutations: {
    fetchProducts (state) {
      state.isFetchingList = true
      state.products = ProductService.findAll()
      state.isFetchingList = false
    }
  },
  actions: {
    addProduct (context, product) {
      console.log('adding product: ', product)
      ProductService.save(product)
      context.commit('fetchProducts')
    }
  }
}
