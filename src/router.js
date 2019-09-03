import Vue from 'vue'
import Router from 'vue-router'
import Chotcity from './views/c-hotcity.vue'
import Yorder from './views/y-order.vue'
import register from './views/j-register.vue'
// 公共组件
import Sfoot from './components/Sfoot.vue'
import Shead from './components/Shead.vue'
import Search from './components/Search.vue'
import Mine from './components/Mine.vue'
import List from './components/List.vue'
import Sallcity from './views/Sallcity.vue'
import Scitys from './views/Scitys.vue'
// 美食主页
import Zmsite from './views/z-productList.vue'
import Zfood from './views/z-food.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Chotcity',
      component: Chotcity
    },
    {
      path: '/yorder',
      name: 'Yorder',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:Yorder
    },
    {
      path: '/Shead',
      name: 'Shead',
      component: Shead
    },
    {
      path: '/Sallcity',
      name: 'Sallcity',
      component: Sallcity
    },
    {
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
      // 订单
      path: '/List',
      name: 'List',
      component: List
    },
    {
      // 搜索美食
      path: '/Search',
      name: 'Search',
      component: Search
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
    }
  ]
})
