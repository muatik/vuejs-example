<template>
  <div class="container my-4">
    <div class="col-md-10 col-lg-6 mx-auto">
      <h4 class="mb-3">Add a new address</h4>
      <form
        @submit.prevent="onNewAddressSubmitted"
        class="needs-validation" novalidate="">

        <div class="row">
          <div class="col-md-12 mb-3">
            <label for="address-name">Address name</label>
            <input type="text" v-model="name" class="form-control" id="address-name" placeholder="my home address" value="" required="">
            <div class="invalid-feedback">
              Valid address name is required.
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6 mb-3">
            <label for="firstName">First name</label>
            <input type="text" v-model="firstName" class="form-control" id="firstName" placeholder="" value="" required="">
            <div class="invalid-feedback">
              Valid first name is required.
            </div>
          </div>
          <div class="col-md-6 mb-3">
            <label for="lastName">Last name</label>
            <input type="text" v-model="lastName" class="form-control" id="lastName" placeholder="" value="" required="">
            <div class="invalid-feedback">
              Valid last name is required.
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6 mb-3">
            <label for="country">Country</label>
            <select v-model="country" class="custom-select d-block w-200" id="country" required="">
              <option value="">Choose...</option>
              <option>United States</option>
            </select>
            <div class="invalid-feedback">
              Please select a valid country.
            </div>
          </div>
          <div class="col-md-6 mb-3">
            <label for="state">State</label>
            <select v-model="state" class="custom-select d-block w-200" id="state" required="">
              <option value="">Choose...</option>
              <option>California</option>
            </select>
            <div class="invalid-feedback">
              Please provide a valid state.
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 mb-3">
            <label for="city">City</label>
            <input v-model="city" type="text" class="form-control" id="city" placeholder="" required="">
            <div class="invalid-feedback">
              Please provide a valid city.
            </div>
          </div>
          <div class="col-md-6 mb-3">
            <label for="zip">Zip</label>
            <input v-model="zipcode" type="text" class="form-control" id="zip" placeholder="" required="">
            <div class="invalid-feedback">
              Zip code required.
            </div>
          </div>
        </div>

        <div class="mb-3">
          <label for="address">Address</label>
          <input v-model="fullAddress" type="text" class="form-control" id="address" placeholder="1234 Main St" required="">
          <div class="invalid-feedback">
            Please enter your shipping address.
          </div>
        </div>

        <div class="mb-3">
          <label for="address-instruction">Address instruction</label>
          <textarea v-model="addressInstruction" type="text" class="form-control" id="address-instruction" placeholder="1234 Main St" required="" />
          <div class="invalid-feedback">
            Please enter your shipping address.
          </div>
        </div>
        <hr class="mb-4">

        <button class="btn btn-primary btn-lg btn-block" type="submit" >Add addres</button>
      </form>
    </div>
  </div>
</template>

<script>
import Address from '../entities/Address'

export default {
  name: 'NewAddressForm',
  data () {
    return {
      name: '',
      firstName: '',
      lastName: '',
      country: '',
      city: '',
      state: '',
      zipcode: '',
      fullAddress: '',
      addressInstruction: ''
    }
  },
  methods: {
    onNewAddressSubmitted () {
      const address = new Address(
        this.name,
        this.country,
        this.state,
        this.city,
        this.zipcode,
        this.fullAddress,
        this.receiverFullName,
        this.addressInstruction)

      this.$store.dispatch('customerStore/addAddress', address)
        .then((res) => {
          this.$emit('newAddressAdded', address)
        })
    }
  }
}

</script>
