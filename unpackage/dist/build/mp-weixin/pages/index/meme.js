(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/meme"],{"0486":function(e,t,n){},"190e":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(n("edc3"));function o(e){return e&&e.__esModule?e:{default:e}}var r=1,s=1,u=null,a=null,c=!1,l=!1,f=!1,h={data:function(){return{iconSize:40,scrollHeight:0,searchKeyword:"",imageList:[]}},beforeDestroy:function(){u&&clearTimeout(u),a&&clearTimeout(a)},computed:{uid:function(){return this.$store.getters.userInfo.uid?this.$store.getters.userInfo.uid:0},level:function(){return console.log("userInfo:",this.$store.getters.userInfo),this.$store.getters.userInfo.level?this.$store.getters.userInfo.level:0}},mounted:function(){},onShareAppMessage:function(){var e=getCurrentPages(),t=e[e.length-1],n=t.route;return{title:"表情包",path:n,success:function(){},fail:function(){}}},onLoad:function(){e.showShareMenu({withShareTicket:!0});var t=e.getSystemInfoSync();this.scrollHeight=t.windowHeight,this.getMemeList(1,!1)},onPullDownRefresh:function(){var t=this;setTimeout((function(){t.getMemeList(r),e.stopPullDownRefresh()}),1e3)},methods:{upgrade_vip:function(){this.level<2?e.switchTab({url:"/pages/user/index"}):e.navigateTo({url:"/pages/user/upgrade_user_vip"})},previewImage:function(t){for(var n=this.imageList[t].src,i=this.imageList,o=i.length,r=[],s=0;s<o;s++)r.push(i[s].src);e.previewImage({current:n,urls:r,success:function(){console.log("success!")}})},searchMeme:function(){this.searchKeyword?(f=!0,r=1,this.getMemeList(r,!1,!0)):e.showToast({title:"请输入关键词，且至少2个字符长度!",icon:"none",duration:2e3})},getMemeList:function(t,n,o){var r=getApp().globalData,u=r.serverUri,a=r.auth,c=this,l="";l=o?u+"?mod=hualang&ac=search":u+"?mod=hualang&ac=list";var f={auth:a,uid:this.uid,nowpage:t,filterData:!0};o&&this.searchKeyword&&(f.keyword=this.searchKeyword),i.default.request(l,f).then((function(t){s=t.totalpage;var i=t.data;if(!t.data)return o&&e.showToast({title:"未查询到结果",icon:"none",duration:2e3}),void(c.imageList=[]);for(var r=i.length,u=0;u<r;u++)i[u].src="https://kuxou.com/"+i[u].src,i[u].class=(u-1)%3==0?"meme-image-view meme-second-image-view":"meme-image-view";if(n)for(var a=0;a<r;a++)c.imageList.push(i[a]);else c.imageList=i}))}},onReachBottom:function(){console.log("reach bottom!");var t=this;if(!f||this.searchKeyword&&!(this.searchKeyword.length<2))if(r>=s)if(clearTimeout(u),c||f){if(!l&&f){var n=e.createSelectorQuery().select("#meme-list-view");n.boundingClientRect((function(e){t.scrollHeight=e.height+20,l=!0})).exec()}}else{var i=e.createSelectorQuery().select("#meme-list-view");i.boundingClientRect((function(e){console.log("data:",e),t.scrollHeight=e.height+20,c=!0})).exec()}else u=setTimeout((function(){r++,t.getMemeList(r,!0,f)}),500)}};t.default=h}).call(this,n("543d")["default"])},3566:function(e,t,n){"use strict";var i={"uni-icons":function(){return Promise.all([n.e("common/vendor"),n.e("components/uni-icons/uni-icons")]).then(n.bind(null,"4248"))}},o=function(){var e=this,t=e.$createElement;e._self._c},r=[];n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return i}))},4211:function(e,t,n){"use strict";(function(e){n("1fff");i(n("66fd"));var t=i(n("48e6"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},4484:function(e,t,n){"use strict";var i=n("0486"),o=n.n(i);o.a},"48e6":function(e,t,n){"use strict";n.r(t);var i=n("3566"),o=n("d167");for(var r in o)"default"!==r&&function(e){n.d(t,e,(function(){return o[e]}))}(r);n("4484");var s,u=n("f0c5"),a=Object(u["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],s);t["default"]=a.exports},d167:function(e,t,n){"use strict";n.r(t);var i=n("190e"),o=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t["default"]=o.a}},[["4211","common/runtime","common/vendor"]]]);