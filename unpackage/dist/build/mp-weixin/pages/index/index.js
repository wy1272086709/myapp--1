(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"0984":function(n,e,t){},"203c":function(n,e,t){"use strict";t.r(e);var o=t("4f81"),a=t("3236");for(var i in a)"default"!==i&&function(n){t.d(e,n,(function(){return a[n]}))}(i);t("ade6");var c,r=t("f0c5"),u=Object(r["a"])(a["default"],o["b"],o["c"],!1,null,"72683f00",null,!1,o["a"],c);e["default"]=u.exports},3236:function(n,e,t){"use strict";t.r(e);var o=t("650c"),a=t.n(o);for(var i in o)"default"!==i&&function(n){t.d(e,n,(function(){return o[n]}))}(i);e["default"]=a.a},"3b1b":function(n,e,t){"use strict";(function(n){t("1fff");o(t("66fd"));var e=o(t("203c"));function o(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("543d")["createPage"])},"4f81":function(n,e,t){"use strict";var o={"uni-icons":function(){return Promise.all([t.e("common/vendor"),t.e("components/uni-icons/uni-icons")]).then(t.bind(null,"4248"))}},a=function(){var n=this,e=n.$createElement;n._self._c},i=[];t.d(e,"b",(function(){return a})),t.d(e,"c",(function(){return i})),t.d(e,"a",(function(){return o}))},"650c":function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(t("edc3"));function a(n){return n&&n.__esModule?n:{default:n}}var i=function(){t.e("common/tabbar").then(function(){return resolve(t("49c3"))}.bind(null,t)).catch(t.oe)},c={data:function(){return{platForm:0,winHeight:0,iconSize:0,keyword:"",isIphoneX:!1,navList:[],contentHeight:228,position:"fixed"}},mounted:function(){this.isIphoneX=getApp().globalData.isIphoneX,this.platForm=getApp().globalData.platform,this.getNavList()},components:{tabBar:i},methods:{getNavList:function(){var n=getApp().globalData,e=n.serverUri,t=n.auth,a=this,i=e+"?mod=loveword&ac=get_all_cid";o.default.request(i,{auth:t}).then((function(n){for(var e=n.length,t=0;t<e;t++)for(var o=n[t].secondNav,i=o.length,c=0;c<i;c++)n[t].secondNav[c].navClass=(c+1)%3==0?c>2?" second-nav-label second-nav-lable-top":" second-nav-label ":c>2?" second-nav-label second-nav-lable-margin second-nav-lable-top":" second-nav-label second-nav-lable-margin ";a.navList=n,a.contentHeight=a.calculateNavHeight(n)}))},calculateNavHeight:function(n){for(var e=n.length,t=0,o=0;o<e;o++){var a=58,i=n[o].secondNav,c=i.length;if(c>3){var r=Math.ceil(c/3);a+=30*r+12*(r-1)}else a+=30;a+=20,t+=a}return t+=60,t},searchKeyword:function(){!this.keyword||this.keyword.length<2?n.showToast({title:"请输入关键词，且至少2个字符长度!",icon:"none",duration:2e3}):n.navigateTo({url:"/pages/index/huashu?keyword="+this.keyword})},handleContact:function(){console.log("contact ... handler...")},search:function(){},upgrade_vip:function(){if(2!=this.platForm){var e=this.$store.getters.userInfo;void 0!==e.nickName?n.navigateTo({url:"/pages/user/upgrade_user_vip"}):n.showModal({title:"提示",content:"请先登录",showCancel:!1,cancelText:"",confirmText:"确定",success:function(e){e.confirm&&(console.log("res...confirm"),n.switchTab({url:"/pages/user/index"}))},fail:function(){},complete:function(){}})}},complaint:function(){n.navigateTo({url:"/pages/user/complaint"})},help_center:function(){n.navigateTo({url:"/pages/index/meme"})},contact_consumer:function(){},enter_huashu:function(e,t){n.navigateTo({url:"/pages/index/huashu?title="+encodeURIComponent(e)+"&navId="+t})}},onShareAppMessage:function(){var n=getCurrentPages(),e=n[n.length-1],t=e.route;return{title:"恋爱话术",path:t,success:function(){},fail:function(){}}},onLoad:function(){n.showShareMenu({withShareTicket:!0});var e=n.getSystemInfoSync().windowHeight;this.winHeight=e,this.searchViewBottom=0,this.firstNavTop=20,this.iconSize=this.searchViewHeight-10,this.getNavList()}};e.default=c}).call(this,t("543d")["default"])},ade6:function(n,e,t){"use strict";var o=t("0984"),a=t.n(o);a.a}},[["3b1b","common/runtime","common/vendor"]]]);