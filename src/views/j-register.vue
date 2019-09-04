<template>
	<div class="j-box">
		<Shead>
			<template v-slot:left>
				<router-link to="/Mine"><i class="iconfont icon-jiantou"></i></router-link>
			</template>
			<template v-slot:center>
			<a>密码登陆</a>
			</template>
        </Shead>
		<div class="j-content">
			<div class="j-content-one"><input type="text" placeholder="账号" class="j-input" v-model="register"></div>
			<div class="j-content-two">
				<div class="j-content-two-left"><input type="password" placeholder="密码" class="j-inputs" v-model="password" id="seePassword"></div>
				<div class="j-content-two-right">
					<div class="j-see-password" id="password">
						<p class="j-off" id="passwordS">off...</p>
						<div class="j-see-password-move" :class="isOpen?'active':''" id="j-see-password-move" @click="passMove($event)"></div>
					</div>
				</div>
			</div>
			<div class="j-content-three">
				<div class="j-content-three-left"><input type="text" placeholder="验证码" class="j-inputss" v-model="verifyNumber"></div>
				<div class="j-content-three-center">
					<img :src="verifyImg" />
				</div>
				<div class="j-content-three-right" @click="verifyImg_again">
					<p class="j-kan">看不清</p>
					<p class="j-huan">换一张</p>
				</div>
			</div>
		</div>
		<div class="j-content-bottom">
			<p class="j-prompt">温馨提示：未注册过的账号，登录时将自动注册<br>注册过的用户可凭账号密码登录</p>
		</div>
		<div class="j-footer">
			<button class="j-btn" @click="j_btn">登录</button>
		</div>
		<div class="j-footer-bottom">
			<router-link to="./reset" class="j-a">重置密码？</router-link>
		</div>
	</div>
</template>

<script>
import Shead from '../components/Shead'
	export default {
		components: {
			Shead	
		},
		data() {
			return {
				register: '',
				password: '',
				verify: '',
				verifyImg: '',
				verifyNumber: '',
				isOpen: false,
			}
		},
		methods: {
			j_btn(a) {
				if(this.register == '') {
					alert('请输入账号');
					return;
				} else if (this.password == ''){
					alert('请输入密码')
					return;
				} else if (this.verifyNumber == ''){
					alert('请输入验证码')
					return;
				}else {
					this.axios.post('https://elm.cangdu.org/v2/login', {
						username: this.register,
						password: this.password,
						captcha_code: this.verifyNumber
					}).then((data) => {
						console.log(data);
						if(data.data.message == '密码错误') {
							alert('登录失败');
						} else if (data.data.message == '验证码不正确'){
							alert('验证码错误');
						} else {
							alert('登录成功');
                            this.$router.push({path:'/msite'})
						}
					})
				}
			},
			passMove() {
				this.isOpen = !this.isOpen;
				var seePassword = document.querySelector('#seePassword')
				var password = document.querySelector('#password')
				var passwordS=document.querySelector('#passwordS')
				console.log(seePassword, password)
				if(this.isOpen) {
					seePassword.type = 'text'
					password.style.background = '#4cd964'
					passwordS.innerHTML='off'
				} else {
					seePassword.type = 'password'
					password.style.background = '#CCCCCC'
					passwordS.innerHTML='on'

				}
			},
			verifyImg_again() {
				this.axios.post('https://elm.cangdu.org/v1/captchas', {}).then((data) => {
					this.verifyImg = data.data.code
				})
			}
		},
		created() {
			this.axios.post('https://elm.cangdu.org/v1/captchas', {}).then((data) => {
//				console.log(data)
				this.verifyImg = data.data.code
			})
		}
	};
</script>

<style scoped>
	* {
		margin: 0;
		padding: 0;
	}
	a .iconfont{
		color: #fff;
	}
	.iconfont{
		font-size: 0.5rem;
	}
	.j-box {
		width: 100%;
		height: 1330px;
		background: #eee;
		overflow-x: hidden;
	}
	
	.j-header {
		width: 100%;
		height: 90px;
		background: #3190e8;
		position: relative;
	}
	
	.j-headerleft {
		color: white;
		float: left;
		font-size: 35px;
		height: 90px;
		line-height: 90px;
		margin-left: 20px;
	}
	
	.j-headerright {
		width: 10rem;
		color: white;
		height: 90px;
		float: left;
		line-height: 90px;
		font-size: 35px;
		position: absolute;
		text-align: center;
		left: 0;
		top: 0;
	}
	
	.j-content {
		width: 100%;
		height: 300px;
		background: white;
		margin-top: 1.3rem;
	}
	
	.j-content-one {
		width: 100%;
		height: 100px;
		border-bottom: 1px solid #ccc;
	}
	
	.j-content-two-left {
		width: 500px;
		height: 100px;
		float: left;
		margin-left: 20px;
	}
	
	.j-content-two-right {
		width: 108px;
		height: 100px;
		/*background: gold;*/
		float: right;
		margin-right: 40px;
	}
	.j-off{
		font-size: 25px;
		margin-left: 10px;
		line-height: 35px;
	}
	.j-see-password {
		width: 100%;
		height: 35px;
		background: #cccccc;
		margin-top: 30px;
		position: relative;
		border-radius: 15px;
		color: #fdfdfd;
	}
	
	.j-see-password-move {
		width: 60px;
		height: 60px;
		background: #f1f1f1;
		border-radius: 50%;
		position: absolute;
		left: 0;
		top: -15px;
	}
	
	.j-see-password .active {
		left: 55px;
		top: -15px;
	}
	
	.j-input {
		width: 500px;
		height: 90px;
		line-height: 90px;
		margin-left: 20px;
		font-size: 30px;
		border: none;
		outline: none;
		float: left;
	}
	
	.j-inputs {
		width: 500px;
		height: 90px;
		line-height: 90px;
		font-size: 30px;
		border: none;
		outline: none;
	}
	
	.j-inputss {
		width: 500px;
		height: 90px;
		line-height: 90px;
		font-size: 30px;
		border: none;
		outline: none;
	}
	
	.j-content-two {
		width: 100%;
		height: 100px;
		border-bottom: 1px solid #ccc;
	}
	
	.j-content-three {
		width: 100%;
		height: 100px;
		margin-left: 20px;
		border-bottom: 1px solid #eee;
	}
	
	.j-content-three-left {
		width: 500px;
		height: 90px;
		background: gold;
		float: left;
	}
	
	.j-content-three-center {
		width: 130px;
		height: 100px;
		margin-left: -120px;
		/*background: gold;*/
		float: left;
		line-height: 150px;
		background: gold;
	}
	
	.j-content-three-right {
		width: 108px;
		height: 100px;
		/*background: gold;*/
		margin-right: 60px;
		float: right;
	}
	
	.j-kan {
		font-size: 28px;
		text-align: center;
		margin-top: 10px;
	}
	
	.j-huan {
		font-size: 28px;
		text-align: center;
		color: #95c4ef;
		margin-top: 10px;
	}
	
	.j-content-bottom {
		width: 100%;
		height: 120px;
		/*background: gold;*/
		margin-left: 35px;
	}
	
	.j-prompt {
		font-size: 20px;
		color: red;
		margin-top: 20px;
		line-height: 60px;
	}
	
	.j-footer {
		width: 700px;
		height: 95px;
		background: #4cd964;
		border-radius: 10px;
		margin: 0 auto;
	}
	
	.j-btn {
		width: 700px;
		height: 95px;
		color: white;
		border: none;
		outline: none;
		margin: 0 auto;
		background: none;
		font-size: 28px;
	}
	
	.j-footer-bottom {
		width: 130px;
		height: 30px;
		margin-left: 700px;
		margin-top: 40px;
	}
	
	.j-a {
		font-size: 23px;
		color: #95c4ef;
	}
</style>