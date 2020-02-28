<template>
	<view class="container flex f-col">
		<view class="login">
			<view class="item border-b">
				<input class="input" type="text" v-model="username" placeholder="请输入用户名"/>
			</view>
			<view class="item border-b">
				<input class="input" type="password" v-model="password" placeholder="请输入密码"/>
			</view>
			<view class="btn">
				<button type="primary" @click="login">登录</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				username: '',
				password: ''
			};
		},
		methods: {
			login() {
				let _this = this;
				uni.showLoading({
					title: '登录中...'
				})
				uniCloud.callFunction({
					name: 'get',
					data: {
						table: 'admin',
						name: _this.username,
						password: _this.password
					}
				}).then((res) => {
					console.log(res)
					uni.hideLoading()
					if( res.result ) {
						if( res.result.data[0] ) {
							uni.showToast({
								title: '登录成功',
								icon: 'none'
							})
							setTimeout( () => {
								uni.switchTab({
									url: '../home/home'
								})
							},1000 )
						}else{
							uni.showToast({
								title: '账号或密码错误',
								icon: 'none'
							})
						}
					}else{
						uni.showToast({
							title: '参数有误',
							icon: 'none'
						})
					}
				}).catch((err) => {
				  uni.hideLoading()
				  uni.showModal({
				    content: `查询失败，错误信息为：${err.message}`,
				    showCancel: false
				  })
				})
			}
		}
	}
</script>

<style lang="scss">
	page{
		.container{
			.login{
				padding: 150rpx 100rpx;
				.item{
					width: inherit;
					.input{
						padding: 20rpx 0;
					}
				}
				.btn{
					padding: 40rpx 0;
				}
			}
		}
	}
</style>
