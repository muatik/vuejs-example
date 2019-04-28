import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import ProductDetail from '@/components/ProductDetail'
import Cart from '@/components/Cart'
import Checkout from '@/components/Checkout'
import AddressForm from '@/components/AddressForm'
import CustomerAddresses from '@/components/CustomerAddresses'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    }, {
      path: '/buy/:productId/:productTitle',
      name: 'ProductDetail',
      component: ProductDetail
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: Checkout
    },
    {
      path: '/customer/addresses',
      name: 'CustomerAddresses',
      component: CustomerAddresses
    },
    {
      path: '/customer/newaddress',
      name: 'AddressForm',
      component: AddressForm
    }
  ]
})
