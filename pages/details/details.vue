<template>
	<view class="container">
		<view class="title border-b">
			<view class="main">
				<text>人员信息</text>
			</view>
		</view>
		<view class="content  flex f-row-wrap">
			<view class="item">
				<text>姓名: {{information.name}}</text>
			</view>
			<view class="item">
				<text>身份证号: {{information.idCard}}</text>
			</view>
			<view class="item">
				<text>联系电话: {{information.phone}}</text>
			</view>
			<view class="item">
				<text>车牌号: {{information.licensePlate}}</text>
			</view>
			<view class="item">
				<text>是否本地户籍: {{information.isLocal ? '是' : '否'}}</text>
			</view>
			<view class="item">
				<text>是否来自湖北: {{information.isFromHB ? '是' : '否'}}</text>
			</view>
			<view class="item">
				<text>现住址: {{information.nowAddress}}</text>
			</view>
			<view class="item">
				<text>春运出行方式: {{information.tripMode}}</text>
			</view>
			<view class="item">
				<text>春运日期: {{information.date}}</text>
			</view>
			<view class="item">
				<text>来源地区: {{information.origin}}</text>
			</view>
		</view>
		<view class="title border-b">
			<view class="main">
				<text>到访信息</text>
			</view>
		</view>
		<view class="content  flex f-row-wrap">
			<view class="item">
				<text>本单位联系人: {{information.linkman}}</text>
			</view>
			<view class="item">
				<text>联系人电话: {{information.linkmanPhone}}</text>
			</view>
			<view class="item">
				<text>到访事由: {{information.reasons}}</text>
			</view>
			<view class="item">
				<text>记录体温: {{information.temperature}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				information: {},
				name: ''
			};
		},
		onLoad(e) {
			this.name = e.name;
			this.getDetails();
		},
		methods: {
			getDetails() {
				let _this = this;
				uni.showLoading({
					title: '处理中...'
				})
				uniCloud.callFunction({
					name: 'get',
					data: {
						table: 'userinfo',
						name: _this.name
					}
				}).then((res) => {
					uni.hideLoading()
					uni.showToast({
						title: `数据获取成功`,
						icon: 'none'
					})
					_this.information = res.result.data[0];
					console.log(res.result)
				}).catch((err) => {
					uni.hideLoading()
					uni.showToast({
						title: `${err.message}`
					})
				})
			}
		}
	}
</script>

<style lang="scss">
	page{
		.container{
			padding: 20rpx;
			.title{
				box-sizing: border-box;
				.main{
					padding: 20rpx 0;
					text{
						font-size: 48rpx;
					}					
				}
			}
			.content{
				padding: 30rpx 0;
				.item{
					background: #e8e8e8;
					border-radius: 20rpx;
					padding: 5rpx 20rpx;
					margin: 0 20rpx 40rpx 0;
					text{
						font-size: 28rpx;
					}
				}
			}
		}
	}
</style>
