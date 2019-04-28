export default class OrderLine {
  constructor (product, quantity) {
    this.product = product
    this.quantity = quantity
  }

  getAmount () {
    return this.product.price * parseFloat(this.quantity)
  }
}
