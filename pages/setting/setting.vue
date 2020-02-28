<template>
	<view class="uni-column">
		<view class="content" id="content" :style="{height:style.contentViewHeight+'px'}">
			<scroll-view id="scrollview" scroll-y="true" :style="{height:style.contentViewHeight+'px'}" :scroll-with-animation="true"
			    :scroll-top="scrollTop">
				<!-- <page-foot :name="name"></page-foot> -->
				<message-show v-for="(message,index) in messages" :key="index" :message="message" :cid="index"></message-show>
				<view id="bottom"></view>
			</scroll-view>
		</view>
		<view class="foot">
			<chat-input @send-message="getInputMessage" @show="setScrollH" @foc="setScrollH"></chat-input>
		</view>
		
	</view>
</template>
<script>
	import chatInput from '../../components/yszyun-imchat-emoji/chatinput.vue';
	import messageShow from '../../components/yszyun-imchat-emoji/messageshow.vue';
	
	export default {
		data() {
			return {
				style: {
					pageHeight: 0,
					contentViewHeight: 0,
					footViewHeight: 90,
					mitemHeight: 0,
				},
				scrollTop: 0,
				messages: [{
					user: '',
					type: '', //input,content 
					content: ''
				}],
				ws: 123
			}
		},
		components: {
			chatInput,
			messageShow
		},
		onLoad: function () {
			// 初始化页scroll-view面样式
			let _this = this;
			const res = uni.getSystemInfoSync();
			this.style.pageHeight = res.windowHeight;
			// this.style.contentViewHeight = res.windowHeight - uni.getSystemInfoSync().screenWidth / 750 * (100) ; //像素
			this.style.contentViewHeight = res.screenHeight;
			console.log('设备信息>>>'+JSON.stringify(res))
			// #ifdef H5
			this.wsInit();
			
			// #endif
		},
		methods: {
			wsInit(msg) {
				this.ws = new WebSocket('ws://localhost:3000');
				this.ws.onopen = (res) => {
					uni.showToast({
						title: '已连接服务器',
						icon: 'none'
					})
				}
				this.ws.onmessage = (message) => {
					this.addMessage('home',message.data);
					console.log(message.data);
				}
				this.ws.onerror = (err) => {
					uni.showToast({
						title: '发生错误,尝试重新连接',
						icon: 'none',
						duration: 3000
					})
				}
				this.ws.onclose = () => {
					uni.showToast({
						title: '对方退出聊天',
						icon: 'none'
					})
				}
			},
			getInputMessage: function (message) { //获取子组件的输入数据
				let _this = this;
				// console.log(message);
				this.addMessage('customer', message.content, false);
				// this.wsInit(message.content);
				let data = {
					id: '002',
					message: message.content
				}
				this.ws.send(JSON.stringify(data))
				// this.toRobot(message.content);
				this.setScrollH();
			},
			addMessage: function (user, content, hasSub, subcontent) {
				var that = this;
				content = 
				that.messages.push({
					user: user,
					content: content,
					hasSub: hasSub,
					subcontent: subcontent
				});
				let data = {
					id: '002',
					message: content
				}
			},
			scrollToBottom: function () {
				var that = this;
				this.scrollTop += 133; 
				//console.log(this.scrollTop)

			},
			// 设置高度 用emit辅助
			setScrollH: function(){
				var query = uni.createSelectorQuery();
				let footh = query.select('.foot');
				//console.log('fh',footh);
				const res = uni.getSystemInfoSync();
				this.style.pageHeight = res.windowHeight;
				this.$nextTick(function(){
					footh.fields({
						size: true
					}, data => {
						footh = data.height;
						console.log('fh',data.height);
						this.style.contentViewHeight = res.windowHeight -footh ; //像素
					}).exec();
					console.log('contentViewHeight',this.style.contentViewHeight);
				})	
			}
		}
	}
</script>

<style>
	.uni-column {
		display: flex;
		flex-direction: column;
	}

	.content {

		display: flex;
		flex: 1;
		/* margin-bottom: 100upx; */
	}

	.foot {
		position: fixed;
		width: 100%;
		/* height: 90upx;
		min-height: 90upx; */
		height: auto;
		left: 0upx;
		bottom: 0;
		overflow: hidden;
	}
</style>