export default class Address {
  constructor (name, country, region, city, postcode, fullAddress, receiverFullName, instructions = '') {
    this.name = name
    this.country = country
    this.region = region
    this.city = city
    this.postcode = postcode
    this.fullAddress = fullAddress
    this.receiverFullName = receiverFullName
    this.instructions = instructions
  }
}
