<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	page{
		display: flex;
		flex-flow: column nowrap;
	}
	.flex{
		display: flex;
	}
	.f-1{
		flex: 1;
	}
	.f-col{
		flex-direction: column;
	}
	.f-row{
		flex-direction: row;
	}
	.f-row-wrap{
		flex-flow: row wrap;
	}
	.f-row-nowrap{
		flex-flow: row nowrap;
	}
	.f-center{
		justify-content: center;
	}
	.f-between{
		justify-content: space-between;
	}
	.f-around{
		justify-content: space-around;
	}
	.f-align-center{
		align-items: center;
	}
	
	
	.border-b{
		position: relative;
		&:after{
			content: "";
			display: block;
			width: 100%;
			height: 1px;
			background: linear-gradient(to bottom,transparent 50% ,#e0e0e0 50% );
			position: absolute;
		}
	}
</style>
