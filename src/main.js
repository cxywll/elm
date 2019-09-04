import Vue from 'vue'
import App from './App.vue'
import router from './router'
//import store from './store'
import 'lib-flexible/flexible.js'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

axios.defaults.withCredentials = true;
//import store from './store'
import '../font/iconfont.css'
import 'lib-flexible/flexible.js'
import VueResource from 'vue-resource'
Vue.config.productionTip = false

//Vue.use(VueResource)

new Vue({
  router,
//store,
  render: h => h(App)
}).$mount('#app')
