import Vue from 'vue'
import App from './App.vue'
import router from './router'

<<<<<<< HEAD
//import store from './store'

import store from './store'

=======
import axios from 'axios'
import store from './store'
>>>>>>> 54dc2cbcade8900abe96309dc36d3138e7e77f63
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
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
Vue.use(VueAxios, axios)

axios.defaults.withCredentials = true;
Vue.config.productionTip = false
>>>>>>> 54dc2cbcade8900abe96309dc36d3138e7e77f63
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
