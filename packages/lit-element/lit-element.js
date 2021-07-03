import{ReactiveElement as t}from"@lit/reactive-element";export*from"@lit/reactive-element";import{render as e,noChange as r}from"lit-html";export*from"lit-html";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l,o,i,s,n,c;const a=t;(null!==(l=(c=globalThis).litElementVersions)&&void 0!==l?l:c.litElementVersions=[]).push("3.0.0-rc.2");class h extends t{constructor(){super(...arguments),this.renderOptions={host:this},this.Φt=void 0}createRenderRoot(){var t,e;const r=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=r.firstChild),r}update(t){const r=this.render();super.update(t),this.Φt=e(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!1)}render(){return r}}h.finalized=!0,h._$litElement$=!0,null===(i=(o=globalThis).litElementHydrateSupport)||void 0===i||i.call(o,{LitElement:h}),null===(n=(s=globalThis).litElementPlatformSupport)||void 0===n||n.call(s,{LitElement:h});const u={ΞK:(t,e,r)=>{t.ΞK(e,r)},ΞL:t=>t.ΞL,ΞU:t=>t.ΞU};export{h as LitElement,a as UpdatingElement,u as _Φ};
//# sourceMappingURL=lit-element.js.map
