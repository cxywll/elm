import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
import Chotcity from './views/c-hotcity.vue'

import register from './views/j-register.vue'
import reset from './views/j-reset.vue'
import zhifu from './views/j-zhifu.vue'

// import Yorder from './views/y-order.vue'

import Yorder from './views/y-order.vue'
//import register from './views/j-register.vue'
// 公共组件

=======

import Yorder from './views/y-order.vue'
import register from './views/j-register.vue'
import reset from './views/j-reset.vue'
// import Yorder from './views/y-order.vue'
>>>>>>> 54dc2cbcade8900abe96309dc36d3138e7e77f63
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
<<<<<<< HEAD

// 搜索美食
import Csfood from './views/C-searchfood.vue'



=======
// 搜索美食
import Csfood from './views/C-searchfood.vue'
// 支付
import Cpay from './views/C-pay.vue'
// 余额
import Cyue from './components/Cyue.vue'
// 订单详情
import listxq from './views/C-listxq.vue'
>>>>>>> 54dc2cbcade8900abe96309dc36d3138e7e77f63
Vue.use(Router)

Vue.use(Router)
export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
<<<<<<< HEAD

=======
      // 默认首页
>>>>>>> 54dc2cbcade8900abe96309dc36d3138e7e77f63
      path: '/',
      name: 'Sallcity',
      component: Sallcity
    },
    {
<<<<<<< HEAD
=======
<<<<<<< HEAD

      // 附近商家点击

=======
      // 附近商家点击
>>>>>>> 54dc2cbcade8900abe96309dc36d3138e7e77f63
      path: '/yorder',
      name: 'Yorder',
      component: Yorder
    },
    {
<<<<<<< HEAD

      // 公共头部

=======
      // 公共头部
>>>>>>> 54dc2cbcade8900abe96309dc36d3138e7e77f63
      path: '/Shead',
      name: 'Shead',
      component: Shead
    },
    {
>>>>>>> 8a21b923ab5d38175f8d1b22c6edf3bb889526f4
      // 搜索城市
      path: '/Scitys',
      name: 'Scitys',
      component: Scitys,
    },
    {
      // 赵永超:美食主页
      path: '/msite',
      name: 'msite',
      component: Zmsite,
    },
    {
      // 滑动店铺点击
      path: '/food',
      name: 'Zfood',
      component: Zfood
    },
    {
      // 附近商家点击
      path: '/yorder',
      name: 'Yorder',
      component: Yorder
    },
    {
      // 搜索美食
      path: '/csfood',
      name: 'Csfood',
      component: Csfood
    },
    {
      // 会员中心
      path: '/Svip',
      name: 'Svip',
      component: Svip
    },
    {
      // 订单
      path: '/List',
      name: 'List',
      component: List
    },
    // 订单详情
    {
      path:'/listxq',
      name:'listxq',
      component:listxq
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
      // 密码登录
      path: '/register',
      name: 'register',
      component: register
<<<<<<< HEAD

=======
>>>>>>> 54dc2cbcade8900abe96309dc36d3138e7e77f63
    },
    
    {
      path: '/reset',
      name: 'reset',
      component: reset
    },
<<<<<<< HEAD

		{
      path: '/zhifu',
      name: 'zhifu',
      component: zhifu
    },
    
    

=======
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
  // 余额
  {
    path:'/cyue',
    name:'cyue',
    component:Cyue
  },
  // 支付
  {
    path:'/cpay',
    name:'Cpay',
    component:Cpay
  },
>>>>>>> 54dc2cbcade8900abe96309dc36d3138e7e77f63
  ]
})
