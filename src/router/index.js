import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import ProductDetail from '@/components/ProductDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    }, {
      path: '/buy/:productId/:productTitle/',
      name: 'ProductDetail',
      component: ProductDetail
    }
  ]
})
