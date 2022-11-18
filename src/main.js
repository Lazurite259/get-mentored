import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'vue-simple-search-dropdown/dist/vue-simple-search-dropdown.min.js'

const base = axios.create({
  baseURL: 'http://localhost:3000'
})
Vue.prototype.$http = base
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
