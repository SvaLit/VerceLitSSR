/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var _a;
import { ReactiveElement } from '../reactive-element.js';
let count = 0;
export const generateElementName = () => `x-${count++}`;
export const nextFrame = () => new Promise((resolve) => requestAnimationFrame(resolve));
const extraGlobals = window;
export const getComputedStyleValue = (element, property) => extraGlobals.ShadyCSS
    ? extraGlobals.ShadyCSS.getComputedStyleValue(element, property)
    : getComputedStyle(element).getPropertyValue(property);
export const stripExpressionComments = (html) => html.replace(/<!--\?lit\$[0-9]+\$-->|<!---->/g, '');
// Only test if ShadowRoot is available and either ShadyDOM is not
// in use or it is and platform support is available.
export const canTestReactiveElement = (window.ShadowRoot && !((_a = extraGlobals.ShadyDOM) === null || _a === void 0 ? void 0 : _a.inUse)) ||
    extraGlobals.reactiveElementPlatformSupport;
export class RenderingElement extends ReactiveElement {
    render() {
        return '';
    }
    update(changedProperties) {
        const result = this.render();
        super.update(changedProperties);
        if (result !== undefined) {
            // Note, don't use `innerHTML` here to avoid a polyfill issue
            // where `innerHTML` is not patched by CE on shadowRoot.
            // https://github.com/webcomponents/custom-elements/issues/73
            Array.from(this.renderRoot.childNodes).forEach((e) => {
                // Leave any style elements that might be simulating
                // adoptedStylesheets
                if (e.localName !== 'style') {
                    this.renderRoot.removeChild(e);
                }
            });
            const div = document.createElement('div');
            div.innerHTML = result;
            const ref = this.renderRoot.firstChild;
            Array.from(div.childNodes).forEach((e) => {
                this.renderRoot.insertBefore(e, ref);
            });
        }
    }
}
export const html = (strings, ...values) => {
    return values.reduce((a, v, i) => a + v + strings[i + 1], strings[0]);
};
//# sourceMappingURL=test-helpers.js.map