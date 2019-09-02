import Vue from 'vue'
import App from './App.vue'
import router from './router'

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

axios.defaults.withCredentials = true;

import '../font/iconfont.css'
import 'lib-flexible/flexible.js'
import VueResource from 'vue-resource'
Vue.config.productionTip = false

Vue.use(VueResource)

new Vue({
  router,
  // store,
//store,
  render: h => h(App)
}).$mount('#app')
