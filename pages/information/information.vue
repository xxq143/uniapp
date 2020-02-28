<template>
	<view class="container">
		<view class="card">
			<view class="main border-b">
				<view class="title">
					<text>人员信息</text>
				</view>
			</view>
			<view class="section">
				<view class="line flex f-align-center f-row line1">
					<text>姓名:</text>
					<input type="text" placeholder="请输入人员姓名" v-model="name" />
				</view>
				<view class="line flex f-align-center f-row line2">
					<text>身份证号:</text>
					<input type="text" placeholder="请输入身份证号" v-model="idCard" />
				</view>
				<view class="line flex f-align-center f-row line3">
					<text>车牌号:</text>
					<input type="text" placeholder="请输入车牌号" v-model="licensePlate" />
				</view>
				<view class="line flex f-align-center f-row line4">
					<text>联系电话:</text>
					<input type="text" placeholder="请输入联系电话" v-model="phone" />
				</view>
				<view class="line flex f-align-center f-row line5">
					<text>是否本地户籍:</text>
					<switch :checked="isLocal" color="#e64340" @change="localSwitch"/>
					<text>{{showLocal}}</text>
				</view>
				<view class="line flex f-align-center f-row line6">
					<text>是否来自湖北:</text>
					<switch :checked="isFromHB" color="#e64340" @change="fromHBSwitch"/>
					<text>{{showFromHB}}</text>
				</view>
				<view class="line flex f-align-center f-row line7">
					<text>来源地区:</text>
					<input type="text" disabled placeholder="请选择地址" v-model="origin" @click="showPicker2" />
				</view>
				<view class="line flex f-align-center f-row line8">
					<text>现住地址:</text>
					<input type="text" placeholder="请输入地址" v-model="nowAddress" />
				</view>
				<view class="line flex f-align-center f-row line9">
					<text>春运出行方式:</text>
					<radio-group class="flex f-1 f-row-wrap group" @change="radioChange">
						<label class="flex f-row-nowrap item" v-for="(item, index) in radioList" :key="item.index">
							<view>
								<radio :value="item.value" :checked="index === current" />
							</view>
							<view>{{item.name}}</view>
						</label>
					</radio-group>
				</view>
				<view class="line flex f-row line10">
					<text>春运日期:</text>
					<text class="date" v-show="date">{{date}}</text>
					<button type="warn" class="btn" zise="mini" @click="showPicker1">请选择</button>
				</view>
			</view>
		</view>
		<view class="card">
			<view class="main border-b">
				<view class="title">
					<text>到访信息</text>
				</view>
			</view>
			<view class="section">
				<view class="line flex f-align-center f-row line1">
					<text>本单位联系人:</text>
					<input type="text" placeholder="请输入人员姓名" v-model="linkman" />
				</view>
				<view class="line flex f-align-center f-row line1">
					<text>联系人电话:</text>
					<input type="text" placeholder="请输入联系电话" v-model="linkmanPhone" />
				</view>
				<view class="line flex f-align-center f-row line1">
					<text>到访事由:</text>
					<input type="text" placeholder="请输入到访事由" v-model="reasons" />
				</view>
				<view class="line flex f-align-center f-row line1">
					<text>记录体温</text>
					<view class="uni-padding-wrap uni-common-mt f-1">
						<view class="uni-padding-wrap uni-common-mt">
							<view>
								<slider :value="temperature" min="35" max="40" step=".1" show-value @change="sliderChange" activeColor="#4CD964" backgroundColor="#c3c3c3" block-color="#8A6DE9" block-size="20" />
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="btn">
				<button type="warn" @click="submit">提交</button>
			</view>
		</view>
		<w-picker 
		    mode="date" 
		    startYear="2016" 
		    endYear="2030" 
		    :current="true" 
		    @confirm="onConfirm1" 
		    ref="picker1" 
		    themeColor="#f00">
		</w-picker>
		<w-picker 
		    mode="region"
		    :defaultVal="['陕西省','榆林市','榆阳区']"
		    :hideArea="false"
		    @confirm="onConfirm2" 
		    ref="region" 
		    themeColor="#f00">
		</w-picker>
	</view>
</template>

<script>
	import wPicker from "@/components/w-picker/w-picker.vue";
	export default {
		components: {
			wPicker
		},
		data() {
			return {
				name: '',
				idCard: '',
				licensePlate: '',
				phone: '',
				isLocal: false,	
				isFromHB: false,	
				origin: '',
				nowAddress: '',
				radioList:[
					{value: '火车', name:'火车', index:1},
					{value: '自驾', name:'自驾', index:2},
					{value: '飞机', name:'飞机', index:3},
					{value: '汽车', name:'汽车', index:4}
				],
				current: 5,		//春运出行方式
				tripMode: '未选择',
				date: '',	//春运时间
				
				linkman: '',//联系人
				linkmanPhone: '',//联系人电话
				reasons: '', //事由
				temperature: 36,	//体温
				//picker1
			};
		},
		methods: {
			localSwitch(e) {
				this.isLocal = e.target.value;
			},
			fromHBSwitch(e) {
				this.isFromHB = e.target.value;
			},
			radioChange(e) {
				for (let i = 0; i < this.radioList.length; i++) {
					if (this.radioList[i].value === e.target.value) {
						this.current = i;
						this.tripMode = e.target.value;
						break;
					}
				}
			},
			sliderChange(e) {
				this.temperature = e.target.value;
			},
			
			// picker1 start
			showPicker1() {
				this.$refs.picker1.show();
			},
			onConfirm1(e) {
				this.date = e.result;	//春运出行时间
				console.log(e.result)
			},
			// picker1 end
			
			// picker2 start
			showPicker2() {
				this.$refs.region.show();
			},
			onConfirm2(e) {
				let a = e.result.toString()
				console.log(e.result)
				console.log(a)
				this.origin = e.result;	//春运出行时间
			},
			// picker2 end
			
			submit() {
				let _this = this;
				uni.showLoading({
				  title: '处理中...'
				})
				uniCloud.callFunction({
					name: 'add',
					data: {
						table: 'userinfo',
						name: _this.name,
						idCard: _this.idCard,
						licensePlate: _this.licensePlate,
						phone: _this.phone,
						isLocal: _this.isLocal,
						isFromHB: _this.isFromHB,
						origin: _this.origin,
						nowAddress: _this.nowAddress,
						tripMode: _this.tripMode,//春运出行方式
						date: _this.date,	//春运时间
						linkman: _this.linkman,//联系人
						linkmanPhone: _this.linkmanPhone,//联系人电话
						reasons: _this.reasons, //事由
						temperature: _this.temperature,	//体温
						createTime: Date.now()
					}
				}).then((res) => {
					uni.hideLoading()
					uni.showToast({
						title: '提交成功,2秒后跳转至首页',
						icon: 'none'
					})
					setTimeout( () => {
						uni.switchTab({
							url: '../home/home'
						})						
					},2000 )
				}).catch((err) => {
					uni.hideLoading()
					uni.showToast({
						title: `${err.message}`
					})
				})
			}
		},
		computed:{
			showLocal() {
				return this.isLocal ? '是' : '否'
			},
			showFromHB() {
				return this.isFromHB ? '是' : '否'
			}
		}
	}
</script>

<style lang="scss">
	page{
		background: #e0e0e0;
		.container{
			padding: 20rpx 20rpx;
			.card{
				background: #FFFFFF;
				border-radius: 20rpx;
				padding: 20rpx;
				margin-bottom: 20rpx;
				.main{
					box-sizing: border-box;
					.title{
						padding: 20rpx 0;
					}
					text{
						font-size: 48rpx;
						font-weight: bold;
					}
				}
				.section{
					padding: 20rpx 0;
					.line{
						height: 60rpx;
						line-height: 60rpx;
						padding: 10rpx 0;
						text{
							padding: 0 10rpx 0 0;
							height: inherit;
							font-size: 30rpx;
						}
						input{
							height: inherit;
							background: #dcdcdc;
							border-radius: 10rpx;
							padding: 0 20rpx;
							font-size: 30rpx;
						}
					}
					.line5,.line6{
						switch{
							padding: 0 30rpx;
						}
					}
					.line9{
						height: auto;
						padding: 20rpx;
						.group{
							font-size: 30rpx;
							.item{
								padding: 0 20rpx;
							}
						}
					}
					.line10{
						height: auto;
						.date{
							padding: 0 20rpx;
							background: #dcdcdc;
							border-radius: 20rpx;
							margin-left: 30rpx;
						}
						.btn{
							font-size: 30rpx;
							height: 60rpx;
							line-height: 40rpx;
							padding: 8rpx 40rpx;
							margin: 0 20rpx;
						}
					}
				}
				.btn{
					padding: 10rpx 30rpx;
				}
			}
		}
	}
</style>
