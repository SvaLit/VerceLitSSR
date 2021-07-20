import{noChange as t}from"../lit-html.js";import{directive as i}from"../directive.js";import{AsyncDirective as e}from"../async-directive.js";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const s=i(class extends e{render(i,e){return t}update(i,[e,s]){if(e!==this.G)return this.G=e,this._$CK(s),t}async _$CK(t){let i=0;const{G:e}=this;for await(let s of e){if(this.G!==e)break;this.U&&await this.U,void 0!==t&&(s=t(s,i)),this.setValue(s),i++}}disconnected(){this.U=new Promise((t=>this.Y=t))}reconnected(){this.U=void 0,this.Y()}});export{s as asyncReplace};
//# sourceMappingURL=async-replace.js.map
