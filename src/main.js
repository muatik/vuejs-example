// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import ProductStore from './stores/ProductStore'

Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    products: ProductStore
  }
})

store.dispatch('addProduct', {
  'title': 'Iphone 6s 64GB',
  'price': 435.20,
  'attributes': [
    'Tough solar powered, shock resistant, 200-meter water resistance, neobrite, double led light, world time, 31 time zones, second stopwatch, countdown timer, 5 daily alarms',
    'Hourly time signal, hand shift feature, battery level indicator, power saving, full auto-calendar, 12/24-hour format, button operation tone on/off, regular timekeeping',
    'Quartz Movement',
    'Case Diameter: 59.1mm',
    'Water resistant 200m (660ft): in general, suitable for professional marine activity and serious surface water sports, but not diving'
  ],
  'image': 'https://mosaic03.ztat.net/vgs/media/article-image-mhq/PO/25/2P/00/8K/12/PO252P008-K12@10.jpg?imwidth=1524'
})
store.dispatch('addProduct', {
  'title': 'Android 12c 32GB',
  'price': 382.99,
  'image': 'https://media.asambeauty.com/media/catalog/product/cache/1/image/1000x/0d366eadc71786658efb3607dbae1216/1/f/1f2c59c812a08c6646392e7bcae629d78854f232.jpg'
})
store.dispatch('addProduct', {
  'title': 'Beko Dishwasher',
  'price': 235.50,
  'discountFrom': 249.99,
  'image': 'https://www.wardow.com/images/1000x/fossil-maya-beuteltasche-braun-zb6979200-30.jpg'
})
store.dispatch('addProduct', {
  'title': 'OK Washingmachine',
  'price': 304.98,
  'image': 'https://fossil.scene7.com/is/image/FossilPartners/SKW6374_main?$refbase_xlarge$&wid=700&hei=700'
})
store.dispatch('addProduct', {
  'title': 'Lenov Seram Fx',
  'price': 22.42,
  'image': 'https://img.ltwebstatic.com/images/pi/201708/e1/15015524241247082510_thumbnail_900x.jpg'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
