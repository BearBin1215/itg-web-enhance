// ==UserScript==
// @name            itg-web-enhance
// @description     ITG相关页面（OA、Rancher等）加强
// @version         1.0.0
// @author          BearBin
// @license         MIT
// @match           *://docker.itg.com.cn/*
// @match           *://jenkins.itg.it.org.test/*
// @match           *://oa.itg.cn/*
// @grant           none
// ==/UserScript==

(()=>{"use strict";var e={371:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(i[l]=!0)}for(var d=0;d<e.length;d++){var s=[].concat(e[d]);r&&i[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),t.push(s))}},t}},26:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},474:e=>{e.exports=function(e){return e[1]}},696:(e,t,n)=>{n.d(t,{A:()=>c});var r=n(474),o=n.n(r),a=n(371),i=n.n(a)()(o());i.push([e.id,".itg-web-enhancer-copy-docker{background-color:#f8f8f8;border:1px solid #bbb;cursor:pointer;float:right;padding:8px;position:sticky;right:0;top:50px;transition:all .3s ease-in}.itg-web-enhancer-copy-docker:hover{box-shadow:0 0 4px rgba(0,0,0,.2)}.itg-web-enhancer-copy-docker:active{background-color:#e9e9e9}",""]);const c=i},703:(e,t,n)=>{n.d(t,{A:()=>f});var r=n(474),o=n.n(r),a=n(371),i=n.n(a),c=n(26),l=n.n(c),d=new URL(n(295),n.b),s=new URL(n(833),n.b),u=i()(o()),p=l()(d),m=l()(s);u.push([e.id,`.fixed-header-actions.row.clearfix{height:unset!important}#iew-rancher-search-panel{clear:both;display:flex;gap:26px;justify-content:flex-end;padding:8px 0;text-align:right}#iew-rancher-search-panel #iew-rancher-search-buttons{display:flex;gap:8px}#iew-rancher-search-panel #iew-rancher-search-setting{margin-right:0}#iwe-rancher-settingtable{width:100%}#iwe-rancher-settingtable .add-row-button{background-image:url(${p})}#iwe-rancher-settingtable .remove-row-button{background-image:url(${m})}#iwe-rancher-settingtable .add-row,#iwe-rancher-settingtable .remove-row{padding-left:4px;width:20px}#iwe-rancher-settingtable .add-row>div,#iwe-rancher-settingtable .remove-row>div{cursor:pointer;height:20px;width:20px}#iwe-rancher-settingtable .add-row>div:hover,#iwe-rancher-settingtable .remove-row>div:hover{background-color:#e3e3e3}#iwe-rancher-settingtable th{font-size:1em;font-weight:600;text-align:center}#iwe-rancher-settingtable tbody td{height:unset}#iwe-rancher-settingtable tbody td:not(:last-child){border:1px solid #bbb}#iwe-rancher-settingtable tbody td.iew-rancher-buttontext{width:30%}#iwe-rancher-settingtable tbody td>input{border:0;outline:0;padding:4px;text-align:center;transition:background-color .3s ease-in;width:100%}#iwe-rancher-settingtable tbody td>input:hover{background-color:#fbfbfb}#iwe-rancher-settingtable tbody td>input:focus{background-color:#f8f8f8}`,""]);const f=u},423:(e,t,n)=>{n.d(t,{A:()=>c});var r=n(474),o=n.n(r),a=n(371),i=n.n(a)()(o());i.push([e.id,"#iew-modal-wrapper{background-color:rgba(0,0,0,.1);inset:0;position:fixed;z-index:10001}#iew-modal-wrapper .iew-modal{background-color:#fdfdfd;border:1px solid #acacac;box-shadow:0 0 10px hsla(0,0%,50%,.6);left:50%;max-width:96%;min-height:10em;position:absolute;top:50%;transform:translate(-50%,-50%)}#iew-modal-wrapper .iew-modal.iew-modal-small{width:300px}#iew-modal-wrapper .iew-modal.iew-modal-medium{width:540px}#iew-modal-wrapper .iew-modal.iew-modal-large{width:960px}#iew-modal-wrapper .iew-modal.iew-modal-larger{width:14400px}#iew-modal-wrapper .iew-modal .iew-modal-close{box-sizing:border-box;cursor:pointer;height:28px;padding:2px;position:absolute;right:0;top:0;width:28px}#iew-modal-wrapper .iew-modal .iew-modal-close:hover{background-color:#ebebeb}#iew-modal-wrapper .iew-modal .iew-modal-close>svg{height:24px;width:24px}#iew-modal-wrapper .iew-modal .iew-modal-header{align-items:center;display:flex;font-size:1.1em;font-weight:600;justify-content:center;padding:.5em}#iew-modal-wrapper .iew-modal .iew-modal-content{padding:1em}#iew-modal-wrapper .iew-modal .iew-modal-footer{padding:8px 12px;text-align:right}#iew-modal-wrapper .iew-modal-button{background-color:#fcfcfc;border:1px solid #b9b9b9;border-radius:0;box-sizing:border-box;display:inline-block;font-size:12px;height:32px;line-height:1;margin-left:12px;padding:6px 10px;-webkit-user-select:none;-moz-user-select:none;user-select:none;white-space:nowrap}#iew-modal-wrapper .iew-modal-button:hover{background-color:#efefef}#iew-modal-wrapper .iew-modal-button.iew-modal-button-confirm{background-color:#66d;border:1px solid #66d;color:#fff}#iew-modal-wrapper .iew-modal-button.iew-modal-button-confirm:hover{background-color:#7d7de2;border-color:#7d7de2}",""]);const c=i},960:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var l=e[c],d=r.base?l[0]+r.base:l[0],s=a[d]||0,u="".concat(d," ").concat(s);a[d]=s+1;var p=n(u),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=o(m,r);r.byIndex=c,t.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function o(e,t){var n=t.domAPI(t);n.update(e);return function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var l=r(e,o),d=0;d<a.length;d++){var s=n(a[d]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}a=l}}},443:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},628:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},120:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},81:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},849:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},295:e=>{e.exports="data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 stroke=%27currentColor%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 viewBox=%270 0 24 24%27%3E%3Cpath d=%27M12 5v14M5 12h14%27/%3E%3C/svg%3E"},833:e=>{e.exports="data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 stroke=%27currentColor%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 viewBox=%270 0 24 24%27%3E%3Cpath d=%27M5 12h14%27/%3E%3C/svg%3E"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{const e=e=>{const t=document.createElement("template");return t.innerHTML=e.trim(),t.content.children[0]};const t=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)};const r="object"==typeof global&&global&&global.Object===Object&&global;var o="object"==typeof self&&self&&self.Object===Object&&self;const a=r||o||Function("return this")();const i=function(){return a.Date.now()};var c=/\s/;const l=function(e){for(var t=e.length;t--&&c.test(e.charAt(t)););return t};var d=/^\s+/;const s=function(e){return e?e.slice(0,l(e)+1).replace(d,""):e};const u=a.Symbol;var p=Object.prototype,m=p.hasOwnProperty,f=p.toString,h=u?u.toStringTag:void 0;const b=function(e){var t=m.call(e,h),n=e[h];try{e[h]=void 0;var r=!0}catch(e){}var o=f.call(e);return r&&(t?e[h]=n:delete e[h]),o};var w=Object.prototype.toString;const v=function(e){return w.call(e)};var g=u?u.toStringTag:void 0;const y=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":g&&g in Object(e)?b(e):v(e)};const x=function(e){return null!=e&&"object"==typeof e};const k=function(e){return"symbol"==typeof e||x(e)&&"[object Symbol]"==y(e)};var E=/^[-+]0x[0-9a-f]+$/i,T=/^0b[01]+$/i,A=/^0o[0-7]+$/i,C=parseInt;const S=function(e){if("number"==typeof e)return e;if(k(e))return NaN;if(t(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=t(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=s(e);var r=T.test(e);return r||A.test(e)?C(e.slice(2),r?2:8):E.test(e)?NaN:+e};var I=Math.max,j=Math.min;const L=function(e,n,r){var o,a,c,l,d,s,u=0,p=!1,m=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var n=o,r=a;return o=a=void 0,u=t,l=e.apply(r,n)}function b(e){var t=e-s;return void 0===s||t>=n||t<0||m&&e-u>=c}function w(){var e=i();if(b(e))return v(e);d=setTimeout(w,function(e){var t=n-(e-s);return m?j(t,c-(e-u)):t}(e))}function v(e){return d=void 0,f&&o?h(e):(o=a=void 0,l)}function g(){var e=i(),t=b(e);if(o=arguments,a=this,s=e,t){if(void 0===d)return function(e){return u=e,d=setTimeout(w,n),p?h(e):l}(s);if(m)return clearTimeout(d),d=setTimeout(w,n),h(s)}return void 0===d&&(d=setTimeout(w,n)),l}return n=S(n)||0,t(r)&&(p=!!r.leading,c=(m="maxWait"in r)?I(S(r.maxWait)||0,n):c,f="trailing"in r?!!r.trailing:f),g.cancel=function(){void 0!==d&&clearTimeout(d),u=0,o=s=a=d=void 0},g.flush=function(){return void 0===d?l:v(i())},g};const O=function(e,n,r){var o=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return t(r)&&(o="leading"in r?!!r.leading:o,a="trailing"in r?!!r.trailing:a),L(e,n,{leading:o,maxWait:n,trailing:a})};var M=n(960),B=n.n(M),N=n(81),q=n.n(N),z=n(443),$=n.n(z),P=n(120),H=n.n(P),U=n(628),R=n.n(U),_=n(849),F=n.n(_),J=n(696),W={};W.styleTagTransform=F(),W.setAttributes=H(),W.insert=$().bind(null,"head"),W.domAPI=q(),W.insertStyleElement=R();B()(J.A,W);J.A&&J.A.locals&&J.A.locals;const D=()=>{if(location.pathname.includes("/console")){const t=setInterval((()=>{if(!document.getElementsByClassName("console-output"))return;const n=document.getElementsByClassName("console-output")[0].textContent||"",r=n.match(/imageName *= *(itg-dtc-docker\.pkg\.coding\.net\/.*\d+)\n/)?.[1];if(r&&document.getElementById("main-panel")){let n;clearInterval(t);const o=e('<button class="itg-web-enhancer-copy-docker">复制docker链接</button>');document.getElementById("main-panel").prepend(o),o.addEventListener("click",(e=>{const t=e.target,o=()=>{t.innerText="复制docker链接"};(async(e="")=>{if(navigator.clipboard?.writeText)await navigator.clipboard.writeText(e);else{const t=document.createElement("input");t.style.position="fixed",t.style.top="-10000px",t.style.zIndex="-999",t.style.opacity="0",document.body.appendChild(t),t.value=e,t.focus(),t.select(),document.execCommand("copy"),document.body.removeChild(t)}})(r).then((()=>{clearTimeout(n),t.innerText="复制成功！",n=setTimeout(o,3e3)})).catch((e=>{t.innerHTML="复制失败",console.error(e),n=setTimeout(o,3e3)}))}))}}),500)}else if("/"===location.pathname||location.pathname.includes("/view/")){const e=setInterval((()=>{if(document.getElementById("search-box")){clearInterval(e);const t=document.getElementById("projectstatus")||document.getElementById("projectStatus");if(!t)return;document.getElementById("search-box").addEventListener("input",O((e=>{const n=e.target,{value:r}=n;t.querySelectorAll("tbody>tr:has(.model-link)").forEach((e=>{e.querySelector('a.model-link[href*="job/"]')?.textContent?.includes(r)?e.style.display="":e.style.display="none"}))}),250))}}),500)}},Q=()=>{document.body.addEventListener("paste",(async e=>{const t=e.target;if(!t)return;if(!t.closest("#oTable0 tbody input.wf-input"))return;const n=await(async()=>navigator.clipboard?.readText?await navigator.clipboard.readText():new Promise((e=>{const t=document.createElement("textarea");document.body.appendChild(t),t.style.position="absolute",t.style.top="0",t.style.zIndex="-999",t.focus(),setTimeout((()=>{const n=t.value;e(n.trim()),document.body.removeChild(t)}),0)})))();if(n.indexOf("\t")>-1||n.indexOf("\n")>-1&&n.indexOf("\n")!==n.length-1){const e=n.split("\n").map((e=>e.split("\t"))),r=t.closest("tr"),o=t.closest("td"),a=[...r.parentNode.children].indexOf(r),i=[...o.parentNode.children].indexOf(o);e.forEach(((e,t)=>{e.forEach(((e,n)=>{document.querySelector("#oTable0 tbody").children[t+a].children[n+i].querySelector(":scope input").value=e}))}))}else t.value=n}))},G=({title:t,content:n,footer:r,size:o="medium",onConfirm:a,onCancel:i})=>{const c=e(`<div class="iew-modal iew-modal-${o}"></div>`),l=e('<div class="iew-modal-close">\n  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">\n  <line x1="18" y1="6" x2="6" y2="18"></line>\n  <line x1="6" y1="6" x2="18" y2="18"></line>\n  </svg></div>'),d=e('<header class="iew-modal-header"></header>'),s=e('<div class="iew-modal-content"></div>'),u=e('<div class="iew-modal-footer"></div>'),p=e('<button class="iew-modal-button iew-modal-button-confirm">确定</button>'),m=e('<button class="iew-modal-button iew-modal-button-cancel">取消</button>');let f=document.getElementById("iew-modal-wrapper");function h(){c.remove(),f&&(f.style.display="none")}return d.append(t),Array.isArray(n)?s.append(...n):s.append(n),c.append(l,d,s),r&&(Array.isArray(r)?(r.includes("cancel")&&u.appendChild(m),r.includes("confirm")&&u.appendChild(p)):u.append(r),c.appendChild(u)),p.addEventListener("click","function"==typeof a?a:h),m.addEventListener("click","function"==typeof i?i:h),l.addEventListener("click",h),{element:c,header:d,content:s,footer:u,confirmButton:p,cancelButton:m,get wrapper(){return f},close:h,open:function(){f?f.style.display="":(f=e('<div id="iew-modal-wrapper"></div>'),document.body.appendChild(f)),f.appendChild(c)}}};var K=n(703),V={};V.styleTagTransform=F(),V.setAttributes=H(),V.insert=$().bind(null,"head"),V.domAPI=q(),V.insertStyleElement=R();B()(K.A,V);K.A&&K.A.locals&&K.A.locals;const X=()=>{const t=e('<div id="iew-rancher-search-panel"></div>'),n=e('<div id="iew-rancher-search-buttons"></div>'),r=()=>{const e=localStorage.getItem("iew-rancher-buttons-setting");if(e)try{const t=JSON.parse(e);if(Array.isArray(t)&&t.every((e=>Array.isArray(e)&&e.every((e=>"string"==typeof e)))))return t}catch{}return null},o=t=>{var r;n.innerHTML="",t&&n.append(...(r=t,r.filter((([e,t])=>e.trim()&&t.trim())).map((([t,n])=>{const r=document.querySelector('.search-group>input[type="search"]'),o=e(`<a id="iew-search-${t}" class="btn btn-sm bg-primary">${t}</a>`);return o.addEventListener("click",(()=>{r.value=n,r.focus(),r.blur()})),o}))))},a=()=>{const t=e('<table id="iwe-rancher-settingtable">\n      <thead>\n      <tr>\n      <th>按钮文本</th>\n      <th>搜索文字</th>\n      <th class="add-row"><div class="add-row-button" title="新增一行"></div></th>\n      </tr>\n      </thead>\n      </table>'),n=document.createElement("tbody"),a=()=>{const t=e('<tr>\n        <td class="iew-rancher-buttontext"><input name="buttonText" /></td>\n        <td class="iew-rancher-searchtext"><input name="searchText" /></td>\n        <td class="remove-row"><div class="remove-row-button" title="删除本行"></div></td>\n        </tr>');return t.querySelector(".remove-row-button").addEventListener("click",(()=>t.remove())),n.appendChild(t),t};t.querySelector(".add-row-button").addEventListener("click",a),t.appendChild(n);const i=e('<button id="iew-rancher-search-setting" class="btn btn-sm bg-default" type="button">速搜设置</button>'),c=G({title:"快速搜索设置",content:t,footer:["confirm","cancel"],size:"medium",onConfirm:()=>{const e=[...n.children].map((e=>[...e.querySelectorAll("input")].map((e=>e.value))));(e=>{localStorage.setItem("iew-rancher-buttons-setting",JSON.stringify(e.filter((([e,t])=>e.trim()||t.trim()))))})(e),o(e),c.close()}});return i.addEventListener("click",(()=>{n.innerHTML="";const e=r();e?.length?(e=>{n.innerHTML="";for(const t of e)a().querySelectorAll("input").forEach(((e,n)=>{e.value=t[n]}))})(e):a(),c.open()})),i},i=()=>{const e=document.querySelector(".fixed-header-actions.row.clearfix");e&&!document.getElementById("iew-rancher-search-panel")&&(o(r()||[]),t.append(n,a()),e.append(t))},c=setInterval((()=>{document.querySelector(".fixed-header-actions.row.clearfix")&&!document.getElementById("iew-rancher-search-panel")&&(i(),clearInterval(c))}),500);document.body.addEventListener("click",i)};var Y=n(423),Z={};Z.styleTagTransform=F(),Z.setAttributes=H(),Z.insert=$().bind(null,"head"),Z.domAPI=q(),Z.insertStyleElement=R();B()(Y.A,Z);Y.A&&Y.A.locals&&Y.A.locals;switch(location.host){case"jenkins.itg.it.org.test":D();break;case"oa.itg.cn":Q();break;case"docker.itg.com.cn":X()}})()})();