(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{332:function(e,t,o){"use strict";o.r(t),o.d(t,"query",(function(){return _}));o(30);var n=o(53),r=o(5),a=o(3),s=o.n(a),l=o(329),i=o.n(l),u=o(47),c=o(49),d=o(327),f=o(338),p=o(328),m=o(343),h=o.n(m),b=o(330),v=Object(n.a)("div",{target:"e27vm1d0"})("background:",u.a.grey900,";display:flex;justify-content:center;align-items:center;overflow:hidden;position:relative;padding:1em;margin-bottom:3.5em;.topSquare{position:absolute;background:",u.a.green300,";height:200px;width:200px;right:0;bottom:0;z-index:0;}.bottomSquare{position:absolute;background:",u.a.green300,";height:200px;width:200px;left:0;top:0;z-index:0;}img{width:100%;height:100%;max-width:940px;z-index:0;cursor:pointer;}"),y=Object(n.a)("div",{target:"e27vm1d1"})({name:"1vn4ady",styles:"max-width:550px;margin:0 auto;text-align:center;"}),O=Object(n.a)("div",{target:"e27vm1d2"})("max-width:1000px;margin:0 auto;.block-img{margin-top:3.5em;margin-bottom:0.5em;img{width:100%;}img:active{transform:scale(1.5,1.5);}}a{text-decoration:none;color:",u.a.green500,";}"),g=Object(n.a)(c.Link,{target:"e27vm1d3"})({name:"1voh43f",styles:"margin-top:3em;display:block;text-align:center;"}),C=Object(n.a)("div",{target:"e27vm1d4"})("color:",u.a.green500,";font-size:25px;max-width:1000px;margin:0 auto;text-align:center;padding-bottom:20px;"),w={content:{position:"relative",zIndex:1e3}},j=function(e){var t=e.project,o=e.meta,n=Object(a.useState)(!1),l=n[0],c=n[1],m=function(){return c(!1)};return Object(r.c)(s.a.Fragment,null,Object(r.c)(i.a,{title:""+t.project_title[0].text,titleTemplate:"%s | "+o.title,meta:[{name:"description",content:o.description},{property:"og:title",content:""+t.project_title[0].text},{property:"og:description",content:o.description},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.author},{name:"twitter:title",content:o.title},{name:"twitter:description",content:o.description}].concat(o)}),Object(r.c)(p.a,null,Object(r.c)(y,null,d.RichText.render(t.project_title)),Object(r.c)(C,null,t.project_category[0].text.split(",").map((function(e,t,o){return Object(r.c)("span",null,o.length-1==t?e:e+", ")}))),t.project_hero_image&&Object(r.c)(v,null,Object(r.c)("div",{class:"topSquare"}),Object(r.c)("div",{class:"bottomSquare"}),Object(r.c)("img",{src:t.project_hero_image.url,alt:"Picture of project",id:"myImg",onClick:function(){return c(!0)}})),Object(r.c)(O,null,d.RichText.render(t.project_description),Object(r.c)(g,{to:"/work"},Object(r.c)(f.a,{className:"Button--secondary"},"See other work"))),Object(r.c)(h.a,{isOpen:l,onRequestClose:m,id:"imgModal",class:"modal",style:{customStyles:w}},Object(r.c)("div",{style:{textAlign:"center"}},Object(r.c)("div",{style:{textAlign:"right"}},Object(r.c)(b.e,{style:{color:u.a.grey900,cursor:"pointer"},onClick:m})),Object(r.c)("img",{style:{maxHeight:"750px",width:"100%",objectFit:"contain"},src:t.project_hero_image.url})))))};t.default=function(e){var t=e.data,o=t.prismic.allProjects.edges[0].node,n=t.site.siteMetadata;return Object(r.c)(j,{project:o,meta:n})};var _="383803344"},338:function(e,t,o){"use strict";o(31),o(7),o(8),o(4),o(12);var n=o(53),r=o(5),a=o(3),s=o(47),l=o(34);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}var u=Object(n.a)("button",{target:"e15qz7ka0"})("padding:1em 2em;background:",s.a.green500,";font-weight:600;color:",s.a.grey900,";outline:none;border:none;font-size:1rem;border-radius:2px;position:relative;transition:background 100ms ease-in-out;@media(max-width:",l.a.maxwidthMobile,'px){padding:0.8em 1.8em;font-size:1em;}p{margin:0;}&:before{content:"";position:absolute;left:0;top:0;width:100%;height:100%;background:',s.a.green600,";z-index:-1;}&:hover{cursor:pointer;background:transparent;transition:background 100ms ease-in-out;}&.Button--secondary{border-style:solid;border-width:3px;border-color:",s.a.green500,";background-color:",s.a.grey900,";color:",s.a.grey100,";padding:0.95em 1.8em;font-size:0.95rem;&:hover{background:",s.a.green500,";color:",s.a.grey900,";transition:all 100ms ease-in-out;}}"),c=function(e){var t,o;function n(){return e.apply(this,arguments)||this}return o=e,(t=n).prototype=Object.create(o.prototype),t.prototype.constructor=t,t.__proto__=o,n.prototype.render=function(){var e=this.props,t=(e.children,function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,["children"]));return Object(r.c)(u,i({onClick:this.props.onClick},t),this.props.children)},n}(a.Component);t.a=c},339:function(e,t,o){"use strict";o(35),Object.defineProperty(t,"__esModule",{value:!0}),t.canUseDOM=void 0;var n,r=o(349);var a=((n=r)&&n.__esModule?n:{default:n}).default,s=a.canUseDOM?window.HTMLElement:{};t.canUseDOM=a.canUseDOM;t.default=s},341:function(e,t,o){"use strict";o(45),o(35),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return[].slice.call(e.querySelectorAll("*"),0).filter(s)};var n=/input|select|textarea|button|object/;function r(e){var t=e.offsetWidth<=0&&e.offsetHeight<=0;if(t&&!e.innerHTML)return!0;var o=window.getComputedStyle(e);return t?"visible"!==o.getPropertyValue("overflow"):"none"==o.getPropertyValue("display")}function a(e,t){var o=e.nodeName.toLowerCase();return(n.test(o)&&!e.disabled||"a"===o&&e.href||t)&&function(e){for(var t=e;t&&t!==document.body;){if(r(t))return!1;t=t.parentNode}return!0}(e)}function s(e){var t=e.getAttribute("tabindex");null===t&&(t=void 0);var o=isNaN(t);return(o||t>=0)&&a(e,!o)}e.exports=t.default},342:function(e,t,o){"use strict";o(35),Object.defineProperty(t,"__esModule",{value:!0}),t.assertNodeList=i,t.setElement=function(e){var t=e;if("string"==typeof t&&s.canUseDOM){var o=document.querySelectorAll(t);i(o,t),t="length"in o?o[0]:o}return l=t||l},t.validateElement=u,t.hide=function(e){u(e)&&(e||l).setAttribute("aria-hidden","true")},t.show=function(e){u(e)&&(e||l).removeAttribute("aria-hidden")},t.documentNotReadyOrSSRTesting=function(){l=null},t.resetForTesting=function(){l=null};var n,r=o(348),a=(n=r)&&n.__esModule?n:{default:n},s=o(339);var l=null;function i(e,t){if(!e||!e.length)throw new Error("react-modal: No elements were found for selector "+t+".")}function u(e){return!(!e&&!l)||((0,a.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),!1)}},343:function(e,t,o){"use strict";o(35),Object.defineProperty(t,"__esModule",{value:!0});var n,r=o(344),a=(n=r)&&n.__esModule?n:{default:n};t.default=a.default,e.exports=t.default},344:function(e,t,o){"use strict";o(80),o(48),o(36),o(31),o(35),Object.defineProperty(t,"__esModule",{value:!0}),t.bodyOpenClassName=t.portalClassName=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},r=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),a=o(3),s=m(a),l=m(o(162)),i=m(o(81)),u=m(o(345)),c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t}(o(342)),d=o(339),f=m(d),p=o(192);function m(e){return e&&e.__esModule?e:{default:e}}function h(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var b=t.portalClassName="ReactModalPortal",v=t.bodyOpenClassName="ReactModal__Body--open",y=void 0!==l.default.createPortal,O=function(){return y?l.default.createPortal:l.default.unstable_renderSubtreeIntoContainer};function g(e){return e()}var C=function(e){function t(){var e,o,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,i=Array(a),c=0;c<a;c++)i[c]=arguments[c];return o=r=h(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),r.removePortal=function(){!y&&l.default.unmountComponentAtNode(r.node),g(r.props.parentSelector).removeChild(r.node)},r.portalRef=function(e){r.portal=e},r.renderPortal=function(e){var o=O()(r,s.default.createElement(u.default,n({defaultStyles:t.defaultStyles},e)),r.node);r.portalRef(o)},h(r,o)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){d.canUseDOM&&(y||(this.node=document.createElement("div")),this.node.className=this.props.portalClassName,g(this.props.parentSelector).appendChild(this.node),!y&&this.renderPortal(this.props))}},{key:"getSnapshotBeforeUpdate",value:function(e){return{prevParent:g(e.parentSelector),nextParent:g(this.props.parentSelector)}}},{key:"componentDidUpdate",value:function(e,t,o){if(d.canUseDOM){var n=this.props,r=n.isOpen,a=n.portalClassName;e.portalClassName!==a&&(this.node.className=a);var s=o.prevParent,l=o.nextParent;l!==s&&(s.removeChild(this.node),l.appendChild(this.node)),(e.isOpen||r)&&!y&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(d.canUseDOM&&this.node&&this.portal){var e=this.portal.state,t=Date.now(),o=e.isOpen&&this.props.closeTimeoutMS&&(e.closesAt||t+this.props.closeTimeoutMS);o?(e.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,o-t)):this.removePortal()}}},{key:"render",value:function(){return d.canUseDOM&&y?(!this.node&&y&&(this.node=document.createElement("div")),O()(s.default.createElement(u.default,n({ref:this.portalRef,defaultStyles:t.defaultStyles},this.props)),this.node)):null}}],[{key:"setAppElement",value:function(e){c.setElement(e)}}]),t}(a.Component);C.propTypes={isOpen:i.default.bool.isRequired,style:i.default.shape({content:i.default.object,overlay:i.default.object}),portalClassName:i.default.string,bodyOpenClassName:i.default.string,htmlOpenClassName:i.default.string,className:i.default.oneOfType([i.default.string,i.default.shape({base:i.default.string.isRequired,afterOpen:i.default.string.isRequired,beforeClose:i.default.string.isRequired})]),overlayClassName:i.default.oneOfType([i.default.string,i.default.shape({base:i.default.string.isRequired,afterOpen:i.default.string.isRequired,beforeClose:i.default.string.isRequired})]),appElement:i.default.instanceOf(f.default),onAfterOpen:i.default.func,onRequestClose:i.default.func,closeTimeoutMS:i.default.number,ariaHideApp:i.default.bool,shouldFocusAfterRender:i.default.bool,shouldCloseOnOverlayClick:i.default.bool,shouldReturnFocusAfterClose:i.default.bool,parentSelector:i.default.func,aria:i.default.object,data:i.default.object,role:i.default.string,contentLabel:i.default.string,shouldCloseOnEsc:i.default.bool,overlayRef:i.default.func,contentRef:i.default.func},C.defaultProps={isOpen:!1,portalClassName:b,bodyOpenClassName:v,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,parentSelector:function(){return document.body}},C.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}},(0,p.polyfill)(C),t.default=C},345:function(e,t,o){"use strict";o(7),o(8),o(4),o(12),o(58),o(80),o(48),o(36),o(37),o(19),o(31),o(35),Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),s=o(3),l=h(s),i=h(o(81)),u=m(o(346)),c=h(o(347)),d=m(o(342)),f=m(o(350)),p=h(o(339));function m(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t}function h(e){return e&&e.__esModule?e:{default:e}}var b={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},v=9,y=27,O=0,g=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.setOverlayRef=function(e){o.overlay=e,o.props.overlayRef&&o.props.overlayRef(e)},o.setContentRef=function(e){o.content=e,o.props.contentRef&&o.props.contentRef(e)},o.afterClose=function(){var e=o.props,t=e.appElement,n=e.ariaHideApp,r=e.htmlOpenClassName,a=e.bodyOpenClassName;a&&f.remove(document.body,a),r&&f.remove(document.getElementsByTagName("html")[0],r),n&&O>0&&0===(O-=1)&&d.show(t),o.props.shouldFocusAfterRender&&(o.props.shouldReturnFocusAfterClose?(u.returnFocus(),u.teardownScopedFocus()):u.popWithoutFocus()),o.props.onAfterClose&&o.props.onAfterClose()},o.open=function(){o.beforeOpen(),o.state.afterOpen&&o.state.beforeClose?(clearTimeout(o.closeTimer),o.setState({beforeClose:!1})):(o.props.shouldFocusAfterRender&&(u.setupScopedFocus(o.node),u.markForFocusLater()),o.setState({isOpen:!0},(function(){o.setState({afterOpen:!0}),o.props.isOpen&&o.props.onAfterOpen&&o.props.onAfterOpen()})))},o.close=function(){o.props.closeTimeoutMS>0?o.closeWithTimeout():o.closeWithoutTimeout()},o.focusContent=function(){return o.content&&!o.contentHasFocus()&&o.content.focus()},o.closeWithTimeout=function(){var e=Date.now()+o.props.closeTimeoutMS;o.setState({beforeClose:!0,closesAt:e},(function(){o.closeTimer=setTimeout(o.closeWithoutTimeout,o.state.closesAt-Date.now())}))},o.closeWithoutTimeout=function(){o.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},o.afterClose)},o.handleKeyDown=function(e){e.keyCode===v&&(0,c.default)(o.content,e),o.props.shouldCloseOnEsc&&e.keyCode===y&&(e.stopPropagation(),o.requestClose(e))},o.handleOverlayOnClick=function(e){null===o.shouldClose&&(o.shouldClose=!0),o.shouldClose&&o.props.shouldCloseOnOverlayClick&&(o.ownerHandlesClose()?o.requestClose(e):o.focusContent()),o.shouldClose=null},o.handleContentOnMouseUp=function(){o.shouldClose=!1},o.handleOverlayOnMouseDown=function(e){o.props.shouldCloseOnOverlayClick||e.target!=o.overlay||e.preventDefault()},o.handleContentOnClick=function(){o.shouldClose=!1},o.handleContentOnMouseDown=function(){o.shouldClose=!1},o.requestClose=function(e){return o.ownerHandlesClose()&&o.props.onRequestClose(e)},o.ownerHandlesClose=function(){return o.props.onRequestClose},o.shouldBeClosed=function(){return!o.state.isOpen&&!o.state.beforeClose},o.contentHasFocus=function(){return document.activeElement===o.content||o.content.contains(document.activeElement)},o.buildClassName=function(e,t){var n="object"===(void 0===t?"undefined":r(t))?t:{base:b[e],afterOpen:b[e]+"--after-open",beforeClose:b[e]+"--before-close"},a=n.base;return o.state.afterOpen&&(a=a+" "+n.afterOpen),o.state.beforeClose&&(a=a+" "+n.beforeClose),"string"==typeof t&&t?a+" "+t:a},o.attributesFromObject=function(e,t){return Object.keys(t).reduce((function(o,n){return o[e+"-"+n]=t[n],o}),{})},o.state={afterOpen:!1,beforeClose:!1},o.shouldClose=null,o.moveFromContentToOverlay=null,o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(e,t){this.props.isOpen&&!e.isOpen?this.open():!this.props.isOpen&&e.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!t.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer)}},{key:"beforeOpen",value:function(){var e=this.props,t=e.appElement,o=e.ariaHideApp,n=e.htmlOpenClassName,r=e.bodyOpenClassName;r&&f.add(document.body,r),n&&f.add(document.getElementsByTagName("html")[0],n),o&&(O+=1,d.hide(t))}},{key:"render",value:function(){var e=this.props,t=e.id,o=e.className,r=e.overlayClassName,a=e.defaultStyles,s=o?{}:a.content,i=r?{}:a.overlay;return this.shouldBeClosed()?null:l.default.createElement("div",{ref:this.setOverlayRef,className:this.buildClassName("overlay",r),style:n({},i,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},l.default.createElement("div",n({id:t,ref:this.setContentRef,style:n({},s,this.props.style.content),className:this.buildClassName("content",o),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",this.props.aria||{}),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),this.props.children))}}]),t}(s.Component);g.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},g.propTypes={isOpen:i.default.bool.isRequired,defaultStyles:i.default.shape({content:i.default.object,overlay:i.default.object}),style:i.default.shape({content:i.default.object,overlay:i.default.object}),className:i.default.oneOfType([i.default.string,i.default.object]),overlayClassName:i.default.oneOfType([i.default.string,i.default.object]),bodyOpenClassName:i.default.string,htmlOpenClassName:i.default.string,ariaHideApp:i.default.bool,appElement:i.default.instanceOf(p.default),onAfterOpen:i.default.func,onAfterClose:i.default.func,onRequestClose:i.default.func,closeTimeoutMS:i.default.number,shouldFocusAfterRender:i.default.bool,shouldCloseOnOverlayClick:i.default.bool,shouldReturnFocusAfterClose:i.default.bool,role:i.default.string,contentLabel:i.default.string,aria:i.default.object,data:i.default.object,children:i.default.node,shouldCloseOnEsc:i.default.bool,overlayRef:i.default.func,contentRef:i.default.func,id:i.default.string,testId:i.default.string},t.default=g,e.exports=t.default},346:function(e,t,o){"use strict";o(35),Object.defineProperty(t,"__esModule",{value:!0}),t.handleBlur=u,t.handleFocus=c,t.markForFocusLater=function(){s.push(document.activeElement)},t.returnFocus=function(){var e=null;try{return void(0!==s.length&&(e=s.pop()).focus())}catch(t){console.warn(["You tried to return focus to",e,"but it is not in the DOM anymore"].join(" "))}},t.popWithoutFocus=function(){s.length>0&&s.pop()},t.setupScopedFocus=function(e){l=e,window.addEventListener?(window.addEventListener("blur",u,!1),document.addEventListener("focus",c,!0)):(window.attachEvent("onBlur",u),document.attachEvent("onFocus",c))},t.teardownScopedFocus=function(){l=null,window.addEventListener?(window.removeEventListener("blur",u),document.removeEventListener("focus",c)):(window.detachEvent("onBlur",u),document.detachEvent("onFocus",c))};var n,r=o(341),a=(n=r)&&n.__esModule?n:{default:n};var s=[],l=null,i=!1;function u(){i=!0}function c(){if(i){if(i=!1,!l)return;setTimeout((function(){l.contains(document.activeElement)||((0,a.default)(l)[0]||l).focus()}),0)}}},347:function(e,t,o){"use strict";o(10),o(35),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var o=(0,a.default)(e);if(!o.length)return void t.preventDefault();var n,r=t.shiftKey,s=o[0],l=o[o.length-1];if(e===document.activeElement){if(!r)return;n=l}l!==document.activeElement||r||(n=s);s===document.activeElement&&r&&(n=l);if(n)return t.preventDefault(),void n.focus();var i=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);if(null==i||"Chrome"==i[1]||null!=/\biPod\b|\biPad\b/g.exec(navigator.userAgent))return;var u=o.indexOf(document.activeElement);u>-1&&(u+=r?-1:1);if(void 0===o[u])return t.preventDefault(),void(n=r?l:s).focus();t.preventDefault(),o[u].focus()};var n,r=o(341),a=(n=r)&&n.__esModule?n:{default:n};e.exports=t.default},348:function(e,t,o){"use strict";o(13);var n=function(){};e.exports=n},349:function(e,t,o){var n;!function(){"use strict";var r=!("undefined"==typeof window||!window.document||!window.document.createElement),a={canUseDOM:r,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:r&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:r&&!!window.screen};void 0===(n=function(){return a}.call(t,o,t,e))||(e.exports=n)}()},350:function(e,t,o){"use strict";o(30),o(16),o(35),Object.defineProperty(t,"__esModule",{value:!0}),t.dumpClassLists=function(){0};var n={},r={};t.add=function(e,t){return o=e.classList,a="html"==e.nodeName.toLowerCase()?n:r,void t.split(" ").forEach((function(e){!function(e,t){e[t]||(e[t]=0),e[t]+=1}(a,e),o.add(e)}));var o,a},t.remove=function(e,t){return o=e.classList,a="html"==e.nodeName.toLowerCase()?n:r,void t.split(" ").forEach((function(e){!function(e,t){e[t]&&(e[t]-=1)}(a,e),0===a[e]&&o.remove(e)}));var o,a}}}]);
//# sourceMappingURL=component---src-templates-project-jsx-9dd5fdd8d858f284efd3.js.map