/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var _a;
let count = 0;
export const generateElementName = () => `x-${count++}`;
export const nextFrame = () => new Promise((resolve) => requestAnimationFrame(resolve));
const extraGlobals = window;
export const getComputedStyleValue = (element, property) => extraGlobals.ShadyCSS
    ? extraGlobals.ShadyCSS.getComputedStyleValue(element, property)
    : getComputedStyle(element).getPropertyValue(property);
export const stripExpressionComments = (html) => html.replace(/<!--\?lit\$[0-9]+\$-->|<!--\??-->/g, '');
// Only test LitElement if ShadowRoot is available and either ShadyDOM is not
// in use or it is and LitElement platform support is available.
export const canTestLitElement = (window.ShadowRoot && !((_a = extraGlobals.ShadyDOM) === null || _a === void 0 ? void 0 : _a.inUse)) ||
    extraGlobals.litElementPlatformSupport;
//# sourceMappingURL=test-helpers.js.map