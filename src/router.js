import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
// import Chotcity from './views/c-hotcity.vue'

=======
>>>>>>> 528b5deef48efdc1759f64b5e567b892972c041a
import register from './views/j-register.vue'
import reset from './views/j-reset.vue'

<<<<<<< HEAD
// import Yorder from './views/y-order.vue'
//import register from './views/j-register.vue'
// 公共组件


import Yorder from './views/y-order.vue'
=======
// 公共组件
import Yorder from './views/y-order.vue'

import zhifu from './views/j-zhifu.vue'
>>>>>>> 528b5deef48efdc1759f64b5e567b892972c041a
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
<<<<<<< HEAD

=======
>>>>>>> 528b5deef48efdc1759f64b5e567b892972c041a
// 地址
import fadd from './views/f-address1.vue'
import '../icon/iconfont.css'
import fadd_add from './views/f-add_address.vue'
import fscadd from './views/f-sc_add.vue'
// 支付
import Cpay from './views/C-pay.vue'
// 余额
import Cyue from './components/Cyue.vue'
// 优惠券
import Squan from './views/S-quan.vue'
import Shong from './views/S-hongbao.vue'
import Sshopper from './views/S-shopper.vue'
// 订单详情
import listxq from './views/C-listxq.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      // 默认首页
      path: '/',
      name: 'Sallcity',
      component: Sallcity
    },
    {
<<<<<<< HEAD

      // 附近商家点击
      // 附近商家点击
=======
>>>>>>> 528b5deef48efdc1759f64b5e567b892972c041a
      path: '/yorder',
      name: 'Yorder',
      component: Yorder
    },
    {
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
    // {
    //   // 附近商家点击
    //   path: '/yorder',
    //   name: 'Yorder',
    //   component: Yorder
    // },
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
    },
    {
      path: '/reset',
      name: 'reset',
      component: reset
    },

		{
      path: '/zhifu',
      name: 'zhifu',
      component: zhifu
    },
<<<<<<< HEAD
    

=======
>>>>>>> 528b5deef48efdc1759f64b5e567b892972c041a
    // 下载饿了么APP
    {
      path: '/Sload',
      name: 'Sload',
      component: Sload
    },
    {
      path:'/fadd',
      name:'fadd',
      component:fadd,
    },
    {
      path:'/fadd_add',
      name:'fadd_add',
      component:fadd_add,
    },
    {
      path:'/fscadd',
      name:'fscadd',
      component:fscadd,
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
  // 优惠券
  {
    path:'/Squan',
    name:'Squan',
    component:Squan,
    children:[
      // 红包
      {
        path:'Shong',
        name:'Shong',
        component:Shong
      },
      {
        path:'Sshopper',
        name:'Sshopper',
        component:Sshopper
      },
    ]
  },
  ]
})
