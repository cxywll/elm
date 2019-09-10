<template>
    <div class="mine">
        <Shead>
            <template v-slot:left>
                <a href="/msite" style="color:#fff;">
                  <i class="iconfont icon-jiantou"></i>
                </a>
            </template>
            <template v-slot:center>我的</template>
        </Shead>
        <div class="information">
            <div class="S-user-img">

            </div>
            <div class="S-login-infor" v-if="user">
              <p class="S-user-infor">{{user}}</p>
              <p class="S-user-tele">{{telephone}}</p>
            </div>
            <div class="S-login-infor" v-else>
              <p class="S-user-infor">
                <router-link to="/register">登陆</router-link><span>/</span>
                <router-link to="/register">注册</router-link>
              </p>
              <p class="S-user-tele">
                <router-link to="/register"><i class="iconfont icon-44"></i>暂无绑定手机号</router-link>
              </p>
            </div>
            <div class="turnright">
              <router-link to="/register">
                <i class="iconfont icon-jiantouyou"></i>
              </router-link>
            </div>
        </div>
        <div class="finance">
            <div class="much">
              <p class="number">
                <span class="num">0.00</span><span class="unit">元</span>
              </p>
              <p class="name">我的余额</p>
            </div>
            <div class="much">
              <p class="number">
                <span class="num">0</span><span class="unit">个</span>
              </p>
              <p class="name">我的优惠</p>
            </div>
            <div class="much">
              <router-link to='/point'>
                <p class="number">
                  <span class="num">0</span><span class="unit">分</span>
                </p>
                <p class="name">我的积分</p>
              </router-link>
            </div>
        </div>
        <div>
            <div class="serve">
              <router-link to="/List">
                <span><i class="iconfont icon-caidan"></i></span>
                <p class="s_name">我的订单<i class="iconfont icon-jiantouyou"></i></p>
              </router-link>
              
            </div>
            <div class="serve">
                <span><i class="iconfont icon-jifenshangcheng"></i></span>
                <p class="s_name">积分商城<i class="iconfont icon-jiantouyou"></i></p>
            </div>
            <div class="serve">
              <router-link to="/Svip">
                <span><i class="iconfont icon-wangguan"></i></span>
                <p class="s_name">饿了么会员卡<i class="iconfont icon-jiantouyou"></i></p>
               </router-link>
            </div>
            <div class="serve">
              <router-link to="/Sfuwu">
                <span><i class="iconfont icon-fuwu1"></i></span>
                <p class="s_name">服务中心<i class="iconfont icon-jiantouyou"></i></p>
              </router-link>
            </div>
            <div class="serve">
              <router-link to="/Sload">
                  <span><i class="iconfont icon-xiazaieliaomaapp"></i></span>
                  <p class="s_name">下载饿了么APP<i class="iconfont icon-jiantouyou"></i></p>
              </router-link>
            </div>
        </div>
        <Sfoot></Sfoot>
    </div>
</template>
<script>
import Shead from './Shead.vue'
import Sfoot from './Sfoot.vue'
export default {
  name:'Mine',
  components: {
    Shead,
    Sfoot
  },
  data () {
    return {
      user:'',
      telephone:'',
    }
  },
  created () {
    this.user = localStorage.user;
    this.telephone = localStorage.tel;
  }
}
</script>
<style>
.serve p .iconfont{
  font-size: 0.25rem;
  float: right;
  margin-right: .3rem;
  color: rgb(187, 187, 187);
}
.serve:nth-child(1) span .iconfont{
  color: rgb(184, 183, 183);
}
.serve:nth-child(2) span .iconfont{
  color: red;
}
.serve:nth-child(3) span .iconfont{
  color: rgb(250, 233, 3);
}
.serve:nth-child(4) span .iconfont{
  color: rgb(6, 93, 255);
}
.serve:nth-child(5) span .iconfont{
  color: #3190e8;
}
.serve{
  height: 1rem;
  line-height: 1rem;
  background-color: #fff;
}
.serve p{
  width: 8.8rem;
  height: 1rem;
  float: left;
  color: #333;
  font-size: .4rem;
  margin-left: .2rem;
  border-bottom: 1px solid #f1f1f1;
  line-height: 1rem;
  box-sizing: border-box;
}
.serve a p{
  line-height: 1rem;
  font-size: 0.40rem;
  color: #333;
}
.serve:nth-child(3) p{
  border: none;
}
.serve:nth-child(5) p{
  border: none;
}
.serve span .iconfont{
  width: 1rem;
  height: 1rem;
  float: left;
  text-align: center;
  line-height: 1rem;
  font-size: .4rem;
}
.serve:nth-child(3){
  border-bottom: .3rem solid rgb(241, 241, 241);
}
.mine{
  height: 16rem;
  background-color: rgb(241, 241, 241);
}
.finance{
  height: 2.4rem;
  background-color: #fff;
  border-bottom: .2rem solid #ebe8e8;
}
.much{
  width: 33.33%;
  height: 2.4rem;
  border-right: .0025rem solid #ccc;
  box-sizing: border-box;
  float: left;
}
.much .number{
  line-height: 1rem;
  padding-top: .4rem;
  text-align: center;
}
.much .name{
  font-size: .35rem;
  text-align: center;
}
.much:nth-child(1) .num{
  color: orange;
}
.much:nth-child(2) .num{
  color: red;
}
.much:nth-child(3) .num{
  color: #1edd1e;
}
.much .num{
  font-size: .75rem;
  font-weight: 900;
}
.much:nth-child(3){
  border: none;
}
.information .turnright{
  width: 1rem;
  height: 1.6rem;
  float: right;
  text-align: center;
  line-height: 1.6rem;
}
.turnright .iconfont{
  font-size: 0.5rem;
  color: #fff;
}
.information{
  margin-top: 1.2rem;
  width: 100%;
  height: 1.6rem;
  padding: 0.45rem 0;
  background-color: #3190e8;
}
.information div{
  float: left;
}
.S-user-img{
  width: 1.6rem;
  height: 1.6rem;
  margin-left: 0.6rem;
  background-color: #fff;
  border-radius: 50%;
  overflow: hidden;
}
.S-login-infor{
  width: 5rem;
  padding-left: 0.3rem;
  line-height: 0.8rem;
  color: #fff;
}
.S-user-infor{
  padding-left: 0.05rem;
  font-size: 0.5rem;
}
.S-user-infor a{
  color: white;
  font-weight: bold;
}
.S-user-infor span{
  font-weight: bold;
  margin: 0 0.2rem;
}
.S-user-tele{
  font-size: 0.4rem;
}
.S-user-tele a{
 color: #fff;
}
.S-user-tele a .iconfont{
  display: block;
  font-size: 0.5rem;
  float: left;
}
</style>