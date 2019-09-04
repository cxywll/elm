<template>
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

                	<!-- <div class='item-box clearfix' v-for='(item,index) in list' :key="index"> -->
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
                	<!-- </div> -->
          		</div>

       		</div>
       <footer class='footer'>
                    总价:{{total}}元
                    <!-- 实现页面的跳转  to 默认是a标签-->
                    <router-link :to="{name:'/',params:{selectList}}">去结算</router-link>
       </footer>
   </div>
</div>
</template>
    
    <script> 
         export default{
            data() {
                return {
                    currentCategory: 0,
                    arr: [],
                    list: [],
                    i: 0,
                    idx:0,
                    addArr:[]
                }
            },
            created(){
            	this.axios.get('https://elm.cangdu.org/shopping/v2/menu?restaurant_id=1').then((res)=>{
            		// console.log(res.data)
            		this.arr=res.data
            		// console.log(res.data[0].foods)
            		console.log(this.arr[this.idx])
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
                    console.log(v1),
                    console.log(old,newVal),
                selectList(v1,v2) 
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

        .list {
            display: flex;
            justify-content: space-between;
        }
        .list li {
            width: 25%;
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
        .product {
            width: 25%;
            border: 1px #ccc solid;
            text-align: center;
            float: left;
            box-sizing: border-box;
            margin-top:2.4rem;
            overflow: hidden;
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
        }
        .item-box,.jiesuan {
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
            background: pink ;
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




