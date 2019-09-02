import Vue from 'vue'
import Router from 'vue-router'
import register from './views/j-register.vue'
import Sfoot from './components/Sfoot.vue'
import Shead from './components/Shead.vue'
import Search from './components/Search.vue'
import Mine from './components/Mine.vue'
import List from './components/List.vue'
import Zmsite from './views/z-productList.vue'
import Zfood from './views/z-food.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/Shead',
      name: 'Shead',
      component: Shead
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
