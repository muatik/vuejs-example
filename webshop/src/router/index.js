import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/pages/Index'
import ProductDetail from '@/pages/ProductDetail'
import Bags from '@/pages/Bags'
import Sale from '@/pages/Sale'
import Lethers from '@/pages/Lethers'
import Cart from '@/pages/Cart'
import Checkout from '@/pages/Checkout'
import AddressForm from '@/components/AddressForm'
import CustomerAddresses from '@/pages/CustomerAddresses'

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
      path: '/bags',
      name: 'bags',
      component: Bags
    },
    {
      path: '/sale',
      name: 'sale',
      component: Sale
    },
    {
      path: '/lethers',
      name: 'lethers',
      component: Lethers
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
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
