import{noChange as t}from"../lit-html.js";import{directive as s,Directive as r,PartType as i}from"../directive.js";
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const e=s(class extends r{constructor(t){var s;if(super(t),t.type!==i.ATTRIBUTE||"class"!==t.name||(null===(s=t.strings)||void 0===s?void 0:s.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).filter((s=>t[s])).join(" ")}update(s,[r]){if(void 0===this.VERSION_TEST_tt){this.VERSION_TEST_tt=new Set;for(const t in r)r[t]&&this.VERSION_TEST_tt.add(t);return this.render(r)}const i=s.element.classList;this.VERSION_TEST_tt.forEach((t=>{t in r||(i.remove(t),this.VERSION_TEST_tt.delete(t))}));for(const t in r){const s=!!r[t];s!==this.VERSION_TEST_tt.has(t)&&(s?(i.add(t),this.VERSION_TEST_tt.add(t)):(i.remove(t),this.VERSION_TEST_tt.delete(t)))}return t}});export{e as classMap};
//# sourceMappingURL=class-map.js.map
