(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/cases/index"],{"0e48":function(t,e,a){"use strict";var n=a("4021"),i=a.n(n);i.a},4021:function(t,e,a){},"819a":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("edc3"));function i(t){return t&&t.__esModule?t:{default:t}}var r=function(){a.e("common/tabbar").then(function(){return resolve(a("49c3"))}.bind(null,a)).catch(a.oe)},s={},o=1,u=1,l=0,c=null,f={data:function(){return{tabArr:[],list:[],caseTabIndex:0,isIphoneX:!1,scrollHeight:0,position:"fixed",tabTitle:""}},computed:{uid:function(){return this.$store.getters.userInfo.uid?this.$store.getters.userInfo.uid:0}},onShareAppMessage:function(){console.log("share....");var t=getCurrentPages(),e=t[t.length-1],a=e.route;return{title:"恋爱技巧",path:"/"+a,success:function(){console.log("share success!")},fail:function(){console.log("share..sucess!")}}},onHide:function(){s={}},onPullDownRefresh:function(){console.log("页面下拉刷新");var e=this;!1,e.getCaseList(l,!0,1),setTimeout((function(){t.stopPullDownRefresh()}),200)},onLoad:function(e){t.showShareMenu({withShareTicket:!0});var a=t.getSystemInfoSync(),n=(a.screenHeight,a.windowHeight);console.log("winHeight",n);var i=getApp().globalData.isIphoneX;this.isIphoneX=i,i&&(n-=34),this.scrollHeight=n-60-51,this.getHuashuTabbar(),!1},mounted:function(){},components:{tabBar:r},beforeDestroy:function(){c&&clearTimeout(c)},methods:{tabArrData:function(t){var e=this.caseTabIndex,a=(t.length,t);if(console.log("index",e),e>=4){for(var n=0;n<=e-4;n++)a[n].display="none";for(var i=e-3;i<=e;i++)a[i].display="flex"}else for(var r=0;r<4;r++)console.log("m",r),a[r].display="flex";return a},lower:function(){console.log("to lower!");var t=this;u>=o?clearTimeout(c):c=setTimeout((function(){u++,t.getCaseList(l,!1,u)}),500)},getCaseList:function(t,e,a){var i=this,r=getApp().globalData,s=r.serverUri,u=r.auth,l=s+"?mod=news&ac=list";n.default.request(l,{auth:u,cid:t,uid:this.uid,nowpage:a,filterData:!0}).then((function(t){var a=Object.prototype.toString.call(t.data),n=!1;if(-1!==a.indexOf("Array")&&(t.data=i.initHuashuListImage(t.data),n=!0,o=t.totalpage),e)i.list=n?t.data:[];else{if(!n)return;for(var r=t.data.length,s=0;s<r;s++)i.list.push(t.data[s])}}))},initHuashuListImage:function(t){for(var e=t.length,a=getApp().globalData,n=a.hostUrl,i=0;i<e;i++)t[i].thumbUrl?t[i].thumbUrl=n+t[i].thumbUrl:t[i].thumbUrl="/static/img/love_skills/thumb.png";return t},getHuashuTabbar:function(){var t=this,e=getApp().globalData,a=e.serverUri,i=e.auth,r=this,s=a+"?mod=news&ac=get_all_cid";n.default.request(s,{auth:i}).then((function(e){t.tabArr=r.initTabData(e),l=r.tabArr[0].firstNav.navId,t.tabTitle=r.tabArr[0].firstNav.title,t.getCaseList(l,!0,1)}))},initTabData:function(t){for(var e=t.length,a=0;a<e;a++)t[a].display="flex";return t},getArticleView:function(e){t.navigateTo({url:"/pages/cases/detail?id="+e+"&cid="+l+"&title="+this.tabTitle})},switchCasesTab:function(t){var e=t.detail.current||t.currentTarget.dataset.index||0;this.caseTabIndex=e;var a=this.tabArr[e].firstNav.navId;l=a,this.tabTitle=this.tabArr[e].firstNav.title,this.changeTabDisplay(e);var n=parseInt((new Date).getTime()/1e3);"undefined"==typeof s[n]&&(this.getCaseList(a,!0,1),s[n]=1)},switchTab:function(t){this.caseTabIndex=t;var e=this.tabArr[t].firstNav.navId;l=e,this.tabTitle=this.tabArr[t].firstNav.title,this.changeTabDisplay(t);var a=parseInt((new Date).getTime()/1e3);"undefined"==typeof s[a]&&(this.getCaseList(e,!0,1),s[a]=1)},changeTabDisplay:function(t){if(t>=4){for(var e=0;e<=t-4;e++)this.tabArr[e].display="none";for(var a=t-3;a<=t;a++)this.tabArr[a].display="flex"}else for(var n=0;n<4;n++)console.log("m",n),this.tabArr[n].display="flex"}}};e.default=f}).call(this,a("543d")["default"])},"99a0":function(t,e,a){"use strict";var n,i=function(){var t=this,e=t.$createElement,a=(t._self._c,parseInt(t.scrollHeight-16));t.$mp.data=Object.assign({},{$root:{m0:a}})},r=[];a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}))},a9a8:function(t,e,a){"use strict";a.r(e);var n=a("819a"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},c162:function(t,e,a){"use strict";a.r(e);var n=a("99a0"),i=a("a9a8");for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("0e48");var s,o=a("f0c5"),u=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],s);e["default"]=u.exports},f7ba:function(t,e,a){"use strict";(function(t){a("1fff");n(a("66fd"));var e=n(a("c162"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("543d")["createPage"])}},[["f7ba","common/runtime","common/vendor"]]]);