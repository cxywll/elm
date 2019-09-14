<template>
    <div class="app">
      <Shead>
          <template v-slot:left>
            <router-link to="/msite">
              <i class="iconfont icon-jiantou"></i>
            </router-link>
            </template>
          <template v-slot:center>订单列表</template>
      </Shead>
      <ul class="list">
        
        <li>
          <div class="imgbox">
            <img src="" alt="">
          </div>
          <div class="xqbox">
            <div class="titlebox">
              <h3>效果演示 <span>等待支付</span></h3>
              <i>2019-09-04 14:38</i>
            </div>
            <div class="namebox">
              <p>卷时光甜品时光 </p>
              <span>￥451.00</span>
            </div>
            <!-- 剩余时间 -->
            <div class="paytime">
              <span>去支付(还剩14分25秒)</span>
            </div>
          </div>
        </li>
        
      </ul>
      <Sfoot></Sfoot>
    </div>
</template>
<script>
import Shead from './Shead.vue'
import Sfoot from './Sfoot.vue'
export default {
  name: 'List',
  components: {
    Shead,
    Sfoot
  }
}
</script>

<style scoped>
  *{margin: 0;padding: 0;box-sizing: border-box;}
  a .iconfont{
    font-size: .5rem;
    color: #fff;
  }
  .list{
    width: 100%;
    min-height: 3rem;
    background-color: #e7e7e7;
    margin-top: 1.2rem;
  }
  .list li{
    width: 100%;
    height: 4rem;
    background-color: #fff;
    margin-bottom: 0.2rem;
    padding: 0.3rem 0 0.1rem 0.4rem;
  }
  .imgbox{
    width: 20%;
    height: 50%;
    background-color: red;
    float: left;
  }
  .xqbox{
    width: 80%;
    height: 100%;
    float: left;
    padding:0 0.2rem;
  }
  .titlebox{
    width: 100%;
    height: 40%;
    border-bottom: 1px #e3e3e3 solid;
  }
  .titlebox h3{
    font-size: 0.55rem;
    font-weight: normal;
    margin-bottom: 0.1rem;
    color: #656565;
  }
  .titlebox h3 span{
    font-size: 0.4rem;
    float: right;
    line-height: 0.7rem;
  }
  .titlebox i{
    font-style: normal;
    font-size: 0.35rem;
    color: #939393;
  }
  .namebox{
    width: 100%;
    height: 30%;
    border-bottom: 1px #e3e3e3 solid;
  }
  .namebox p{
    height: 100%;
    font-size: 0.4rem;
    line-height: 275%;
    float: left;
    color: #7e7e7e;
  }
  .namebox span{
    float: right;
    line-height: 275%;
    font-weight: bold;
    color: #ff660e;
    font-size: 0.4rem;
  }
  .paytime{
    width: 100%;
    height: 30%;
    padding-top:0.2rem; 
    line-height: 180%;
  }
  .paytime span{
    width: 50%;
    height: 80%;
    font-size: 0.35rem;
    text-align: center;
    border: 3px orange solid;
    border-radius: 5px;
    display: block;
    margin-left: 50%;
    font-weight: 600;
    color: orange;
  }
</style>