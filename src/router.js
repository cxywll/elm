import Vue from 'vue'
import Router from 'vue-router'

import Yorder from './views/y-order.vue'
import register from './views/j-register.vue'
import reset from './views/j-reset.vue'
// import Yorder from './views/y-order.vue'
import Sfoot from './components/Sfoot.vue'
import Shead from './components/Shead.vue'
import Mine from './components/Mine.vue'
import List from './components/List.vue'
import Sallcity from './views/Sallcity.vue'
import Scitys from './views/Scitys.vue'
import Sload from './components/Sload.vue'
// 我的积分
import point from './components/points.vue'
// 会员中心
import Svip from './components/Svip.vue'
// 我的里的服务中心
import Sfuwu from './components/Sfuwu.vue'
import Sintro from './components/Sintro.vue'
// 美食主页
import Zmsite from './views/z-productList.vue'
import Zfood from './views/z-food.vue'
// 搜索美食
import Csfood from './views/C-searchfood.vue'
// 支付
import Cpay from './views/C-pay.vue'
Vue.use(Router)

Vue.use(Router)
export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    // {
    //   path: '/',
    //   name: 'hotcity',
    //   component: hotcity
    // },
    // {
    //   path: '/f-search/:id',
    //   name: 'search',
    //   component: fsearch,
    //   props: route=>({
    //     name:route.query
    //   })
    // },
    // {
    //   path: '/Hello',
    //   name: 'Hello',
    //   component: Hello
    // },
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
      component: Yorder
    },
    {
      // 公共头部
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
      // 会员中心
      path: '/Svip',
      name: 'Svip',
      component: Svip
    },
    {
      // 搜索美食
      path: '/csfood',
      name: 'Csfood',
      component: Csfood
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
    // 下载饿了么APP
    {
      path: '/Sload',
      name: 'Sload',
      component: Sload
    },
    // 服务中心
    {
    path: '/Sfuwu',
    name: 'Sfuwu',
    component: Sfuwu
  },
  // 热门问题具体讲解
  {
    path: '/Sintro',
    name: 'Sintro',
    component: Sintro
  },
  // 积分页
  {
    path: '/point',
    name: 'point',
    component: point
  },
    {
      path:'/cpay',
      name:'Cpay',
      component:Cpay
    }
  ]
})
