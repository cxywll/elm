<template>
	<div class="j-boxs">
		<div class="j-header">
			<div class="j-headerleft">
				<router-link to="/register"><i class="iconfont icon-jiantou"></i></router-link>
			</div>
			<div class="j-headerright">
				<p class="j-reset">重置密码</p>
			</div>
		</div>
		<Shead>
			<template v-slot:left>
				<router-link to="/register"><i class="iconfont icon-jiantou"></i></router-link>
			</template>
			<template v-slot:center>
			<a>重置密码</a>
			</template>
       </Shead>
		<div class="j-container">
			<div class="j-container-one">
				<input type="text" placeholder="账号" class="j-one" v-model="user" />
			</div>
			<div class="j-container-two">
				<input type="text" placeholder="旧密码" class="j-twos" v-model="oldpassword" />
			</div>
			<div class="j-container-three">
				<input type="text" placeholder="请输入新密码" class="j-three" v-model="newpassword" />
			</div>
			<div class="j-container-four">
				<input type="text" placeholder="请确认密码" class="j-four" v-model="confirmpassword" />
			</div>
			<div class="j-container-five">
				<div class="j-container-fiveleft"><input type="text" placeholder="验证码" class="j-five" v-model.number="Verify" /></div>
				<div class="j-container-fivecenter">
					<img :src="verifyImg" />
				</div>
				<div class="j-container-fiveright" @click="verifyImg_again">
					<p class="j-bu">看不清</p>
					<p class="j-yi">换一张</p>
				</div>
			</div>
		</div>
		<div class="j-foot">
			<button class="j-btn1" @click="j_btn">确认修改</button>
		</div>
	</div>
</template>

<script>
	import Shead from '../components/Shead'
//	import Sfoot from '../components/Sfoot'
	export default {
		components: {
			Shead
		},
		data() {
			return {
				user: '',//账号
				oldpassword: '',//旧密码
				newpassword: '',//新密码
				confirmpassword: '',//确认密码
				Verify: '',//验证码绑定
				verifyImg: ''//验证码
			}
		},
		created() {
			this.verifyImg_again()
			// console.log(this.Verify)
		},
		methods: {
			j_btn() {
				this.axios.post('https://elm.cangdu.org/v2/changepassword', {
					username: this.user,
					oldpassWord: this.oldpassword,
					newpassword: this.newpassword,
					confirmpassword: this.confirmpassword,
					captcha_code: this.Verify,
				}).then(data => {
					console.log(data);
					if(!this.user) {
						alert('请输入账号')
					} else if(!this.oldpassword) {
						alert('请输入旧密码')
					} else if(!this.newpassword) {
						alert('请输入新密码')
					} else if(!this.confirmpassword) {
						alert('请输入确认密码')
					} else if(this.newpassword != this.confirmpassword) {
						alert('两次输入的密码不一致')
					} else if(!this.Verify) {
						alert('请输入验证码')
					} else if(data.data.status !=0) {
						alert(data.data.success)
						this.$router.push({path:'/register'})
					} else {
						alert(data.data.message)
					}
				})
			},
			verifyImg_again() {
				this.axios.post("http://elm.cangdu.org/v1/captchas", {}).then(data => {
					this.verifyImg = data.data.code;
				});
			},
		},
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}
	
	/*a .iconfont {
		color: #fff;
		font-size:30px;
	}*/
	
	.j-boxs {
		width: 100%;
		height: 1330px;
		background: #eee;
		overflow-x: hidden;
	}
	a .icon-jiantou{
		color: white;
		font-size: 30px;
	}
	.j-header {
		width: 100%;
		height: 90px;
		background: #3190e8;
	}
	.j-headerleft{
		float: left;
		font-size: 35px;
		height: 90px;
		line-height: 90px;
		margin-left: 20px;
	}
	.j-headerright {
		width: 150px;
		color: white;
		height: 90px;
		float: left;
		line-height: 90px;
		font-size: 35px;
		position: absolute;
		text-align: center;
		left: 400px;
		top: 0;
	}
	.leftone{
		color: white;
	}
	.j-reset{
		font-size: 28px;
		color: white;
	}
	.j-container {
		width: 100%;
		height: 480px;
		background: white;
		margin-top: 25px;
	}
	
	.j-container-one {
		width: 100%;
		height: 70px;
		border-bottom: 1px solid #eee;
	}
	
	.j-one {
		width: 100%;
		height: 70px;
		border: none;
		outline: none;
		margin-left: 40px;
		font-size: 25px;
	}
	
	.j-container-two {
		width: 100%;
		height: 100px;
		border-bottom: 1px solid #eee;
	}
	
	.j-twos {
		width: 100%;
		height: 100px;
		border: none;
		outline: none;
		margin-left: 40px;
		font-size: 25px;
	}
	
	.j-container-three {
		width: 100%;
		height: 100px;
		border-bottom: 1px solid #eee;
		
	}
	
	.j-three {
		width: 100%;
		height: 100px;
		border: none;
		outline: none;
		margin-left: 40px;
		font-size: 25px;
	}
	
	.j-container-four {
		width: 100%;
		height: 100px;
		border-bottom: 1px solid #eee;
	}
	
	.j-four {
		width: 100%;
		height: 100px;
		border: none;
		outline: none;
		margin-left: 40px;
		font-size: 25px;
	}
	
	.j-container-five {
		width: 100%;
		height: 100px;
		border-bottom: 1px solid #eee;
	}
	
	.j-container-fiveleft {
		width: 30%;
		height: 100px;
		float: left;
	}
	
	.j-five {
		width: 60%;
		height: 100px;
		border: none;
		outline: none;
		margin-left: 40px;
		font-size: 25px;
	}
	
	.j-container-fivecenter {
		width: 15%;
		height: 100px;
		margin-left: 220px;
		float: left;
		margin-top: 30px;
	}
	
	.j-container-fiveright {
		height: 100px;
		float: right;
		margin-right: 100px;
	}
	
	.j-bu {
		font-size: 28px;
		text-align: center;
	}
	
	.j-yi {
		height: 60px;
		font-size: 28px;
		text-align: center;
		color: #95c4ef;
		line-height: 60px;
	}
	
	.j-foot {
		width: 700px;
		height: 90px;
		background: #4cd964;
		border-radius: 15px;
		margin: 40px auto;
	}
	
	.j-btn1 {
		width: 700px;
		height: 90px;
		color: white;
		border: none;
		outline: none;
		background: none;
		font-size: 28px;
	}
</style>