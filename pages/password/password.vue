<template>
	<view class="container flex f-col">
		<view class="password">
			<view class="item border-b">
				<input class="input" type="password" v-model="originalPassword" placeholder="原密码"/>
			</view>
			<view class="item border-b">
				<input class="input" type="password" v-model="newPassword" placeholder="新密码"/>
			</view>
			<view class="item border-b">
				<input class="input" type="password" v-model="confirmPassword" placeholder="确认新密码"/>
			</view>
			<view class="btn">
				<button type="primary" @click="updatePassword">确认</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				originalPassword: '',
				newPassword: '',
				confirmPassword: '',
				name: uni.getStorageSync('admin').name
			};
		},
		methods: {
			updatePassword() {
				let _this = this;
				if( this.originalPassword.length == 0 ) {
					uni.showToast({
						title: '密码不能为空',
						icon: 'none'
					})
					return
				}
				if( this.newPassword != this.confirmPassword ) {
					uni.showToast({
						title: '新密码与确认密码不符',
						icon: 'none'
					})
					return
				}
				uni.showLoading()
				uniCloud.callFunction({
					name: 'update',
					data: {
						table: 'admin',
						name: _this.name,
						originalPassword: _this.originalPassword,
						newPassword: _this.newPassword
					}
				}).then( (res) => {
					if( res.result.status == 0 ) {
						uni.showToast({
							title: '修改成功',
							icon: 'none'
						})
						setTimeout( () => {
							uni.navigateTo({
								url: '../login/login'
							})							
						}, 1000)
					}else if( res.result.status == -1 ) {
						uni.showToast({
							title: `${res.result.msg}`,
							icon: 'none'
						})
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	page{
		.container{
			.password{
				padding: 150rpx 100rpx;
				.item{
					width: inherit;
					margin-bottom: 20rpx;
					.input{
						padding: 20rpx 0;
					}
				}
				.btn{
					padding: 200rpx 0;
				}
			}
		}
	}
</style>
