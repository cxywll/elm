import Vue from 'vue'
import App from './App.vue'
import router from './router'
<<<<<<< HEAD
=======
import store from './store'
import 'lib-flexible/flexible.js'
import vueaxios from 'vue-axios'
import axios from 'axios'
// import store from './store'
>>>>>>> 658d554152878d06f82078979b3863433849ed0b
import 'lib-flexible/flexible.js'
import VueAxios from 'vue-axios'
import axios from 'axios'

<<<<<<< HEAD
=======
//import store from './store'
>>>>>>> 658d554152878d06f82078979b3863433849ed0b
import store from './store/index'
Vue.use(VueAxios, axios)

axios.defaults.withCredentials = true;

import '../font/iconfont.css'
import VueResource from 'vue-resource'
Vue.config.productionTip = false

// Vue.use(VueResource)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
