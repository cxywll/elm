<template>
    <div>
        <Shead>
            <template v-slot:left>&lt;</template>
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
                <router-link to="/">登陆</router-link>/
                <router-link to="/">注册</router-link>
              </p>
              <p class="S-user-tele">

              </p>
            </div>
        </div>
    </div>
</template>
<script>
import Shead from './Shead.vue'
export default {
    name:'Mine',
  components: {
    Shead,
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
.information{
  border-top: 0.01rem solid #fff;
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
  padding-left: 0.6rem;
  line-height: 0.8rem;
  color: #fff;
}
.S-user-infor{
  font-size: 0.5rem;
}
.S-user-infor a{
  color: white;
  margin: 0 0.2rem;
}
.S-user-tele{
  font-size: 0.3rem;
}
</style>