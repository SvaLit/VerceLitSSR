import{noChange as r}from"../lit-html.js";import{directive as t,Directive as s}from"../directive.js";
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e={},i=t(class extends s{constructor(){super(...arguments),this.it=e}render(r,t){return t()}update(t,[s,e]){if(Array.isArray(s)){if(Array.isArray(this.it)&&this.it.length===s.length&&s.every(((r,t)=>r===this.it[t])))return r}else if(this.it===s)return r;return this.it=Array.isArray(s)?Array.from(s):s,this.render(s,e)}});export{i as guard};
//# sourceMappingURL=guard.js.map
