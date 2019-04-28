<template>
  <div class="container my-4">
    <div class="row">
      <customer-registration
        v-if="!isLoggined"
        class="col-12 col-md-4 offset-md-4"></customer-registration>
      <!-- <address-selection></address-selection> -->
      <!-- <aggrement-acceptance></aggrement-acceptance> -->
      <!-- <select-payment-method></select-payment-method> -->
    </div>
  </div>
</template>

<script>
import AddressSelection from './Customeraddresses'
import CustomerRegistration from './CustomerRegistration'


export default {
  name: 'Chekcout',
  components: {AddressSelection, CustomerRegistration},
  data () {
    return {

    }
  },
  computed: {
    isLoggined() {
      return false
    }
  }
}
</script>
