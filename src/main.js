import Vue from 'vue'
import App from './App.vue'
import router from './router'
<<<<<<< HEAD
// import store from './store'
import 'lib-flexible/flexible.js'
import vueaxios from 'vue-axios'
import axios from 'axios'

=======
<<<<<<< HEAD
//import store from './store'
import 'lib-flexible/flexible.js'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

axios.defaults.withCredentials = true;

=======
import store from './store'
import '../font/iconfont.css'
import 'lib-flexible/flexible.js'
import VueResource from 'vue-resource'
>>>>>>> 4f78e57c3b21cd21acbe2465eed7b69d3fea27f2
>>>>>>> a5fce193b1c12b1fd8a885e52cf77220538907d2
Vue.config.productionTip = false
Vue.use(vueaxios,axios)

Vue.use(VueResource)

new Vue({
  router,
<<<<<<< HEAD
  // store,
=======
//store,
>>>>>>> a5fce193b1c12b1fd8a885e52cf77220538907d2
  render: h => h(App)
}).$mount('#app')
