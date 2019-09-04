import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
import Yorder from './views/y-order.vue'
=======
>>>>>>> a994040deed24fb49d47d13c34bb33876ab5ed82
import register from './views/j-register.vue'
import reset from './views/j-reset.vue'
import Yorder from './views/y-order.vue'
// 公共组件
import Sfoot from './components/Sfoot.vue'
import Search from './components/Search.vue'
import Shead from './components/Shead.vue'
import Mine from './components/Mine.vue'
import List from './components/List.vue'
import Sallcity from './views/Sallcity.vue'
import Scitys from './views/Scitys.vue'
import Sload from './components/Sload.vue'
// 美食主页
import Zmsite from './views/z-productList.vue'
import Zfood from './views/z-food.vue'
// 搜索美食
import Csfood from './views/C-searchfood.vue'
<<<<<<< HEAD

=======
>>>>>>> a994040deed24fb49d47d13c34bb33876ab5ed82
Vue.use(Router)

export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
<<<<<<< HEAD
=======
      // 默认首页
      path: '/',
      name: 'Sallcity',
      component: Sallcity
    },
    {
>>>>>>> a994040deed24fb49d47d13c34bb33876ab5ed82
      // 附近商家点击
      path: '/yorder',
      name: 'Yorder',
      component:Yorder
    },
    {
<<<<<<< HEAD
      // 公共头部
=======
>>>>>>> a994040deed24fb49d47d13c34bb33876ab5ed82
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
    },
    {
      path: '/reset',
      name: 'reset',
      component: reset
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search
    },
    // 下载
    {
      path: '/Sload',
      name: 'Sload',
      component: Sload
    },
  ]
})
