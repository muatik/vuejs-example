import shortid from 'shortid'
export default class OrderLine {
  id
  product
  quantity

  constructor (product, quantity) {
    this.id = shortid.generate()
    this.product = product
    this.quantity = quantity
  }

  getAmount () {
    return this.product.price * parseFloat(this.quantity)
  }
}
