import Vue from 'vue'
import App from './App.vue'
import router from './router'

<<<<<<< HEAD
//import store from './store'

import store from './store'

import axios from 'axios'
//import store from './store'
=======
import axios from 'axios'
import store from './store'
>>>>>>> a3348c49e19784472bd80c2dcaee5909a7cb66d9
import 'lib-flexible/flexible.js'
import VueAxios from 'vue-axios'

import '../font/iconfont.css'
<<<<<<< HEAD
import '../font/iconfonts.css'
Vue.use(VueAxios, axios)

axios.defaults.withCredentials = true;

//import store from './store'
import '../font/iconfont.css'
import 'lib-flexible/flexible.js'
import VueResource from 'vue-resource'
Vue.config.productionTip = false

//Vue.use(VueResource)


Vue.config.productionTip = false

=======
>>>>>>> a3348c49e19784472bd80c2dcaee5909a7cb66d9
import ElementUI from 'element-ui'
import animate from 'animate.css'
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
