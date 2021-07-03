import{nothing as t,noChange as i}from"../lit-html.js";import{Directive as r,PartType as s,directive as e}from"../directive.js";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class n extends r{constructor(i){if(super(i),this.U=t,i.type!==s.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(r){if(r===t)return this.ut=void 0,this.U=r;if(r===i)return r;if("string"!=typeof r)throw Error(this.constructor.directiveName+"() called with a non-string value");if(r===this.U)return this.ut;this.U=r;const s=[r];return s.raw=s,this.ut={_$litType$:this.constructor.resultType,strings:s,values:[]}}}n.directiveName="unsafeHTML",n.resultType=1;const o=e(n);export{n as UnsafeHTMLDirective,o as unsafeHTML};
//# sourceMappingURL=unsafe-html.js.map
