(this["webpackJsonphkzf-mobile"]=this["webpackJsonphkzf-mobile"]||[]).push([[11],{208:function(e,t,n){"use strict";n(209);var a=n(211),o=n.n(a),r=n(0),i=n.n(r),s=n(14),c=n(212),l=n.n(c);t.a=Object(s.f)((function(e){var t=e.children,n=e.history,a=e.onLeftClick,r=(e.className,e.rightContent);return i.a.createElement(o.a,{className:l.a.navBar,mode:"light",icon:i.a.createElement("i",{className:"iconfont icon-back"}),onLeftClick:a||function(){return n.go(-1)},rightContent:r},t)}))},209:function(e,t,n){"use strict";n(19),n(210)},210:function(e,t,n){},211:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=u(n(1)),o=u(n(2)),r=u(n(5)),i=u(n(3)),s=u(n(4)),c=u(n(15)),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(0));function u(e){return e&&e.__esModule?e:{default:e}}var m=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&(n[a[o]]=e[a[o]])}return n},f=function(e){function t(){return(0,o.default)(this,t),(0,i.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,s.default)(t,e),(0,r.default)(t,[{key:"render",value:function(){var e=this.props,t=e.prefixCls,n=e.className,o=e.children,r=e.mode,i=e.icon,s=e.onLeftClick,u=e.leftContent,f=e.rightContent,p=m(e,["prefixCls","className","children","mode","icon","onLeftClick","leftContent","rightContent"]);return l.createElement("div",(0,a.default)({},p,{className:(0,c.default)(n,t,t+"-"+r)}),l.createElement("div",{className:t+"-left",role:"button",onClick:s},i?l.createElement("span",{className:t+"-left-icon","aria-hidden":"true"},i):null,u),l.createElement("div",{className:t+"-title"},o),l.createElement("div",{className:t+"-right"},f))}}]),t}(l.Component);t.default=f,f.defaultProps={prefixCls:"am-navbar",mode:"dark",onLeftClick:function(){}},e.exports=t.default},212:function(e,t,n){e.exports={navBar:"NavHeader_navBar__3G7Ta"}},213:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}},215:function(e,t,n){"use strict";n(19),n(225),n(218)},216:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=c(n(35)),o=c(n(15)),r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(0)),i=c(n(220)),s=c(n(226));function c(e){return e&&e.__esModule?e:{default:e}}var l={duration:3,mask:!0},u=void 0;function m(e,t){var n;u&&(u.destroy(),u=null),i.default.newInstance({prefixCls:"am-toast",style:{},transitionName:"am-fade",className:(0,o.default)((n={},(0,a.default)(n,"am-toast-mask",e),(0,a.default)(n,"am-toast-nomask",!e),n))},(function(e){return t&&t(e)}))}function f(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:l.duration,a=arguments[3],o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:l.mask,i={info:"",success:"success",fail:"fail",offline:"dislike",loading:"loading"},c=i[t];m(o,(function(t){u=t,t.notice({duration:n,style:{},content:c?r.createElement("div",{className:"am-toast-text am-toast-text-icon",role:"alert","aria-live":"assertive"},r.createElement(s.default,{type:c,size:"lg"}),r.createElement("div",{className:"am-toast-text-info"},e)):r.createElement("div",{className:"am-toast-text",role:"alert","aria-live":"assertive"},r.createElement("div",null,e)),closable:!0,onClose:function(){a&&a(),t.destroy(),t=null,u=null}})}))}t.default={SHORT:3,LONG:8,show:function(e,t,n){return f(e,"info",t,(function(){}),n)},info:function(e,t,n,a){return f(e,"info",t,n,a)},success:function(e,t,n,a){return f(e,"success",t,n,a)},fail:function(e,t,n,a){return f(e,"fail",t,n,a)},offline:function(e,t,n,a){return f(e,"offline",t,n,a)},loading:function(e,t,n,a){return f(e,"loading",t,n,a)},hide:function(){u&&(u.destroy(),u=null)},config:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.duration,n=void 0===t?3:t,a=e.mask;l.duration=n,!1===a&&(l.mask=!1)}},e.exports=t.default},218:function(e,t,n){},220:function(e,t,n){"use strict";n.r(t);var a=n(213),o=n.n(a),r=n(35),i=n.n(r),s=n(1),c=n.n(s),l=n(2),u=n.n(l),m=n(5),f=n.n(m),p=n(3),d=n.n(p),_=n(4),v=n.n(_),h=n(0),y=n.n(h),g=n(31),b=n.n(g),N=n(68),C=n.n(N),k=n(229);var E=n(15),w=n.n(E),O=function(e){function t(){var e,n,a,o;u()(this,t);for(var r=arguments.length,i=Array(r),s=0;s<r;s++)i[s]=arguments[s];return n=a=d()(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),a.close=function(){a.clearCloseTimer(),a.props.onClose()},a.startCloseTimer=function(){a.props.duration&&(a.closeTimer=setTimeout((function(){a.close()}),1e3*a.props.duration))},a.clearCloseTimer=function(){a.closeTimer&&(clearTimeout(a.closeTimer),a.closeTimer=null)},o=n,d()(a,o)}return v()(t,e),f()(t,[{key:"componentDidMount",value:function(){this.startCloseTimer()}},{key:"componentWillUnmount",value:function(){this.clearCloseTimer()}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls+"-notice",a=(e={},i()(e,""+n,1),i()(e,n+"-closable",t.closable),i()(e,t.className,!!t.className),e);return y.a.createElement("div",{className:w()(a),style:t.style},y.a.createElement("div",{className:n+"-content"},t.children),t.closable?y.a.createElement("a",{tabIndex:"0",onClick:this.close,className:n+"-close"},y.a.createElement("span",{className:n+"-close-x"})):null)}}]),t}(h.Component);O.propTypes={duration:b.a.number,onClose:b.a.func,children:b.a.any},O.defaultProps={onEnd:function(){},onClose:function(){},duration:1.5,style:{right:"50%"}};var M=O,x=0,L=Date.now();function j(){return"rcNotification_"+L+"_"+x++}var T=function(e){function t(){var e,n,a,o;u()(this,t);for(var r=arguments.length,i=Array(r),s=0;s<r;s++)i[s]=arguments[s];return n=a=d()(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),a.state={notices:[]},a.add=function(e){var t=e.key=e.key||j();a.setState((function(n){var a=n.notices;if(!a.filter((function(e){return e.key===t})).length)return{notices:a.concat(e)}}))},a.remove=function(e){a.setState((function(t){return{notices:t.notices.filter((function(t){return t.key!==e}))}}))},o=n,d()(a,o)}return v()(t,e),f()(t,[{key:"getTransitionName",value:function(){var e=this.props,t=e.transitionName;return!t&&e.animation&&(t=e.prefixCls+"-"+e.animation),t}},{key:"render",value:function(){var e,t=this,n=this.props,a=this.state.notices.map((function(e){var a=function(){var e=[].slice.call(arguments,0);return 1===e.length?e[0]:function(){for(var t=0;t<e.length;t++)e[t]&&e[t].apply&&e[t].apply(this,arguments)}}(t.remove.bind(t,e.key),e.onClose);return y.a.createElement(M,c()({prefixCls:n.prefixCls},e,{onClose:a}),e.content)})),o=(e={},i()(e,n.prefixCls,1),i()(e,n.className,!!n.className),e);return y.a.createElement("div",{className:w()(o),style:n.style},y.a.createElement(k.a,{transitionName:this.getTransitionName()},a))}}]),t}(h.Component);T.propTypes={prefixCls:b.a.string,transitionName:b.a.string,animation:b.a.oneOfType([b.a.string,b.a.object]),style:b.a.object},T.defaultProps={prefixCls:"rmc-notification",animation:"fade",style:{top:65,left:"50%"}},T.newInstance=function(e,t){var n=e||{},a=n.getContainer,r=o()(n,["getContainer"]),i=void 0;a?i=a():(i=document.createElement("div"),document.body.appendChild(i));var s=!1;C.a.render(y.a.createElement(T,c()({},r,{ref:function(e){s||(s=!0,t({notice:function(t){e.add(t)},removeNotice:function(t){e.remove(t)},component:e,destroy:function(){C.a.unmountComponentAtNode(i),a||document.body.removeChild(i)}}))}})),i)};var I=T;t.default=I},221:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(222),i=n.n(r);t.a=function(e){var t=e.src,n=e.title,a=e.desc,r=e.tags,s=e.price,c=e.onClick,l=e.style;return o.a.createElement("div",{className:i.a.house,onClick:c,style:l},o.a.createElement("div",{className:i.a.imgWrap},o.a.createElement("img",{className:i.a.img,src:t,alt:""})),o.a.createElement("div",{className:i.a.content},o.a.createElement("h3",{className:i.a.title},n),o.a.createElement("div",{className:i.a.desc},a),o.a.createElement("div",null,r.map((function(e,t){var n="tag"+(t+1);return o.a.createElement("span",{className:[i.a.tag,i.a[n]].join(" "),key:e},e)}))),o.a.createElement("div",{className:i.a.price},o.a.createElement("span",{className:i.a.priceNum},s)," \u5143/\u6708")))}},222:function(e,t,n){e.exports={house:"HouseItem_house__3-EOM",imgWrap:"HouseItem_imgWrap__3FWRL",img:"HouseItem_img__2Bm7I",content:"HouseItem_content__HAIK9",title:"HouseItem_title__3c74j",desc:"HouseItem_desc__3HE6n",price:"HouseItem_price__369t8",priceNum:"HouseItem_priceNum__3c2pl",tag:"HouseItem_tag__2H0YY",tag1:"HouseItem_tag1__2C-tJ",tag2:"HouseItem_tag2__2mBKh",tag3:"HouseItem_tag3__2EQAx"}},339:function(e,t,n){e.exports={map:"Map_map__3FLhZ",container:"Map_container__1-E3P",bubble:"Map_bubble__21roQ",name:"Map_name__1pIEX",rect:"Map_rect__3iqDQ",arrow:"Map_arrow__1BQhz",housename:"Map_housename__3ir3G",housenum:"Map_housenum__11CIz",houseList:"Map_houseList__Ypy6b",show:"Map_show__QWqvu",titleWrap:"Map_titleWrap__1r0er",listTitle:"Map_listTitle__1tdCQ",titleMore:"Map_titleMore__3vP4m",houseItems:"Map_houseItems__6W2XN",house:"Map_house__ZqTqe",imgWrap:"Map_imgWrap__3NxkR",img:"Map_img__2Hjmc",content:"Map_content__mbjgE",title:"Map_title__22msL",desc:"Map_desc__3GmX2",price:"Map_price__T4WEd",priceNum:"Map_priceNum__3GePP",tag:"Map_tag__VPQNo",tag1:"Map_tag1__3aLcX",tag2:"Map_tag2__LjI_a",tag3:"Map_tag3__1iDvS"}},422:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return k}));n(215);var a=n(216),o=n.n(a),r=n(9),i=n.n(r),s=n(20),c=n(36),l=n(37),u=n(39),m=n(38),f=n(0),p=n.n(f),d=n(71),_=n(32),v=n(28),h=n(208),y=n(221),g=n(339),b=n.n(g),N=window.BMap,C={cursor:"pointer",border:"0px solid rgb(255, 0, 0)",padding:"0px",whiteSpace:"nowrap",fontSize:"12px",color:"rgb(255, 255, 255)",textAlign:"center"},k=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={housesList:[],isShowList:!1},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.initMap()}},{key:"initMap",value:function(){var e=this,t=JSON.parse(localStorage.getItem("hkzf_city")),n=t.label,a=t.value,o=new N.Map("container");this.map=o;new N.Point(116.404,39.915);console.log(n,a),(new N.Geocoder).getPoint(n,function(){var t=Object(s.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n&&(o.centerAndZoom(n,11),o.addControl(new N.NavigationControl),o.addControl(new N.ScaleControl),e.renderOverlays(a));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),n),o.addEventListener("movestart",(function(){e.state.isShowList&&e.setState({isShowList:!1})}))}},{key:"renderOverlays",value:function(){var e=Object(s.a)(i.a.mark((function e(t){var n,a,r,s,c,l=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o.a.loading("\u52a0\u8f7d\u4e2d...",0,null,!1),e.next=4,d.a.get("/area/map?id=".concat(t));case 4:n=e.sent,o.a.hide(),a=n.data.body,r=this.getTypeAndZoom(),s=r.nextZoom,c=r.type,a.forEach((function(e){l.createOverlays(e,s,c)})),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),o.a.hide();case 14:case"end":return e.stop()}}),e,this,[[0,11]])})));return function(t){return e.apply(this,arguments)}}()},{key:"getTypeAndZoom",value:function(){var e,t,n=this.map.getZoom();return n>=10&&n<12?(e=13,t="circle"):n>=12&&n<14?(e=15,t="circle"):n>=14&&n<16&&(t="rect"),{nextZoom:e,type:t}}},{key:"createOverlays",value:function(e,t,n){var a=e.coord,o=a.longitude,r=a.latitude,i=e.label,s=e.count,c=e.value,l=new N.Point(o,r);"circle"===n?this.createCircle(l,i,s,c,t):this.createRect(l,i,s,c)}},{key:"createCircle",value:function(e,t,n,a,o){var r=this,i=new N.Label("",{position:e,offset:new N.Size(-35,-35)});i.id=a,i.setContent('\n      <div class="'.concat(b.a.bubble,'">\n        <p class="').concat(b.a.name,'">').concat(t,"</p>\n        <p>").concat(n,"\u5957</p>\n      </div>\n    ")),i.setStyle(C),i.addEventListener("click",(function(){r.renderOverlays(a),r.map.centerAndZoom(e,o),setTimeout((function(){r.map.clearOverlays()}),0)})),this.map.addOverlay(i)}},{key:"createRect",value:function(e,t,n,a){var o=this,r=new N.Label("",{position:e,offset:new N.Size(-50,-28)});r.id=a,r.setContent('\n      <div class="'.concat(b.a.rect,'">\n        <span class="').concat(b.a.housename,'">').concat(t,'</span>\n        <span class="').concat(b.a.housenum,'">').concat(n,'\u5957</span>\n        <i class="').concat(b.a.arrow,'"></i>\n      </div>\n    ')),r.setStyle(C),r.addEventListener("click",(function(e){o.getHousesList(a),console.log(e);var t=e.changedTouches[0];o.map.panBy(window.innerWidth/2-t.clientX,(window.innerHeight-330)/2-t.clientY)})),this.map.addOverlay(r)}},{key:"getHousesList",value:function(){var e=Object(s.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o.a.loading("\u52a0\u8f7d\u4e2d...",0,null,!1),e.next=4,d.a.get("/houses?cityId=".concat(t));case 4:n=e.sent,o.a.hide(),this.setState({housesList:n.data.body.list,isShowList:!0}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),o.a.hide();case 12:case"end":return e.stop()}}),e,this,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()},{key:"renderHousesList",value:function(){return this.state.housesList.map((function(e){return p.a.createElement(y.a,{key:e.houseCode,src:v.a+e.houseImg,title:e.title,desc:e.desc,tags:e.tags,price:e.price})}))}},{key:"render",value:function(){return p.a.createElement("div",{className:b.a.map},p.a.createElement(h.a,null,"\u5730\u56fe\u627e\u623f"),p.a.createElement("div",{id:"container",className:b.a.container}),p.a.createElement("div",{className:[b.a.houseList,this.state.isShowList?b.a.show:""].join(" ")},p.a.createElement("div",{className:b.a.titleWrap},p.a.createElement("h1",{className:b.a.listTitle},"\u623f\u5c4b\u5217\u8868"),p.a.createElement(_.b,{className:b.a.titleMore,to:"/home/list"},"\u66f4\u591a\u623f\u6e90")),p.a.createElement("div",{className:b.a.houseItems},this.renderHousesList())))}}]),n}(p.a.Component)}}]);
//# sourceMappingURL=11.e2e2ef90.chunk.js.map