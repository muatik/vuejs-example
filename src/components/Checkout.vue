<template>
  <div class="container my-4">
    <div class="row">
      <customer-registration
        v-if="!customerSignedIn"
        @customerSignedIn="customerSignedIn"
        class="col-12 col-md-4 offset-md-4"></customer-registration>

      <div
        v-if="customerSignedIn"
        class="col-12 col-md-8 offset-md-2">

        <h2 class="col-12">Review your order</h2>

        <div class="card my-4 shadow-sm order-summary">
          <h5 class="card-header">Order Summary</h5>
          <div class="card-body col-block">
            <div class="card-text">
              <div>Items: <span class="price">EUR {{totalAmount}}</span></div>
              <div class="border-bottom pb-3">Shipping & handling: <span class="price">EUR 0</span></div>
              <div>Order total: <span class="font-weight-bold price">EUR {{totalAmount}}</span></div>
            </div>
          </div>
        </div>

        <div class="card my-4 shadow-sm order-summary">
          <h5 class="card-header">Delivery Address</h5>
          <div class="card-body col-block">
            <div  v-if="ifDeliveryAddressSelected">
              <h5 class="card-title">{{addressName}}</h5>
              <p class="card-text">{{addressSummary}}</p>
              <router-link
                :to="customerAddressPath"
                class="btn btn-sm btn-outline-secondary">Set another address</router-link>
            </div>
            <div v-else>
              <router-link
                :to="customerAddressPath"
                class="btn btn-sm btn-primary">Select the delivery address</router-link>
            </div>
          </div>
        </div>

        <div class="card my-4 shadow-sm order-summary">
          <h5 class="card-header">Payment Method</h5>
          <div class="card-body col-block">
            <div class="card-text">

              <div class="custom-control custom-radio">
                <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked="" required="">
                <label class="custom-control-label" for="credit">Credit card</label>
              </div>
              <div class="custom-control custom-radio">
                <input id="debit" name="paymentMethod" type="radio" class="custom-control-input" required="">
                <label class="custom-control-label" for="debit">Debit card</label>
              </div>
              <div class="custom-control custom-radio">
                <input id="paypal" name="paymentMethod" type="radio" class="custom-control-input" required="">
                <label class="custom-control-label" for="paypal">PayPal</label>
              </div>

              <div class="row">
                <div class="col-md-6 mb-3">
                  <label for="cc-name">Name on card</label>
                  <input type="text" class="form-control" id="cc-name" placeholder="" required="">
                  <small class="text-muted">Full name as displayed on card</small>
                  <div class="invalid-feedback">
                    Name on card is required
                  </div>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="cc-number">Credit card number</label>
                  <input type="text" class="form-control" id="cc-number" placeholder="" required="">
                  <div class="invalid-feedback">
                    Credit card number is required
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-3 mb-3">
                  <label for="cc-expiration">Expiration</label>
                  <input type="text" class="form-control" id="cc-expiration" placeholder="" required="">
                  <div class="invalid-feedback">
                    Expiration date required
                  </div>
                </div>
                <div class="col-md-3 mb-3">
                  <label for="cc-cvv">CVV</label>
                  <input type="text" class="form-control" id="cc-cvv" placeholder="" required="">
                  <div class="invalid-feedback">
                    Security code required
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div>
          <div class="my-4">
            <input type="checkbox"  id="accept-aggrements">
            <label for="accept-aggrements">I accept <a href="">the terms</a> and <a href="">the return policy aggrement</a></label>
          </div>
          <button class="col-md-3 btn btn-primary">Complete order</button>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
import CustomerRegistration from './CustomerRegistration'

export default {
  name: 'Chekcout',
  components: {CustomerRegistration},
  data () {
    return {
      customer: this.$store.state.customerStore.customer,
      address: this.$store.state.customerStore.customer.defaultAddress,
      customerAddressPath: {'name': 'CustomerAddresses'}
    }
  },
  computed: {
    customerSignedIn () {
      return this.customer !== null
    },
    ifDeliveryAddressSelected () {
      return this.address !== null
    },
    addressName () {
      return this.address.name
    },
    addressSummary () {
      return `${this.address.fullAddress} ${this.address.city} ${this.address.postcode} ${this.address.country}`
    },
    totalAmount () {
      return this.$store.getters['cartStore/totalAmount']
    }
  }
}
</script>

<style scoped>
.order-summary .price{
  color: #444;
  float: right;
  display: inline-block;
}
.order-summary li {
  list-style-type: none;
}
.order-summary .card-text div{
  margin: 5px 0;
}
</style>
