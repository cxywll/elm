<template>
	<div class="j-box">
		<div class="j-header">
			<div class="j-headerleft">
				<router-link to="./register" class="leftone">&lt;</router-link>
			</div>
			<div class="j-headercenter">
				<span class="j-confirm">确认订单</span>
			</div>
			<div class="j-headerrights">
				<router-link to="./register" class="j-two">登录|注册</router-link>
			</div>
		</div>
		<div class="add_address">
			<router-link :to="{path:'/'}">
				<div class="add_address-left">
					<i class="iconfont icon-dizhi"></i>
				</div>
				<div class="add_address-right">
					<p>请添加一个收货地址 </p>
				</div>
				<div class="add_address-tou">
					<span class="fr">&gt;</span>
				</div>
			</router-link>
		</div>
		<div class="deliveryTime">
			<p>送达时间</p>
			<div class="quickly">
				<p>尽快送达 | 预计 19:09</p>
				<p>蜂鸟专送</p>
			</div>
		</div>
		<div class="PayWay">
			<div class="PayWay_top clearfix" @click="PayWay_top($event)">
				<span class="fl">支付方式</span>
				<span class="fr ccc">在线支付&nbsp;&nbsp; &gt;</span>
			</div>
			<div class="PayWay_bottom clearfix">
				<span class="fl ccc">红包</span>
				<span class="fr ccc">暂时只在饿了么APP中支持</span>
			</div>
		</div>
		<div class="detail">
			<div class="detail_one">
				<img src="">
				<span>效果演示</span>
			</div>
			<div class="detail_two clearfix">
				<span class="detail_two_l fl">123</span>
				<span class="detail_two_c fr">￥20</span>
				<span class="detail_two_r fr red cuo">×</span>
			</div>
			<div class="detail_five">
				<p>餐盒</p>
				<p class="fr"><span>￥7687</span></p>
			</div>
			<div class="detail_five">
				<p>配送费</p>
				<p class="fr"><span>￥4</span></p>
			</div>
			<div class="detail_five">
				<p>订单<span>￥6596</span></p>
				<p class="fr"><span>待支付</span></p>
			</div>
			<div class="detail_five">

				<p class="fr"><span>￥7687</span></p>
			</div>
		</div>
		<div class="beizhu">
			<router-link to="/zhifu">
				<p class="beizhu1">
					<span>定单备注</span>
					<span class="fi">口味、偏好等 &gt;</span>
				</p>
			</router-link>

			<router-link to="/zhifu">
				<p class="beizhu2">
					<span>发票抬头</span>
					<span class="fi">不需要开发票 &gt;</span>
				</p>
			</router-link>

		</div>
		<div class="footer" id="foot">
			<div class="footer_l fl">
				<p>待支付￥<span>7687</span></p>
			</div>
			<div class="footer_r fr" @click="confimInformation()">确认下单</div>
		</div>
		<div v-show="show">
			<div class="cover" @click="notShow"></div>
			<div class="payToTop">
				<div class="pay">
					<p>支付方式</p>
					<ul>
						<li>
							<span> 货到付款(商家不支持货到付款) </span>
							<input type="checkbox" disabled class="fr">
						</li>
						<li>
							<span>在线支付</span>
							<input type="checkbox" class="fr">
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="alet_container" v-show="isconfirm">
			<section class="tip_text_container">
				<div class="tip_icon">
					<span></span>
					<span></span>
				</div>
				<p class="tip_text">请添加一个收货地址</p>
				<p class="con" @click="confimInformation()">确认</p>
			</section>
		</div>
		<router-view></router-view>

		<!--<Shead>
			<template v-slot:left>
				<router-link to="/Mine"><i class="iconfont icon-jiantou"></i></router-link>
			</template>22
			<template v-slot:center>
			<a>确认订单</a>
			</template>
       </Shead>-->
	</div>
</template>

<script>
	//	import Shead from '../components/Shead'
	export default {
		//		components: {
		//			Shead
		//		},
		data() {
			return {
				isbtnlogin: false,
				covers: '', // cover
				payWay: '', // 支付方式
				show: false,
				isconfirm: false
			}
		},
		created() {
			if(localStorage.user) {
				this.isbtnlogin = true
			} else {
				this.isbtnlogin = false
			}
		},
		methods: {
			PayWay_top(e) {
				this.show = !this.show

			},
			notShow() {
				this.show = !this.show
			},
			confimInformation() {
				this.isconfirm = !this.isconfirm
			}
		},
//		mounted() {
//
//		}
	}
</script>
<style>
	* {
		margin: 0;
		padding: 0;
	}
	
	.j-box {
		width: 100%;
		height: auto;
		background: #f5f5f5;
		overflow-x: hidden;
	}
	
	.j-header {
		width: 100%;
		height: 1.2rem;
		background: #3190e8;
	}
	
	.iconfont.icon-dizhi {
		color: #3190e8;
		height: 1rem;
		line-height: 1rem;
		margin-left: 0.266666rem;
		font-size: 0.333333rem;
	}
	
	.j-headerleft {
		width: 10%;
		float: left;
		font-size: 0.466666rem;
		height: 1.2rem;
		line-height: 1.2rem;
		margin-right: 31%;
	}
	
	.j-headercenter {
		width: 18%;
		height: 1.2rem;
		float: left;
		margin-right: 13%;
	}
	
	.j-confirm {
		font-size: 0.466666rem;
		color: white;
		height: 1.2rem;
		line-height: 1.2rem;
	}
	
	.j-headerrights {
		width: 23%;
		height: 1.2rem;
		float: left;
		line-height: 1.2rem;
		text-align: center;
	}
	
	.j-two {
		height: 1.2rem;
		font-size: 0.4rem;
		color: white;
	}
	
	.detail_two .red {
		color: #f60;
		margin-right: 0.3rem;
		font-weight: 400;
		line-height: 0.8rem;
	}
	
	.ccc {
		color: #aaa;
	}
	
	.fl {
		float: left;
	}
	
	.fr {
		float: right;
	}
	
	.fi{
		float: right;
		margin-right: 0.266666rem;
	}
	
	.headIcon {
		margin-right: 0.2rem;
		font-size: 0.3rem;
	}
	
	.h_left {
		margin-left: 0.2rem;
	}
	
	.h_center {
		font-size: 0.3rem;
		margin-left: 36%;
	}
	
	.add_address-left {
		width: 1rem;
		height: 2.133333rem;
		line-height: 2.133333rem;
		float: left;
	}
	
	.add_address-right {
		width: 3.866666rem;
		height: 2.133333rem;
		line-height: 2.133333rem;
		font-size: 0.4rem;
		float: left;
	}
	
	.add_address {
		width: 100%;
		height: 2.133333rem;
		border-bottom: 0.04rem dashed lightcoral;
		background: #fff;
	}
	
	.add_address-tou {
		width: 1.333333rem;
		height: 2.133333rem;
		float: left;
		margin-left: 4.333333rem;
		font-size: 0.4rem;
		color: #929292;
		line-height: 2.133333rem;
	}
	
	.add_address-right p {
		height: 2.133333rem;
		line-height: 2.133333rem;
		padding-left: 0.2rem;
		box-sizing: border-box;
		font-size: 0.333333rem;
	}
	
	.add_address-right p span {
		float: left;
		margin-right: 1.333333rem;
		color: #999;
	}
	
	.deliveryTime {
		width: 100%;
		height: 2.533333rem;
		background-color: white;
		margin-top: 0.2rem;
		border-left: 0.133333rem solid #3190e8;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-bottom: 0.2rem;
	}
	
	.deliveryTime p {
		font-size: 0.493333rem;
		color: #333;
		font-weight: 700;
		padding-left: 0.3rem;
	}
	
	.quickly {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
	}
	
	.quickly p:first-of-type {
		font-size: 0.426666rem;
		color: #3190e8;
		margin-right: 0.533333rem;
		font-weight: 400;
	}
	
	.quickly p:nth-of-type(2) {
		font-size: 0.293333rem;
		color: #fff;
		background-color: #3190e8;
		width: 1.533333rem;
		height: 0.533333rem;
		border-radius: 0.066666rem;
		line-height: 0.533333rem;
		margin-top: 0.373333rem;
		margin-right: 0.5rem;
	}
	
	.PayWay {
		width: 100%;
		height: 2.666666rem;
		margin-top: 0.2rem;
		background-color: white;
	}
	
	.fr.ccc {
		margin-right: 0.666666rem;
	}
	
	.PayWay_top,
	.PayWay_bottom {
		width: 100%;
		height: 1.333333rem;
		line-height: 1.333333rem;
		margin-left: 0.466666rem;
		border-bottom: 1px solid #f5f5f5;
	}
	
	.PayWay_top span,
	.PayWay_bottom span {
		font-size: 0.373333rem;
	}
	
	.detail {
		width: 100%;
		height: 6.6rem;
		background-color: white;
		margin-top: 0.2rem;
	}
	
	.detail_one {
		width: 100%;
		height: 1.6rem;
		line-height: 1.8rem;
		border-bottom: 0.026666rem solid #f5f5f5;
	}
	
	.detail_one img {
		width: 0.733333rem;
		height: 0.733333rem;
		margin-left: 0.466666rem;
		border: 1px solid;
		vertical-align: middle;
	}
	
	.detail_one span {
		font-size: 0.506666rem;
		vertical-align: middle;
		margin-left: 0.2rem;
		color: #333;
	}
	
	.detail_two {
		padding: 0 0.2rem;
		vertical-align: middle;
		height: 0.8rem;
		line-height: 0.8rem;
		margin-bottom: 0.1rem;
		font-size: 0.24rem;
	}
	
	.detail_two span {
		font-size: 0.333333rem;
		color: #666;
	}
	
	.detail_two_l,
	.detail_two_c,
	.detail_two_r {
		font-size: 0.4rem;
		margin-left: 0.266666rem;
	}
	
	.detail_three {
		background-color: white;
		height: 1rem;
		padding: 0.2rem;
		margin-top: -0.08rem;
	}
	
	.detail_three span {
		font-size: 0.3rem;
	}
	
	.detail_four {
		background-color: white;
		height: 1rem;
		line-height: 1rem;
		padding: 0 0.2rem;
	}
	
	.detail_four span {
		font-size: 0.3rem;
	}
	
	.detail_five {
		background-color: white;
		height: 1rem;
		line-height: 1rem;
		padding: 0 0.2rem;
		margin-left: 0.266666rem;
	}
	
	.detail_five>p {
		font-size: 0.24rem;
		display: inline-block;
		line-height: 1rem;
		color: #666;
	}
	
	.detail_five>p>span {
		font-size: 0.24rem;
		color: #666;
	}
	
	.detail_five>p:first-of-type span {
		margin-left: 0.2rem;
	}
	
	.detail_five>p:last-of-type {
		color: #f60;
	}
	
	.detail_five>p:last-of-type span {
		color: #f60;
		margin-left: 0.2rem;
	}
	
	.toPay {
		height: 1.2rem;
		line-height: 0.3rem;
		position: relative;
	}
	
	.toPay span {
		font-size: 0.3rem;
	}
	
	.yuan {
		position: absolute;
		top: 0.4rem;
		right: 0.08rem;
	}
	
	.beizhu {
		width: 100%;
		height: 2.6rem;
		background-color: #fff;
		margin-top: 0.3rem;
	}
	
	.beizhu1,
	.beizhu2 {
		width: 100%;
		height: 1.266666rem;
		line-height: 1.266666rem;
		padding: 0 0.2rem;
		border-bottom: 1px solid #f5f5f5;
		color: #666;
	}
	
	.beizhu1 span,
	.beizhu2 span {
		font-size: 0.426666rem;
	}
	
	.beizhu1 span:last-of-type,
	.beizhu2 span:last-of-type {
		color: #aaa;
	}
	
	.cover {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: rgba(0, 0, 0, 0.3);
		z-index: 203;
	}
	
	.pay {
		min-height: 4rem;
		background-color: #fff;
		position: fixed;
		bottom: 0;
		width: 100%;
		z-index: 204;
	}
	
	.pay p {
		background-color: #fafafa;
		font-size: 0.3rem;
		color: #333;
		text-align: center;
		line-height: 0.8rem;
	}
	
	.pay ul li {
		line-height: 1rem;
		position: relative;
		padding-left: 0.2rem;
		border-bottom: #999 1px solid;
	}
	
	.pay ul li input {
		width: 0.3rem;
		height: 0.3rem;
		position: absolute;
		right: 0.3rem;
		top: 0.3rem;
	}
	
	.pay ul li:first-of-type span {
		color: #ccc;
		font-size: 0.3rem;
	}
	
	.pay ul li:last-of-type span {
		font-size: 0.3rem;
	}
	
	.alet_container {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 200;
	}
	
	.tip_text_container {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		min-height: 5rem;
		position: absolute;
		top: 40%;
		left: 50%;
		margin-top: -1.5rem;
		margin-left: -6rem;
		width: 12rem;
		padding-top: 0.6rem;
		border: 1px;
		border-radius: 0.25rem;
		background-color: rgba(0, 0, 0, 0.2);
	}
	
	.tip_text_container .tip_icon {
		width: 2rem;
		height: 2rem;
		border: 0.15rem solid #f8cb86;
		border-radius: 50%;
	}
	
	.tip_text_container .tip_icon span:first-of-type {
		width: 0.12rem;
		height: 0.9rem;
		display: inline-block;
		background-color: #f8cb86;
		position: relative;
		left: 0.8rem;
		top: 0.2rem;
	}
	
	.tip_text_container .tip_icon span:nth-of-type(2) {
		width: 0.2rem;
		height: 0.2rem;
		border: 1px;
		border-radius: 50%;
		margin-top: 0.2rem;
		background-color: #f8cb86;
		display: inline-block;
		position: relative;
		left: 0.64rem;
		top: 0.6rem;
	}
	
	.tip_text {
		color: orangered;
		margin-top: 0.3rem;
	}
	
	.con {
		height: 1rem;
		margin-top: 0.3rem;
		color: #fff;
		font-size: 0.6rem;
		font-weight: bolder;
		display: inline-block;
	}
	
	.con:hover {
		color: #ccc;
		cursor: pointer;
	}
	
	.footer {
		width: 100%;
		height: 1.2rem;
		line-height: 1.2rem;
	}
	
	.footer_l.fl {
		width: 70%;
		height: 1.2rem;
		float: left;
	}
	
	.footer_l.fr {
		width: 30%;
		height: 1.2rem;
		float: right;
		margin-right: 0;
	}
	
	.footer_l {
		width: 70%;
		height: 1.2rem;
		color: #fff;
		font-size: 0.4rem;
		background-color: #3c3c3c;
		line-height: 1.2rem;
	}
	
	.footer_l span {
		margin-left: 0.533333rem;
	}
	
	.footer_l.fl p {
		margin-left: 0.266666rem;
	}
	
	.footer_r {
		width: 30%;
		height: 1.2rem;
		line-height: 1.2rem;
		text-align: center;
		color: #fff;
		font-size: 0.4rem;
		background-color: #56d176;
	}
	/*.footer {
		width: 100%;
		height: 1rem;
		line-height: 1rem;
		z-index: 200;
	}*/
	/*.footer_l {
		width: 70%;
		height: 1.2rem;
		color: #fff;
		font-size: 0.4rem;
		background-color: #3c3c3c;
		line-height: 1.2rem;
		float: left;
	}
	
	.footer_r {
		width: 30%;
		height: 1.2rem;
		line-height: 1.2rem;
		text-align: center;
		color: #fff;
		font-size: 0.4rem;
		background-color: #56d176;
		float: right;
	}*/
</style>