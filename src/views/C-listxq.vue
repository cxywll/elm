<template>
  <div class="listxqbox">
        <shead>
          <template v-slot:left>
            <router-link to="/yorder">
              <i class="iconfont icon-jiantou"></i>
            </router-link>
            </template>
          <template v-slot:center>订单详情</template>
        </shead>
        <!-- 等待支付 再来一单 -->
        <div class="anotherOrder">
          <div class="imgbox">
              <img src="" alt="">
          </div>
          <h2>等待支付</h2>
          <router-link to="/yorder">
              <div class="another">
                再来一单
              </div>
          </router-link>
        </div>
        <!-- 订单详情 -->
        <div class="orderDetails">
            <!-- 图片店铺 -->
            <div class="imgtitlebox">
              <div class="orderimgbox">
                  <img src="" alt="">
              </div>
              <div class="ordertitlebox">
                  <h3>效果演示</h3>
                  <span>&rsaquo;</span>
              </div>
            </div> 
            <!-- 订单名字 -->
            <div class="ordername">
                  <p>收到货测试的健康测试</p>
                  <div class="num">
                      <i>X1</i>
                      <span>￥20</span>
                  </div>
            </div>
            <!-- 配送费 -->
            <div class="ordermouey">
                <p class="moueyname">配送费</p>
                <span class="mouey">4</span>
            </div>
            <!-- 实付 -->
            <div class="orderpay">
                <h5>实付24.00</h5>
            </div>
        </div>
        <!-- 配送信息 -->
        <div class="delivery">
            <div class="deliveryTitle">
                <p>配送信息</p>
            </div>
            <!-- 送达时间 -->
            <div class="deliveryTime">
                <p>送达时间：尽快送达</p>
            </div>
            <!-- 送货地址 -->
            <div class="deliverydz">
                <div class="dztitle">
                    <p>送货地址：</p>
                </div>
                <div class="namexq">
                    <p>陈筱</p>
                    <p>1513856399</p>
                </div>
            </div>
            <!-- 配送方式 -->
            <div class="fn">
                <p>配送方式：蜂鸟专送</p>
            </div>
        </div>
  </div>
</template>

<script>
import shead from '../components/Shead'
export default {
    components: {
        shead,
    }
}
</script>

<style scoped>
*{margin: 0;padding: 0;box-sizing: border-box;}
a .iconfont{
    font-size: .5rem;
    color: #fff;
}
.listxqbox{
    width: 100%;
    min-height: 3rem;
    background-color: #e9e9e9;
}
.anotherOrder{
    width: 100%;
    background-color: #fff;
    margin-top: 1.2rem;
    padding: 0.3rem 0;
    text-align: center;
}
.imgbox{
    width: 2.5rem;
    height: 2.5rem;
    background-color: #0073ff;
    margin: 0 auto;
    margin-bottom: 0.2rem;
    border-radius: 50%;
}
.imgbox img{
    width: 100%;
    height: 100%;
}
.anotherOrder h2{
    font-size: 0.65rem;
}
.another{
    width: 24%;
    height: 0.9rem;
    border: 0.05rem solid #0073ff;
    border-radius: 5px;
    line-height: 0.85rem;
    font-size: 0.4rem;
    margin: 0 auto;
    margin-top: 0.4rem;
    color: #0073ff;
    font-weight: 600;
    letter-spacing: 1px;
}
.orderDetails{
    width: 100%;
    height: 5rem;
    background-color: #fff;
    margin-top: 0.2rem;
}
.imgtitlebox,.ordername,.ordermouey,.orderpay{
    width: 100%;
    height: 25%;
    border-bottom: 1px solid #e7e7e7;
    padding: 0.1rem 0.2rem;
}
.orderimgbox{
    width:11%;
    height: 100%;
    background-color: red;
    float: left;
}
.orderimgbox img{
    width: 100%;
    height: 100%;
}
.ordertitlebox{
    width: 89%;
    height: 100%;
    float: left;
    padding: 0 0.3rem;
}
.ordertitlebox h3{
    height: 100%;
    font-size: 0.5rem;
    color: #404040;
    line-height: 85px;
    float: left;
}
.ordertitlebox span{
    height: 100%;
    font-size: 0.8rem;
    color: #7b7b7b;
    line-height:68px;
    float: right;
}
.ordername p{
    font-size: 0.4rem;
    color: #8a8a8a;
    line-height: 80px;
    float: left;
}
.num{
    height: 100%;
    line-height: 80px;
    float: right;
}
.num i{
    font-style: normal;
    margin-right: 80px;
    color: #ccc;
    font-size: 0.4rem;
}
.num span{
    margin-right: 0.2rem;
    color: #7b7b7b;
    font-size: 0.35rem;
    float: right;
}
.moueyname{
    height: 100%;
    line-height: 80px;
    font-size: 0.4rem;
    color: #8a8a8a;
    float: left;
}
.mouey{
    line-height: 80px;
    margin-right: 0.2rem;
    font-size: 0.35rem;
    color: #7b7b7b;
    float: right;
}
.orderpay{
    border: none;
}
.orderpay h5{
    height: 100%;
    line-height: 80px;
    margin-right: 0.2rem;
    font-size: 0.43rem;
    color: #ff7722;
    float: right;
}
.delivery{
    width: 100%;
    height: 5rem;
    background-color: #fff;
    margin-top: 0.2rem;
}
.deliveryTitle{
    width: 100%;
    height: 23%;
    background-color: #fff;
}
.deliveryTitle p{
    width: 100%;
    height: 100%;
    line-height: 60px;
    font-size: 0.5rem;
    color: #676666;
    padding: 0.2rem 0.25rem;
    border-bottom: 3px #ededed solid;
}
.deliveryTime{
    width: 100%;
    height: 25%;
    margin-bottom: 0.2rem;
}
.deliveryTime p{
    width: 100%;
    height: 100%;
    line-height: 90px;
    font-size: 0.45rem;
    color: #828282;
    padding: 0 0.2rem;
}
.deliverydz{
    width: 100%;
    height: 27%;
    background-color: #fff;
    padding: 0 0.2rem;
    line-height: 80px;
    margin-bottom: 0.2rem;
}
.dztitle{
    font-size: 0.45rem;
    color: #828282;
    float: left;
}
.namexq{
    float: left;
    font-size: 0.45rem;
    color: #828282;
}
.namexq p{
    line-height: 45px;
}
.fn{
    width: 100%;
    height: 25%;
    margin-bottom: 0.2rem;
}
.fn p{
    font-size: 0.45rem;
    color: #828282;
    line-height: 80px;
    padding: 0 0.2rem;
}
</style>