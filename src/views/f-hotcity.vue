<template>
	<div id="app">
		<div class="title">
			<span>ele.me</span>
			<p style="float: right;"><span>登录</span>/<span>注册</span></p>
		</div>
		<div class="opt">
			<p>当前城市定位 <span style="color:#cccccc;float: right;font-size: 10px;margin-right:10px;">定位不准时，请在城市列表中选择</span></p>
			
				<router-link :to='/f-search/+3' >
						<p style="color: dodgerblue;height: 30px;margin-left:10px;margin-top:3px;">北京<span style="font-weight: 600;color: #2C3E50;float: right;">&gt;</span></p>
				</router-link> 
		</div>  
		<div class="hot">   
			<h4 class="letter">热门城市</h4>
			<ul> 
				<li class="list" v-for='i in hotcity'>
					<router-link :to='/f-search/+i.id' style='color: black;'>
							{{i.name}}  
					</router-link>
				</li>
			 </ul> 
		</div>
		<div class="type">
			<div v-for="s,key in soarr">
				<h4 class="letter">{{key}}</h4>
				<ul>
          <router-link :to='/f-search/+i.id'  v-for='i in s'>
					<li class="list">
							{{i.name}}
					</li>
        </router-link>
				</ul>
			</div>
		</div>
    <router-view>
		</router-view>
	</div>
</template>

<script type="text/javascript">
	export default {
		data() {
			return {
				hotcity: [],
				soarr:[]
			}
		},
		created() {
			this.hot()
			this.all()
			
		},
		methods: {
			hot() {
				this.axios.get('https://elm.cangdu.org/v1/cities?type=hot').then(data => {
					this.hotcity = data.data
				})
			},
			all() {
				this.axios.get('https://elm.cangdu.org/v1/cities?type=group').then(data => {
					this.soarr=this.group_s(data.data)
					console.log(this.soarr)
				})
			},
			group_s(arr) {
				var keys = Object.keys(arr).sort();
				var newObj = {};
				for(var i = 0; i < keys.length; i++) {
					var index = keys[i];
					newObj[index] = arr[index];
				}
				return newObj;
			}
		}
	}
</script>


<style>
	* {
		margin: 0;
		padding: 0;
		font-size: 30px;
	}
a{
	text-decoration: none;
	color:dodgerblue ;
		font-size: 20px;
}
	
	#app {
		background: #f5f5f5;
		padding-top: 80px;
	}
	
	.title {
		width: 100%;
		height: 80px;
		padding: 1px;
		box-sizing: border-box;
		line-height: 80px;
		background: dodgerblue;
		color: white;
		letter-spacing: 1px;
		position: fixed;
		top: 0;
	}
	
	.opt {
    height: 100px;
    margin-top: -60px;
		margin-bottom: 40px;
	}
	
	.opt>p {
    font-size: 18px;
		padding: 1px;
		line-height: 60px;
	}
	
	.opt>p:first-of-type {
		height: 80px;
		border-bottom: 1px solid #CCCCCC;  
		font-size: 18px;
	}
	
	.hot {
		min-height: 130px;
		margin-bottom:10px;
		border-top: 2px solid #e4e4e4;
		overflow: hidden;
	}
	
	.list {
		width: 25%;
		text-align: center;
		display: inline-block;
		box-sizing: border-box;
		border: 1px solid #CCCCCC;
		line-height: 80px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		padding-left: 3px;
	}
	
	.letter {
		padding: 1px;
		font-weight: 300;
		font-size: 20px;
		line-height: 60px;
		border-bottom: 1px solid #CCCCCC;
	}
	
	.type>div {
		border-top: 2px solid #e4e4e4;
		border-bottom: 2px solid #e4e4e4;
		margin-bottom: 30px;
		overflow: hidden;
	}
</style>
