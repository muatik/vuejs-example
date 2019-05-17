import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Stats from '@/pages/Stats'
import Practice from '@/pages/Practice'

Vue.use(Router)

export default new Router({
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/practice',
      name: 'Practice',
      component: Practice
    },
    {
      path: '/stats',
      name: 'Stats',
      component: Stats
    }
  ]
})
