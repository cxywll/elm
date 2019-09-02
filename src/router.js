import Vue from 'vue'
import Router from 'vue-router'
import hotcity from './views/f-hotcity.vue'
// 搜索城市
import fsearch from './views/f-search.vue'
import Hello from './components/HelloWorld.vue'

// 头部
// import Hello from './components/HelloWorld.vue'
// import Chotcity from './views/c-hotcity.vue'
// 登录
import register from './views/j-register.vue'
// 公共组件
import Sfoot from './components/Sfoot.vue'
import Shead from './components/Shead.vue'
import Search from './components/Search.vue'
import Mine from './components/Mine.vue'
import List from './components/List.vue'
// 美食主页
import Zmsite from './views/z-productList.vue'
import Zfood from './views/z-food.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'hotcity',
      component: hotcity
    },
    {
      path: '/f-search/:id',
      name: 'search',
      component: fsearch,
      props: route=>({
        name:route.query
      })
    },
    {
      path: '/Hello',
      name: 'Hello',
      component: Hello
    },
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
    },
  ]
})
