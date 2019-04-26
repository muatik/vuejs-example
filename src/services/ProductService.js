import shortid from 'shortid'

const products = {}

export default {
  findAll () {
    return Object.values(products)
  },
  findById (productId) {
    // @TODO: fix it
    return products[productId]
    // return Object.values(products)[0]
  },
  save (product) {
    if (!('id' in product)) {
      product.id = shortid.generate()
    }
    products[product.id] = product
  }
}
