(self.webpackChunkrgb=self.webpackChunkrgb||[]).push([[159],{8797:function(e,u,t){var f="[object Symbol]",n=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,r=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,o="\\u2700-\\u27bf",a="a-z\\xdf-\\xf6\\xf8-\\xff",l="A-Z\\xc0-\\xd6\\xd8-\\xde",i="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",c="['’]",d="["+i+"]",x="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",s="\\d+",b="[\\u2700-\\u27bf]",g="["+a+"]",p="[^\\ud800-\\udfff"+i+s+o+a+l+"]",E="(?:\\ud83c[\\udde6-\\uddff]){2}",j="[\\ud800-\\udbff][\\udc00-\\udfff]",m="["+l+"]",A="(?:"+g+"|"+p+")",v="(?:"+m+"|"+p+")",y="(?:['’](?:d|ll|m|re|s|t|ve))?",O="(?:['’](?:D|LL|M|RE|S|T|VE))?",h="(?:[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]|\\ud83c[\\udffb-\\udfff])?",I="[\\ufe0e\\ufe0f]?",k=I+h+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",E,j].join("|")+")"+I+h+")*"),U="(?:"+[b,E,j].join("|")+")"+k,z=RegExp(c,"g"),C=RegExp(x,"g"),L=RegExp([m+"?"+g+"+"+y+"(?="+[d,m,"$"].join("|")+")",v+"+"+O+"(?="+[d,m+A,"$"].join("|")+")",m+"?"+A+"+"+y,m+"+"+O,s,U].join("|"),"g"),S=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Z="object"==typeof t.g&&t.g&&t.g.Object===Object&&t.g,R="object"==typeof self&&self&&self.Object===Object&&self,T=Z||R||Function("return this")();var w,N=(w={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"ss"},function(e){return null==w?void 0:w[e]});var D=Object.prototype.toString,G=T.Symbol,V=G?G.prototype:void 0,M=V?V.toString:void 0;function Y(e){if("string"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&D.call(e)==f}(e))return M?M.call(e):"";var u=e+"";return"0"==u&&1/e==-Infinity?"-0":u}function $(e){return null==e?"":Y(e)}var H,J=(H=function(e,u,t){return e+(t?"-":"")+u.toLowerCase()},function(e){return function(e,u,t,f){var n=-1,r=e?e.length:0;for(f&&r&&(t=e[++n]);++n<r;)t=u(t,e[n],n,e);return t}(function(e,u,t){return e=$(e),void 0===(u=t?void 0:u)?function(e){return S.test(e)}(e)?function(e){return e.match(L)||[]}(e):function(e){return e.match(n)||[]}(e):e.match(u)||[]}(function(e){return(e=$(e))&&e.replace(r,N).replace(C,"")}(e).replace(z,"")),H,"")});e.exports=J},1973:function(e,u,t){"use strict";t.r(u);var f=t(5444),n=t(8797),r=t.n(n),o=t(7294),a=t(5414);u.default=e=>{let{data:{allMarkdownRemark:{group:u},site:{siteMetadata:{title:t}}}}=e;return o.createElement("div",null,o.createElement(a.q,{title:t}),o.createElement("div",null,o.createElement("h1",null,"Tags"),o.createElement("ul",null,u.map((e=>o.createElement("li",{key:e.fieldValue},o.createElement(f.Link,{to:`/tags/${r()(e.fieldValue)}/`},e.fieldValue," (",e.totalCount,")")))))))}}}]);
//# sourceMappingURL=component---src-pages-tags-js-59db98cde7dd0677aa7d.js.map