!function(e){function t(t){for(var n,o,i=t[0],a=t[1],s=0,c=[];s<i.length;s++)o=i[s],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&c.push(r[o][0]),r[o]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(l&&l(t);c.length;)c.shift()()}var n={},r={0:0};function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=i);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.src=function(e){return o.p+""+({}[e]||e)+"."+e+".js"}(e);var l=new Error;a=function(t){s.onerror=s.onload=null,clearTimeout(c);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",l.name="ChunkLoadError",l.type=o,l.request=i,n[1](l)}r[e]=void 0}};var c=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(t)},o.m=e,o.c=n,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o.oe=function(e){throw console.error(e),e};var i=window.webpackJsonp=window.webpackJsonp||[],a=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var l=a;o(o.s=13)}([function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(a=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(l," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([o]).join("\n")}var a,s,l;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&o[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},function(e,t,n){(t=n(0)(!1)).push([e.i,":host{display:flex;width:100%}:host section.mainView{flex:1 1 auto;overflow:scroll}:host aside{border-left:1px solid black;flex:0 0 250px;display:flex;flex-direction:column}:host aside .elementsTree{flex:0 0 50%;overflow:scroll}:host aside .properties{flex:0 0 50%;overflow:scroll}\n",""]),e.exports=t},function(e,t,n){(t=n(0)(!1)).push([e.i,"button{display:inline-block;font-weight:400;text-align:center;vertical-align:middle;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:transparent;border:1px solid var(--second);padding:.375rem .75rem;font-size:1rem;line-height:1.5;border-radius:.25rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;color:var(--second);text-decoration:none}button:active{opacity:.5}button:not(:disabled):hover,button:not(:disabled):focus{background:var(--second);color:#fff}button:disabled{filter:grayscale(100%)}\n",""]),e.exports=t},function(e,t,n){(t=n(0)(!1)).push([e.i,":host{--main:red;--second:blue;display:flex}\n",""]),e.exports=t},function(e,t,n){(t=n(0)(!1)).push([e.i,":host{display:block}.title{margin:5px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.title:hover{background:rgba(0,0,0,0.05)}.title .openButton{display:inline-block}.title .openButton::before{content:'';border:1px black solid;border-top-color:transparent;border-left-color:transparent;width:.5em;height:.5em;display:inline-block;transform:rotate(45deg)}slot{margin-left:10px;display:block}\n",""]),e.exports=t},function(e,t,n){(t=n(0)(!1)).push([e.i,"button{display:inline-block;font-weight:400;text-align:center;vertical-align:middle;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:transparent;border:1px solid var(--second);padding:.375rem .75rem;font-size:1rem;line-height:1.5;border-radius:.25rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;color:var(--second);text-decoration:none}button:active{opacity:.5}button:not(:disabled):hover,button:not(:disabled):focus{background:var(--second);color:#fff}button:disabled{filter:grayscale(100%)}:host>*{display:block}:host style{display:none}:host .css{border:1px black solid;background:#ffffff;padding:5px}:host .css .css-rule{display:block}:host .css .css-rule>*{display:inline}\n",""]),e.exports=t},function(e,t,n){"use strict";n(7),n(8)},function(e,t,n){"use strict";function r(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,i,a=!0,s=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return a=e.done,e},e:function(e){s=!0,i=e},f:function(){try{a||null==r.return||r.return()}finally{if(s)throw i}}}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}Array.prototype.max||(Array.prototype.max=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return e},n=null,o=null,i=r(this);try{for(i.s();!(e=i.n()).done;){var a=e.value,s=t(a);"number"==typeof s&&!isNaN(s)&&(null==n||s>n)&&(n=s,o=a)}}catch(e){i.e(e)}finally{i.f()}return o}),Array.prototype.min||(Array.prototype.min=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return e},n=null,o=null,i=r(this);try{for(i.s();!(e=i.n()).done;){var a=e.value,s=t(a);"number"==typeof s&&!isNaN(s)&&(null==n||s<n)&&(n=s,o=a)}}catch(e){i.e(e)}finally{i.f()}return o}),Array.prototype.sum||(Array.prototype.sum=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return e};return this.reduce((function(t,n){return t+Number(e(n))}),0)}),Array.prototype.sortBy||(Array.prototype.sortBy=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var o=t.map((function(e){return"function"==typeof e?e:function(t){return t[e]}})),i=function(e,t){var n,i=r(o);try{for(i.s();!(n=i.n()).done;){var a=n.value,s=a(e),l=a(t);if(s>l)return 1;if(s<l)return-1}}catch(e){i.e(e)}finally{i.f()}return 0};return this.sort(i)}),Array.prototype.groupBy||(Array.prototype.groupBy=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return e},n=new Map,o=r(this);try{for(o.s();!(e=o.n()).done;){var i=e.value,a=t(i);n.has(a)?n.get(a).push(i):n.set(a,[i])}}catch(e){o.e(e)}finally{o.f()}return n}),Array.prototype.replaceContent||(Array.prototype.replaceContent=function(e){this.splice(0,this.length);var t,n=r(e);try{for(n.s();!(t=n.n()).done;){var o=t.value;this.push(o)}}catch(e){n.e(e)}finally{n.f()}}),Array.prototype.removeItem||(Array.prototype.removeItem=function(e){for(var t=0;t<this.length;)this[t]===e||Number.isNaN(this[t])&&Number.isNaN(e)?this.splice(t,1):t++})},function(e,t,n){"use strict";var r=n(9);function o(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o,a=!0,s=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return a=e.done,e},e:function(e){s=!0,o=e},f:function(){try{a||null==r.return||r.return()}finally{if(s)throw o}}}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}HTMLDocument.prototype.create||HTMLElement.prototype.addChild||(HTMLDocument.prototype.create=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,r.create)(e,t,this)},HTMLElement.prototype.addChild=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this.ownerDocument.create(e,t);return this.appendChild(n),n},window.ShadowRoot&&(ShadowRoot.prototype.addChild=HTMLElement.prototype.addChild)),HTMLCollection.prototype.removeAll||(HTMLCollection.prototype.removeAll=function(){var e,t=o(Array.prototype.slice.call(this));try{for(t.s();!(e=t.n()).done;){e.value.remove()}}catch(e){t.e(e)}finally{t.f()}}),HTMLElement.prototype.__defineGetter__("offsetTopFull",(function(){return this.offsetParent?this.offsetParent.offsetTopFull+this.offsetTop:this.offsetTop})),HTMLElement.prototype.__defineGetter__("offsetLeftFull",(function(){return this.offsetParent?this.offsetParent.offsetLeftFull+this.offsetLeft:this.offsetLeft})),Node.prototype.findParent||(Node.prototype.findParent=function(e){return e(this)?this:this.parentNode&&this.parentNode instanceof Element?this.parentNode.findParent(e):null})},function(e,t,n){"use strict";function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||l(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=l(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o,i=!0,a=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return i=e.done,e},e:function(e){a=!0,o=e},f:function(){try{i||null==r.return||r.return()}finally{if(a)throw o}}}}function l(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;t||(t=document);var n=t.createElement(e.tagName||"div");for(var r in u(e),e)if("className"===r)n.className=e[r];else if("classList"===r){var o,i=s(e.classList);try{for(i.s();!(o=i.n()).done;){var a=o.value;n.classList.add(a)}}catch(e){i.e(e)}finally{i.f()}}else"text"===r?n.textContent=e.text:"html"===r?n.innerHTML=e.html:"data"===r?Object.assign(n.dataset,e.data):"children"===r?e.children.forEach((function(e){return n.appendChild(e instanceof Node?e:h(e,{},t))})):"tagName"===r||n.setAttribute(r,e[r]);return n}function u(e){e.className&&(e.classList||(e.classList=[]),e.classList=[].concat(a(e.classList),a(e.className.split(" "))),delete e.className)}function f(e){e=(e+"").trim();var t=0;function n(){for(var n="",r=[".","#",","];t<e.length;){var o=e[t];if(/\s/.test(o)||r.includes(o))return n;n+=o,t++}return n}return""===e?{}:function r(){for(var o={},i=!0;t<e.length;){var a=e[t];if(t++,"#"===a)o.id=n();else if("."===a)o.classList||(o.classList=[]),o.classList.push(n());else if(/\s/.test(a)){for(;t<e.length&&/\s/.test(e[t]);)t++;o.children=[r()]}else{if(!i)throw new Error("Syntax error in position "+t);o.tagName=a+n()}i=!1}return o}()}function h(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return e="string"==typeof t?p(f(t),n):t,n instanceof Document&&(r=n),d(e,r)}function p(e,t){u(e),u(t);var n=o({},e,{},t);return e.data&&t.data&&(n.data=o({},e.data,{},t.data)),e.children&&t.children&&(n.children=[].concat(a(e.children),a(t.children))),e.classList&&t.classList&&(n.classList=[].concat(a(e.classList),a(t.classList))),n}e.exports={createFromDefinition:d,parseSelector:f,create:h,mergeObjects:p,default:h}},function(e,t,n){var r=n(11),o=n(12);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);e.exports=o.locals||{}},function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function s(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},r=[],o=0;o<e.length;o++){var i=e[o],l=t.base?i[0]+t.base:i[0],c=n[l]||0,d="".concat(l," ").concat(c);n[l]=c+1;var u=s(d),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==u?(a[u].references++,a[u].updater(f)):a.push({identifier:d,updater:v(f,t),references:1}),r.push(d)}return r}function c(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var d,u=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function f(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function h(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,m=0;function v(e,t){var n,r,o;if(t.singleton){var i=m++;n=p||(p=c(t)),r=f.bind(null,n,i,!1),o=f.bind(null,n,i,!0)}else n=c(t),r=h.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=s(n[r]);a[o].references--}for(var i=l(e,t),c=0;c<n.length;c++){var d=s(n[c]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}n=i}}}},function(e,t,n){(t=n(0)(!1)).push([e.i,"html,body{margin:0;padding:0;background:#f0f0f0}html main-layout,body main-layout{height:100vh}\n",""]),e.exports=t},function(e,t,n){"use strict";n.r(t);n(6);var r=n(2),o=n.n(r);class i extends HTMLElement{constructor(){super();const e=this.attachShadow({mode:"open"});e.addChild("style",{text:o.a[0][1]}),e.addChild("h1",{text:"Gruszka"}),e.addChild("button",{text:"open"}).onclick=this.openFileDialog.bind(this),this.addEventListener("dragover",this.onDragOver,!0),this.addEventListener("drop",this.onDrop,!0)}openFileDialog(){const e=document.create("input",{type:"file",accept:".psd"});e.addEventListener("change",t=>this.dispatchEvent(new CustomEvent("selectfile",{detail:e.files[0]}))),e.click()}onDragOver(e){e.stopPropagation(),e.preventDefault(),e.dataTransfer.dropEffect="copy"}onDrop(e){e.stopPropagation(),e.preventDefault(),this.dispatchEvent(new CustomEvent("selectfile",{detail:e}))}}customElements.define("start-page",i);var a=n(3),s=n.n(a);var l=n(1),c=n.n(l),d=n(4),u=n.n(d);class f extends HTMLElement{constructor(e){super(),this.node=e;const t=this.attachShadow({mode:"open"});t.addChild("style",{text:u.a[0][1]});let n=t.addChild("div.title");n.onclick=()=>{this.dispatchEvent(new CustomEvent("selected",{bubbles:!0,detail:[this.node]}))},n.onmouseenter=()=>{this.dispatchEvent(new CustomEvent("hover",{bubbles:!0,detail:[this.node]}))},n.addChild(".openButton"),n.append(e.name),t.addChild("slot");for(let t of e.children)this.append(new f(t))}}customElements.define("tree-node",f);class h extends HTMLElement{constructor(e){super(),this.selected=[],this.hover=[],console.log(e),this._file=e,this._allNodes=this.getAllNodes(this._file.tree);const t=this.attachShadow({mode:"open"});this.canvas=t.addChild("canvas"),this._imageCanvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),this._imageCtx=this._imageCanvas.getContext("2d"),this._imageCanvas.width=this.canvas.width=e.size.width,this._imageCanvas.height=this.canvas.height=e.size.height,this.canvas.onclick=e=>{let t=this.findNodeOfPoint({x:e.clientX,y:e.clientY});t&&this.dispatchEvent(new CustomEvent("selected",{bubbles:!0,detail:[t]}))},this.canvas.onmousemove=e=>{let t=this.findNodeOfPoint({x:e.clientX,y:e.clientY});t&&this.dispatchEvent(new CustomEvent("hover",{bubbles:!0,detail:[t]}))},setTimeout(()=>this.render(!0),2e3)}getAllNodes(e){let t=(e.children||[]).flatMap(e=>this.getAllNodes(e));return t.push(e),t}render(e=!1){e&&(this.renderNodeImage(this._file.tree),this._imageCtx.clearRect(0,0,Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY)),this.ctx.clearRect(0,0,Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY),this.ctx.drawImage(this._imageCanvas,0,0),this.renderNodeHelper(this._file.tree)}renderNodeImage(e){const t=!1!==e._node.layer.visible,n=e._node.layer.mask&&e._node.layer.mask.width>0,r=t&&!n&&e.image&&255==e._node.layer.opacity&&!e._node.layer.clipped&&e._node.layer.blendMode&&"normal"==e._node.layer.blendMode.mode;if(t){if(r){const t=document.createElement("canvas");t.width=e.rect.width,t.height=e.rect.height,t.getContext("2d").putImageData(e.image,0,0),this._imageCtx.drawImage(t,e.rect.left,e.rect.top)}for(let t of Array.from(e.children).reverse())this.renderNodeImage(t)}}renderNodeHelper(e){this.selected.includes(e)&&(this.ctx.beginPath(),this.ctx.rect(e.rect.left,e.rect.top,e.rect.width,e.rect.height),this.ctx.stroke(),this.ctx.strokeStyle="#444",this.ctx.closePath()),this.hover.includes(e)&&(this.ctx.beginPath(),this.ctx.strokeStyle="#44d",this.ctx.rect(e.rect.left,e.rect.top,e.rect.width,e.rect.height),this.ctx.stroke(),this.ctx.closePath());for(let t of Array.from(e.children).reverse())this.renderNodeHelper(t)}findNodeOfPoint(e){for(let t of this._allNodes)if(e.x>=t.rect.left&&e.x<=t.rect.left+t.rect.width&&e.y>=t.rect.top&&e.y<=t.rect.top+t.rect.height)return t;return null}}customElements.define("image-canvas",h);var p=n(5),m=n.n(p);class v extends HTMLElement{constructor(e=[]){super();const t=this.attachShadow({mode:"open"});for(let n of e)if(t.addChild("style",{text:m.a[0][1]}),console.log(n),null!==n.text&&t.addChild(".text",{text:n.text}),t.addChild(".css",{children:n.css.map(e=>({className:"css-rule",children:[{text:e.name},{text:":"},{text:e.value},{text:";"}]}))}),n.canDownloadImage){t.addChild("button.downloadImage",{text:"Download"}).onclick=()=>n.downloadImage()}}}customElements.define("node-info",v),console.log(c.a[0][1]);class y extends HTMLElement{constructor(e){super(),this.selected=[],this.hover=[],this.dbg=e;const t=this.attachShadow({mode:"open"});t.addChild("style",{text:c.a[0][1]}),this.mainView=t.addChild("section.mainView"),this.imageCanvas=new h(e),this.mainView.append(this.imageCanvas);const n=t.addChild("aside");this.elementsTree=n.addChild("section.elementsTree"),this.elementsTree.append(new f(e.tree)),t.addEventListener("selected",e=>{this.imageCanvas.selected=this.selected=e.detail,this.imageCanvas.render(),this.regenerateProperties()}),t.addEventListener("hover",e=>{this.imageCanvas.hover=this.hover=e.detail,this.imageCanvas.render()}),this.propertes=n.addChild("section.properties")}regenerateProperties(){this.propertes.children.removeAll(),this.propertes.append(new v(this.selected))}set file(e){console.log({value:e})}}customElements.define("file-viewer",y);class b extends HTMLElement{constructor(){super();const e=this.attachShadow({mode:"open"});e.addChild("style",{text:s.a[0][1]});const t=e.addChild("start-page");t.addEventListener("selectfile",async r=>{let o=await async function(e){const{PsdFile:t}=await Promise.all([n.e(1),n.e(2)]).then(n.bind(null,123));return t.fromFile(e)}(r.detail);t.remove(),e.append(new y(o))})}}customElements.define("main-layout",b);n(10)}]);