(this["webpackJsonphkzf-mobile"]=this["webpackJsonphkzf-mobile"]||[]).push([[18],{415:function(e,a,t){"use strict";t(19),t(225),t(416)},416:function(e,a,t){},417:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=d(t(1)),i=d(t(35)),r=d(t(2)),o=d(t(5)),l=d(t(3)),c=d(t(4)),s=d(t(15)),u=function(e){if(e&&e.__esModule)return e;var a={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(a[t]=e[t]);return a.default=e,a}(t(0)),m=d(t(108)),f=d(t(226));function d(e){return e&&e.__esModule?e:{default:e}}var p=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)a.indexOf(n[i])<0&&(t[n[i]]=e[n[i]])}return t},v=/^[\u4e00-\u9fa5]{2}$/,h=v.test.bind(v);function _(e){return"string"===typeof e}function b(e){return _(e.type)&&h(e.props.children)?u.cloneElement(e,{},e.props.children.split("").join(" ")):_(e)?(h(e)&&(e=e.split("").join(" ")),u.createElement("span",null,e)):e}var g=function(e){function a(){return(0,r.default)(this,a),(0,l.default)(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return(0,c.default)(a,e),(0,o.default)(a,[{key:"render",value:function(){var e,a=this.props,t=a.children,r=a.className,o=a.prefixCls,l=a.type,c=a.size,d=a.inline,v=a.disabled,h=a.icon,_=a.loading,g=a.activeStyle,y=a.activeClassName,E=a.onClick,N=p(a,["children","className","prefixCls","type","size","inline","disabled","icon","loading","activeStyle","activeClassName","onClick"]),k=_?"loading":h,O=(0,s.default)(o,r,(e={},(0,i.default)(e,o+"-primary","primary"===l),(0,i.default)(e,o+"-ghost","ghost"===l),(0,i.default)(e,o+"-warning","warning"===l),(0,i.default)(e,o+"-small","small"===c),(0,i.default)(e,o+"-inline",d),(0,i.default)(e,o+"-disabled",v),(0,i.default)(e,o+"-loading",_),(0,i.default)(e,o+"-icon",!!k),e)),P=u.Children.map(t,b),j=void 0;if("string"===typeof k)j=u.createElement(f.default,{"aria-hidden":"true",type:k,size:"small"===c?"xxs":"md",className:o+"-icon"});else if(k){var x=k.props&&k.props.className,w=(0,s.default)("am-icon",o+"-icon","small"===c?"am-icon-xxs":"am-icon-md");j=u.cloneElement(k,{className:x?x+" "+w:w})}return u.createElement(m.default,{activeClassName:y||(g?o+"-active":void 0),disabled:v,activeStyle:g},u.createElement("a",(0,n.default)({role:"button",className:O},N,{onClick:v?void 0:E,"aria-disabled":v}),j,P))}}]),a}(u.Component);g.defaultProps={prefixCls:"am-button",size:"large",inline:!1,disabled:!1,loading:!1,activeStyle:{}},a.default=g,e.exports=a.default},418:function(e,a,t){e.exports={title:"Profile_title__3NHUZ",bg:"Profile_bg__3ku-l",info:"Profile_info__1tsln",auth:"Profile_auth__3pFNq",user:"Profile_user__cbf5a",myIcon:"Profile_myIcon__2z3az",avatar:"Profile_avatar__3LxRS",name:"Profile_name__hMWoY",edit:"Profile_edit__3Z3h-",arrow:"Profile_arrow__3umfk",ad:"Profile_ad__2GfLY",menuItem:"Profile_menuItem__1kTS5"}},430:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return P}));t(119);var n=t(87),i=t.n(n),r=(t(415),t(417)),o=t.n(r),l=t(9),c=t.n(l),s=t(20),u=t(36),m=t(37),f=t(39),d=t(38),p=(t(245),t(246)),v=t.n(p),h=t(0),_=t.n(h),b=t(32),g=t(40),y=t(418),E=t.n(y),N=[{id:1,name:"\u6211\u7684\u6536\u85cf",iconfont:"icon-coll",to:"/favorate"},{id:2,name:"\u6211\u7684\u51fa\u79df",iconfont:"icon-ind",to:"/rent"},{id:3,name:"\u770b\u623f\u8bb0\u5f55",iconfont:"icon-record"},{id:4,name:"\u6210\u4e3a\u623f\u4e3b",iconfont:"icon-identity"},{id:5,name:"\u4e2a\u4eba\u8d44\u6599",iconfont:"icon-myinfo"},{id:6,name:"\u8054\u7cfb\u6211\u4eec",iconfont:"icon-cust"}],k=g.b+"/img/profile/avatar.png",O=v.a.alert,P=function(e){Object(f.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(u.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=a.call.apply(a,[this].concat(i))).state={isLogin:Object(g.f)(),userInfo:{avatar:"",nickname:""}},e.logout=function(){O("\u63d0\u793a","\u662f\u5426\u786e\u5b9a\u9000\u51fa?",[{text:"\u53d6\u6d88"},{text:"\u9000\u51fa",onPress:function(){var a=Object(s.a)(c.a.mark((function a(){return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,g.a.post("/user/logout",null,{headers:{authorization:Object(g.e)()}});case 2:Object(g.g)(),e.setState({isLogin:!1,userInfo:{avatar:"",nickname:""}});case 4:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}()}])},e}return Object(m.a)(t,[{key:"componentDidMount",value:function(){this.getUserInfo()}},{key:"getUserInfo",value:function(){var e=Object(s.a)(c.a.mark((function e(){var a,t,n,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state.isLogin){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,g.a.get("/user",{headers:{authorization:Object(g.e)()}});case 4:200===(a=e.sent).data.status&&(t=a.data.body,n=t.avatar,i=t.nickname,this.setState({userInfo:{avatar:g.b+n,nickname:i}}));case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.history,a=this.state,t=a.isLogin,n=a.userInfo,r=n.avatar,l=n.nickname;return _.a.createElement("div",{className:E.a.root},_.a.createElement("div",{className:E.a.title},_.a.createElement("img",{className:E.a.bg,src:g.b+"/img/profile/bg.png",alt:"\u80cc\u666f\u56fe"}),_.a.createElement("div",{className:E.a.info},_.a.createElement("div",{className:E.a.myIcon},_.a.createElement("img",{className:E.a.avatar,src:r||k,alt:"icon"})),_.a.createElement("div",{className:E.a.user},_.a.createElement("div",{className:E.a.name},l||"\u6e38\u5ba2"),t?_.a.createElement(_.a.Fragment,null,_.a.createElement("div",{className:E.a.auth},_.a.createElement("span",{onClick:this.logout},"\u9000\u51fa")),_.a.createElement("div",{className:E.a.edit},"\u7f16\u8f91\u4e2a\u4eba\u8d44\u6599",_.a.createElement("span",{className:E.a.arrow},_.a.createElement("i",{className:"iconfont icon-arrow"})))):_.a.createElement("div",{className:E.a.edit},_.a.createElement(o.a,{type:"primary",size:"small",inline:!0,onClick:function(){return e.push("/login")}},"\u53bb\u767b\u5f55"))))),_.a.createElement(i.a,{data:N,columnNum:3,hasLine:!1,renderItem:function(e){return e.to?_.a.createElement(b.b,{to:e.to},_.a.createElement("div",{className:E.a.menuItem},_.a.createElement("i",{className:"iconfont ".concat(e.iconfont)}),_.a.createElement("span",null,e.name))):_.a.createElement("div",{className:E.a.menuItem},_.a.createElement("i",{className:"iconfont ".concat(e.iconfont)}),_.a.createElement("span",null,e.name))}}),_.a.createElement("div",{className:E.a.ad},_.a.createElement("img",{src:g.b+"/img/profile/join.png",alt:""})))}}]),t}(h.Component)}}]);
//# sourceMappingURL=18.eae4f1fb.chunk.js.map