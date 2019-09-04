import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
=======
import Chotcity from './views/c-hotcity.vue'
<<<<<<< HEAD
import register from './views/j-register.vue'
import reset from './views/j-reset.vue'
=======
=======
// import Yorder from './views/y-order.vue'
>>>>>>> f41f36dff75aae32fc6f6e286c6426ff1e19c3ad
>>>>>>> 13a88ef9066278771e12ed6f85dad94772a08616
import Yorder from './views/y-order.vue'
import register from './views/j-register.vue'
// 公共组件
>>>>>>> 0c52ac4cfe1097b1b2326f2530b4b90caa59958e
import Sfoot from './components/Sfoot.vue'
import Shead from './components/Shead.vue'
import Mine from './components/Mine.vue'
import List from './views/C-dingdan.vue'
import Sallcity from './views/Sallcity.vue'
import Scitys from './views/Scitys.vue'
// 美食主页
import Zmsite from './views/z-productList.vue'
import Zfood from './views/z-food.vue'
// 搜索美食
import Csfood from './views/C-searchfood.vue'

<<<<<<< HEAD

=======
>>>>>>> 0c52ac4cfe1097b1b2326f2530b4b90caa59958e
Vue.use(Router)

export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      // 默认首页
      path: '/',
      name: 'Sallcity',
      component: Sallcity
    },
    {
      // 附近商家点击
      path: '/yorder',
      name: 'Yorder',
      component:Yorder
    },
    {
      path: '/Shead',
      name: 'Shead',
      component: Shead
    },
    {
      // 搜索城市
      path: '/Scitys',
      name: 'Scitys',
      component: Scitys
    },
    {
      // 赵永超:美食主页
      path: '/msite',
      name: 'Zmsite',
      component: Zmsite
    },
    {
      // 搜索美食
      path:'/csfood',
      name:'Csfood',
      component:Csfood
    },
    {
      // 订单
      path: '/List',
      name: 'List',
      component: List
    },
    {
      // 我的
      path: '/Mine',
      name: 'Mine',
      component: Mine
    },
    {
        path: '/Sfoot',
        name: 'Sfoot',
        component: Sfoot
    },
    {
      // 滑动店铺点击
      path: '/food',
      name: 'Zfood',
      component: Zfood
    },
    {
      // 密码登录
      path: '/register',
      name: 'register',
      component: register
<<<<<<< HEAD
    },
    {
      path: '/reset',
      name: 'reset',
      component: reset
    },
=======
    }
>>>>>>> 0c52ac4cfe1097b1b2326f2530b4b90caa59958e
  ]
})
