'use strict';
const db = uniCloud.database();
exports.main = async (event, context) => {
	// 管理员登录
	if( event.table == 'admin' ) {
		if( event.name && event.password ){
			const collection = db.collection('admin').where({
				name: event.name,
				password: event.password
			})
			const res = await collection.limit(10).get();
			return res
		}
	}
	// 登记用户查询
	if( event.table == 'userinfo' ) {
		if(event.name) {
			const collection = db.collection('userinfo').where({
				name: event.name,
			});
			const res = await collection.limit(1).get();
			return res
		}else{
			const collection = db.collection('userinfo');
			const res = await collection.limit(10).get();
			return res
		}
	}
};
