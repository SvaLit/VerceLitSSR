import{nothing as t}from"../lit-html.js";import{AsyncDirective as i}from"../async-directive.js";import{directive as s}from"../directive.js";
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const e=()=>new o;class o{}const h=new WeakMap,n=s(class extends i{render(i){return t}update(i,[s]){var e;const o=s!==this.st;return o&&void 0!==this.st&&this.et(void 0),(o||this.ot!==this.nt)&&(this.st=s,this.rt=null===(e=i.options)||void 0===e?void 0:e.host,this.et(this.nt=i.element)),t}et(t){"function"==typeof this.st?(void 0!==h.get(this.st)&&this.st.call(this.rt,void 0),h.set(this.st,t),void 0!==t&&this.st.call(this.rt,t)):this.st.value=t}get ot(){var t;return"function"==typeof this.st?h.get(this.st):null===(t=this.st)||void 0===t?void 0:t.value}disconnected(){this.ot===this.nt&&this.et(void 0)}reconnected(){this.et(this.nt)}});export{e as createRef,n as ref};
//# sourceMappingURL=ref.js.map
