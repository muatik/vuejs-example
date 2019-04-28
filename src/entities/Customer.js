export default class Customer {
  constructor (id, firstName, lastName, email, gsm, addresses, defaultAddress) {
    this.id = id
    this.firstName = firstName
    this.lastName = lastName
    this.email = email
    this.gsm = gsm
    this.addresses = addresses
    this.defaultAddress = defaultAddress
  }
}
