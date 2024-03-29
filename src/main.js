import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'
import toast from 'components/common/toast'
import FastClick from 'fastclick'
Vue.config.productionTip = false
Vue.use(VueLazyload, {
  loading: require('./assets/img/common/placeholder.png')
})
Vue.prototype.$bus = new Vue()
Vue.use(toast)
FastClick.attach(document.body)

new Vue({ 
  render: h => h(App),
  router,
  store
}).$mount('#app')
