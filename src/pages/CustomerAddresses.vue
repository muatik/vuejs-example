<template>
  <div class="container-fluid my-4">

    <div v-if="!isNewAddressFormActive">
      <h2>My addresses</h2>
      <div class="row">
        <div
          v-for="(address, index) in addresses" :key="index"
          class="col-md-4" style="min-width: 18rem;">
          <div class="card my-4 shadow-sm">
            <div class="card-body col-block">
              <h5 class="card-title">{{address.name}}</h5>
              <p class="card-text">{{ getSummary(address) }}</p>
              <button
                v-show="customer.defaultAddress.name == address.name"
                @click.prevent="setDefaultAddress(address)"
                class="btn btn-sm btn-block btn-outline-secondary mb-2">
                  <i class="fas fa-check text-success"></i> deliver to this address</button>
              <button
                v-show="customer.defaultAddress.name !== address.name"
                @click.prevent="setDefaultAddress(address)"
                class="btn btn-sm btn-block btn-primary mb-2">deliver to this address</button>

              <button
                v-if="address.isInProgress === true"
                class="btn btn-primary" type="button" disabled>
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Loading...
              </button>

              <button
                v-else
                @click.prevent="deleteAddress(address)"
                class="btn btn-sm btn-outline-secondary">Delete</button>

            </div>
          </div>
        </div>

        <div class="col-md-4" style="min-width: 18rem;">
          <div class="card my-4 shadow-sm">
            <div class="card-body col-block">
              <button
                @click.prevent="showNewAddressForm"
                class="btn btn-sm btn-outline-primary">Add new address</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <address-form
      v-if="isNewAddressFormActive"
      @newAddressAdded="newAddressAdded"></address-form>

  </div>
</template>

<script>
import Vue from 'vue'
import AddressForm from '@/components/AddressForm'

export default {
  name: 'CustomerAddresses',
  components: {AddressForm},
  data () {
    return {
      isNewAddressFormActive: false,
      customer: this.$store.state.customerStore.customer,
      addresses: this.$store.state.customerStore.customer.addresses,
      newAddressForm: {name: 'NewAddressForm'}
    }
  },
  methods: {
    getSummary (address) {
      return `${address.fullAddress} ${address.city} ${address.postcode} ${address.country}`
    },
    showNewAddressForm () {
      this.isNewAddressFormActive = true
    },
    newAddressAdded (newAddress) {
      console.log(newAddress)
      this.setDefaultAddress(newAddress)
      this.isNewAddressFormActive = false
    },
    editAddress (address) {
      // TODO: add this functionality
    },
    deleteAddress (address) {
      Vue.set(address, 'isInProgress', true)
      // @TODO: disable whole address card
      this.$store.dispatch('customerStore/deleteAddress', address)
        .then(() => {
          console.log('deleted')
        })
    },
    setDefaultAddress (address) {
      this.customer.defaultAddress = address
      this.$router.go(-1)
    }
  }
}
</script>
