import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const base = axios.create({
  baseURL: process.env.VUE_APP_BASE_URI
})
Vue.prototype.$http = base
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
