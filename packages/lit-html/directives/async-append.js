import{noChange as t}from"../lit-html.js";import{directive as e,PartType as i}from"../directive.js";import{AsyncDirective as s}from"../async-directive.js";import{clearPart as r,insertPart as o,setChildPartValue as n}from"../directive-helpers.js";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const c=e(class extends s{constructor(t){if(super(t),t.type!==i.CHILD)throw Error("asyncAppend can only be used in child expressions")}render(e,i){return t}update(e,[i,s]){if(i!==this.G)return this.G=i,this._$CK(e,s),t}async _$CK(t,e){let i=0;const{G:s}=this;for await(let c of s){if(this.G!==s)break;this.U&&await this.U,0===i&&r(t),void 0!==e&&(c=e(c,i));const h=o(t);n(h,c),i++}}disconnected(){this.U=new Promise((t=>this.Y=t))}reconnected(){this.U=void 0,this.Y()}});export{c as asyncAppend};
//# sourceMappingURL=async-append.js.map
