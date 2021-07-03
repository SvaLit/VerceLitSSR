import{noChange as t}from"../lit-html.js";import{directive as e,PartType as i}from"../directive.js";import{AsyncDirective as s}from"../async-directive.js";import{clearPart as r,insertPart as o,setChildPartValue as n}from"../directive-helpers.js";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const c=e(class extends s{constructor(t){if(super(t),t.type!==i.CHILD)throw Error("asyncAppend can only be used in child expressions")}render(e,i){return t}update(e,[i,s]){if(i!==this.U)return this.U=i,this.ΣY(e,s),t}async ΣY(t,e){let i=0;const{U:s}=this;for await(let c of s){if(this.U!==s)break;this.q&&await this.q,0===i&&r(t),void 0!==e&&(c=e(c,i));const h=o(t);n(h,c),i++}}disconnected(){this.q=new Promise((t=>this.J=t))}reconnected(){this.q=void 0,this.J()}});export{c as asyncAppend};
//# sourceMappingURL=async-append.js.map
