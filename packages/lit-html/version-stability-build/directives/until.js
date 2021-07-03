import{noChange as t}from"../lit-html.js";import{directive as s}from"../directive.js";import{isPrimitive as r}from"../directive-helpers.js";import{AsyncDirective as i}from"../async-directive.js";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const e=t=>!r(t)&&"function"==typeof t.then;class o extends i{constructor(){super(...arguments),this.VERSION_TEST_at=2147483647,this.VERSION_TEST_vt=[]}render(...s){var r;return null!==(r=s.find((t=>!e(t))))&&void 0!==r?r:t}update(s,r){const i=this.VERSION_TEST_vt;let o=i.length;this.VERSION_TEST_vt=r;for(let t=0;t<r.length&&!(t>this.VERSION_TEST_at);t++){const s=r[t];if(!e(s))return this.VERSION_TEST_at=t,s;t<o&&s===i[t]||(this.VERSION_TEST_at=2147483647,o=0,Promise.resolve(s).then((t=>{const r=this.VERSION_TEST_vt.indexOf(s);r>-1&&r<this.VERSION_TEST_at&&(this.VERSION_TEST_at=r,this.setValue(t))})))}return t}}const n=s(o);export{o as UntilDirective,n as until};
//# sourceMappingURL=until.js.map
