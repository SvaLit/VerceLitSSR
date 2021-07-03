!function(i){"function"==typeof define&&define.amd?define(i):i()}((function(){"use strict";
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */var i,n,t=new Set,o=new Map;null!==(i=(n=globalThis).litHtmlPlatformSupport)&&void 0!==i||(n.litHtmlPlatformSupport=function(i,n){var v=window;if(void 0!==v.ShadyCSS&&(!v.ShadyCSS.nativeShadow||v.ShadyCSS.ApplyShim)){var e=function(i){var n=o.get(i);return void 0===n&&o.set(i,n=[]),n},r=new Map,u=i.createElement;i.createElement=function(n,t){var o=u.call(i,n,t),r=null==t?void 0:t.scope;if(void 0!==r){v.ShadyCSS.nativeShadow||v.ShadyCSS.prepareTemplateDom(o,r);var d=e(r),l=o.content.querySelectorAll("style");d.push.apply(d,Array.from(l).map((function(i){var n;return null===(n=i.parentNode)||void 0===n||n.removeChild(i),i.textContent})))}return o};var d=document.createDocumentFragment(),l=document.createComment(""),a=n.prototype,s=a.ΞI;a.ΞI=function(i,n){var r,u,a;void 0===n&&(n=this);var f,c=this.ΞA.parentNode,h=null===(r=this.options)||void 0===r?void 0:r.scope;if(c instanceof ShadowRoot&&void 0!==(f=h)&&!t.has(f)){var w=this.ΞA,y=this.ΞB;d.appendChild(l),this.ΞA=l,this.ΞB=null,s.call(this,i,n);var m=(null===(u=i)||void 0===u?void 0:u._$litType$)?this.ΞH.ΞD.el:document.createElement("template");if(function(i,n){var r=e(i),u=0!==r.length;if(u){var d=document.createElement("style");d.textContent=r.join("\n"),n.content.appendChild(d)}t.add(i),o.delete(i),v.ShadyCSS.prepareTemplateStyles(n,i),u&&v.ShadyCSS.nativeShadow&&n.content.appendChild(n.content.querySelector("style"))}(h,m),d.removeChild(l),null===(a=v.ShadyCSS)||void 0===a?void 0:a.nativeShadow){var p=m.content.querySelector("style");null!==p&&d.appendChild(p.cloneNode(!0))}c.insertBefore(d,y),this.ΞA=w,this.ΞB=y}else s.call(this,i,n)},a.ΞC=function(n){var t,o=null===(t=this.options)||void 0===t?void 0:t.scope,v=r.get(o);void 0===v&&r.set(o,v=new Map);var e=v.get(n.strings);return void 0===e&&v.set(n.strings,e=new i(n,this.options)),e}}})}));
//# sourceMappingURL=polyfill-support.js.map