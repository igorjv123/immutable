!function(n){var t={};function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)e.d(r,o,function(t){return n[t]}.bind(null,o));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=0)}([function(n,t,e){"use strict";e.r(t);e(1),e(2)},function(n,t){let e=!0,r=document.getElementById("signInTab"),o=document.getElementById("signUpTab"),i=document.getElementById("signForm");r.addEventListener("click",n=>{r.className+=r.className.includes("active")?"":" active",o.className=o.className.replace(" active",""),e=!0,i.style.left="0px"}),o.addEventListener("click",n=>{o.className+=o.className.includes("active")?"":" active",r.className=r.className.replace(" active",""),e=!1,i.style.left="-400px"})},function(n,t,e){var r=e(3);"string"==typeof r&&(r=[[n.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(7)(r,o);r.locals&&(n.exports=r.locals)},function(n,t,e){t=n.exports=e(4)(!1);var r=e(5)(e(6));t.push([n.i,".wrote-about-us__images-container {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  padding: 50px 0;\n  opacity: .5; }\n\n.wrote-about-us__img {\n  display: block;\n  width: 20%;\n  object-fit: contain;\n  margin: 30px 0; }\n  @media screen and (max-width: 575px) {\n    .wrote-about-us__img {\n      width: 90%; } }\n  @media screen and (max-width: 992px) {\n    .wrote-about-us__img {\n      width: 40%; } }\n\n.wrote-about-us__title {\n  text-align: center; }\n\n.sign-component {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background: url("+r+");\n  background-size: cover;\n  height: 400px; }\n  .sign-component__inner {\n    background: #fff;\n    padding: 20px;\n    height: 350px;\n    width: 400px;\n    position: relative;\n    overflow: hidden; }\n  .sign-component__tabs {\n    background-color: inherit;\n    display: flex;\n    justify-content: center;\n    cursor: pointer;\n    padding: 14px 16px;\n    transition: 0.3s;\n    font-size: 17px; }\n  .sign-component__tab-content {\n    display: flex;\n    position: absolute;\n    left: 0;\n    transition: left 0.3s ease-out;\n    justify-content: center; }\n\n.tab-button {\n  padding: 10px;\n  width: 100px;\n  text-align: center; }\n\n.active {\n  background-color: #7e3ba1;\n  color: #fff; }\n\n.sign-form {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: available;\n  width: 400px; }\n  .sign-form__input {\n    display: block;\n    padding: 10px;\n    border: 2px solid #ddd;\n    border-radius: 3px;\n    margin-bottom: 20px;\n    width: 250px; }\n  .sign-form__button {\n    border: none;\n    outline: none;\n    cursor: pointer;\n    border-radius: 5px;\n    padding: 5px 20px;\n    background-color: #7e3ba1;\n    color: #f1f1f1; }\n  .sign-form__button:hover {\n    background-color: #6f348e; }\n\n.footer {\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  align-items: center;\n  color: #575757; }\n  .footer__item {\n    width: 30%;\n    box-sizing: border-box; }\n    @media screen and (max-width: 575px) {\n      .footer__item {\n        width: 90%; } }\n    @media screen and (max-width: 992px) {\n      .footer__item {\n        width: 70%; } }\n  .footer__contacts {\n    display: flex;\n    flex-direction: column;\n    align-items: center; }\n  .footer__contacts-title, .newsletter__title {\n    margin: 0 0 20px 0;\n    text-align: center;\n    color: #3c3c3c; }\n  .footer__contacts-items {\n    padding: 5px; }\n  .footer__social {\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center; }\n  .footer__social-row {\n    display: flex;\n    justify-content: space-around;\n    margin: 30px; }\n  .footer__social-img {\n    margin: 0 20px; }\n\n.newsletter {\n  display: flex;\n  flex-direction: column; }\n  .newsletter__form {\n    margin: 30px 0;\n    text-align: center; }\n  .newsletter__email-input {\n    outline: none;\n    border: none;\n    border-bottom: 2px solid #ddd; }\n  .newsletter__button-submit {\n    border: none;\n    outline: none;\n    cursor: pointer;\n    border-radius: 10px;\n    padding: 3px 10px;\n    margin: 10px 0 10px 0;\n    background-color: #7e3ba1;\n    color: #f1f1f1; }\n  .newsletter__button-submit:hover {\n    background-color: #6f348e; }\n",""])},function(n,t,e){"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map(function(t){var e=function(n,t){var e=n[1]||"",r=n[3];if(!r)return e;if(t&&"function"==typeof btoa){var o=(a=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),i=r.sources.map(function(n){return"/*# sourceURL=".concat(r.sourceRoot).concat(n," */")});return[e].concat(i).concat([o]).join("\n")}var a,s,c;return[e].join("\n")}(t,n);return t[2]?"@media ".concat(t[2],"{").concat(e,"}"):e}).join("")},t.i=function(n,e){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(var a=0;a<n.length;a++){var s=n[a];null!=s[0]&&r[s[0]]||(e&&!s[2]?s[2]=e:e&&(s[2]="(".concat(s[2],") and (").concat(e,")")),t.push(s))}},t}},function(n,t,e){"use strict";n.exports=function(n,t){return"string"!=typeof n?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),/["'() \t\n]/.test(n)||t?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},function(n,t,e){n.exports=e.p+"9d057b1711d83f7a98c373a8438c119d.jpg"},function(n,t,e){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),s=function(n){var t={};return function(n,e){if("function"==typeof n)return n();if(void 0===t[n]){var r=function(n,t){return t?t.querySelector(n):document.querySelector(n)}.call(this,n,e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}t[n]=r}return t[n]}}(),c=null,l=0,u=[],f=e(8);function d(n,t){for(var e=0;e<n.length;e++){var r=n[e],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(x(r.parts[a],t))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(x(r.parts[a],t));i[r.id]={id:r.id,refs:1,parts:s}}}}function p(n,t){for(var e=[],r={},o=0;o<n.length;o++){var i=n[o],a=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):e.push(r[a]={id:a,parts:[s]})}return e}function m(n,t){var e=s(n.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=u[u.length-1];if("top"===n.insertAt)r?r.nextSibling?e.insertBefore(t,r.nextSibling):e.appendChild(t):e.insertBefore(t,e.firstChild),u.push(t);else if("bottom"===n.insertAt)e.appendChild(t);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(n.insertAt.before,e);e.insertBefore(t,o)}}function b(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var t=u.indexOf(n);t>=0&&u.splice(t,1)}function g(n){var t=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var r=function(){0;return e.nc}();r&&(n.attrs.nonce=r)}return h(t,n.attrs),m(n,t),t}function h(n,t){Object.keys(t).forEach(function(e){n.setAttribute(e,t[e])})}function x(n,t){var e,r,o,i;if(t.transform&&n.css){if(!(i="function"==typeof t.transform?t.transform(n.css):t.transform.default(n.css)))return function(){};n.css=i}if(t.singleton){var a=l++;e=c||(c=g(t)),r=w.bind(null,e,a,!1),o=w.bind(null,e,a,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=function(n){var t=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",h(t,n.attrs),m(n,t),t}(t),r=function(n,t,e){var r=e.css,o=e.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=f(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=n.href;n.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,e,t),o=function(){b(e),e.href&&URL.revokeObjectURL(e.href)}):(e=g(t),r=function(n,t){var e=t.css,r=t.media;r&&n.setAttribute("media",r);if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}.bind(null,e),o=function(){b(e)});return r(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;r(n=t)}else o()}}n.exports=function(n,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var e=p(n,t);return d(e,t),function(n){for(var r=[],o=0;o<e.length;o++){var a=e[o];(s=i[a.id]).refs--,r.push(s)}n&&d(p(n,t),t);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete i[s.id]}}}};var v,y=(v=[],function(n,t){return v[n]=t,v.filter(Boolean).join("\n")});function w(n,t,e,r){var o=e?"":r.css;if(n.styleSheet)n.styleSheet.cssText=y(t,o);else{var i=document.createTextNode(o),a=n.childNodes;a[t]&&n.removeChild(a[t]),a.length?n.insertBefore(i,a[t]):n.appendChild(i)}}},function(n,t){n.exports=function(n){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var e=t.protocol+"//"+t.host,r=e+t.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,t){var o,i=t.trim().replace(/^"(.*)"$/,function(n,t){return t}).replace(/^'(.*)'$/,function(n,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?n:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?e+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}}]);