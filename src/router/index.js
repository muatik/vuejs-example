import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import ProductDetail from '@/components/ProductDetail'
import Cart from '@/components/Cart'
import Checkout from '@/components/Checkout'

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
    }
  ]
})
