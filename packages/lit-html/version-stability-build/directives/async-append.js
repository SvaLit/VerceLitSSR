import{noChange as t}from"../lit-html.js";import{directive as e,PartType as i}from"../directive.js";import{AsyncDirective as s}from"../async-directive.js";import{clearPart as r,insertPart as o,setChildPartValue as n}from"../directive-helpers.js";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const c=e(class extends s{constructor(t){if(super(t),t.type!==i.CHILD)throw Error("asyncAppend can only be used in child expressions")}render(e,i){return t}update(e,[i,s]){if(i!==this.VERSION_TEST_U)return this.VERSION_TEST_U=i,this.VERSION_TEST_ΣY(e,s),t}async VERSION_TEST_ΣY(t,e){let i=0;const{VERSION_TEST_U:s}=this;for await(let c of s){if(this.VERSION_TEST_U!==s)break;this.VERSION_TEST_q&&await this.VERSION_TEST_q,0===i&&r(t),void 0!==e&&(c=e(c,i));const h=o(t);n(h,c),i++}}disconnected(){this.VERSION_TEST_q=new Promise((t=>this.VERSION_TEST_J=t))}reconnected(){this.VERSION_TEST_q=void 0,this.VERSION_TEST_J()}});export{c as asyncAppend};
//# sourceMappingURL=async-append.js.map
