<template>
	<view class="container flex f-col f-align-center" :style="{height:style.viewHeight+'px'}">
		<scroll-view scroll-y="true" >
			<view v-for="item of 30">item</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				style: {
					viewHeight: ''					
				}
			};
		},
		onLoad() {
			let viewPort = uni.getSystemInfoSync();
			console.log(`设备视口信息>>>${JSON.stringify(viewPort)}`);
			this.style.viewHeight = viewPort.windowHeight;
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	page{
		.container{
			background: magenta;
		}
	}
</style>
