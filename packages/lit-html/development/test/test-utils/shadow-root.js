/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
import { render } from '../../lit-html.js';
const extraGlobals = window;
export const wrap = extraGlobals.ShadyDOM &&
    extraGlobals.ShadyDOM.inUse &&
    extraGlobals.ShadyDOM.noPatch === true
    ? extraGlobals.ShadyDOM.wrap
    : (node) => node;
export const shadowRoot = (element) => wrap(element).shadowRoot;
/**
 * A helper for creating a shadowRoot on an element.
 */
export const renderShadowRoot = (result, element) => {
    if (!wrap(element).shadowRoot) {
        wrap(element).attachShadow({ mode: 'open' });
    }
    render(result, wrap(element).shadowRoot, {
        scope: element.localName,
    });
};
//# sourceMappingURL=shadow-root.js.map