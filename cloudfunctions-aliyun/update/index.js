'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
  const collection = db.collection('admin').where({
	  name: event.name,
	  password: event.originalPassword
  })
  const docList = await collection.limit(1).get();
  if (!docList.data || docList.data.length === 0) {
    return {
      status: -1,
      msg: '集合admin内没有数据'
    }
  }
  const res = await collection.update({
	  password: event.newPassword
  });
  if (res.updated === 1) {
    let result = Object.assign({}, {
      _id: docList.data[0]._id
    }, event)
    return {
      status: 0,
      msg: `集合第一条数据由${JSON.stringify(docList.data[0])}修改为${JSON.stringify(result)}`
    }
  } else {
    return {
      status: -1,
      msg: `集合unicloud-test内没有数据`
    }
  }
};
