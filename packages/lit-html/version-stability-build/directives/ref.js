import{nothing as t}from"../lit-html.js";import{AsyncDirective as i}from"../async-directive.js";import{directive as s}from"../directive.js";
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const e=()=>new o;class o{}const h=new WeakMap,n=s(class extends i{render(i){return t}update(i,[s]){var e;const o=s!==this.VERSION_TEST_st;return o&&void 0!==this.VERSION_TEST_st&&this.VERSION_TEST_et(void 0),(o||this.VERSION_TEST_ot!==this.VERSION_TEST_nt)&&(this.VERSION_TEST_st=s,this.VERSION_TEST_rt=null===(e=i.options)||void 0===e?void 0:e.host,this.VERSION_TEST_et(this.VERSION_TEST_nt=i.element)),t}VERSION_TEST_et(t){"function"==typeof this.VERSION_TEST_st?(void 0!==h.get(this.VERSION_TEST_st)&&this.VERSION_TEST_st.call(this.VERSION_TEST_rt,void 0),h.set(this.VERSION_TEST_st,t),void 0!==t&&this.VERSION_TEST_st.call(this.VERSION_TEST_rt,t)):this.VERSION_TEST_st.value=t}get VERSION_TEST_ot(){var t;return"function"==typeof this.VERSION_TEST_st?h.get(this.VERSION_TEST_st):null===(t=this.VERSION_TEST_st)||void 0===t?void 0:t.value}disconnected(){this.VERSION_TEST_ot===this.VERSION_TEST_nt&&this.VERSION_TEST_et(void 0)}reconnected(){this.VERSION_TEST_et(this.VERSION_TEST_nt)}});export{e as createRef,n as ref};
//# sourceMappingURL=ref.js.map
