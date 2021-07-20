import{nothing as t}from"../lit-html.js";import{AsyncDirective as i}from"../async-directive.js";import{directive as s}from"../directive.js";
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const e=()=>new o;class o{}const h=new WeakMap,n=s(class extends i{render(i){return t}update(i,[s]){var e;const o=s!==this.it;return o&&void 0!==this.it&&this.st(void 0),(o||this.et!==this.ot)&&(this.it=s,this.nt=null===(e=i.options)||void 0===e?void 0:e.host,this.st(this.ot=i.element)),t}st(t){"function"==typeof this.it?(void 0!==h.get(this.it)&&this.it.call(this.nt,void 0),h.set(this.it,t),void 0!==t&&this.it.call(this.nt,t)):this.it.value=t}get et(){var t;return"function"==typeof this.it?h.get(this.it):null===(t=this.it)||void 0===t?void 0:t.value}disconnected(){this.et===this.ot&&this.st(void 0)}reconnected(){this.st(this.ot)}});export{e as createRef,n as ref};
//# sourceMappingURL=ref.js.map
