(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{331:function(e,t,n){"use strict";n(13),n(113),n(9),n(57),n(105);var r=n(32);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(225)),i=r(n(170)),u=r(n(171)),o=r(n(226)),c=r(n(227)),s=r(n(228)),f=r(n(229)),p=r(n(104)),l=r(n(230)),d=r(n(74)),h=r(n(3)),v=r(n(168)),k=n(169),g=n(172),x=r(n(232)),w=function(e){function t(){var e,n;(0,o.default)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return n=(0,s.default)(this,(e=(0,f.default)(t)).call.apply(e,[this].concat(a))),(0,d.default)((0,p.default)(n),"redirect",function(){var e=(0,u.default)(i.default.mark((function e(t){var r,a,u;return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=3;break}return window.location="/",e.abrupt("return");case 3:return r=(0,k.linkResolver)(t),a=(n.config.pages||[]).map((function(e){var t=[],n=(0,x.default)(e.match,t).exec(r);return n?n.slice(1).reduce((function(e,n,r){return e+(t[r]?"".concat((a=e,-1===a.indexOf("?")?"?":"&")).concat(t[r].name,"=").concat(n):n);var a}),e.path):null})).find((function(e){return!!e})),e.next=7,fetch(r).then((function(e){return e.status}));case 7:e.t0=e.sent,u=200===e.t0,window.location=!u&&a?a:r;case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),n}var n;return(0,l.default)(t,e),(0,c.default)(t,[{key:"componentDidMount",value:function(){this.preview()}},{key:"preview",value:(n=(0,u.default)(i.default.mark((function e(){var t,n,r,u,o,c,s,f,p,l,d,h,x;return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.location,n=(0,g.parseQueryString)(String(t.search).substr(1)),r=n.get("token"),u=n.get("experiment"),o=n.get("documentId"),(c=new Date).setHours(c.getHours()+1),e.next=9,v.default.getApi("https://".concat(this.config.repositoryName,".cdn.prismic.io/api/v2"));case 9:if(s=e.sent,!r){e.next=22;break}return e.next=13,s.previewSession(r,k.linkResolver,"/");case 13:if(document.cookie="".concat(v.default.previewCookie,"=").concat(r,"; expires=").concat(c.toUTCString(),"; path=/"),o){e.next=16;break}return e.abrupt("return",this.redirect());case 16:return e.next=18,s.getByID(o);case 18:return f=e.sent,e.abrupt("return",this.redirect(f));case 22:if(!u){e.next=28;break}p=[],s.experiments.running&&s.experiments.running.length&&p.concat.apply(p,(0,a.default)(s.experiments.running.map((function(e){return e.data.variations})))),u&&p.length&&(l=p.find((function(e){return e.label.toLowerCase().replace(" ","-")===u})))&&(document.cookie="".concat(v.default.experimentCookie,"=").concat(l.ref,"; expires=").concat(c.toUTCString(),"; path=/"),this.redirect()),e.next=35;break;case 28:if(!o){e.next=35;break}return d=(0,k.getCookies)(),e.next=32,s.getByID(o);case 32:h=e.sent,x=d.has(v.default.previewCookie)||d.has(v.default.experimentCookie),this.redirect(x&&h);case 35:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)})},{key:"render",value:function(){return null}},{key:"config",get:function(){return this.props.prismic.options}}]),t}(h.default.Component);t.default=w}}]);
//# sourceMappingURL=component---node-modules-gatsby-source-prismic-graphql-components-preview-page-js-fe4786a7231117af7839.js.map