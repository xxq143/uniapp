(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"00b7":function(n,t,o){"use strict";(function(n){var e=o("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=e(o("795b")),a=e(o("f499")),c=e(o("0a0d")),u={data:function(){return{imageSrc:""}},methods:{add:function(){uni.showLoading({title:"处理中..."}),n.callFunction({name:"add",data:{name:"DCloud",subType:"uniCloud",createTime:(0,c.default)()}}).then(function(n){uni.hideLoading(),uni.showModal({content:"成功添加一条数据，文档id为：".concat(n.result.id),showCancel:!1}),console.log(n)}).catch(function(n){uni.hideLoading(),uni.showModal({content:"添加数据失败，错误信息为：".concat(n.message),showCancel:!1}),console.error(n)})},remove:function(){uni.showLoading({title:"处理中..."}),n.callFunction({name:"remove"}).then(function(n){uni.hideLoading(),uni.showModal({content:n.result.msg,showCancel:!1}),console.log(n)}).catch(function(n){uni.hideLoading(),uni.showModal({content:"删除失败，错误信息为：".concat(n.message),showCancel:!1}),console.error(n)})},update:function(){uni.showLoading({title:"处理中..."}),n.callFunction({name:"update",data:{name:"DCloud",subType:"html 5+",createTime:(0,c.default)()}}).then(function(n){uni.hideLoading(),uni.showModal({content:n.result.msg,showCancel:!1}),console.log(n)}).catch(function(n){uni.hideLoading(),uni.showModal({content:"更新操作执行失败，错误信息为：".concat(n.message),showCancel:!1}),console.error(n)})},get:function(){uni.showLoading({title:"处理中..."}),n.callFunction({name:"get"}).then(function(n){uni.hideLoading(),uni.showModal({content:"查询成功，获取数据列表为：".concat((0,a.default)(n.result.data)),showCancel:!1}),console.log(n)}).catch(function(n){uni.hideLoading(),uni.showModal({content:"查询失败，错误信息为：".concat(n.message),showCancel:!1}),console.error(n)})},logTest:function(){uni.showLoading({title:"处理中..."}),n.callFunction({name:"log"}).then(function(n){uni.hideLoading(),uni.showModal({content:"查询成功，获取数据列表为：".concat((0,a.default)(n.result.data)),showCancel:!1}),console.log(n)}).catch(function(n){uni.hideLoading(),uni.showModal({content:"查询失败，错误信息为：".concat(n.message),showCancel:!1}),console.error(n)})},upload:function(){var t=this;new i.default(function(n,t){uni.chooseImage({chooseImage:1,success:function(t){var o=t.tempFilePaths[0],e={filePath:o};n(e)},fail:function(){t(new Error("Fail_Cancel"))}})}).then(function(t){return uni.showLoading({title:"文件上传中..."}),n.uploadFile(t)}).then(function(n){uni.hideLoading(),console.log(n),uni.showModal({content:"图片上传成功，已在下方展示",showCancel:!1}),t.imageSrc=n.fileID}).catch(function(n){uni.hideLoading(),console.log(n),"Fail_Cancel"!==n.message&&uni.showModal({content:"图片上传失败，错误信息为：".concat(n.message),showCancel:!1})})}}};t.default=u}).call(this,o("a9ff")["default"])},"31ba":function(n,t,o){"use strict";o.r(t);var e=o("00b7"),i=o.n(e);for(var a in e)"default"!==a&&function(n){o.d(t,n,function(){return e[n]})}(a);t["default"]=i.a},5068:function(n,t,o){"use strict";var e=o("7efd"),i=o.n(e);i.a},"7efd":function(n,t,o){var e=o("a9dd");"string"===typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);var i=o("4f06").default;i("3d9bc30f",e,!0,{sourceMap:!1,shadowMode:!1})},a9dd:function(n,t,o){t=n.exports=o("2350")(!1),t.push([n.i,".title[data-v-1cd5db60]{font-weight:700;text-align:center;padding:20px 0;font-size:20px}.tips[data-v-1cd5db60]{color:#999;font-size:14px;padding:20px 30px}.btn-list[data-v-1cd5db60]{padding:0 30px}.btn-list uni-button[data-v-1cd5db60]{margin-bottom:20px}.upload-preview[data-v-1cd5db60]{width:100%}",""])},b9d6:function(n,t,o){"use strict";var e,i=function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("v-uni-view",{staticClass:"content"},[o("v-uni-view",{staticClass:"title"},[n._v("uniCloud 基础示例")]),o("v-uni-view",{staticClass:"tips"},[o("v-uni-view",[n._v("1.在cloudfunctions目录右键创建并关联服务空间")]),o("v-uni-view",[n._v("2.在cloudfunctions目录右键打开uniCloud控制台，在第1步关联的服务空间里手动创建名为unicloud-test的数据表")]),o("v-uni-view",[n._v("3.在云函数目录（比如：add）右键选择“上传并部署”")]),o("v-uni-view",[n._v("开始愉快的体验uniCloud吧！")])],1),o("v-uni-view",{staticClass:"btn-list"},[o("v-uni-button",{attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.add.apply(void 0,arguments)}}},[n._v("新增一条数据")]),o("v-uni-button",{attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.remove.apply(void 0,arguments)}}},[n._v("删除一条数据")]),o("v-uni-button",{attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.update.apply(void 0,arguments)}}},[n._v("修改数据")]),o("v-uni-button",{attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.get.apply(void 0,arguments)}}},[n._v("查询前10条数据")]),o("v-uni-button",{attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.upload.apply(void 0,arguments)}}},[n._v("上传文件")]),o("v-uni-image",{staticClass:"upload-preview",attrs:{src:n.imageSrc,mode:"widthFix"}})],1)],1)},a=[];o.d(t,"b",function(){return i}),o.d(t,"c",function(){return a}),o.d(t,"a",function(){return e})},cb6b:function(n,t,o){"use strict";o.r(t);var e=o("b9d6"),i=o("31ba");for(var a in i)"default"!==a&&function(n){o.d(t,n,function(){return i[n]})}(a);o("5068");var c,u=o("f0c5"),d=Object(u["a"])(i["default"],e["b"],e["c"],!1,null,"1cd5db60",null,!1,e["a"],c);t["default"]=d.exports}}]);