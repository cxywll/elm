import Vue from 'vue'
import App from './App.vue'
import router from './router'

import axios from 'axios'
import store from './store'
import 'lib-flexible/flexible.js'
import VueAxios from 'vue-axios'

import '../font/iconfont.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
Vue.use(VueAxios, axios)

axios.defaults.withCredentials = true;
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
