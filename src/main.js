import Vue from 'vue'
import App from './App.vue'
import router from './router'
<<<<<<< HEAD
//import store from './store'
=======
import store from './store'
>>>>>>> 0c52ac4cfe1097b1b2326f2530b4b90caa59958e
import 'lib-flexible/flexible.js'
import axios from 'axios'
import VueAxios from 'vue-axios'
import '../font/iconfont.css'
Vue.use(VueAxios, axios)

axios.defaults.withCredentials = true;
<<<<<<< HEAD
//import store from './store'
import '../font/iconfont.css'
import 'lib-flexible/flexible.js'
import VueResource from 'vue-resource'
Vue.config.productionTip = false

//Vue.use(VueResource)

=======
Vue.config.productionTip = false
>>>>>>> 0c52ac4cfe1097b1b2326f2530b4b90caa59958e
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
