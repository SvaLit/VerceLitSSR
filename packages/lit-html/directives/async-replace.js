import{noChange as t}from"../lit-html.js";import{directive as i}from"../directive.js";import{AsyncDirective as e}from"../async-directive.js";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const s=i(class extends e{render(i,e){return t}update(i,[e,s]){if(e!==this.U)return this.U=e,this.ΣY(s),t}async ΣY(t){let i=0;const{U:e}=this;for await(let s of e){if(this.U!==e)break;this.q&&await this.q,void 0!==t&&(s=t(s,i)),this.setValue(s),i++}}disconnected(){this.q=new Promise((t=>this.J=t))}reconnected(){this.q=void 0,this.J()}});export{s as asyncReplace};
//# sourceMappingURL=async-replace.js.map
