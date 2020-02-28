<template>
	<view>
		<uni-list>
		    <uni-list-item :title="item.name" :note="item.nowAddress?item.nowAddress:'未知'" v-for="(item,index) in informationList" :key="index" @click="goDetails(item.name)"></uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	import uniList from "@/components/uni-list/uni-list.vue"
	import uniListItem from "@/components/uni-list-item/uni-list-item.vue"
	export default {
		components: {uniList,uniListItem},
		data() {
			return {
				informationList: []
			};
		},
		onLoad() {
			this.getData();
		},
		onPullDownRefresh() {
			this.getData();
		},
		methods: {
			getData() {
				let _this = this;
				uni.showLoading({
					title: '处理中...'
				})
				uniCloud.callFunction({
					name: 'get',
					data: {
						table: 'userinfo'
					}
				}).then((res) => {
					uni.hideLoading()
					uni.showToast({
						title: `数据获取成功`,
						icon: 'none'
					})
					_this.informationList = res.result.data.reverse();
					uni.stopPullDownRefresh();
				}).catch((err) => {
					uni.hideLoading()
					uni.showToast({
						title: `${err.message}`
					})
				})
			},
			goDetails(e) {
				uni.navigateTo({
					url: `../details/details?name=${e}`
				})
			}
		}
	}
</script>

<style lang="scss">

</style>
