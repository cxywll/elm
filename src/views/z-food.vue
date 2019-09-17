<template>
  <div class="food">
    <Shead>
      <template v-slot:left>
        <i class="iconfont icon-jiantou" @click="backBtn"></i>
      </template>
      <template v-slot:center>
        <a href="home">{{titles}}</a>
      </template>
    </Shead>
    <div class="sort_container">
      <div class="sort_item">
        <div @click="is==0?is=-1:is=0">{{is?titles:'分类'}}</div>
        <div class="category_container" v-show="is==0">
          <div class="category_left">
            <ul>
              <li
                v-for="(i,index) in category"
                :key="index"
                class="category_left_li"
                @click="[btn(i),z_index=index]"
                :style="{background:z_index==index?'#fff':''}"
              >
                <section>
                  <span class="categorylist_left">{{i.name}}</span>
                </section>
                <section>
                  <span class="categorylist_right">{{i.count}}</span>
                  <i>></i>
                </section>
              </li>
            </ul>
          </div>
          <div class="category_right">
            <ul>
              <li
                v-for="(i,$index) in l"
                :key="$index"
                class="category_right_li"
                @click="[classifys(i),is=-1]"
              >
                  <span>{{i.name}}</span>
                  <span>{{i.count}}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="sort_item">
        <div @click="is==1?is=-1:is=1">排序</div>
        <div class="category_container" v-show="is == 1">
          <ul class="sort_list_container">
            <li
              class="sort_list_li"
              v-for="(itemArr,index) in arrList"
              :key="index"
              @click="[sortList(itemArr.num),is=-1,isIndex=index]"
            >
              <p :style="{color:isIndex==index?'#3190e8':''}">
                <span>{{itemArr.name}}</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div class="sort_item">
        <div @click="is==2?is=-1:is = 2">筛选</div>
        <div class="category_container filter_container" v-show="is == 2">
          <div style="width:100%;">
            <header class="filter_header_style">配送方式</header>
            <ul class="filter_ul">
              <li
                class="filter_li"
                v-for="(i,index) in screen"
                :style="{color:'#'+i.color}"
                :key="index"
                @click="clickBtn(i,index)"
              >
                <span class :style="{color:i.__v?'red':'#'+i.color}">{{i.text}}</span>
              </li>
            </ul>
          </div>
          <div style="width:100%;">
            <header class="filter_header_style">商家属性（可以多选）</header>
            <ul class="filter_ul">
              <li
                v-for="(i,index) in propertyList"
                :key="index"
                class="filter_li"
                @click="clickBtn(i,index+1)"
                :value="i.id"
              >
                <span
                  class="filter_icon"
                  :style="{'color':'#'+i.icon_color,'borderColor':'#'+i.icon_color}"
                >{{i.icon_name}}</span>
                <span class :style="{color:i.__v?'red':'#'+i.icon_color}">{{i.name}}</span>
              </li>
            </ul>
          </div>
          <div class="confirm_filter">
            <div class="clear_all filter_button_style" @click="clearBtn">清空</div>
            <div class="confirm_select filter_button_style" @click="[classifys(shai),is=-1]">
              确定{{shai}}
              <span v-show="zero">({{zero}})</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="z-main">
      <div class="shoplist_container">
        <ul>
          <router-link :to="{name:'Yorder',params:{img:i.image_path,name:i.name,money:i.piecewise_agent_fee.tips,promotion:i.promotion_info,fz:i.order_lead_time}}" v-for="(i,index) in commodity" :key="index">
            <li class="shop_li">
            <section>
                <img v-lazy="'//elm.cangdu.org/img/'+i.image_path" alt="" class="shop_img">
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
                  <span class="delivery_style delivery_left" v-if="i.delivery_mode">{{i.delivery_mode.text}}</span>
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
          </router-link>
        </ul>
      </div>
    </div>
    <Sfoot></Sfoot>
  </div>
</template>
<script>
import Shead from "../components/Shead";
import Sfoot from "../components/Sfoot";
export default {
  name: "food",
  data() {
    return {
      titles: "",
      support_ids:[],//筛选列表
      zero:0,
      isTrue: "",
      commodity: [], //商品,
      category: [], //分类
      l: [],
      z_index: "",
      screen: [], //晒选
      index: "",
      is: -2,
      shai:'',
      isz_index:-1,
      isIndex: -1,
      propertyList: [], // 属性列表
      arrList: [
        { name: "智能排序", num: 0 },
        { name: "距离最近", num: 4 },
        { name: "销量最高", num: 3 },
        { name: "起送价最低", num: 3 },
        { name: "配送速度最快", num: 4 },
        { name: "评分最高", num: 3 }
      ]
    };
  },
  components: {
    Shead,
    Sfoot
  },
  created() {
    this.titles = this.$route.query.title;
    this.list();
  },
  methods: {
    //清空
    clearBtn(){
        this.support_ids = []
        this.zero = 0
    },
    //筛选
    clickBtn(i,index){
      if(i.__v = !i.__v){
        this.zero++
      this.support_ids.push(i.id)
      }else{
        this.zero--
        this.support_ids.pop()
      }
      console.log(this.support_ids)
    },
    classifys(item){
      console.log(this.shai = item)
      this.$http.get('http://elm.cangdu.org/shopping/restaurants',{
        params:{
          latitude: '30.630231',
          longitude: '116.575482',
          restaurant_category_ids: [item.id],
          order_by: '2',
          support_ids: this.support_ids
        }
      }).then(data=>{
          this.commodity = data.data;
      })
    },
    sortList(index) {
      this.$http
        .get("http://elm.cangdu.org/shopping/restaurants", {
          params: {
            latitude: "30.630231",
            longitude: "116.575482",
            order_by: index
          }
        })
        .then(data => {
          this.commodity = data.data;
        });
    },
    btn(i) {
      this.l = i.sub_categories;
    },
    //后退按钮
    backBtn() {
      this.$router.back(-1);
    },
    list() {
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
        });
      //分类
      this.$http
        .get("http://elm.cangdu.org/shopping/v2/restaurant/category", {
          params: {
            latitude: "31.00455",
            longitude: "121.23323"
          }
        })
        .then(data => {
          this.category = data.data;
        });
      //筛选
      this.$http
        .get("https://elm.cangdu.org/shopping/v1/restaurants/delivery_modes", {
          params: {
            latitude: "31.00455",
            longitude: "121.23323"
          }
        })
        .then(data => {
          this.screen = data.data;
        });
      this.$http
        .get(
          "http://elm.cangdu.org/shopping/v1/restaurants/activity_attributes",
          {
            params: {
              latitude: "31.00455",
              longitude: "121.23323",
              kw: ""
            }
          }
        )
        .then(data => {
          this.propertyList = data.data;
        });
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  font-style: initial;
}
a {
  color: #fff;
}
.sort_container {
  position: fixed;
  left: 0;
  top: 90px;
  width: 100%;
  height: 70px;
  border-bottom: 1px solid #f1f1f1;
  display: flex;
  z-index: 5;
  background-color: #fff;
}
.sort_item {
  flex: 1;
  line-height: 70px;
  font-size: 24px;
  color: #444;
  text-align: center;
}
.sort_item > div {
  border-right: 1px solid #f1f1f1;
}
.z-main {
  background-color: #fff;
  margin-top: 170px;
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
  font-size: 20px;
  color: #fff;
  background-color: #3190e8;
  border: 2px solid #3190e8;
}
.shop_right .rating_order_num .rating_order_num_right .delivery_right {
  font-size: 20px;
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
.fee_right span {
  color: #3190e8;
}
.category_container {
  width: 100%;
  background: #fff;
  position: absolute;
  display: flex;
  left: 0;
}
.category_left {
  flex: 1;
  background-color: #f1f1f1;
  height: 750px;
  overflow-y: auto;
}
.category_right {
  flex: 1;
  background-color: #fff;
  padding-left: 35px;
  height: 750px;
  overflow-y: auto;
}
.categorylist_left {
  font-size: 24px;
  color: #666;
  /* display: inline-block; */
  line-height: 85px;
}
.categorylist_right {
  padding: 0px 5px;
  background: #ccc;
  border-radius: 15px;
  color: #fff;
  margin-right: 15px;
}
.category_left_li {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 0 0.5rem;
}
.active {
  background-color: #fff;
}
.filter_header_style {
  font-size: 0.4rem;
  color: #333;
  line-height: 1.5rem;
  height: 1.5rem;
  text-align: left;
  padding-left: 0.5rem;
  background-color: #fff;
}
.sort_container .sort_list_container {
  width: 100%;
}
.sort_container .sort_list_container {
  width: 100%;
}
.sort_container .sort_list_container .sort_list_li {
  height: 100px;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
}
.sort_container .category_container .category_right .category_right_li {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    height: 85px;
    line-height: 85px;
    padding-right: 25px;
    border-bottom: 1px solid #e4e4e4;
}
.sort_container .sort_list_container .sort_list_li p {
  line-height: 100px;
  -ms-flex: auto;
  flex: auto;
  text-align: left;
  text-indent: 25px;
  border-bottom: 1pxs solid #e4e4e4;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-align: center;
  align-items: center;
}
.filter_container {
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-align: start;
  align-items: flex-start;
  /* min-height: 10.6rem; */
  background-color: #f1f1f1;
}
.sort_container .showlist-enter-active,
.sort_container .showlist-leave-active {
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  -webkit-transform: translateY(0);
  -ms-transform: translateY(0);
  transform: translateY(0);
}
.sort_container .showlist-enter,
.sort_container .showlist-leave-active {
  opacity: 0;
  -webkit-transform: translateY(-100%);
  -ms-transform: translateY(-100%);
  transform: translateY(-100%);
}
.sort_container .filter_container .filter_ul {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  padding: 0 25px;
  padding-bottom: 0px;
  background-color: #fff;
}
.sort_container .filter_container .filter_ul .filter_li {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  border: 2px solid #eee;
  width: 180px;
  height: 80px;
  margin-right: 18px;
  border-radius: 10px;
  padding: 0 15px;
  margin-bottom: 15px;
}
.sort_container .filter_container .filter_ul .filter_li .filter_icon {
  width: 40px;
  height: 40px;
  font-size: 20px;
  border: 2px solid #e4e4e4;
  border-radius: 15px;
  margin-right: 0.25rem;
  line-height: 40px;
  text-align: center;
}
.sort_container .filter_container .filter_ul .filter_li span {
  font-size: 24px;
  color: #333;
}
.sort_container .filter_container .confirm_filter {
  /* display: -ms-flexbox; */
  display: flex;
  background-color: #f1f1f1;
  width: 100%;
  padding: 15px 5px;
}
.sort_container .filter_container .confirm_filter .clear_all {
  background-color: #fff;
  margin-right: 20px;
  border: 1px solid #fff;
}
.sort_container .filter_container .confirm_filter .filter_button_style {
  width: 50%;
  height: 70px;
  font-size: 28px;
  line-height: 70px;
  border-radius: 10px;
}
.sort_container .filter_container .confirm_filter .confirm_select {
  background-color: #56d176;
  color: #fff;
  border: 1px solid #56d176;
}
.sort_container .filter_container .filter_ul .filter_li .filter {
  color: #3190e8;
}
</style>

