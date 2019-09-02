import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible/flexible.js'
import vueaxios from 'vue-axios'
import axios from 'axios'
import 'lib-flexible/flexible.js'
Vue.config.productionTip = false
Vue.use(vueaxios,axios)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
