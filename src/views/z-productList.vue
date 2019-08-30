<template>
  <div class="msite">
    <div class="z-nev">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <ul class="list">
              <li v-for="(i,index) in list" :key="index" @click="commoditys(i)">
                  <img :src="'https://fuss10.elemecdn.com/'+i.image_url" alt />
                  <span>{{i.title}}</span>
              </li>
            </ul>
          </div>
          <div class="swiper-slide">
            <ul class="list">
              <li v-for="(i,index) in lists" :key="index">
                  <img :src="'https://fuss10.elemecdn.com/'+i.image_url" alt />
                  <span>{{i.title}}</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <div class="z-main">
      <header data-v-070ab150 class="shop_header">
        <span data-v-070ab150 class="shop_header_title">附近商家</span>
      </header>
      <div class="shoplist_container">
        <ul>
          <li v-for="(i,index) in commodity" :key="index" class="shop_li" >
            <section>
              <img :src="'//elm.cangdu.org/img/'+i.image_path" alt class="shop_img" />
            </section>
            <div class="shop_right">
              <div class="shop_detail_header">
                <h4 class="shop_title ellipsis premium">{{i.name}}</h4>
                <ul class="shop_detail_ul">
                  <li
                    class="supports"
                    v-for="(item,index) in i.supports"
                    :key="index"
                  >{{item.icon_name}}</li>
                </ul>
              </div>
              <h5 class="rating_order_num">
                <section class="rating_order_num_left">
                  <section class="rating_section">
                    <div class="rating_container"></div>
                    <span class="rating_num">{{i.rating}}</span>
                  </section>
                  <section class="order_section">月售106单</section>
                </section>
                <div class="rating_order_num_right">
                  <span class="delivery_style delivery_left">{{i.delivery_mode.text}}</span>
                  <span class="delivery_style delivery_right">准时达</span>
                </div>
              </h5>
              <h5 class="fee_distan">
                <p>￥{{i.float_minimum_order_amount}}起送/{{i.piecewise_agent_fee.tips}}</p>
                <p class="fee_right">
                  {{i.distance}}/
                  <span>{{i.order_lead_time}}</span>
                </p>
              </h5>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
export default {
  name: "msite",
  data() {
    return {
      list: [], //商品列表
      lists: [],
      commodity: [] //商品
    };
  },
  created() {
    this.msite();
  },
  mounted() {
    new Swiper(".swiper-container", {
      pagination: {
        el: ".swiper-pagination"
      }
    });
  },
  methods: {
    commoditys(id){
      console.log(id)
      console.log(this.$routes)
    },
    msite() {
      this.$http
        .get("http://elm.cangdu.org/v2/index_entry", {
          params: {
            geohash: "32.0276,118.78373",
            group_type: "1",
            flags: "F"
          }
        })
        .then(data => {
          this.list = data.data.splice(0, 8);
        });
      this.$http
        .get("http://elm.cangdu.org/v2/index_entry", {
          params: {
            geohash: "32.0276,118.78373",
            group_type: "1",
            flags: "F"
          }
        })
        .then(data => {
          this.lists = data.data.splice(8, 16);
        });
      this.$http
        .get("http://elm.cangdu.org/shopping/restaurants", {
          params: {
            latitude: "31.00455",
            longitude: "121.23323",
            offset: "0",
            limit: "20"
          }
        })
        .then(data => {
          this.commodity = data.data;
          console.log(this.commodity);
        });
    }
  }
};
</script>

<style scoped>
.msite {
  background: #f5f5f5;
}
.z-nev {
  min-height: 400px;
  margin-bottom: 20px;
  border-bottom: 1px solid #e4e4e4;
  background: #fff;
}
.list {
  width: 100%;
  min-height: 370px;
  text-align: center;
}
.list li {
  width: 25%;
  float: left;
  line-height: 50px;
}
.list li img {
  width: 100px;
  height: 100px;
}
.list li  span {
  font-size: 24px;
  display: block;
}

.z-main {
  background-color: #fff;
}
.shop_header {
  height: 80px;
  line-height: 80px;
}
.shop_header_title {
  color: #999;
  font-size: 26px;
  margin-left: 25px;
}
.shop_img {
  width: 140px;
  height: 140px;
  display: block;
  margin-right: 0.4rem;
}
.shop_li {
  display: -ms-flexbox;
  display: flex;
  border-bottom: 1px solid #f1f1f1;
  padding: 24px 20px;
}
.shop_right {
  -ms-flex: auto;
  flex: auto;
}
.shop_right .shop_detail_header {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-align: center;
  align-items: center;
}
.shop_right .shop_detail_header .shop_title {
  width: 400px;
  color: #333;
  padding-top: 0.01rem;
  font-size: 30px;
  font-weight: 700;
}
.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.shop_right .shop_detail_header .premium:before {
  content: "\54C1\724C";
  display: inline-block;
  font-size: 22px;
  line-height: 30px;
  color: #333;
  background-color: #ffd930;
  padding: 0 5px;
  border-radius: 5px;
  margin-right: 15px;
}
.shop_right .shop_detail_header .shop_detail_ul {
  display: -ms-flexbox;
  display: flex;
  transform: scale(0.8);
  margin-right: -5px;
}
.shop_right .shop_detail_header .shop_detail_ul .supports {
  font-size: 24px;
  color: #999;
  border: 0.025rem solid #f1f1f1;
  padding: 0 4px;
  border-radius: 5px;
  margin-left: 5px;
}
.shop_right .rating_order_num {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  height: 30px;
  margin-top: 25px;
}
.shop_right .rating_order_num .rating_order_num_left {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: start;
  justify-content: flex-start;
}
.shop_right .rating_order_num .rating_order_num_left .rating_section {
  display: -ms-flexbox;
  display: flex;
}
.shop_right
  .rating_order_num
  .rating_order_num_left
  .rating_section
  .rating_num {
  font-size: 20px;
  color: #ff6000;
  margin: 0 10px;
}
.shop_right .rating_order_num .rating_order_num_left .order_section {
  transform: scale(0.8);
  margin-left: -0.2rem;
  font-size: 20px;
  color: #666;
}
.shop_right .rating_order_num .rating_order_num_right {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  transform: scale(0.7);
  min-width: 20px;
  -ms-flex-pack: end;
  justify-content: flex-end;
  margin-right: -25px;
}
.shop_right .rating_order_num .rating_order_num_right .delivery_left {
  color: #fff;
  background-color: #3190e8;
  border: 2px solid #3190e8;
}
.shop_right .rating_order_num .rating_order_num_right .delivery_right {
  color: #3190e8;
  border: 2px solid #3190e8;
}

.fee_distan {
  margin-top: 20px;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  font-size: 20px;
  color: #666;
}
.fee_right span{
      color: #3190e8;
}
</style>
