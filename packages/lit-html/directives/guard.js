import{noChange as r}from"../lit-html.js";import{directive as t,Directive as s}from"../directive.js";
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e={},i=t(class extends s{constructor(){super(...arguments),this.tt=e}render(r,t){return t()}update(t,[s,e]){if(Array.isArray(s)){if(Array.isArray(this.tt)&&this.tt.length===s.length&&s.every(((r,t)=>r===this.tt[t])))return r}else if(this.tt===s)return r;return this.tt=Array.isArray(s)?Array.from(s):s,this.render(s,e)}});export{i as guard};
//# sourceMappingURL=guard.js.map
