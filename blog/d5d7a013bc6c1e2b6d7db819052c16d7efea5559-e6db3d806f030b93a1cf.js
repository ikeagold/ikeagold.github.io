(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"2LRL":function(t,e,n){},"8ypT":function(t,e,n){},Bl7J:function(t,e,n){"use strict";var r=n("Wbzz"),o=n("N8DM"),i=n("q1tI"),a=n.n(i);n("kfiC");const u=t=>a.a.createElement("div",{className:"logo"},t.title);n("2LRL");const c=({theme:t,toggleTheme:e})=>a.a.createElement("div",{className:"toggler",title:("dark"===t?"Light":"Dark")+" mode"},a.a.createElement("input",{"aria-label":("dark"===t?"Light":"Dark")+" mode",checked:"dark"===t,id:"toggler",onChange:t=>e(!0===t.target.checked?"dark":"light"),type:"checkbox"}),a.a.createElement("label",{htmlFor:"toggler",tabIndex:"-1"},"dark"===t?"🌇":"🌃"));var l=n("p3AD");n("8ypT");e.a=({children:t,feedbackUrl:e,location:n,title:i})=>{let s=a.a.createElement(r.Link,{style:{boxShadow:"none",color:"inherit"},to:"/"},a.a.createElement(u,{title:i}));return s="/blog/"===n.pathname?a.a.createElement("h1",{style:{marginBottom:Object(l.a)(1.2)}},s):a.a.createElement("h3",{style:{marginBottom:Object(l.a)(.5)}},s),a.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(l.a)(24),padding:Object(l.a)(1.5)+" "+Object(l.a)(3/4)}},a.a.createElement("header",{style:{alignItems:"flex-start",display:"flex",justifyContent:"space-between"}},s,a.a.createElement(o.ThemeToggler,null,c)),a.a.createElement("main",null,t),a.a.createElement("footer",{style:{opacity:.8}},a.a.createElement("small",null,a.a.createElement("a",{href:e,rel:"noopener noreferrer",target:"_blank"},a.a.createElement("span",{"aria-label":"Feedback",role:"img"},"📝")," ","Give feedback"),a.a.createElement("div",null,"© ",(new Date).getFullYear(),", Built with"," ",a.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))))}},N8DM:function(t,e,n){"use strict";var r=n("TqRt");e.__esModule=!0;var o=r(n("QL1J"));e.ThemeToggler=o.default},QL1J:function(t,e,n){"use strict";var r=n("TqRt");e.__esModule=!0,e.default=void 0;var o=r(n("PJYZ")),i=r(n("VbXa")),a=r(n("lSNA")),u=r(n("q1tI")),c=r(n("17x9")),l=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return e=t.call.apply(t,[this].concat(r))||this,(0,a.default)((0,o.default)(e),"state",{theme:"undefined"!=typeof window?window.__theme:null}),e}(0,i.default)(e,t);var n=e.prototype;return n.componentDidMount=function(){var t=this;window.__onThemeChange=function(){t.setState({theme:window.__theme})}},n.toggleTheme=function(t){window.__setPreferredTheme(t)},n.render=function(){return u.default.createElement(this.props.children,{theme:this.state.theme,toggleTheme:this.toggleTheme})},e}(u.default.Component);l.propTypes={children:c.default.func.isRequired};var s=l;e.default=s},aZJH:function(t,e){function n(t){return!isNaN(parseFloat(t))&&isFinite(t)}t.exports=function(t,e,r){if(void 0===e&&(e=0),void 0===r&&(r=!1),"cool"===e?e=237:"slate"===e?e=122:"warm"===e&&(e=69),!n(e))throw new Error("Hue is not a number");if(!n(t))throw new Error("Lightness is not a number");t>100&&(t=100),t<0&&(t=0);var o=0;if(0!==e){o=19.92978+-.3651759*t+.001737214*Math.pow(t,2)}var i=0;return r?(i=t/100,t="100%,"):(i=(100-t)/100,t="0%,"),"hsla("+e+","+o+"%,"+t+i+")"}},cq81:function(t){t.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"RGB","description":"A personal blog, written by Artur Parkhisenko","social":{"twitter":"lifeasecond"}}}}}')},kfiC:function(t,e,n){},lSNA:function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},mBog:function(t,e,n){(function(e){n("pIFo"),n("Oyvg"),n("a1Th"),n("SRfc"),n("rGqo"),n("KKXr"),n("ioFf");var r,o,i=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(t){return e[t]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(t){r[t]=t})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var n,r,o=function(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}(t),c=1;c<arguments.length;c++){for(var l in n=Object(arguments[c]))a.call(n,l)&&(o[l]=n[l]);if(i){r=i(n);for(var s=0;s<r.length;s++)u.call(n,r[s])&&(o[r[s]]=n[r[s]])}}return o},l=function(t,e){e||(e=[0,""]),t=String(t);var n=parseFloat(t,10);return e[0]=n,e[1]=t.match(/[\d.\-\+]*\s*(.*)/)[1]||"",e},s=function(t){return l(t)[0]},f=function(t){return null==t&&(t=t),function(e,n,r,o){null==r&&(r=t),null==o&&(o=r);var i=l(e)[1];if(i===n)return e;var a=s(e);if("px"!==i)if("em"===i)a=s(e)*s(r);else if("rem"===i)a=s(e)*s(t);else{if("ex"!==i)return e;a=s(e)*s(r)*2}var u=a;if("px"!==n)if("em"===n)u=a/s(o);else if("rem"===n)u=a/s(t);else{if("ex"!==n)return e;u=a/s(o)/2}return parseFloat(u.toFixed(5))+n}},h=l,p=function(t){return h(t)[1]},d=function(t){return h(t)[0]},b={baseFontSize:"16px",baseLineHeight:1.5,rhythmUnit:"rem",defaultRhythmBorderWidth:"1px",defaultRhythmBorderStyle:"solid",roundToNearestHalfLine:!0,minLinePadding:"2px"},g=function(t,e){var n,r=f(e.baseFontSize),o=d(r(t,"px")),i=d(e.baseLineHeightInPx),a=d(r(e.minLinePadding,"px"));return(n=e.roundToNearestHalfLine?Math.ceil(2*o/i)/2:Math.ceil(o/i))*i-o<2*a&&(n+=e.roundToNearestHalfLine?.5:1),n},y=function(t){var e=f(t.baseFontSize);return function(n,r,o){null==n&&(n=1),null==r&&(r=t.baseFontSize),null==o&&(o=0);var i=n*d(t.baseLineHeightInPx)-o+"px",a=e(i,t.rhythmUnit,r);return"px"===p(a)&&(a=Math.floor(d(a))+p(a)),parseFloat(d(a).toFixed(5))+p(a)}},m=Object.prototype.toString;function v(t){return!isNaN(parseFloat(t))&&isFinite(t)}r=function(t){return"number"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Number]"==m.call(t)},o={"minor second":16/15,"major second":9/8,"minor third":1.2,"major third":4/3,"diminished fourth":Math.sqrt(2),"perfect fifth":1.5,"minor sixth":1.6,golden:1.61803398875,phi:1.61803398875,"major sixth":5/3,"minor seventh":16/9,"major seventh":15/8,octave:2,"major tenth":2.5,"major eleventh":8/3,"major twelfth":3,"double octave":4};var j=function(t,e,n){if(void 0===e&&(e=0),void 0===n&&(n=!1),"cool"===e?e=237:"slate"===e?e=122:"warm"===e&&(e=69),!v(e))throw new Error("Hue is not a number");if(!v(t))throw new Error("Lightness is not a number");t>100&&(t=100),t<0&&(t=0);var r=0;0!==e&&(r=19.92978+-.3651759*t+.001737214*Math.pow(t,2));var o=0;return n?(o=t/100,t="100%,"):(o=(100-t)/100,t="0%,"),"hsla("+e+","+r+"%,"+t+o+")"},_="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{};function w(t,e){return t(e={exports:{}},e.exports),e.exports}var O,S="object"==typeof _&&_&&_.Object===Object&&_,x="object"==typeof self&&self&&self.Object===Object&&self,F=S||x||Function("return this")(),z=F.Symbol,k=Object.prototype,L=k.hasOwnProperty,T=k.toString,E=z?z.toStringTag:void 0,A=Object.prototype.toString,P=z?z.toStringTag:void 0,B=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":P&&P in Object(t)?function(t){var e=L.call(t,E),n=t[E];try{t[E]=void 0;var r=!0}catch(t){}var o=T.call(t);return r&&(e?t[E]=n:delete t[E]),o}(t):function(t){return A.call(t)}(t)},M=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},W=function(t){if(!M(t))return!1;var e=B(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},N=F["__core-js_shared__"],H=(O=/[^.]+$/.exec(N&&N.keys&&N.keys.IE_PROTO||""))?"Symbol(src)_1."+O:"",C=Function.prototype.toString,R=function(t){if(null!=t){try{return C.call(t)}catch(t){}try{return t+""}catch(t){}}return""},I=/^\[object .+?Constructor\]$/,q=Function.prototype,D=Object.prototype,U=RegExp("^"+q.toString.call(D.hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),$=function(t){return!(!M(t)||function(t){return!!H&&H in t}(t))&&(W(t)?U:I).test(R(t))},J=function(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return $(n)?n:void 0},V=function(){try{var t=J(Object,"defineProperty");return t({},"",{}),t}catch(t){}}(),Z=function(t,e,n){"__proto__"==e&&V?V(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n},G=function(t,e){return t===e||t!=t&&e!=e},K=Object.prototype.hasOwnProperty,Y=function(t,e,n){var r=t[e];K.call(t,e)&&G(r,n)&&(void 0!==n||e in t)||Z(t,e,n)},Q=Array.isArray,X=function(t){return null!=t&&"object"==typeof t},tt=function(t){return"symbol"==typeof t||X(t)&&"[object Symbol]"==B(t)},et=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,nt=/^\w*$/,rt=function(t,e){if(Q(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!tt(t))||nt.test(t)||!et.test(t)||null!=e&&t in Object(e)},ot=J(Object,"create"),it=Object.prototype.hasOwnProperty,at=Object.prototype.hasOwnProperty;function ut(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}ut.prototype.clear=function(){this.__data__=ot?ot(null):{},this.size=0},ut.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},ut.prototype.get=function(t){var e=this.__data__;if(ot){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return it.call(e,t)?e[t]:void 0},ut.prototype.has=function(t){var e=this.__data__;return ot?void 0!==e[t]:at.call(e,t)},ut.prototype.set=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=ot&&void 0===e?"__lodash_hash_undefined__":e,this};var ct=ut,lt=function(t,e){for(var n=t.length;n--;)if(G(t[n][0],e))return n;return-1},st=Array.prototype.splice;function ft(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}ft.prototype.clear=function(){this.__data__=[],this.size=0},ft.prototype.delete=function(t){var e=this.__data__,n=lt(e,t);return!(n<0||(n==e.length-1?e.pop():st.call(e,n,1),--this.size,0))},ft.prototype.get=function(t){var e=this.__data__,n=lt(e,t);return n<0?void 0:e[n][1]},ft.prototype.has=function(t){return lt(this.__data__,t)>-1},ft.prototype.set=function(t,e){var n=this.__data__,r=lt(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};var ht=ft,pt=J(F,"Map"),dt=function(t,e){var n=t.__data__;return function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}(e)?n["string"==typeof e?"string":"hash"]:n.map};function bt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}bt.prototype.clear=function(){this.size=0,this.__data__={hash:new ct,map:new(pt||ht),string:new ct}},bt.prototype.delete=function(t){var e=dt(this,t).delete(t);return this.size-=e?1:0,e},bt.prototype.get=function(t){return dt(this,t).get(t)},bt.prototype.has=function(t){return dt(this,t).has(t)},bt.prototype.set=function(t,e){var n=dt(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};var gt=bt;function yt(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function n(){var r=arguments,o=e?e.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=t.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(yt.Cache||gt),n}yt.Cache=gt;var mt=yt,vt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,jt=/\\(\\)?/g,_t=function(t){var e=mt((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(vt,(function(t,n,r,o){e.push(r?o.replace(jt,"$1"):n||t)})),e}),(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}(),wt=z?z.prototype:void 0,Ot=wt?wt.toString:void 0,St=function t(e){if("string"==typeof e)return e;if(Q(e))return function(t,e){for(var n=-1,r=null==t?0:t.length,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o}(e,t)+"";if(tt(e))return Ot?Ot.call(e):"";var n=e+"";return"0"==n&&1/e==-1/0?"-0":n},xt=function(t,e){return Q(t)?t:rt(t,e)?[t]:_t(function(t){return null==t?"":St(t)}(t))},Ft=/^(?:0|[1-9]\d*)$/,zt=function(t,e){var n=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==n||"symbol"!=n&&Ft.test(t))&&t>-1&&t%1==0&&t<e},kt=function(t){if("string"==typeof t||tt(t))return t;var e=t+"";return"0"==e&&1/t==-1/0?"-0":e},Lt=function(t,e,n){return null==t?t:function(t,e,n,r){if(!M(t))return t;for(var o=-1,i=(e=xt(e,t)).length,a=i-1,u=t;null!=u&&++o<i;){var c=kt(e[o]),l=n;if(o!=a){var s=u[c];void 0===(l=r?r(s,c,u):void 0)&&(l=M(s)?s:zt(e[o+1])?[]:{})}Y(u,c,l),u=u[c]}return t}(t,e,n)},Tt=function(t,e){for(var n=-1,r=null==t?0:t.length;++n<r&&!1!==e(t[n],n,t););return t},Et=function(t,e,n){for(var r=-1,o=Object(t),i=n(t),a=i.length;a--;){var u=i[++r];if(!1===e(o[u],u,o))break}return t},At=function(t){return X(t)&&"[object Arguments]"==B(t)},Pt=Object.prototype,Bt=Pt.hasOwnProperty,Mt=Pt.propertyIsEnumerable,Wt=At(function(){return arguments}())?At:function(t){return X(t)&&Bt.call(t,"callee")&&!Mt.call(t,"callee")},Nt=function(){return!1},Ht=w((function(t,e){var n=e&&!e.nodeType&&e,r=n&&t&&!t.nodeType&&t,o=r&&r.exports===n?F.Buffer:void 0;t.exports=(o?o.isBuffer:void 0)||Nt})),Ct=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991},Rt={};Rt["[object Float32Array]"]=Rt["[object Float64Array]"]=Rt["[object Int8Array]"]=Rt["[object Int16Array]"]=Rt["[object Int32Array]"]=Rt["[object Uint8Array]"]=Rt["[object Uint8ClampedArray]"]=Rt["[object Uint16Array]"]=Rt["[object Uint32Array]"]=!0,Rt["[object Arguments]"]=Rt["[object Array]"]=Rt["[object ArrayBuffer]"]=Rt["[object Boolean]"]=Rt["[object DataView]"]=Rt["[object Date]"]=Rt["[object Error]"]=Rt["[object Function]"]=Rt["[object Map]"]=Rt["[object Number]"]=Rt["[object Object]"]=Rt["[object RegExp]"]=Rt["[object Set]"]=Rt["[object String]"]=Rt["[object WeakMap]"]=!1;var It=w((function(t,e){var n=e&&!e.nodeType&&e,r=n&&t&&!t.nodeType&&t,o=r&&r.exports===n&&S.process,i=function(){try{return r&&r.require&&r.require("util").types||o&&o.binding&&o.binding("util")}catch(t){}}();t.exports=i})),qt=It&&It.isTypedArray,Dt=qt?function(t){return function(e){return t(e)}}(qt):function(t){return X(t)&&Ct(t.length)&&!!Rt[B(t)]},Ut=Object.prototype.hasOwnProperty,$t=function(t,e){var n=Q(t),r=!n&&Wt(t),o=!n&&!r&&Ht(t),i=!n&&!r&&!o&&Dt(t),a=n||r||o||i,u=a?function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}(t.length,String):[],c=u.length;for(var l in t)!e&&!Ut.call(t,l)||a&&("length"==l||o&&("offset"==l||"parent"==l)||i&&("buffer"==l||"byteLength"==l||"byteOffset"==l)||zt(l,c))||u.push(l);return u},Jt=Object.prototype,Vt=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||Jt)},Zt=function(t,e){return function(n){return t(e(n))}},Gt=Zt(Object.keys,Object),Kt=Object.prototype.hasOwnProperty,Yt=function(t){return null!=t&&Ct(t.length)&&!W(t)},Qt=function(t){return Yt(t)?$t(t):function(t){if(!Vt(t))return Gt(t);var e=[];for(var n in Object(t))Kt.call(t,n)&&"constructor"!=n&&e.push(n);return e}(t)},Xt=function(t,e){if(null==t)return t;if(!Yt(t))return function(t,e){return t&&Et(t,e,Qt)}(t,e);for(var n=t.length,r=-1,o=Object(t);++r<n&&!1!==e(o[r],r,o););return t},te=function(t){return t},ee=function(t,e){return(Q(t)?Tt:Xt)(t,function(t){return"function"==typeof t?t:te}(e))};function ne(t){var e=this.__data__=new ht(t);this.size=e.size}ne.prototype.clear=function(){this.__data__=new ht,this.size=0},ne.prototype.delete=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n},ne.prototype.get=function(t){return this.__data__.get(t)},ne.prototype.has=function(t){return this.__data__.has(t)},ne.prototype.set=function(t,e){var n=this.__data__;if(n instanceof ht){var r=n.__data__;if(!pt||r.length<199)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new gt(r)}return n.set(t,e),this.size=n.size,this};var re=ne,oe=function(t,e,n){(void 0===n||G(t[e],n))&&(void 0!==n||e in t)||Z(t,e,n)},ie=w((function(t,e){var n=e&&!e.nodeType&&e,r=n&&t&&!t.nodeType&&t,o=r&&r.exports===n?F.Buffer:void 0,i=o?o.allocUnsafe:void 0;t.exports=function(t,e){if(e)return t.slice();var n=t.length,r=i?i(n):new t.constructor(n);return t.copy(r),r}})),ae=F.Uint8Array,ue=function(t,e){var n=e?function(t){var e=new t.constructor(t.byteLength);return new ae(e).set(new ae(t)),e}(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)},ce=Object.create,le=function(){function t(){}return function(e){if(!M(e))return{};if(ce)return ce(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}(),se=Zt(Object.getPrototypeOf,Object),fe=Function.prototype,he=Object.prototype,pe=fe.toString,de=he.hasOwnProperty,be=pe.call(Object),ge=function(t,e){return"__proto__"==e?void 0:t[e]},ye=Object.prototype.hasOwnProperty,me=function(t){if(!M(t))return function(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e}(t);var e=Vt(t),n=[];for(var r in t)("constructor"!=r||!e&&ye.call(t,r))&&n.push(r);return n},ve=function(t){return Yt(t)?$t(t,!0):me(t)},je=function(t){return function(t,e,n,r){var o=!n;n||(n={});for(var i=-1,a=e.length;++i<a;){var u=e[i],c=r?r(n[u],t[u],u,n,t):void 0;void 0===c&&(c=t[u]),o?Z(n,u,c):Y(n,u,c)}return n}(t,ve(t))},_e=function(t,e,n,r,o,i,a){var u=ge(t,n),c=ge(e,n),l=a.get(c);if(l)oe(t,n,l);else{var s=i?i(u,c,n+"",t,e,a):void 0,f=void 0===s;if(f){var h=Q(c),p=!h&&Ht(c),d=!h&&!p&&Dt(c);s=c,h||p||d?Q(u)?s=u:function(t){return X(t)&&Yt(t)}(u)?s=function(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e}(u):p?(f=!1,s=ie(c,!0)):d?(f=!1,s=ue(c,!0)):s=[]:function(t){if(!X(t)||"[object Object]"!=B(t))return!1;var e=se(t);if(null===e)return!0;var n=de.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&pe.call(n)==be}(c)||Wt(c)?(s=u,Wt(u)?s=je(u):(!M(u)||r&&W(u))&&(s=function(t){return"function"!=typeof t.constructor||Vt(t)?{}:le(se(t))}(c))):f=!1}f&&(a.set(c,s),o(s,c,r,i,a),a.delete(c)),oe(t,n,s)}},we=function(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)},Oe=Math.max,Se=function(t){return function(){return t}},xe=Date.now,Fe=function(t){var e=0,n=0;return function(){var r=xe(),o=16-(r-n);if(n=r,o>0){if(++e>=800)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}(V?function(t,e){return V(t,"toString",{configurable:!0,enumerable:!1,value:Se(e),writable:!0})}:te),ze=function(t,e){return Fe(function(t,e,n){return e=Oe(void 0===e?t.length-1:e,0),function(){for(var r=arguments,o=-1,i=Oe(r.length-e,0),a=Array(i);++o<i;)a[o]=r[e+o];o=-1;for(var u=Array(e+1);++o<e;)u[o]=r[o];return u[e]=n(a),we(t,this,u)}}(t,e,te),t+"")},ke=function(t){return ze((function(e,n){var r=-1,o=n.length,i=o>1?n[o-1]:void 0,a=o>2?n[2]:void 0;for(i=t.length>3&&"function"==typeof i?(o--,i):void 0,a&&function(t,e,n){if(!M(n))return!1;var r=typeof e;return!!("number"==r?Yt(n)&&zt(e,n.length):"string"==r&&e in n)&&G(n[e],t)}(n[0],n[1],a)&&(i=o<3?void 0:i,o=1),e=Object(e);++r<o;){var u=n[r];u&&t(e,u,r)}return e}))}((function(t,e,n){!function t(e,n,r,o,i){e!==n&&Et(n,(function(a,u){if(M(a))i||(i=new re),_e(e,n,u,r,t,o,i);else{var c=o?o(ge(e,u),a,u+"",e,n,i):void 0;void 0===c&&(c=a),oe(e,u,c)}}),ve)}(t,e,n)})),Le=function(t,e,n,r){var o=-1,i=null==t?0:t.length;for(r&&i&&(n=t[++o]);++o<i;)n=e(n,t[o],o,t);return n};function Te(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new gt;++e<n;)this.add(t[e])}Te.prototype.add=Te.prototype.push=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this},Te.prototype.has=function(t){return this.__data__.has(t)};var Ee=Te,Ae=function(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(e(t[n],n,t))return!0;return!1},Pe=function(t,e){return t.has(e)},Be=function(t,e,n,r,o,i){var a=1&n,u=t.length,c=e.length;if(u!=c&&!(a&&c>u))return!1;var l=i.get(t);if(l&&i.get(e))return l==e;var s=-1,f=!0,h=2&n?new Ee:void 0;for(i.set(t,e),i.set(e,t);++s<u;){var p=t[s],d=e[s];if(r)var b=a?r(d,p,s,e,t,i):r(p,d,s,t,e,i);if(void 0!==b){if(b)continue;f=!1;break}if(h){if(!Ae(e,(function(t,e){if(!Pe(h,e)&&(p===t||o(p,t,n,r,i)))return h.push(e)}))){f=!1;break}}else if(p!==d&&!o(p,d,n,r,i)){f=!1;break}}return i.delete(t),i.delete(e),f},Me=function(t){var e=-1,n=Array(t.size);return t.forEach((function(t,r){n[++e]=[r,t]})),n},We=function(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n},Ne=z?z.prototype:void 0,He=Ne?Ne.valueOf:void 0,Ce=Object.prototype.propertyIsEnumerable,Re=Object.getOwnPropertySymbols,Ie=Re?function(t){return null==t?[]:(t=Object(t),function(t,e){for(var n=-1,r=null==t?0:t.length,o=0,i=[];++n<r;){var a=t[n];e(a,n,t)&&(i[o++]=a)}return i}(Re(t),(function(e){return Ce.call(t,e)})))}:function(){return[]},qe=function(t){return function(t,e,n){var r=e(t);return Q(t)?r:function(t,e){for(var n=-1,r=e.length,o=t.length;++n<r;)t[o+n]=e[n];return t}(r,n(t))}(t,Qt,Ie)},De=Object.prototype.hasOwnProperty,Ue=J(F,"DataView"),$e=J(F,"Promise"),Je=J(F,"Set"),Ve=J(F,"WeakMap"),Ze=R(Ue),Ge=R(pt),Ke=R($e),Ye=R(Je),Qe=R(Ve),Xe=B;(Ue&&"[object DataView]"!=Xe(new Ue(new ArrayBuffer(1)))||pt&&"[object Map]"!=Xe(new pt)||$e&&"[object Promise]"!=Xe($e.resolve())||Je&&"[object Set]"!=Xe(new Je)||Ve&&"[object WeakMap]"!=Xe(new Ve))&&(Xe=function(t){var e=B(t),n="[object Object]"==e?t.constructor:void 0,r=n?R(n):"";if(r)switch(r){case Ze:return"[object DataView]";case Ge:return"[object Map]";case Ke:return"[object Promise]";case Ye:return"[object Set]";case Qe:return"[object WeakMap]"}return e});var tn,en=Xe,nn="[object Arguments]",rn="[object Array]",on="[object Object]",an=Object.prototype.hasOwnProperty,un=function(t,e,n,r,o,i){var a=Q(t),u=Q(e),c=a?rn:en(t),l=u?rn:en(e),s=(c=c==nn?on:c)==on,f=(l=l==nn?on:l)==on,h=c==l;if(h&&Ht(t)){if(!Ht(e))return!1;a=!0,s=!1}if(h&&!s)return i||(i=new re),a||Dt(t)?Be(t,e,n,r,o,i):function(t,e,n,r,o,i,a){switch(n){case"[object DataView]":if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case"[object ArrayBuffer]":return!(t.byteLength!=e.byteLength||!i(new ae(t),new ae(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return G(+t,+e);case"[object Error]":return t.name==e.name&&t.message==e.message;case"[object RegExp]":case"[object String]":return t==e+"";case"[object Map]":var u=Me;case"[object Set]":if(u||(u=We),t.size!=e.size&&!(1&r))return!1;var c=a.get(t);if(c)return c==e;r|=2,a.set(t,e);var l=Be(u(t),u(e),r,o,i,a);return a.delete(t),l;case"[object Symbol]":if(He)return He.call(t)==He.call(e)}return!1}(t,e,c,n,r,o,i);if(!(1&n)){var p=s&&an.call(t,"__wrapped__"),d=f&&an.call(e,"__wrapped__");if(p||d){var b=p?t.value():t,g=d?e.value():e;return i||(i=new re),o(b,g,n,r,i)}}return!!h&&(i||(i=new re),function(t,e,n,r,o,i){var a=1&n,u=qe(t),c=u.length;if(c!=qe(e).length&&!a)return!1;for(var l=c;l--;){var s=u[l];if(!(a?s in e:De.call(e,s)))return!1}var f=i.get(t);if(f&&i.get(e))return f==e;var h=!0;i.set(t,e),i.set(e,t);for(var p=a;++l<c;){var d=t[s=u[l]],b=e[s];if(r)var g=a?r(b,d,s,e,t,i):r(d,b,s,t,e,i);if(!(void 0===g?d===b||o(d,b,n,r,i):g)){h=!1;break}p||(p="constructor"==s)}if(h&&!p){var y=t.constructor,m=e.constructor;y!=m&&"constructor"in t&&"constructor"in e&&!("function"==typeof y&&y instanceof y&&"function"==typeof m&&m instanceof m)&&(h=!1)}return i.delete(t),i.delete(e),h}(t,e,n,r,o,i))},cn=function t(e,n,r,o,i){return e===n||(null==e||null==n||!X(e)&&!X(n)?e!=e&&n!=n:un(e,n,r,o,t,i))},ln=function(t){return t==t&&!M(t)},sn=function(t,e){return function(n){return null!=n&&n[t]===e&&(void 0!==e||t in Object(n))}},fn=function(t){var e=function(t){for(var e=Qt(t),n=e.length;n--;){var r=e[n],o=t[r];e[n]=[r,o,ln(o)]}return e}(t);return 1==e.length&&e[0][2]?sn(e[0][0],e[0][1]):function(n){return n===t||function(t,e,n,r){var o=n.length,i=o,a=!r;if(null==t)return!i;for(t=Object(t);o--;){var u=n[o];if(a&&u[2]?u[1]!==t[u[0]]:!(u[0]in t))return!1}for(;++o<i;){var c=(u=n[o])[0],l=t[c],s=u[1];if(a&&u[2]){if(void 0===l&&!(c in t))return!1}else{var f=new re;if(r)var h=r(l,s,c,t,e,f);if(!(void 0===h?cn(s,l,3,r,f):h))return!1}}return!0}(n,t,e)}},hn=function(t,e){for(var n=0,r=(e=xt(e,t)).length;null!=t&&n<r;)t=t[kt(e[n++])];return n&&n==r?t:void 0},pn=function(t,e){return null!=t&&e in Object(t)},dn=function(t,e){return null!=t&&function(t,e,n){for(var r=-1,o=(e=xt(e,t)).length,i=!1;++r<o;){var a=kt(e[r]);if(!(i=null!=t&&n(t,a)))break;t=t[a]}return i||++r!=o?i:!!(o=null==t?0:t.length)&&Ct(o)&&zt(a,o)&&(Q(t)||Wt(t))}(t,e,pn)},bn=function(t,e){return rt(t)&&ln(e)?sn(kt(t),e):function(n){var r=function(t,e,n){var r=null==t?void 0:hn(t,e);return void 0===r?n:r}(n,t);return void 0===r&&r===e?dn(n,t):cn(e,r,3)}},gn=function(t){return rt(t)?function(t){return function(e){return null==e?void 0:e[t]}}(kt(t)):function(t){return function(e){return hn(e,t)}}(t)},yn=function(t){return"function"==typeof t?t:null==t?te:"object"==typeof t?Q(t)?bn(t[0],t[1]):fn(t):gn(t)},mn=function(t,e,n,r,o){return o(t,(function(t,o,i){n=r?(r=!1,t):e(n,t,o,i)})),n},vn=function(t,e,n){var r=Q(t)?Le:mn,o=arguments.length<3;return r(t,yn(e),n,o,Xt)},jn=function(t,e,n){var r;return void 0===t&&(t={}),r=Q(e)?e:[e],ee(r,(function(e){ee(n,(function(n,r){Lt(t,e+"."+r,n)}))})),t},_n=["inherit","default","serif","sans-serif","monospace","fantasy","cursive","-apple-system"],wn=function(t){return-1!==_n.indexOf(t)?t:"'"+t+"'"},On=(tn=w((function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default="html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block}audio:not([controls]){display:none;height:0}progress{vertical-align:baseline}[hidden],template{display:none}a{background-color:transparent;-webkit-text-decoration-skip:objects}a:active,a:hover{outline-width:0}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:inherit;font-weight:bolder}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}svg:not(:root){overflow:hidden}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}figure{margin:1em 40px}hr{box-sizing:content-box;height:0;overflow:visible}button,input,optgroup,select,textarea{font:inherit;margin:0}optgroup{font-weight:700}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-input-placeholder{color:inherit;opacity:.54}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}"})))&&tn.__esModule&&Object.prototype.hasOwnProperty.call(tn,"default")?tn.default:tn;t.exports=function(t){var e,n,i,a,u=c({},{baseFontSize:"16px",baseLineHeight:1.45,headerLineHeight:1.1,scaleRatio:2,googleFonts:[],headerFontFamily:["-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue","sans-serif"],bodyFontFamily:["georgia","serif"],headerColor:"inherit",bodyColor:"hsla(0,0%,0%,0.8)",headerWeight:"bold",bodyWeight:"normal",boldWeight:"bold",includeNormalize:!0,blockMarginBottom:1},t),l=(e=u,n=JSON.parse(JSON.stringify(b)),i=Object.assign({},n,e),a=f(i.baseFontSize),p(i.baseLineHeight)?(d(a(i.baseFontSize,"px")),i.baseLineHeightInPx=a(i.baseLineHeight,"px")):i.baseLineHeightInPx=d(i.baseFontSize)*i.baseLineHeight+"px",{rhythm:y(i),establishBaseline:function(){return f((t=i).baseFontSize),{fontSize:d(t.baseFontSize)/16*100+"%",lineHeight:t.baseLineHeight.toString()};var t},linesForFontSize:function(t){return g(t,i)},adjustFontSizeTo:function(t,e,n){return null==e&&(e="auto"),function(t,e,n,r){null==n&&(n=r.baseFontSize),"%"===p(t)&&(t=d(r.baseFontSize)*(d(t)/100)+"px");var o=f(r.baseFontSize);t=o(t,"px",n=o(n,"px"));var i=y(r);return"auto"===e&&(e=g(t,r)),{fontSize:o(t,r.rhythmUnit,n),lineHeight:i(e,n)}}(t,e,n,i)}});return l.scale=function(t){var e=parseInt(u.baseFontSize,10),n=function(t,e){var n;return null==t&&(t=0),null==e&&(e="golden"),n=r(e)?e:null!=o[e]?o[e]:o.golden,Math.pow(n,t)}(t,u.scaleRatio)*e+"px";return l.adjustFontSizeTo(n)},Object.assign({},{options:u},l,{createStyles:function(){return this.toString()},toJSON:function(){return function(t,e){var n={},r=t.establishBaseline();n=jn(n,"html",{font:r.fontSize+"/"+r.lineHeight+" "+e.bodyFontFamily.map(wn).join(","),boxSizing:"border-box",overflowY:"scroll"}),n=jn(n,["*","*:before","*:after"],{boxSizing:"inherit"}),n=jn(n,"body",{color:e.bodyColor,fontFamily:e.bodyFontFamily.map(wn).join(","),fontWeight:e.bodyWeight,wordWrap:"break-word",fontKerning:"normal",MozFontFeatureSettings:'"kern", "liga", "clig", "calt"',msFontFeatureSettings:'"kern", "liga", "clig", "calt"',WebkitFontFeatureSettings:'"kern", "liga", "clig", "calt"',fontFeatureSettings:'"kern", "liga", "clig", "calt"'}),n=jn(n,"img",{maxWidth:"100%"});var o;o=function(t){return"number"==typeof t||X(t)&&"[object Number]"==B(t)}(e.blockMarginBottom)?t.rhythm(e.blockMarginBottom):function(t){return"string"==typeof t||!Q(t)&&X(t)&&"[object String]"==B(t)}(e.blockMarginBottom)?e.blockMarginBottom:t.rhythm(1),n=jn(n,["h1","h2","h3","h4","h5","h6","hgroup","ul","ol","dl","dd","p","figure","pre","table","fieldset","blockquote","form","noscript","iframe","img","hr","address"],{marginLeft:0,marginRight:0,marginTop:0,paddingBottom:0,paddingLeft:0,paddingRight:0,paddingTop:0,marginBottom:o}),n=jn(n,"blockquote",{marginRight:t.rhythm(1),marginBottom:o,marginLeft:t.rhythm(1)}),n=jn(n,["b","strong","dt","th"],{fontWeight:e.boldWeight}),n=jn(n,"hr",{background:j(80),border:"none",height:"1px",marginBottom:"calc("+o+" - 1px)"}),n=jn(n,["ol","ul"],{listStylePosition:"outside",listStyleImage:"none",marginLeft:t.rhythm(1)}),n=jn(n,"li",{marginBottom:"calc("+o+" / 2)"}),n=jn(n,["ol li","ul li"],{paddingLeft:0}),n=jn(n,["li > ol","li > ul"],{marginLeft:t.rhythm(1),marginBottom:"calc("+o+" / 2)",marginTop:"calc("+o+" / 2)"}),n=jn(n,["blockquote *:last-child","li *:last-child","p *:last-child"],{marginBottom:0}),n=jn(n,["li > p"],{marginBottom:"calc("+o+" / 2)"}),n=jn(n,["code","kbd","pre","samp"],Object.assign({},t.adjustFontSizeTo("85%"))),(n=jn(n,["abbr","acronym"],{borderBottom:"1px dotted "+j(50),cursor:"help"}))["abbr[title]"]={borderBottom:"1px dotted "+j(50),cursor:"help",textDecoration:"none"},n=jn(n,["table"],Object.assign({},t.adjustFontSizeTo(e.baseFontSize),{borderCollapse:"collapse",width:"100%"})),n=jn(n,["thead"],{textAlign:"left"}),n=jn(n,["td,th"],{textAlign:"left",borderBottom:"1px solid "+j(88),fontFeatureSettings:'"tnum"',MozFontFeatureSettings:'"tnum"',msFontFeatureSettings:'"tnum"',WebkitFontFeatureSettings:'"tnum"',paddingLeft:t.rhythm(2/3),paddingRight:t.rhythm(2/3),paddingTop:t.rhythm(.5),paddingBottom:"calc("+t.rhythm(.5)+" - 1px)"}),n=jn(n,"th:first-child,td:first-child",{paddingLeft:0}),n=jn(n,"th:last-child,td:last-child",{paddingRight:0}),n=jn(n,["h1","h2","h3","h4","h5","h6"],{color:e.headerColor,fontFamily:e.headerFontFamily.map(wn).join(","),fontWeight:e.headerWeight,textRendering:"optimizeLegibility"});var i=t.scale(1),a=t.scale(.6),u=t.scale(.4),c=t.scale(0),l=t.scale(-.2),s=t.scale(-.3);return ee([i,a,u,c,l,s],(function(t,r){n=Lt(n,"h"+(r+1)+".fontSize",t.fontSize),n=Lt(n,"h"+(r+1)+".lineHeight",e.headerLineHeight)})),Q(e.plugins)&&(n=vn(e.plugins,(function(n,r){return ke(n,r(t,e,n))}),n)),e.overrideStyles&&W(e.overrideStyles)&&(n=ke(n,e.overrideStyles(t,e,n))),e.overrideThemeStyles&&W(e.overrideThemeStyles)&&(n=ke(n,e.overrideThemeStyles(t,e,n))),n}(l,u)},toString:function(){return function(t,e,n){var r=function t(e){return vn(e,(function(e,n,r){return e+=r+"{",ee(n,(function(n,r){if(M(n)){var o={};o[r]=n,e+=t(o)}else{var i=function(t,e){if("string"!=typeof t)throw new TypeError("Expected a string");return t.replace(/([a-z\d])([A-Z])/g,"$1"+(e=void 0===e?"_":e)+"$2").replace(/([A-Z]+)([A-Z][a-z\d]+)/g,"$1"+e+"$2").toLowerCase()}(r,"-")+":"+n+";";["Webkit","ms","Moz","O"].forEach((function(t){r.slice(0,t.length)===t&&(i="-"+i)})),e+=i}})),e+="}"}),"")}(n);return e.includeNormalize&&(r=""+On+r),r}(0,u,this.toJSON())},injectStyles:function(){if("undefined"!=typeof document)if(document.getElementById("typography.js"))document.getElementById("typography.js").innerHTML=this.toString();else{var t=document.createElement("style");t.id="typography.js",t.innerHTML=this.toString();var e=document.head;e.firstChild?e.insertBefore(t,e.firstChild):e.appendChild(t)}}})}}).call(this,n("yLpj"))},p3AD:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return l}));var r=n("mBog"),o=n.n(r),i=n("zW73"),a=n.n(i);let u;a.a.headerFontFamily[0]="Source Sans Pro",a.a.baseFontSize="18px",u=new o.a(a.a);const c=u.rhythm,l=u.scale},vrFN:function(t,e,n){"use strict";var r=n("cq81"),o=n("q1tI"),i=n.n(o),a=n("qhky");const u=({description:t,lang:e,meta:n,title:o})=>{const{site:u}=r.data,c=t||u.siteMetadata.description;return i.a.createElement(a.a,{htmlAttributes:{lang:e},title:o,titleTemplate:"%s | "+u.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:o},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:u.siteMetadata.social.twitter},{name:"twitter:title",content:o},{name:"twitter:description",content:c}].concat(n)})};u.defaultProps={lang:"en",meta:[],description:""},e.a=u},zW73:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=n("aZJH"),a=(r=i)&&r.__esModule?r:{default:r};var u={title:"US Web Design Standards",baseFontSize:"17px",baseLineHeight:1.53,scale:2.35,googleFonts:[{name:"Merriweather",styles:["700"]},{name:"Source Sans Pro",styles:["400","400i","700"]}],headerFontFamily:["Merriweather","serif"],bodyFontFamily:["Source Sans Pro","sans-serif"],bodyColor:"hsla(0,0%,0%,0.8)",headerWeight:700,bodyWeight:400,boldWeight:700,overrideStyles:function(t,e){var n=t.adjustFontSizeTo,r=t.scale,i=t.rhythm;return{h1:r(1),h2:r(.6),h3:r(.2),h4:r(0),h5:r(-1/8),h6:o({},r(-2/8),{fontFamily:e.bodyFontFamily.join(","),fontWeight:e.bodyWeight,textTransform:"uppercase"}),a:{color:"#0071bc"},"a:visited":{color:"#4c2c92"},blockquote:o({},r(1/4),{borderLeft:i(1/6)+" solid",borderColor:(0,a.default)(93),paddingTop:i(1/3),paddingBottom:i(1/3),paddingLeft:i(2/3),paddingRight:i(2/3)}),"blockquote > :last-child":{marginBottom:0},"blockquote cite":o({},n(e.baseFontSize),{color:(0,a.default)(54,204),fontWeight:e.bodyWeight,fontStyle:"normal"})}}};e.default=u}}]);
//# sourceMappingURL=d5d7a013bc6c1e2b6d7db819052c16d7efea5559-e6db3d806f030b93a1cf.js.map