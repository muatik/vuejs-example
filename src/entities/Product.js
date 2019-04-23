export default class Product {
  title
  price
  description
  attributes
  quantity
  discountFrom

  constructor (title, price, description, attributes, quantity) {
    this.title = title
    this.price = price
    this.description = description
    this.attributes = attributes
    this.quantity = quantity
  }
}
