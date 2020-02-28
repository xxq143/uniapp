'use strict';
const db = uniCloud.database();
exports.main = async (event, context) => {
	if( event.table == 'admin' ) {
		const collection = db.collection('admin');
		const res = await collection.add(event);
		return res		
	}else if( event.table == 'userinfo' ) {
		const collection = db.collection('userinfo');
		const res = await collection.add(event);
		return res
	}
};
