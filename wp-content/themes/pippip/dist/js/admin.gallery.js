/*! For license information please see admin.gallery.js.LICENSE.txt */
!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=1)}({"0wqX":function(e,t,n){"use strict";n.r(t);var o=n("SwAO"),i=n.n(o);function a(){document.querySelectorAll(".gallery")&&i.a.run(".gallery")}document.addEventListener("DOMContentLoaded",(function(){a()})),window.acf&&window.acf.addAction("render_block_preview",a)},1:function(e,t,n){e.exports=n("0wqX")},SwAO:function(e,t,n){var o,i;!function(a,r){"use strict";void 0===(i="function"==typeof(o=function(){var e,t,n,o,i,a={},r={captions:!0,buttons:"auto",fullScreen:!1,noScrollbars:!1,bodyClass:"baguetteBox-open",titleTag:!1,async:!1,preload:2,animation:"slideIn",afterShow:null,afterHide:null,onChange:null,overlayBackgroundColor:"rgba(0,0,0,.8)"},l={},u=[],s=0,c=!1,d={},f=!1,g=/.+\.(gif|jpe?g|png|webp)/i,p={},v=[],b=null,m=function(e){-1!==e.target.id.indexOf("baguette-img")&&L()},y=function(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0,F()},h=function(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0,j()},w=function(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0,L()},k=function(e){d.count++,1<d.count&&(d.multitouch=!0),d.startX=e.changedTouches[0].pageX,d.startY=e.changedTouches[0].pageY},x=function(e){if(!f&&!d.multitouch){e.preventDefault?e.preventDefault():e.returnValue=!1;var t=e.touches[0]||e.changedTouches[0];40<t.pageX-d.startX?(f=!0,F()):t.pageX-d.startX<-40?(f=!0,j()):100<d.startY-t.pageY&&L()}},E=function(){d.count--,d.count<=0&&(d.multitouch=!1),f=!1},C=function(){E()},B=function(t){"block"===e.style.display&&e.contains&&!e.contains(t.target)&&(t.stopPropagation(),P())};function T(e){if(p.hasOwnProperty(e)){var t=p[e].galleries;[].forEach.call(t,(function(e){[].forEach.call(e,(function(e){_(e.imageElement,"click",e.eventHandler)})),u===e&&(u=[])})),delete p[e]}}function S(e){switch(e.keyCode){case 37:F();break;case 39:j();break;case 27:L();break;case 36:!function(e){e&&e.preventDefault(),q(0)}(e);break;case 35:!function(e){e&&e.preventDefault(),q(u.length-1)}(e)}}function A(i,l){if(u!==i){for(u=i,function(i){for(var l in i=i||{},r)a[l]=r[l],void 0!==i[l]&&(a[l]=i[l]);t.style.transition=t.style.webkitTransition="fadeIn"===a.animation?"opacity .4s ease":"slideIn"===a.animation?"":"none","auto"===a.buttons&&("ontouchstart"in window||1===u.length)&&(a.buttons=!1),n.style.display=o.style.display=a.buttons?"":"none";try{e.style.backgroundColor=a.overlayBackgroundColor}catch(e){}}(l);t.firstChild;)t.removeChild(t.firstChild);for(var s,c=[],d=[],f=v.length=0;f<i.length;f++)(s=R("div")).className="full-image",s.id="baguette-img-"+f,v.push(s),c.push("baguetteBox-figure-"+f),d.push("baguetteBox-figcaption-"+f),t.appendChild(v[f]);e.setAttribute("aria-labelledby",c.join(" ")),e.setAttribute("aria-describedby",d.join(" "))}}function N(t){a.noScrollbars&&(document.documentElement.style.overflowY="hidden",document.body.style.overflowY="scroll"),"block"!==e.style.display&&(Y(document,"keydown",S),d={count:0,startX:null,startY:null},O(s=t,(function(){I(s),X(s)})),M(),e.style.display="block",a.fullScreen&&(e.requestFullscreen?e.requestFullscreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.mozRequestFullScreen&&e.mozRequestFullScreen()),setTimeout((function(){e.className="visible",a.bodyClass&&document.body.classList&&document.body.classList.add(a.bodyClass),a.afterShow&&a.afterShow()}),50),a.onChange&&a.onChange(s,v.length),b=document.activeElement,P(),c=!0)}function P(){a.buttons?n.focus():i.focus()}function L(){a.noScrollbars&&(document.documentElement.style.overflowY="auto",document.body.style.overflowY="auto"),"none"!==e.style.display&&(_(document,"keydown",S),e.className="",setTimeout((function(){e.style.display="none",document.fullscreen&&(document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen()),a.bodyClass&&document.body.classList&&document.body.classList.remove(a.bodyClass),a.afterHide&&a.afterHide(),b&&b.focus(),c=!1}),500))}function O(e,t){var n=v[e],o=u[e];if(void 0!==n&&void 0!==o)if(n.getElementsByTagName("img")[0])t&&t();else{var i=o.imageElement,r=i.getElementsByTagName("img")[0],l="function"==typeof a.captions?a.captions.call(u,i):i.getAttribute("data-caption")||i.title,s=function(e){var t=e.href;if(e.dataset){var n=[];for(var o in e.dataset)"at-"!==o.substring(0,3)||isNaN(o.substring(3))||(n[o.replace("at-","")]=e.dataset[o]);for(var i=Object.keys(n).sort((function(e,t){return parseInt(e,10)<parseInt(t,10)?-1:1})),a=window.innerWidth*window.devicePixelRatio,r=0;r<i.length-1&&i[r]<a;)r++;t=n[i[r]]||t}return t}(i),c=R("figure");if(c.id="baguetteBox-figure-"+e,c.innerHTML='<div class="baguetteBox-spinner"><div class="baguetteBox-double-bounce1"></div><div class="baguetteBox-double-bounce2"></div></div>',a.captions&&l){var d=R("figcaption");d.id="baguetteBox-figcaption-"+e,d.innerHTML=l,c.appendChild(d)}n.appendChild(c);var f=R("img");f.onload=function(){var n=document.querySelector("#baguette-img-"+e+" .baguetteBox-spinner");c.removeChild(n),!a.async&&t&&t()},f.setAttribute("src",s),f.alt=r&&r.alt||"",a.titleTag&&l&&(f.title=l),c.appendChild(f),a.async&&t&&t()}}function j(){return q(s+1)}function F(){return q(s-1)}function q(e,t){return!c&&0<=e&&e<t.length?(A(t,a),N(e),!0):e<0?(a.animation&&H("left"),!1):e>=v.length?(a.animation&&H("right"),!1):(O(s=e,(function(){I(s),X(s)})),M(),a.onChange&&a.onChange(s,v.length),!0)}function H(e){t.className="bounce-from-"+e,setTimeout((function(){t.className=""}),400)}function M(){var e=100*-s+"%";"fadeIn"===a.animation?(t.style.opacity=0,setTimeout((function(){l.transforms?t.style.transform=t.style.webkitTransform="translate3d("+e+",0,0)":t.style.left=e,t.style.opacity=1}),400)):l.transforms?t.style.transform=t.style.webkitTransform="translate3d("+e+",0,0)":t.style.left=e}function I(e){e-s>=a.preload||O(e+1,(function(){I(e+1)}))}function X(e){s-e>=a.preload||O(e-1,(function(){X(e-1)}))}function Y(e,t,n,o){e.addEventListener?e.addEventListener(t,n,o):e.attachEvent("on"+t,(function(e){(e=e||window.event).target=e.target||e.srcElement,n(e)}))}function _(e,t,n,o){e.removeEventListener?e.removeEventListener(t,n,o):e.detachEvent("on"+t,n)}function D(e){return document.getElementById(e)}function R(e){return document.createElement(e)}return[].forEach||(Array.prototype.forEach=function(e,t){for(var n=0;n<this.length;n++)e.call(t,this[n],n,this)}),[].filter||(Array.prototype.filter=function(e,t,n,o,i){for(n=this,o=[],i=0;i<n.length;i++)e.call(t,n[i],i,n)&&o.push(n[i]);return o}),{run:function(a,r){return l.transforms=function(){var e=R("div");return void 0!==e.style.perspective||void 0!==e.style.webkitPerspective}(),l.svg=function(){var e=R("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"===(e.firstChild&&e.firstChild.namespaceURI)}(),l.passiveEvents=function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("test",null,t)}catch(e){}return e}(),function(){if(e=D("baguetteBox-overlay"))return t=D("baguetteBox-slider"),n=D("previous-button"),o=D("next-button"),void(i=D("close-button"));(e=R("div")).setAttribute("role","dialog"),e.id="baguetteBox-overlay",document.getElementsByTagName("body")[0].appendChild(e),(t=R("div")).id="baguetteBox-slider",e.appendChild(t),(n=R("button")).setAttribute("type","button"),n.id="previous-button",n.setAttribute("aria-label","Previous"),n.innerHTML=l.svg?'<svg width="44" height="60"><polyline points="30 10 10 30 30 50" stroke="rgba(255,255,255,0.5)" stroke-width="4"stroke-linecap="butt" fill="none" stroke-linejoin="round"/></svg>':"&lt;",e.appendChild(n),(o=R("button")).setAttribute("type","button"),o.id="next-button",o.setAttribute("aria-label","Next"),o.innerHTML=l.svg?'<svg width="44" height="60"><polyline points="14 10 34 30 14 50" stroke="rgba(255,255,255,0.5)" stroke-width="4"stroke-linecap="butt" fill="none" stroke-linejoin="round"/></svg>':"&gt;",e.appendChild(o),(i=R("button")).setAttribute("type","button"),i.id="close-button",i.setAttribute("aria-label","Close"),i.innerHTML=l.svg?'<svg width="30" height="30"><g stroke="rgb(160,160,160)" stroke-width="4"><line x1="5" y1="5" x2="25" y2="25"/><line x1="5" y1="25" x2="25" y2="5"/></g></svg>':"&times;",e.appendChild(i),n.className=o.className=i.className="baguetteBox-button",function(){var a=l.passiveEvents?{passive:!1}:null,r=l.passiveEvents?{passive:!0}:null;Y(e,"click",m),Y(n,"click",y),Y(o,"click",h),Y(i,"click",w),Y(t,"contextmenu",C),Y(e,"touchstart",k,r),Y(e,"touchmove",x,a),Y(e,"touchend",E),Y(document,"focus",B,!0)}()}(),T(a),function(e,t){var n=document.querySelectorAll(e),o={galleries:[],nodeList:n};return p[e]=o,[].forEach.call(n,(function(e){t&&t.filter&&(g=t.filter);var n=[];if(n="A"===e.tagName?[e]:e.getElementsByTagName("a"),0!==(n=[].filter.call(n,(function(e){if(-1===e.className.indexOf(t&&t.ignoreClass))return g.test(e.href)}))).length){var i=[];[].forEach.call(n,(function(e,n){var o=function(e){e.preventDefault?e.preventDefault():e.returnValue=!1,A(i,t),N(n)},a={eventHandler:o,imageElement:e};Y(e,"click",o),i.push(a)})),o.galleries.push(i)}})),o.galleries}(a,r)},show:q,showNext:j,showPrevious:F,hide:L,destroy:function(){!function(){var a=l.passiveEvents?{passive:!1}:null,r=l.passiveEvents?{passive:!0}:null;_(e,"click",m),_(n,"click",y),_(o,"click",h),_(i,"click",w),_(t,"contextmenu",C),_(e,"touchstart",k,r),_(e,"touchmove",x,a),_(e,"touchend",E),_(document,"focus",B,!0)}(),function(){for(var e in p)p.hasOwnProperty(e)&&T(e)}(),_(document,"keydown",S),document.getElementsByTagName("body")[0].removeChild(document.getElementById("baguetteBox-overlay")),p={},u=[],s=0}}})?o.call(t,n,t,e):o)||(e.exports=i)}()}});