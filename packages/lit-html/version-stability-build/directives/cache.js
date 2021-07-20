import{render as t,nothing as i}from"../lit-html.js";import{directive as s,Directive as e}from"../directive.js";import{isTemplateResult as o,getCommittedValue as r,setCommittedValue as h,insertPart as n,clearPart as c}from"../directive-helpers.js";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const d=s(class extends e{constructor(t){super(t),this.VERSION_TEST_J=new WeakMap}render(t){return[t]}update(s,[e]){if(o(this.VERSION_TEST_G)&&(!o(e)||this.VERSION_TEST_G.strings!==e.strings)){const e=r(s).pop();let o=this.VERSION_TEST_J.get(this.VERSION_TEST_G.strings);if(void 0===o){const s=document.createDocumentFragment();o=t(i,s),this.VERSION_TEST_J.set(this.VERSION_TEST_G.strings,o)}h(o,[e]),n(o,void 0,e),e.setConnected(!1)}if(o(e)){if(!o(this.VERSION_TEST_G)||this.VERSION_TEST_G.strings!==e.strings){const t=this.VERSION_TEST_J.get(e.strings);if(void 0!==t){const i=r(t).pop();c(s),n(s,void 0,i),h(s,[i]),i.setConnected(!0)}}this.VERSION_TEST_G=e}else this.VERSION_TEST_G=void 0;return this.render(e)}});export{d as cache};
//# sourceMappingURL=cache.js.map
