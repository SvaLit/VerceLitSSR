import{noChange as t}from"../lit-html.js";import{directive as i}from"../directive.js";import{AsyncDirective as e}from"../async-directive.js";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const s=i(class extends e{render(i,e){return t}update(i,[e,s]){if(e!==this.VERSION_TEST_G)return this.VERSION_TEST_G=e,this.VERSION_TEST__$CK(s),t}async VERSION_TEST__$CK(t){let i=0;const{VERSION_TEST_G:e}=this;for await(let s of e){if(this.VERSION_TEST_G!==e)break;this.VERSION_TEST_U&&await this.VERSION_TEST_U,void 0!==t&&(s=t(s,i)),this.setValue(s),i++}}disconnected(){this.VERSION_TEST_U=new Promise((t=>this.VERSION_TEST_Y=t))}reconnected(){this.VERSION_TEST_U=void 0,this.VERSION_TEST_Y()}});export{s as asyncReplace};
//# sourceMappingURL=async-replace.js.map
