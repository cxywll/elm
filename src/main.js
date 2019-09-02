import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible/flexible.js'
import axios from 'axios'
import VueAxios from 'vue-axios'
import '../font/iconfont.css'
Vue.use(VueAxios, axios)

axios.defaults.withCredentials = true;
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
