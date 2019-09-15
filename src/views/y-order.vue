<template>
<<<<<<< HEAD
        
            <div class="box">
                <div class="content clearfix">
                    <!-- 左侧菜单 -->
                    <ul class='product'>

                        <li @click='xianshi(index)' v-for='item,index in arr' :class="{'active':i==index}">
                            {{item.name}}

                        <li @click='xianshi(index)' v-for='(item,index) in arr' :class="{'active':i==index}" :key="index">
                            {{item.type}}

                        </li>
                    </ul>
                    <!-- 右侧具体信息 -->
                    <div class='information'>
                        <div class="nav">
                            <ul class='list'>
                                <li>商品</li>
                                <li>评价</li>
                            </ul>
                        </div>
                        <!-- 右侧商品列表 -->

                        <div class='item-box clearfix' v-for='item,index in arr[idx].foods'>

                        <div class='item-box clearfix' v-for='(item,index) in list' :key="index">

                            <div class="img">
                                <img :src="'//elm.cangdu.org/img/'+item.image_path" alt="">
                            </div>
                            <div class="text">
                                <h3>{{item.specfoods[0].name}}</h3>
                                <div class='bt'>
                                    <span class='price'>{{item.specfoods[0].price}}</span>
                                    <p>
                                        <span class='jian' @click='del(item.specfoods[0])'>-</span>
                                        {{item.specfoods[0].num || 0}}
                                        <span class='jia' @click='add(item.specfoods[0])'>+</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <footer class='footer'>
                    总价:{{total}}元
                    <!-- 实现页面的跳转  to 默认是a标签-->
                    <router-link :to="{name:'shoppingCart',params:{selectList}}">去结算</router-link>
                </footer>
=======
  <div class="box">
    <div class="content clearfix">
      <!-- 头部传参 -->
      <div class="header">
        <div class="headerimg">
          <img :src="'//elm.cangdu.org/img/'+this.$route.params.img" alt class="shop_img" />
        </div>
        <div class="headerxq">
          <h3>效果演示</h3>
          <p><span>商家配送</span> / <span>{{this.$route.params.fz}}分钟送达</span> / <span>{{this.$route.params.money}}</span></p>
          <i>公告：{{this.$route.params.promotion}}</i>
        </div>
      </div>
      <!-- 左侧菜单 -->
      <ul class="product">
        <li
          @click="xianshi(index)"
          v-for="(item,index) in arr"
          :class="{'active':i==index}"
          :key="index"
        >{{item.name}}</li>
        <li
          @click="xianshi(index)"
          v-for="(item,index) in arr"
          :class="{'active':i==index}"
          :key="index"
        >{{item.type}}</li>
      </ul>
      <!-- 右侧具体信息 -->
        <div class="nav">
          <ul class="list">
            <li>商品</li>
            <li>评价</li>
          </ul>
        </div>
      <div class="information">
        <!-- 右侧商品列表 -->
        <div class="item-box clearfix" v-for="(item,index) in arr[idx].foods" :key="index">
          <!-- <div class='item-box clearfix' v-for='(item,index) in list' :key="index"> -->
          <div class="img">
            <img :src="'//elm.cangdu.org/img/'+item.image_path" alt />
          </div>
          <div class="text">
            <h3>{{item.specfoods[0].name}}</h3>
            <div class="bt">
              <span class="price">{{item.specfoods[0].price}}</span>
              <p>
                <span class="jian" @click="del(item.specfoods[0])">-</span>
                {{item.specfoods[0].num || 0}}
                <span
                  class="jia"
                  @click="add(item.specfoods[0])"
                >+</span>
              </p>
>>>>>>> 54dc2cbcade8900abe96309dc36d3138e7e77f63
            </div>
          </div>
          <!-- </div> -->
        </div>
      </div>
      <footer class="footer">
        总价:{{total}}元
        <!-- 实现页面的跳转  to 默认是a标签-->
        <router-link :to="{name:'Cpay',params:{selectList}}">去结算</router-link>
      </footer>
    </div>
  </div>
</template>
    
<<<<<<< HEAD
    <script> 
         export default{
            data() {
                return {
                    currentCategory: 0,
                    arr: [{
                        type: '热销商品',
                        code: [{
                            img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1313270453,3807247283&fm=26&gp=0.jpg',
                            text: '新鲜青柠500g/皇新鲜特价新鲜特价新鲜待价',
                            price: '￥10.8',
                        },
                        {
                            img: 'http://img02.tooopen.com/images/20150414/tooopen_sy_118451441751.jpg',
                            text: '新鲜青柠500g/皇新鲜特价新鲜特价新鲜待价',
                            price: '￥10.8',
                        },
                        {
                            img: 'http://img4.imgtn.bdimg.com/it/u=2851445260,1524768388&fm=26&gp=0.jpg',
                            text: '新鲜青柠500g/皇新鲜特价新鲜特价新鲜待价',
                            price: '￥10.8',
                        },
                        {
                            img: 'http://img2.imgtn.bdimg.com/it/u=4259438085,1196209161&fm=26&gp=0.jpg',
                            text: '新鲜青柠500g/皇新鲜特价新鲜特价新鲜待价',
                            price: '￥10.8',
                        },
                        {
                            img: 'http://img1.imgtn.bdimg.com/it/u=989743373,1247199668&fm=26&gp=0.jpg',
                            text: '新鲜青柠500g/皇新鲜特价新鲜特价新鲜待价',
                            price: '￥10.8',
                        },
                        {
                            img: 'http://img2.imgtn.bdimg.com/it/u=3941718376,2643720830&fm=26&gp=0.jpg',
                            text: '新鲜青柠500g/皇新鲜特价新鲜特价新鲜待价',
                            price: '￥10.8',
                        },
                        {
                            img: 'http://img1.imgtn.bdimg.com/it/u=1898610548,51609395&fm=26&gp=0.jpg',
                            text: '新鲜青柠500g/皇新鲜特价新鲜特价新鲜待价',
                            price: '￥10.8',
                        }
                            , {
                            img: 'http://img0.imgtn.bdimg.com/it/u=2611172137,4195398711&fm=26&gp=0.jpg',
                            text: '新鲜青柠500g/皇新鲜特价新鲜特价新鲜待价',
                            price: '￥10.8',
                        }]
                    },
                    {
                        type: '优选水果',
                        code: [{
                            img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=270613959,1981868654&fm=27&gp=0.jpg',
                            text: '新鲜青柠500g/皇新鲜特价新鲜特价新鲜待价',
                            price: '￥10.8',
                        },
                        {
                            img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3746385074,1140602455&fm=27&gp=0.jpg',
                            text: '新鲜青柠500g/皇新鲜特价新鲜特价新鲜待价',
                            price: '￥10.8',
                        },
                        {
                            img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2929614044,2614709093&fm=27&gp=0.jpg',
                            text: '新鲜青柠500g/皇新鲜特价新鲜特价新鲜待价',
                            price: '￥10.8',
                        },
                        {
                            img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1159558640,543848856&fm=26&gp=0.jpg',
                            text: '新鲜青柠500g/皇新鲜特价新鲜特价新鲜待价',
                            price: '￥10.8',
                        },
                        {
                            img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1130404426,1788912373&fm=26&gp=0.jpg',
                            text: '新鲜青柠500g/皇新鲜特价新鲜特价新鲜待价',
                            price: '￥10.8',
                        },
                        {
                            img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2929614044,2614709093&fm=27&gp=0.jpg',
                            text: '新鲜青柠500g/皇新鲜特价新鲜特价新鲜待价',
                            price: '￥10.8',
                        },
                        {
                            img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2446440385,2674115126&fm=26&gp=0.jpg',
                            text: '新鲜青柠500g/皇新鲜特价新鲜特价新鲜待价',
                            price: '￥10.8',
                        },
                        {
                            img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2361039587,1911492176&fm=26&gp=0.jpg',
                            text: '新鲜青柠500g/皇新鲜特价新鲜特价新鲜待价',
                            price: '￥10.8',
                        },
                        {
                            img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=591731724,2807699705&fm=26&gp=0.jpg',
                            text: '新鲜青柠500g/皇新鲜特价新鲜特价新鲜待价',
                            price: '￥10.8',
                        }],
                    },
                    {
                        type: '卤味熟食',
                        code: [{
                            img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=891543169,1646849409&fm=27&gp=0.jpg',
                            text: '新鲜青柠500g/皇新鲜特价新鲜特价新鲜待价',
                            price: '￥10.8',
                        },
                        {
                            img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1925523793,1792055423&fm=27&gp=0.jpg',
                            text: '新鲜青柠500g/皇新鲜特价新鲜特价新鲜待价',
                            price: '￥10.8',
                        },
                        {
                            img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2746186180,730858575&fm=27&gp=0.jpg',
                            text: '新鲜青柠500g/皇新鲜特价新鲜特价新鲜待价',
                            price: '￥10.8',
                        },
                        {
                            img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1141338740,1367994576&fm=27&gp=0.jpg',
                            text: '新鲜青柠500g/皇新鲜特价新鲜特价新鲜待价',
                            price: '￥10.8',
                        }]
                    },
                    {
                        type: '牛奶面包',
                        code: [{
                            img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=792914383,750654932&fm=27&gp=0.jpg',
                            text: '新鲜青柠500g/皇新鲜特价新鲜特价新鲜待价',
                            price: '￥10.8',
                        },
                        {
                            img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1908930410,3356823207&fm=27&gp=0.jpg',
                            text: '新鲜青柠500g/皇新鲜特价新鲜特价新鲜待价',
                            price: '￥10.8',
                        }]
                    },
                    {
                        type: '热饮',
                        code: [{
                            img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2951920470,3970239851&fm=27&gp=0.jpg',
                            text: '新鲜青柠500g/皇新鲜特价新鲜特价新鲜待价',
                            price: '￥10.8',
                        },
                        {
                            img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2522866663,1798252010&fm=27&gp=0.jpg',
                            text: '新鲜青柠500g/皇新鲜特价新鲜特价新鲜待价',
                            price: '￥10.8',
                        }]
                    },
                    {
                        type: '休闲零食',
                        code: [{
                            img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1427332273,3339980770&fm=27&gp=0.jpg',
                            text: '新鲜青柠500g/皇新鲜特价新鲜特价新鲜待价',
                            price: '￥10.8',
                        },
                        {
                            img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3132824135,2844314173&fm=27&gp=0.jpg',
                            text: '新鲜青柠500g/皇新鲜特价新鲜特价新鲜待价',
                            price: '￥10.8',
                        }]
                    },
                    {
                        type: '啤酒饮料',
                        code: [{
                            img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1427332273,3339980770&fm=27&gp=0.jpg',
                            text: '新鲜青柠500g/皇新鲜特价新鲜特价新鲜待价',
                            price: '￥10.8',
                        },
                        {
                            img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3132824135,2844314173&fm=27&gp=0.jpg',
                            text: '新鲜青柠500g/皇新鲜特价新鲜特价新鲜待价',
                            price: '￥10.8',
                        }]
                    },
                    {
                        type: '数码家电',
                        code: [{
                            img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1427332273,3339980770&fm=27&gp=0.jpg',
                            text: '新鲜青柠500g/皇新鲜特价新鲜特价新鲜待价',
                            price: '￥10.8',
                        },
                        {
                            img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3132824135,2844314173&fm=27&gp=0.jpg',
                            text: '新鲜青柠500g/皇新鲜特价新鲜特价新鲜待价',
                            price: '￥10.8',
                        }]
                    },
                    {
                        type: '户外运动',
                        code: [{
                            img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1427332273,3339980770&fm=27&gp=0.jpg',
                            text: '新鲜青柠500g/皇新鲜特价新鲜特价新鲜待价',
                            price: '￥10.8',
                        },
                        {
                            img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3132824135,2844314173&fm=27&gp=0.jpg',
                            text: '新鲜青柠500g/皇新鲜特价新鲜特价新鲜待价',
                            price: '￥10.8',
                        }]
                    },
                    {
                        type: '方便速食',
                        code: [{
                            img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1427332273,3339980770&fm=27&gp=0.jpg',
                            text: '新鲜青柠500g/皇新鲜特价新鲜特价新鲜待价',
                            price: '￥10.8',
                        },
                        {
                            img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3132824135,2844314173&fm=27&gp=0.jpg',
                            text: '新鲜青柠500g/皇新鲜特价新鲜特价新鲜待价',
                            price: '￥10.8',
                        }]
                    },
                    ],
                    list: [],
                    i: 0,
                    idx:0,
                    addArr:[]
                }
            },
            created(){
            	this.axios.get('https://elm.cangdu.org/shopping/v2/menu?restaurant_id=1').then((res)=>{
            		console.log(res.data)
            		this.arr=res.data
            	})
            },
            methods: {
                xianshi(index) {
                    // this.list = this.arr[index].code;
                    this.idx = index;
                },
                del(item) {
                    if (item.num) {
                        if (item.num == 0) return;
                        item.num--;
                    }
                },
                add(item) {
                    console.log(item)
                    if (item.num) {
                        this.addArr.forEach(it=>{
                        	if(it.food_id==item.food_id){
                        		it.num++
                        	}
                        })
                    } else {
                    	item.num=1;
                    	this.addArr.push(item)
                        // Vue.set(item, 'num', 1);
                    }
                    console.log(this.addArr)
                }
            },
            computed: {
                selectList() {
                    var array = [];
                    this.arr.forEach(element => {
                        element.foods.forEach(el => {
                            if (el.specfoods[0].num) {
                                array.push(el.specfoods[0]);
                            }
                        });
                    });
                    console.log(array)
                    return array;
                },
                total() {//计算商品总价
                    var n = 0;

                    // console.log(this.selectList)
                    if(this.addArr.length){
                    	this.addArr.forEach(element => {
	                        // console.log((element.price).split('￥')[1]);
	                        n += element.price* element.num;
	                    });
                    }
                    this.selectList.forEach(element => {
                        n += (element.price).split('￥')[1] * element.num;
                    });

                    return n.toFixed(2);
                }
            },
            watch: {

                selectList(old,newVal) {
                    console.log(v1);
                    console.log(old,newVal)

//              selectList(v1,v2) {
//
//
//              }
           		}        
        	}
		}
        // 第二个组件
        var shoppingCart = {
            template: '#shoppingCart',
            data() {
                return {
                    goodlist: this.$route.params.selectList||[]                  
                }
            },
            computed: {
                total() {//计算商品总价
                    var n = 0;
                    console.log(this.selectList)
                    this.goodlist.forEach(element => {
                        n += (element.price).split('￥')[1] * element.num;
                    });
                    return n.toFixed(2);
                }
            }  
        }
        

    </script>
  <style type="text/css" scoped>
  	.box {
            width: 100%;
            height: auto;
            margin: 0 auto;
            font-size: 0.18rem;
        }
        .nav {
            width: 100%;
            height: 0.7rem;
            line-height: 0.7rem;
            text-align: center;
            border-bottom: 1px solid #ccc;
        }
=======
    <script>
export default {
  data() {
    return {
      currentCategory: 0,
      arr: [],
      list: [],
      i: 0,
      idx: 0,
      addArr: []
    };
  },
  created() {
    console.log(this.$route)
    this.axios
      .get("https://elm.cangdu.org/shopping/v2/menu?restaurant_id=1")
      .then(res => {
        // console.log(res.data)
        this.arr = res.data;
        // console.log(res.data[0].foods)
        console.log(this.arr[this.idx]);
      });
  },
  methods: {
    xianshi(index) {
      // this.list = this.arr[index].code;
      this.idx = index;
    },
    del(item) {
      if (item.num) {
        if (item.num == 0) return;
        item.num--;
      }
    },
    add(item) {
      if (item.num) {
        this.addArr.forEach(it => {
          if (it.food_id == item.food_id) {
            it.num++;
          }
        });
      } else {
        item.num = 1;
        this.addArr.push(item);
        // Vue.set(item, 'num', 1);
      }
      console.log(this.addArr);
    }
  },
  computed: {
    selectList() {
      var array = [];
      this.arr.forEach(element => {
        element.foods.forEach(el => {
          if (el.specfoods[0].num) {
            array.push(el.specfoods[0]);
          }
        });
      });
      console.log(array);
      return array;
    },
    total() {
      //计算商品总价
      var n = 0;
      // console.log(this.selectList)
      if (this.addArr.length) {
        this.addArr.forEach(element => {
          // console.log((element.price).split('￥')[1]);
          n += element.price * element.num;
        });
      }
      this.selectList.forEach(element => {
        n += element.price.split("￥")[1] * element.num;
      });
      return n.toFixed(2);
    }
  }
  // watch:{
  //     selectList(old,newVal) {
  //         console.log(v1),
  //         console.log(old,newVal),
  //     selectList(v1,v2)
  // }
  // }
};
</script>
<style scoped>
.box {
  width: 100%;
  height: auto;
  margin: 0 auto;
  font-size: 0.18rem;
}
.nav {
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  border-bottom: 1px solid #ccc;
  position: relative;
}

.list {
  width: 100%;
  position: absolute;
}
.list li {
  width: 50%;
  float: left;
}
.hot {
  border-right: 1px #ccc solid;
}
.active {
  background-size: 0.05rem 0.25rem;
}
.content {
  width: 100%;
  height: auto;
}
.header{
  width: 100%;
  height: 2.4rem;
  background-color: rgba(111, 111, 111, 0.5);
  padding: 0.2rem 0.3rem;
  box-sizing: border-box;
}
.headerimg{
  width: 22%;
  height: 100%;
  background-color: #fff;
  float: left;
}
.headerimg img{
  width: 100%;
  height: 100%;
}
.headerxq{
  width: 76%;
  height: 100%;
  margin-left: 2%;
  float: left;
}
.headerxq h3{
  font-size: .55rem;
  color: #fefefe;
  margin-bottom: 0.15rem;
}
.headerxq p{
  font-size: 0.38rem;
  color: #f5f5f5;
  line-height: 0.6rem;
  margin-bottom: 0.1rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.headerxq i{
  font-style: normal;
  font-size: 0.35rem;
  color: #f5f5f5;
}
.product {
  width: 25%;
  border: 1px #ccc solid;
  text-align: center;
  float: left;
  box-sizing: border-box;
  margin-top: 1rem;
}
.product li {
  width: 100%;
  height: 0.7rem;
  line-height: 0.7rem;
  box-sizing: border-box;
  border-bottom: 1px #ccc solid;
  overflow: hidden;
}
.information {
  width: 75%;
  height: auto;
  float: left;
  background: #fff;
  margin-top: 0;
  padding: 0;
}
.item-box,
.jiesuan {
  width: 100%;
  height: 1.8rem;
  padding: 0.1rem;
  border-bottom: 1px #ccc solid;
  box-sizing: border-box;
}
.img {
  width: 1.2rem;
  height: 1.2rem;
  float: left;
}
.img img {
  width: 100%;
  height: 100%;
}
.text {
  width: 70%;
  margin-left: 0.1rem;
  float: left;
  position: relative;
}
.text h3{
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.text .bt {
  margin-top: 0.3rem;
}
.price {
  color: orange;
}
.text .bt p {
  float: right;
}
.jian,
.jia {
  width: 0.25rem;
  height: 0.25rem;
  text-align: center;
  line-height: 0.25rem;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 50%;
  margin: 0 0.1rem;
}
.footer {
  width: 100%;
  height: 1rem;
  background: pink;
  position: fixed;
  bottom: 0;
  line-height: 1rem;
  padding-left: 0.2rem;
  font-size: 0.24rem;
  box-sizing: border-box;
}
.footer a {
  text-align: center;
  float: right;
  color: #fff;
  width: 1rem;
  height: 1rem;
  background-color: #535356;
}
</style>


>>>>>>> 54dc2cbcade8900abe96309dc36d3138e7e77f63


