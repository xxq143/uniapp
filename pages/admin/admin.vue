<template>
	<view class="container">
		<uni-list class="list">
		    <uni-list-item :title="item.name" :thumb="item.img" v-for="(item,index) in items" :key="index" @click="jump(item.name)"></uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	import uniList from "@/components/uni-list/uni-list.vue"
	import uniListItem from "@/components/uni-list-item/uni-list-item.vue"
	export default {
		components: { uniList,uniListItem },
		data() {
			return {
				items: [
					{name: 'setting', img: '../../static/icon/setting.png'},
					{name: 'password', img: '../../static/icon/password.png'},
					{name: 'logout', img: '../../static/icon/logout.png'}
				],
				password: '12345'
			}
		},
		methods: {
			jump(e) {
				uni.navigateTo({
					url: `../${e}/${e}`
				})
			},
			test() {
				let _this = this;
				uni.showLoading({
					title: '加载中...'
				});
				uniCloud.callFunction({
					name: 'get',
					data: {
						table: 'admin',
						name: 'admin',
						password: _this.password,
					}
				}).then((res) => {
					uni.hideLoading();
					console.log('admin请求数据发送的data>>>'+JSON.stringify(res.result.data[0].password))
					if( _this.password != res.result.data[0].password ) {
						uni.showToast({
							title: '密码错误',
							icon: 'none'
						})
					}else{
						uni.switchTab({
							url: '../home/home'
						})
					}
				})
			},
			test2() {
				let _this = this;
				uni.showLoading({
					title: '加载中...'
				});
				uniCloud.callFunction({
					name: 'get',
					data: {
						table: 'userinfo',
						name: '冯云云'
					}
				}).then((res) => {
					uni.hideLoading();
					console.log('userinfo请求数据发送的data>>>'+JSON.stringify(res))
				})
			}
		}
	}
</script>

<style lang="scss">
	page{
		.container{
			.list{
				border-bottom: 1px solid #c8c7cc;
			}
		}
	}
</style>
