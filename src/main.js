import Vue from 'vue'
import App from './App.vue'
import router from './router'

import axios from 'axios'
import store from './store'
import 'lib-flexible/flexible.js'
import VueAxios from 'vue-axios'

axios.defaults.withCredentials = true;

import '../font/iconfont.css'
import VueResource from 'vue-resource'
Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(VueAxios, axios)

new Vue({
  router,
  // store,
//store,
  store,
  render: h => h(App)
}).$mount('#app')
