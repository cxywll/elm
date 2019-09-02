import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible/flexible.js'
import vueaxios from 'vue-axios'
import axios from 'axios'
import 'lib-flexible/flexible.js'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

axios.defaults.withCredentials = true;

Vue.config.productionTip = false
Vue.use(vueaxios,axios)

Vue.use(VueResource)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
