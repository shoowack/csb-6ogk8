(this["webpackJsonpmario-rab-website"]=this["webpackJsonpmario-rab-website"]||[]).push([[10],{117:function(e,t,a){"use strict";var n=a(2),r=a(4),i=a(10),u=a.n(i),l=a(0),o=a.n(l),c=a(11),s=a(80),m=o.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.variant,l=e.size,m=e.active,p=e.className,f=e.block,d=e.type,v=e.as,h=Object(r.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),b=Object(c.a)(a,"btn"),y=u()(p,b,m&&"active",i&&b+"-"+i,f&&b+"-block",l&&b+"-"+l);if(h.href)return o.a.createElement(s.a,Object(n.a)({},h,{as:v,ref:t,className:u()(y,h.disabled&&"disabled")}));t&&(h.ref=t),d?h.type=d:v||(h.type="button");var g=v||"button";return o.a.createElement(g,Object(n.a)({},h,{className:y}))}));m.displayName="Button",m.defaultProps={variant:"primary",active:!1,disabled:!1},t.a=m},274:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(69),u=a(70),l=a(68),o=a(117),c=a(86),s=a(12),m=Object(s.b)((function(e){e.state.translations.t;return r.a.createElement(c.a,{hasNav:!0},r.a.createElement("section",{className:"content-section py-5"},r.a.createElement(i.a,null,r.a.createElement(u.a,null,r.a.createElement(l.a,{sm:6},r.a.createElement("h2",null,"Lorem ipsum"),r.a.createElement("p",null,"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam sed, praesentium eveniet natus alias, temporibus, voluptate laudantium obcaecati veritatis quibusdam rerum placeat optio exercitationem ad ipsam esse! Asperiores, commodi obcaecati."),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam."),r.a.createElement(o.a,null,r.a.createElement("i",{className:"fa fa-heart"})," Get Started!")),r.a.createElement(l.a,{sm:6},r.a.createElement("img",{src:"/_ostalo/dummies/content_img_01.jpg",alt:""}))))),r.a.createElement("section",{className:"content-section text-right py-5"},r.a.createElement(i.a,null,r.a.createElement(u.a,null,r.a.createElement(l.a,{sm:{size:5,offset:7}},r.a.createElement("h2",null,"Lorem ipsum dolor sit amet"),r.a.createElement("p",null,"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores laborum incidunt suscipit itaque provident, hic nostrum pariatur ut reprehenderit alias? Perferendis doloremque nulla debitis cupiditate temporibus corporis sapiente dignissimos cum?"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus."),r.a.createElement(o.a,null,r.a.createElement("i",{className:"fa fa-heart"})," Get Started!"))))))}));t.default=m},75:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=c(a(0)),i=a(19),u=c(a(1)),l=a(76),o=c(l);function c(e){return e&&e.__esModule?e:{default:e}}var s=function(e){var t=e.location,a=e.mappedRoutes,u=e.WrapperComponent,c=e.rootName,s=t.pathname;(0,l.isDefined)(c)&&(a["/"]=function(e,t){return"function"===typeof c?c(s,t):c});var m=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=[{name:(0,l.isDefined)(t)?"string"===typeof t?t:"/":"",path:"/"}];return"/"===e||e.split("/").reduce((function(e,t){var n=e+"/"+t;return a.push({name:t,path:n}),n})),a}(s);return r.default.createElement(u,null,m.map((function(t,u){return r.default.createElement(i.Route,{key:u,path:t.path,render:function(i){return r.default.createElement(o.default,n({parentProps:e,mappedRoutes:a,name:t.name},i))}})})))};s.propTypes={location:u.default.shape({}).isRequired},t.default=s},76:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isDefined=void 0;var n=u(a(0)),r=a(19),i=u(a(1));function u(e){return e&&e.__esModule?e:{default:e}}function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var o=t.isDefined=function(e){return void 0!==e&&null!==e&&!1!==e&&String(e).length>0},c=function(e){var t=e.match,a=e.name,i=e.mappedRoutes,u=e.parentProps,c=u.ActiveLinkComponent,s=u.LinkComponent,m=u.routeMatcherRegex,p=/:[^\s/]+/g,f=function(e,t){var a=t.match(p);if(!a)return null;var n=new RegExp("^"+t.replace(p,m||"([\\w-]+)")+"$"),r=e.match(n);return r?a.reduce((function(e,t,a,n){var i,u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:r[a+1]||null;return Object.assign(e,(l(i={},t,u),l(i,t.substring(1),u),i))}),{}):null},d=function(e,t){var a="",n=Object.keys(t).sort((function(e,t){var a=(e.match(p)||[]).length,n=(t.match(p)||[]).length;switch(!0){case a===n:return e.length>t.length?1:-1;default:return a<n?1:-1}})),r=!0,i=!1,u=void 0;try{for(var l,c=n.filter((function(e){return t.hasOwnProperty(e)}))[Symbol.iterator]();!(r=(l=c.next()).done);r=!0){var s=l.value,m=t[s];if(-1!==s.indexOf(":"))!function(){var t=f(e,s);if(t)switch(!0){case!o(m):a=null;break;case m instanceof Function:a=m(e,t);break;default:a=Object.keys(t).reduce((function(e,a){return e.replace(a,t[a])}),m)}}();else if(s===e)switch(!0){case!o(m):a=null;break;case m instanceof Function:a=m(e,null);break;default:a=m}}}catch(d){i=!0,u=d}finally{try{!r&&c.return&&c.return()}finally{if(i)throw u}}return a}(t.url,i);return null!==d&&(d=d||a),o(d)?t.isExact?n.default.createElement(c,null,d):n.default.createElement(s,null,n.default.createElement(r.Link,{to:t.url||""},d)):null};c.propTypes={match:i.default.shape({}).isRequired,name:i.default.string.isRequired,mappedRoutes:i.default.shape({}).isRequired,parentProps:i.default.shape({}).isRequired},t.default=c},80:function(e,t,a){"use strict";var n=a(2),r=a(4),i=a(0),u=a.n(i),l=a(82);function o(e){return!e||"#"===e.trim()}var c=u.a.forwardRef((function(e,t){var a=e.as,i=void 0===a?"a":a,c=e.disabled,s=e.onKeyDown,m=Object(r.a)(e,["as","disabled","onKeyDown"]),p=function(e){var t=m.href,a=m.onClick;(c||o(t))&&e.preventDefault(),c?e.stopPropagation():a&&a(e)};return o(m.href)&&(m.role=m.role||"button",m.href=m.href||"#"),c&&(m.tabIndex=-1,m["aria-disabled"]=!0),u.a.createElement(i,Object(n.a)({ref:t},m,{onClick:p,onKeyDown:Object(l.a)((function(e){" "===e.key&&(e.preventDefault(),p(e))}),s)}))}));c.displayName="SafeAnchor",t.a=c},82:function(e,t,a){"use strict";t.a=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!==typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];e.apply(this,n),t.apply(this,n)}}),null)}},84:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=o(a(0)),i=a(19),u=o(a(1)),l=o(a(75));function o(e){return e&&e.__esModule?e:{default:e}}var c=function(e){return r.default.createElement(i.Route,{path:"/:path",render:function(t){return r.default.createElement(l.default,n({mappedRoutes:e.mappedRoutes,WrapperComponent:e.WrapperComponent,ActiveLinkComponent:e.ActiveLinkComponent,LinkComponent:e.LinkComponent,rootName:e.rootName,routeMatcherRegex:e.routeMatcherRegex},t))}})};c.defaultProps={WrapperComponent:function(e){return r.default.createElement("ol",{className:"breadcrumb"},e.children)},ActiveLinkComponent:function(e){return r.default.createElement("li",{className:"breadcrumb-item active"},e.children)},LinkComponent:function(e){return r.default.createElement("li",{className:"breadcrumb-item"},e.children)},rootName:""},c.propTypes={mappedRoutes:u.default.shape({}).isRequired,WrapperComponent:u.default.func,ActiveLinkComponent:u.default.func,LinkComponent:u.default.func,rootName:u.default.oneOfType([u.default.string,u.default.func]),routeMatcherRegex:u.default.string},t.default=c}}]);
//# sourceMappingURL=10.a9d54857.chunk.js.map