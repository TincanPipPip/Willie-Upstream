!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=95)}([function(t,e){var n=Array.isArray;t.exports=n},function(t,e,n){var r=n(0),o=n(29),i=n(34),a=n(61);t.exports=function(t,e){return r(t)?t:o(t,e)?[t]:i(a(t))}},function(t,e,n){var r=n(9).Symbol;t.exports=r},function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},function(t,e,n){var r=n(10)(Object,"create");t.exports=r},function(t,e,n){var r=n(16);t.exports=function(t,e){for(var n=t.length;n--;)if(r(t[n][0],e))return n;return-1}},function(t,e,n){var r=n(57);t.exports=function(t,e){var n=t.__data__;return r(e)?n["string"==typeof e?"string":"hash"]:n.map}},function(t,e,n){var r=n(8),o=n(3);t.exports=function(t){return"symbol"==typeof t||o(t)&&"[object Symbol]"==r(t)}},function(t,e,n){var r=n(2),o=n(32),i=n(33),a=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":a&&a in Object(t)?o(t):i(t)}},function(t,e,n){var r=n(30),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();t.exports=i},function(t,e,n){var r=n(40),o=n(44);t.exports=function(t,e){var n=o(t,e);return r(n)?n:void 0}},function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},function(t,e){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o}},function(t,e,n){var r=n(7);t.exports=function(t){if("string"==typeof t||r(t))return t;var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}},function(t,e,n){var r=n(37),o=n(56),i=n(58),a=n(59),c=n(60);function u(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}u.prototype.clear=r,u.prototype.delete=o,u.prototype.get=i,u.prototype.has=a,u.prototype.set=c,t.exports=u},function(t,e,n){var r=n(8),o=n(11);t.exports=function(t){if(!o(t))return!1;var e=r(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}},function(t,e){t.exports=function(t,e){return t===e||t!=t&&e!=e}},function(t,e,n){var r=n(10),o=function(){try{var t=r(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();t.exports=o},function(t,e){var n=/^(?:0|[1-9]\d*)$/;t.exports=function(t,e){var r=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==r||"symbol"!=r&&n.test(t))&&t>-1&&t%1==0&&t<e}},function(t,e,n){var r=n(69),o=n(3),i=Object.prototype,a=i.hasOwnProperty,c=i.propertyIsEnumerable,u=r(function(){return arguments}())?r:function(t){return o(t)&&a.call(t,"callee")&&!c.call(t,"callee")};t.exports=u},function(t,e){t.exports=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}},function(t,e,n){var r=n(75),o=Math.max;t.exports=function(t,e,n){return e=o(void 0===e?t.length-1:e,0),function(){for(var i=arguments,a=-1,c=o(i.length-e,0),u=Array(c);++a<c;)u[a]=i[e+a];a=-1;for(var s=Array(e+1);++a<e;)s[a]=i[a];return s[e]=n(u),r(t,this,s)}}},function(t,e,n){var r=n(76),o=n(78)(r);t.exports=o},function(t,e){t.exports=function(t){return t}},function(t,e,n){var r=n(26),o=n(70)((function(t,e){return null==t?{}:r(t,e)}));t.exports=o},function(t,e,n){var r=n(12),o=n(79),i=n(91),a=n(92),c=i((function(t){var e=r(t,a);return e.length&&e[0]===t[0]?o(e):[]}));t.exports=c},function(t,e,n){var r=n(27),o=n(66);t.exports=function(t,e){return r(t,e,(function(e,n){return o(t,n)}))}},function(t,e,n){var r=n(28),o=n(63),i=n(1);t.exports=function(t,e,n){for(var a=-1,c=e.length,u={};++a<c;){var s=e[a],l=r(t,s);n(l,s)&&o(u,i(s,t),l)}return u}},function(t,e,n){var r=n(1),o=n(13);t.exports=function(t,e){for(var n=0,i=(e=r(e,t)).length;null!=t&&n<i;)t=t[o(e[n++])];return n&&n==i?t:void 0}},function(t,e,n){var r=n(0),o=n(7),i=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,a=/^\w*$/;t.exports=function(t,e){if(r(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!o(t))||(a.test(t)||!i.test(t)||null!=e&&t in Object(e))}},function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n(31))},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){var r=n(2),o=Object.prototype,i=o.hasOwnProperty,a=o.toString,c=r?r.toStringTag:void 0;t.exports=function(t){var e=i.call(t,c),n=t[c];try{t[c]=void 0;var r=!0}catch(t){}var o=a.call(t);return r&&(e?t[c]=n:delete t[c]),o}},function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},function(t,e,n){var r=n(35),o=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,i=/\\(\\)?/g,a=r((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(o,(function(t,n,r,o){e.push(r?o.replace(i,"$1"):n||t)})),e}));t.exports=a},function(t,e,n){var r=n(36);t.exports=function(t){var e=r(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}},function(t,e,n){var r=n(14);function o(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=e?e.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=t.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(o.Cache||r),n}o.Cache=r,t.exports=o},function(t,e,n){var r=n(38),o=n(49),i=n(55);t.exports=function(){this.size=0,this.__data__={hash:new r,map:new(i||o),string:new r}}},function(t,e,n){var r=n(39),o=n(45),i=n(46),a=n(47),c=n(48);function u(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}u.prototype.clear=r,u.prototype.delete=o,u.prototype.get=i,u.prototype.has=a,u.prototype.set=c,t.exports=u},function(t,e,n){var r=n(4);t.exports=function(){this.__data__=r?r(null):{},this.size=0}},function(t,e,n){var r=n(15),o=n(41),i=n(11),a=n(43),c=/^\[object .+?Constructor\]$/,u=Function.prototype,s=Object.prototype,l=u.toString,p=s.hasOwnProperty,f=RegExp("^"+l.call(p).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!i(t)||o(t))&&(r(t)?f:c).test(a(t))}},function(t,e,n){var r,o=n(42),i=(r=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"";t.exports=function(t){return!!i&&i in t}},function(t,e,n){var r=n(9)["__core-js_shared__"];t.exports=r},function(t,e){var n=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return n.call(t)}catch(t){}try{return t+""}catch(t){}}return""}},function(t,e){t.exports=function(t,e){return null==t?void 0:t[e]}},function(t,e){t.exports=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}},function(t,e,n){var r=n(4),o=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;if(r){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return o.call(e,t)?e[t]:void 0}},function(t,e,n){var r=n(4),o=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;return r?void 0!==e[t]:o.call(e,t)}},function(t,e,n){var r=n(4);t.exports=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=r&&void 0===e?"__lodash_hash_undefined__":e,this}},function(t,e,n){var r=n(50),o=n(51),i=n(52),a=n(53),c=n(54);function u(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}u.prototype.clear=r,u.prototype.delete=o,u.prototype.get=i,u.prototype.has=a,u.prototype.set=c,t.exports=u},function(t,e){t.exports=function(){this.__data__=[],this.size=0}},function(t,e,n){var r=n(5),o=Array.prototype.splice;t.exports=function(t){var e=this.__data__,n=r(e,t);return!(n<0)&&(n==e.length-1?e.pop():o.call(e,n,1),--this.size,!0)}},function(t,e,n){var r=n(5);t.exports=function(t){var e=this.__data__,n=r(e,t);return n<0?void 0:e[n][1]}},function(t,e,n){var r=n(5);t.exports=function(t){return r(this.__data__,t)>-1}},function(t,e,n){var r=n(5);t.exports=function(t,e){var n=this.__data__,o=r(n,t);return o<0?(++this.size,n.push([t,e])):n[o][1]=e,this}},function(t,e,n){var r=n(10)(n(9),"Map");t.exports=r},function(t,e,n){var r=n(6);t.exports=function(t){var e=r(this,t).delete(t);return this.size-=e?1:0,e}},function(t,e){t.exports=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}},function(t,e,n){var r=n(6);t.exports=function(t){return r(this,t).get(t)}},function(t,e,n){var r=n(6);t.exports=function(t){return r(this,t).has(t)}},function(t,e,n){var r=n(6);t.exports=function(t,e){var n=r(this,t),o=n.size;return n.set(t,e),this.size+=n.size==o?0:1,this}},function(t,e,n){var r=n(62);t.exports=function(t){return null==t?"":r(t)}},function(t,e,n){var r=n(2),o=n(12),i=n(0),a=n(7),c=r?r.prototype:void 0,u=c?c.toString:void 0;t.exports=function t(e){if("string"==typeof e)return e;if(i(e))return o(e,t)+"";if(a(e))return u?u.call(e):"";var n=e+"";return"0"==n&&1/e==-1/0?"-0":n}},function(t,e,n){var r=n(64),o=n(1),i=n(18),a=n(11),c=n(13);t.exports=function(t,e,n,u){if(!a(t))return t;for(var s=-1,l=(e=o(e,t)).length,p=l-1,f=t;null!=f&&++s<l;){var h=c(e[s]),v=n;if(s!=p){var d=f[h];void 0===(v=u?u(d,h,f):void 0)&&(v=a(d)?d:i(e[s+1])?[]:{})}r(f,h,v),f=f[h]}return t}},function(t,e,n){var r=n(65),o=n(16),i=Object.prototype.hasOwnProperty;t.exports=function(t,e,n){var a=t[e];i.call(t,e)&&o(a,n)&&(void 0!==n||e in t)||r(t,e,n)}},function(t,e,n){var r=n(17);t.exports=function(t,e,n){"__proto__"==e&&r?r(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}},function(t,e,n){var r=n(67),o=n(68);t.exports=function(t,e){return null!=t&&o(t,e,r)}},function(t,e){t.exports=function(t,e){return null!=t&&e in Object(t)}},function(t,e,n){var r=n(1),o=n(19),i=n(0),a=n(18),c=n(20),u=n(13);t.exports=function(t,e,n){for(var s=-1,l=(e=r(e,t)).length,p=!1;++s<l;){var f=u(e[s]);if(!(p=null!=t&&n(t,f)))break;t=t[f]}return p||++s!=l?p:!!(l=null==t?0:t.length)&&c(l)&&a(f,l)&&(i(t)||o(t))}},function(t,e,n){var r=n(8),o=n(3);t.exports=function(t){return o(t)&&"[object Arguments]"==r(t)}},function(t,e,n){var r=n(71),o=n(21),i=n(22);t.exports=function(t){return i(o(t,void 0,r),t+"")}},function(t,e,n){var r=n(72);t.exports=function(t){return(null==t?0:t.length)?r(t,1):[]}},function(t,e,n){var r=n(73),o=n(74);t.exports=function t(e,n,i,a,c){var u=-1,s=e.length;for(i||(i=o),c||(c=[]);++u<s;){var l=e[u];n>0&&i(l)?n>1?t(l,n-1,i,a,c):r(c,l):a||(c[c.length]=l)}return c}},function(t,e){t.exports=function(t,e){for(var n=-1,r=e.length,o=t.length;++n<r;)t[o+n]=e[n];return t}},function(t,e,n){var r=n(2),o=n(19),i=n(0),a=r?r.isConcatSpreadable:void 0;t.exports=function(t){return i(t)||o(t)||!!(a&&t&&t[a])}},function(t,e){t.exports=function(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}},function(t,e,n){var r=n(77),o=n(17),i=n(23),a=o?function(t,e){return o(t,"toString",{configurable:!0,enumerable:!1,value:r(e),writable:!0})}:i;t.exports=a},function(t,e){t.exports=function(t){return function(){return t}}},function(t,e){var n=Date.now;t.exports=function(t){var e=0,r=0;return function(){var o=n(),i=16-(o-r);if(r=o,i>0){if(++e>=800)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}},function(t,e,n){var r=n(80),o=n(83),i=n(88),a=n(12),c=n(89),u=n(90),s=Math.min;t.exports=function(t,e,n){for(var l=n?i:o,p=t[0].length,f=t.length,h=f,v=Array(f),d=1/0,g=[];h--;){var m=t[h];h&&e&&(m=a(m,c(e))),d=s(m.length,d),v[h]=!n&&(e||p>=120&&m.length>=120)?new r(h&&m):void 0}m=t[0];var y=-1,b=v[0];t:for(;++y<p&&g.length<d;){var x=m[y],_=e?e(x):x;if(x=n||0!==x?x:0,!(b?u(b,_):l(g,_,n))){for(h=f;--h;){var k=v[h];if(!(k?u(k,_):l(t[h],_,n)))continue t}b&&b.push(_),g.push(x)}}return g}},function(t,e,n){var r=n(14),o=n(81),i=n(82);function a(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new r;++e<n;)this.add(t[e])}a.prototype.add=a.prototype.push=o,a.prototype.has=i,t.exports=a},function(t,e){t.exports=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this}},function(t,e){t.exports=function(t){return this.__data__.has(t)}},function(t,e,n){var r=n(84);t.exports=function(t,e){return!!(null==t?0:t.length)&&r(t,e,0)>-1}},function(t,e,n){var r=n(85),o=n(86),i=n(87);t.exports=function(t,e,n){return e==e?i(t,e,n):r(t,o,n)}},function(t,e){t.exports=function(t,e,n,r){for(var o=t.length,i=n+(r?1:-1);r?i--:++i<o;)if(e(t[i],i,t))return i;return-1}},function(t,e){t.exports=function(t){return t!=t}},function(t,e){t.exports=function(t,e,n){for(var r=n-1,o=t.length;++r<o;)if(t[r]===e)return r;return-1}},function(t,e){t.exports=function(t,e,n){for(var r=-1,o=null==t?0:t.length;++r<o;)if(n(e,t[r]))return!0;return!1}},function(t,e){t.exports=function(t){return function(e){return t(e)}}},function(t,e){t.exports=function(t,e){return t.has(e)}},function(t,e,n){var r=n(23),o=n(21),i=n(22);t.exports=function(t,e){return i(o(t,e,r),t+"")}},function(t,e,n){var r=n(93);t.exports=function(t){return r(t)?t:[]}},function(t,e,n){var r=n(94),o=n(3);t.exports=function(t){return o(t)&&r(t)}},function(t,e,n){var r=n(15),o=n(20);t.exports=function(t){return null!=t&&o(t.length)&&!r(t)}},function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.r(e);var i=window.wp.data,a=i.select,c=i.dispatch,u=i.subscribe,s=a("core/editor").getEditedPostAttribute,l=a("core/block-editor").isTyping,p=a("core/blocks").getBlockType,f=c("core/blocks"),h=f.addBlockTypes,v=f.removeBlockTypes,d=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),o(this,"currentTemplate",""),o(this,"unregisteredBlocks",{}),this.blockTemplateRestrictions=e}var e,n,i;return e=t,(n=[{key:"run",value:function(){var t=this;this.currentTemplate=s("template")||"default",this.restrictBlocksToTemplate(),u((function(){if(!0===l())return!1;var e=s("template")||"default";t.currentTemplate!==e&&(t.currentTemplate=e,t.restrictBlocksToTemplate())}))}},{key:"templateBlockRegistry",value:function(){var t=this,e=[],n=[];return Object.keys(this.blockTemplateRestrictions).forEach((function(r){t.blockTemplateRestrictions[r].includes(t.currentTemplate)?e.push(r):n.push(r)})),{blocksToAdd:e,blocksToRemove:n}}},{key:"restrictBlocksToTemplate",value:function(){var t=this,e=this.templateBlockRegistry(),n=e.blocksToAdd,r=e.blocksToRemove;if(r.length&&(r.forEach((function(e){var n=p(e),r=void 0===t.unregisteredBlocks[e];n&&r&&(t.unregisteredBlocks[e]=p(e))})),v(Object.keys(this.unregisteredBlocks))),n.length){var o=[];n.forEach((function(e){var n=void 0===p(e),r=void 0!==t.unregisteredBlocks[e];n&&r&&(o.push(t.unregisteredBlocks[e]),delete t.unregisteredBlocks[e])})),h(o)}}}])&&r(e.prototype,n),i&&r(e,i),t}(),g=n(24),m=n.n(g),y=n(25),b=n.n(y);function x(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var k=window.wp,T=k.data,w=k.i18n.__,j=T.select,O=T.dispatch,B=T.subscribe,R=j("core/block-editor"),P=R.isTyping,S=R.getBlocks,E=j("core/blocks").getBlockType,A=O("core/editor").updateEditorSettings,z=j("core/edit-post"),C=z.isEditorPanelOpened,F=z.getActiveGeneralSidebarName,W=document.createElement("p"),$=document.createElement("ul");W.classList.add("components-base-control__note"),$.classList.add("components-base-control__note"),W.innerText=w("Some page templates are currently unavailable because they are incompatible with the following blocks on this page. You will need to remove them in order to make those templates available again.","ufhealth-restrict-blocks");var N=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),_(this,"blockTemplateRestrictions",{}),_(this,"currentRestrictedBlocks",[]),_(this,"defaultPageTemplates",{}),_(this,"isRestricted",!1),this.defaultPageTemplates=j("core/editor").getEditorSettings().availableTemplates,this.blockTemplateRestrictions=e}var e,n,r;return e=t,(n=[{key:"run",value:function(){var t=this,e=S(),n=this.checkForRestrictedBlocks(e),r=n.templates,o=n.restrictedBlocks;this.currentRestrictedBlocks=o,this.updateWhitelistedTemplates(r),this.addOrRemoveWhitelistNotice(o),B((function(){if(!0===P())return!1;var e=S(),n=t.checkForRestrictedBlocks(e),r=n.templates,o=n.restrictedBlocks;t.addOrRemoveWhitelistNotice(o),o.length!==t.currentRestrictedBlocks.length&&(t.currentRestrictedBlocks=o,t.updateWhitelistedTemplates(r))}))}},{key:"checkForRestrictedBlocks",value:function(t){var e=this,n=[],r=[];return t.forEach((function(t){if(void 0!==e.blockTemplateRestrictions[t.name]&&(n.push(e.blockTemplateRestrictions[t.name]),r.includes(t.name)||r.push(t.name)),t.innerBlocks.length>0){var o=e.checkForRestrictedBlocks(t.innerBlocks),i=o.templates,a=o.restrictedBlocks;i.length>0&&n.push(i),a.forEach((function(t){r.includes(t)||r.push(t)}))}})),{templates:b.a.apply(void 0,n),restrictedBlocks:r}}},{key:"updateWhitelistedTemplates",value:function(t){t.length>0?(this.isRestricted=!0,A({availableTemplates:m()(this.defaultPageTemplates,t)})):(this.isRestricted=!1,A({availableTemplates:this.defaultPageTemplates}))}},{key:"addOrRemoveWhitelistNotice",value:function(t){C("page-attributes")&&"edit-post/document"===F()&&(this.isRestricted?this.addTemplateWhitelistNotice(t):this.removeTemplateWhitelistNotice())}},{key:"addTemplateWhitelistNotice",value:function(t){setTimeout((function(){var e=document.querySelector(".editor-page-attributes__template");$.innerHTML="",t.length&&t.forEach((function(t){var e=E(t),n=document.createElement("li");n.innerText="".concat(e.title," Block"),$.appendChild(n)})),e&&e.lastElementChild!==W&&(e.appendChild(W),e.appendChild($))}),50)}},{key:"removeTemplateWhitelistNotice",value:function(){setTimeout((function(){var t=document.querySelector(".editor-page-attributes__template");t&&t.contains(W)&&W.remove()}),50)}}])&&x(e.prototype,n),r&&x(e,r),t}(),M={"acf/page-signpost":["template-landing-page.php","template-homepage.php"],"acf/page-banner":"template-homepage.php","acf/page-members-panel":"template-homepage.php","acf/page-signposts":"template-homepage.php","acf/page-stories":"template-homepage.php","acf/page-text":["default","template-landing-page.php"],"acf/page-accordion":"template-default.php","acf/page-video":"template-default.php","acf/page-gallery":"template-default.php","acf/page-image":"template-default.php","acf/page-downloads":"template-default.php","acf/page-embed":"template-default.php","acf/page-quote":"template-default.php","acf/page-linked-logos":"template-default.php","acf/page-cta":"template-default.php","acf/page-image-text":"template-default.php","acf/page-children":"template-landing-page.php","acf/listing-intro":"template-listing-page.php","acf/listing-archive":"template-listing-page.php"};wp.domReady((function(){var t=new d(M),e=new N(M);t.run(),e.run()}))}]);