<template>
	<div class="box">

		<!--返回图标-->
		<router-link to="/msite">
			<div class="returnbtn"><i class="icon iconfont icon-fanhui1-copy" style="font-size: 20px;"></i></div>
		</router-link>

		<header>
			<div class="h_img">
				<img :src="'//elm.cangdu.org/img/' + this.$route.params.img" />
			</div>
			<div class="h_left">
				<span>{{this.$route.params.name}}</span>
			</div>
			<div class="h_span">
				<span>商家配送</span><span>/ {{this.$route.params.fz}}分钟送达</span><span>/ {{this.$route.params.money}}</span>
			</div>
			<div class="h_xx">
				<span>公告:</span><span>{{this.$route.params.promotion}}</span>
			</div>
		</header>

		<div class="header" style="position: relative;">
			<p @click="type=true" :class='type?"a":""'>
				商品
				<span :class='type?"span":""'></span>
			</p>
			<p @click="type=false" :class='type?"":"a"'>
				评价
				<span :class='type?"":"span"'></span>
			</p>

		</div>

		<div class="shangpin" v-show="type">
			<div class="content clearfix">
				<!-- 左侧菜单 -->
				<div class='product'>
					<div @click='xianshi(index),num=index' v-for='item,index in arr' :class="[num==index ? 'blue' : '']">
						{{item.name}}
					</div>

					<div @click='xianshi(index)' v-for='(item,index) in arr' :key="index">
						{{item.type}}
					</div>
				</div>
				<!-- 右侧具体信息 -->
				<div class='information'>
					<!-- 右侧商品列表 -->
					<div class='item-box clearfix' v-for='item,index in arr[idx].foods'>

						<div class="img">
							<img :src="'//elm.cangdu.org/img/'+item.image_path" alt="">
						</div>
						<div class="text">
							<p style="font-size: 14px;">{{item.specfoods[0].name}}</p>
							<p style="font-size: 14px;">{{item.specfoods[0].tips}}</p>
							<div class='bt'>

								<span class='price' style="font-size: 13px;">￥ {{item.specfoods[0].price}} 起</span>
								<p>
									<span class='jian' @click='del(item.specfoods[0])'>-</span> {{item.specfoods[0].num || 0}}
									<span class='jia' @click='add(item.specfoods[0])'>+</span>
								</p>
							</div>
						</div>
					</div>

				</div>
				<footer class='footer'>
					总价 : {{total}} 元
					<router-link :to="{name:'Cpay',params:{selectList}}">
						去结算
					</router-link>
				</footer>
			</div>
		</div>

		<div class="pingjia" v-show="!type">
			<div class="zonghe">
				<div class="left">
					<p style="font-size: 24px;margin-bottom: 6px;color: orangered;">{{ping_fen.overall_score | numFilter}}</p>
					<p>综合评价</p>
					<p style="color: #A4A4A4">高于周边商家</p>
				</div>
				<div class="right" style="font-size: 14px;color: #424242;line-height: 30px;">
					<p>
						<span style="float: left;">服务态度 </span>
						<el-rate v-model="ping_fen.food_score | numFilter" disabled show-score text-color="#ff9900" score-template="{value}" style="float: left;line-height: 36px;">
						</el-rate>
					</p>
					<p>
						<span style="float: left;">菜品评价 </span>
						<el-rate v-model="ping_fen.food_score | numFilter" disabled show-score text-color="#ff9900" score-template="{value}" style="float: left;line-height: 36px;">
						</el-rate>
					</p>
					<p>送达时间 <span style="color: orangered;"> {{ping_fen.deliver_time }} </span> 分钟</p>
				</div>
			</div>
			<!--评价分类-->
			<div class="ping_type">
				<span v-for="i,index in ping_type" @click="tags_idx=index" :class='tags_idx==index?"active":""'>{{i.name}}({{i.count}})</span>
			</div>
			<!--评价内容-->
			<div class="ping_main">
				<div class="main" v-for="i in ping">
				<!--左侧头像-->
					<div style="width: 20%;height:110px;float: left;">

						<div style="width: 60px;height:60px;border-radius: 50%;background: red;">

							<img v-show="i.avatar.length>0" :src="'https://fuss10.elemecdn.com/'+ i.avatar.charAt(0)+'/'+i.avatar.charAt(1)+i.avatar.charAt(2)+'/'+i.avatar.substring(3)+'.jpeg'" style="width: 100%;height: 100%;" />
							<img v-show="i.avatar.length<=0" src="//elm.cangdu.org/img/default.jpg" style="width: 100%;height: 100%;" />

						</div>
					</div>
					
					<!--右侧内容-->
					<div style="width: 76%;height: 110px;float: left;margin-left: 10px;font-size: 14px;">
						<p style="line-height: 24px;">{{i.username}}<span style="float: right;">{{i.rated_at}}</span></p>

						<div style="height: 20px;">
							<el-rate v-model="i.rating_star " disabled show-score text-color="#ff9900" score-template="{value}" style="float: left;margin-right: 20px;">
							</el-rate>
							{{i.time_spent_desc}}
						</div>
						<div class="users_scores_img">
							<div v-if="i.item_ratings.length!=0" v-for="(food_users,foodCount) in i.item_ratings" :key="foodCount">
								<img v-if="food_users.image_hash!=''" :src="'https://fuss10.elemecdn.com/'+ food_users.image_hash.charAt(0)+'/'+food_users.image_hash.charAt(1)+food_users.image_hash.charAt(2)+'/'+food_users.image_hash.substring(3)+'.jpeg'" />
								<p v-if="food_users.food_name!=''">{{food_users.food_name}}</p>
							</div>
						</div>

					</div>

				</div>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				tags_idx: 0,
				fen_type: true,
				type: true,
				stype: true,
				currentCategory: 0,
				arr: [],
				list: [],
				i: 0,
				idx: 0,
				addArr: [],
				num: 0,

				ping: '',
				ping_fen: '',
				ping_type: []
			}
		},
		created() {
			this.food()
			this.pingjia()
			this.pingjia_fen()
			this.pingjia_type()
		},
		filters: {
			numFilter(value) {
				// 截取当前数据到小数点后两位
				let realVal = parseFloat(value).toFixed(1)
				return realVal
			}
		},
		methods: {
			//			评价
			pingjia() {
				this.$http.get('https://elm.cangdu.org/ugc/v2/restaurants/1/ratings', {
					params: {
						offset: 0,
						limit: 10
					}
				}).then((data) => {
					this.ping = data.data
					console.log(this.ping)
				})
			},
			//			评价分数
			pingjia_fen() {
				this.$http.get('https://elm.cangdu.org/ugc/v2/restaurants/1/ratings/scores').then((data) => {
					this.ping_fen = data.data
					//                  console.log(this.ping_fen)
				})
			},
			//			评价分类
			pingjia_type() {
				this.$http.get('https://elm.cangdu.org/ugc/v2/restaurants/1/ratings/tags').then((data) => {
					this.ping_type = data.data
					//                  console.log(this.ping_type)
				})
			},

			//			商品展示
			food() {
				this.$http.get('https://elm.cangdu.org/shopping/v2/menu', {
					params: {
						restaurant_id: 1
					}
				}).then((data) => {
					//                  console.log(data.data[this.idx].foods)
					this.arr = data.data
				})
			},
			xianshi(index) {
				this.idx = index;
			},
			del(item) {
				if(item.num) {
					if(item.num == 0) return;
					if(it.food_id == item.food_id) {
						it.num--
					}
				}
			},
			add(item) {
				if(item.num) {
					this.addArr.forEach(it => {
						if(it.food_id == item.food_id) {
							it.num++
						}
					})
				} else {
					item.num = 1;
					this.addArr.push(item)
				}
				console.log(this.addArr)
			}
		},
		computed: {
			selectList() {
				var array = [];
				this.arr.forEach(element => {
					element.foods.forEach(el => {
						if(el.specfoods[0].num) {
							array.push(el.specfoods[0]);
						}
					});
				});
				return array;
			},
			total() { //计算商品总价
				var n = 0;
				if(this.addArr.length) {
					this.addArr.forEach(element => {
						n += element.price * element.num;
					});
				}
				this.selectList.forEach(element => {
					n += (element.price).split('￥')[1] * element.num;
				});
				return n.toFixed(2);
			}
		}
	}
</script>
<style scoped>
	header {
		padding: 20px 30px;
		height: 180px;
		box-sizing: border-box;
		background: rgba(0, 0, 0, 0.2)
	}
	
	.h_img {
		width: 140px;
		height: 140px;
		background: cornflowerblue;
		float: left;
	}
	
	.h_img img {
		width: 100%;
		height: 100%;
	}
	
	.h_left {
		float: left;
		width: 7rem;
	}
	
	.h_left span {
		font-size: 0.7rem;
		padding-left: 20px;
		font-weight: bold;
		color: #fff;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.h_span{
    width: 7rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
    color: #fff;
  }
	.h_span span {
		padding-left: 20px;
		line-height: 0.7rem;
		color: #fff;
		font-size: 0.4rem;
	}
	
	.h_xx span {
		padding-left: 20px;
		color: #fff;
	}
	
	.returnbtn {
		color: black;
		position: fixed;
		left: 14px;
		top: 50px;
	}
	
	.box {
		overflow-x: hidden;
	}
	
	.a {
		color: dodgerblue;
	}
	
	.s {
		background: #fff;
	}
	
	.header {
		height: 100px;
		overflow: hidden;
		line-height: 100px;
		border-bottom: 1px #E4E4E4 solid;
	}
	
	.header p {
		width: 50%;
		font-size: 32px;
		position: relative;
		text-align: center;
		float: left;
	}
	
	.span {
		position: relative;
		width: 24%;
		left: 38%;
		bottom: 28px;
		display: block;
		border-bottom: 4px dodgerblue solid;
	}
	
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
	
	.blue {
		background-color: #fff !important;
		border-left: solid 3px #2a8cef !important;
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
		overflow: hidden;
	}
	
	.product div {
		width: 100%;
		height: 90px;
		background: #F5F5F5;
		font-size: 26px;
		line-height: 90px;
		box-sizing: border-box;
		border-bottom: 1px #ccc solid;
		overflow: hidden;
	}
	
	.information {
		width: 75%;
		height: auto;
		float: left;
		background: #fff;
    margin: 0;
    padding: 0;
	}
	
	.item-box,
	.jiesuan {
		width: 100%;
		height: 210px;
		padding: 20px 12px;
		border-bottom: 1px #ccc solid;
		box-sizing: border-box;
	}
	
	.img {
		width: 100px;
		height: 100px;
		margin-right: 10px;
		float: left;
	}
	
	.img img {
		width: 100%;
		height: 100%;
	}
	
	.text {
		width: 70%;
		margin-left: 10px;
		float: left;
		position: relative;
	}
	
	.text .bt {
		margin-top: 98px;
	}
	
	.price {
		color: orange;
	}
	
	.text .bt p {
		float: right;
	}
	
	.jian,
	.jia {
		width: 34px;
		height: 34px;
		text-align: center;
		line-height: 34px;
		display: inline-block;
		border: 1px solid #ccc;
		border-radius: 50%;
		margin: 0 20px;
	}
	
	.footer {
		width: 100%;
		height: 120px;
		background: #333;
		position: fixed;
		bottom: 0;
		color: #fff;
		line-height: 120px;
		padding-left: 20px;
		font-size: 28px;
		box-sizing: border-box;
	}
	
	.footer a {
		text-align: center;
		text-decoration: none;
		float: right;
		color: #fff;
		width: 20%;
		height: 120px;
		background-color: #666666;
	}
	
	.pingjia .zonghe {
		height: 300px;
		padding: 30px;
		box-sizing: border-box;
		border-bottom: 1px #CCCCCC solid;
	}
	
	.pingjia .zonghe .left {
		width: 40%;
		height: 240px;
		padding: 60px;
		box-sizing: border-box;
		line-height: 40px;
		text-align: center;
		float: left;
	}
	
	.pingjia .zonghe .right {
		width: 60%;
		height: 240px;
		padding: 20px;
		box-sizing: border-box;
		float: right;
	}
	
	.pingjia .zonghe .right p {
		width: 100%;
		float: left;
	}
	
	.pingjia .zonghe .right p span {
		margin-right: 10px;
	}
	
	.ping_type span {
		display: inline-block;
		padding: 8px 10px;
		margin: 12px;
		margin-left: 20px;
		border-radius: 4px;
	}
	
	.ping_type .active {
		background: dodgerblue;
		color: #fff;
	}
	
	.ping_main .main {
		height: 340px;
		padding: 20px;
		margin-right: 16px;
		box-sizing: border-box;
		margin-bottom: 6px;
	}
	
	.users_scores_img>div {
		width: 180px;
		height: 150px;
		float: left;
		margin: 4px 10px;
	}
	
	.users_scores_img>div img {
		width: 100%;
		height: 100%;
	}
</style>