<template>
    <div>
        <Shead>
            <template v-slot:left><i class="iconfont icon-jiantou"></i></template>
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
                <router-link to="/">登陆</router-link><span>/</span>
                <router-link to="/">注册</router-link>
              </p>
              <p class="S-user-tele">
                <router-link to="/"><i class="iconfont icon-44"></i>暂无绑定手机号</router-link>
              </p>
            </div>
            <div class="turnright">
              <router-link to="/">
                <i class="iconfont icon-jiantouyou"></i>
              </router-link>
            </div>
        </div>
        <div>

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
  margin-top: 1.24rem;
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