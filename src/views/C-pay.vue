<template>
  <div class="c-paybox">
      <shead>
          <template v-slot:left>
              <i class="iconfont icon-jiantou"></i>
          </template>
          <template v-slot:center>在线支付</template>
      </shead>
      <div class="Timediv">
          <p>支付剩余时间</p>
          <div class="time">00 : {{minutes}} : {{seconds}}</div>
      </div>
      <p>选择支付方式</p>
      <!-- 微信，支付宝 -->
      <div class="paydiv">
          <!-- 支付宝 -->
          <div class="zfb">
              <div class="zfbimg">
                  <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567675104513&di=7b3e509a9572d338716469f299a49704&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170703%2F2b4d688817e74dd9af3c720c5d9b4473_th.jpg" alt="">
              </div>
              <p>支付宝</p>
              <i class="iconfont icon-icon_tupianweixuanzhong icon" @click="zfbchange"></i>
              <i class="iconfont icon-icon_tupianweixuanzhong icon1" v-show="zfb"></i>
          </div>
          <!-- 微信 -->
          <div class="wx">
              <div class="wximg">
                  <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567679361418&di=0d87c05555d9fba10044f81ee0b6b1ff&imgtype=0&src=http%3A%2F%2Fwww.xdowns.com%2Fattachment%2Fsyapp%2Flogo%2F201809061536171675.jpg" alt="">
              </div>
              <p>微信</p>
              <i class="iconfont icon-icon_tupianweixuanzhong icon" @click="wxchange"></i>
              <i class="iconfont icon-icon_tupianweixuanzhong icon1" v-show="wx"></i>
          </div>
      </div>
      <!-- 确认支付 -->
      <div class="butdiv">
          <calert></calert>
      </div>
    
  </div>
</template>

<script>
import shead from "../components/Shead"
import { setTimeout } from 'timers';
import { constants } from 'crypto';
import calert from '../components/Calert'
export default {
    data(){
        return{
            minutes:14,
            seconds:59,
            zfb:true,
            wx:false,
        }
    },
    components: {
        shead,
        calert
    },
    created(){
// !!!注意this指向
        var timer = setInterval(()=>{
            if(this.seconds == 0){
                this.seconds = 59
                this.minutes --
            }else{
                this.seconds--
            }
            if(this.seconds===0 && this.minutes===0){
                clearInterval(timer)
            }
        },1000)
    },
    methods:{
        // 选中微信
        wxchange(){
            this.wx = true;
            this.zfb = false;
        },
        // 选中支付宝
        zfbchange(){
            this.zfb = true;
            this.wx = false;
        },
        // 点击确认支付按钮
        pay(){
            alert('暂不提供支付服务')
        }
    }
}
</script>

<style scoped>
*{margin: 0;padding: 0;list-style: none;}
.c-paybox{height:16.6rem;background-color: #eeeeee;}
.Timediv{
    width: 100%;
    height: 300px;
    margin-top: 1.2rem;
    text-align: center;
    padding: 10% 20%;
    box-sizing: border-box;
    background-color: #fff;
}
.Timediv p{
    font-size: 0.45rem;
    color:#7c7c7c;
    font-weight: bold;
    letter-spacing: 0.1rem;
}
.time{
    width: 100%;
    height: 60%;
    /* background-color: red; */
    font-size: 1.1rem;
    color:#3e3d3d;
    margin-top: 0.2rem;
}
.c-paybox>p{
    width: 100%;
    height: 90px;
    font-size: 0.5rem;
    padding:0.2rem 0.25rem;
    box-sizing: border-box;
    color: #757575;
    letter-spacing: 0.03rem;
    line-height: 60px;
}
.paydiv{
    width: 100%;
    background-color: #fff;
}
.zfb{border-bottom: 1px #ccc solid;}
.zfb , .wx{
    width: 100%;
    height: 180px;
    padding: 0.3rem 0.25rem;
    box-sizing: border-box;
    line-height: 180px;
}
.zfbimg,.wximg{
    width: 100px;
    height: 100px;
    margin-top: 0.2rem;
    float: left;
}
.zfbimg img,.wximg img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
}
.zfb>p ,.wx>p{
    height: 100%;
    float: left;
    line-height: 180px;
    display: block;
    line-height: 130px;
    font-size: 0.5rem;
    color: #7c7c7c;
    margin-left: 0.25rem;
}
.icon,.icon1{
    height: 100%;
    font-size: 0.6rem;
    float: right;
    line-height: 130px;
    margin-right: 0.3rem;
    color: #ccc;
    position: relative;
}
.icon1{color: #5dd35d;position: absolute;right: 0.25rem;}
.butdiv{
    width: 100%;
    height: 90px;
    margin-top: 0.3rem;
    padding: 0 0.3rem;
    box-sizing: border-box;
}
.butdiv button{
    width: 100%;
    height: 100%;
    background-color: #5dd35d;
    border: none;
    font-size: 0.45rem;
    font-weight: bold;
    letter-spacing: 0.04rem;
    color: #fff;
    border-radius: 10px;
}
</style>