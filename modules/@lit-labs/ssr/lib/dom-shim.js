/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * This module *minimally* implements the DOM interfaces needed for lit-html and
 * LitElement to boot. Since most of the implementation of lit-html and
 * LitElement are not actually used, we mostly just need to defining base
 * classes for extension, etc. We will have a roughly functioning
 * CustomElementRegistry however.
 */
import fetch from 'node-fetch';
/**
 * Constructs a fresh instance of the "window" vm context to use for evaluating
 * user SSR code. Includes a minimal shim of DOM APIs.
 *
 * @param includeJSBuiltIns Whether certain standard JS context globals like
 *  `console` and `setTimeout` should also be added to the global. Should
 *  generally only be true when adding window to a fresh VM context that
 *  starts with nothing.
 * @param props Additional properties to add to the window global
 */
export const getWindow = ({ includeJSBuiltIns = false, props = {}, }) => {
    const attributes = new WeakMap();
    const attributesForElement = (element) => {
        let attrs = attributes.get(element);
        if (!attrs) {
            attributes.set(element, (attrs = new Map()));
        }
        return attrs;
    };
    class Element {
    }
    class HTMLElement extends Element {
        get attributes() {
            return Array.from(attributesForElement(this)).map(([name, value]) => ({
                name,
                value,
            }));
        }
        setAttribute(name, value) {
            attributesForElement(this).set(name, value);
        }
        removeAttribute(name) {
            attributesForElement(this).delete(name);
        }
        hasAttribute(name) {
            return attributesForElement(this).has(name);
        }
        attachShadow() {
            return { host: this };
        }
        getAttribute(name) {
            const value = attributesForElement(this).get(name);
            return value === undefined ? null : value;
        }
    }
    class ShadowRoot {
    }
    class Document {
        get adoptedStyleSheets() {
            return [];
        }
        createTreeWalker() {
            return {};
        }
        createTextNode() {
            return {};
        }
        createElement() {
            return {};
        }
    }
    class CSSStyleSheet {
        replace() { }
    }
    class CustomElementRegistry {
        constructor() {
            this.__definitions = new Map();
        }
        define(name, ctor) {
            this.__definitions.set(name, {
                ctor,
                observedAttributes: ctor.observedAttributes ?? [],
            });
        }
        get(name) {
            const definition = this.__definitions.get(name);
            return definition && definition.ctor;
        }
    }
    const window = {
        Element,
        HTMLElement,
        Document,
        document: new Document(),
        CSSStyleSheet,
        ShadowRoot,
        CustomElementRegistry,
        customElements: new CustomElementRegistry(),
        btoa(s) {
            return Buffer.from(s, 'binary').toString('base64');
        },
        fetch: (url, init) => fetch(url, init),
        location: new URL('http://localhost'),
        MutationObserver: class {
            observe() { }
        },
        // No-op any async tasks
        requestAnimationFrame() { },
        // Set below
        window: undefined,
        global: undefined,
        // User-provided globals, like `require`
        ...props,
    };
    window.window = window;
    window.global = window; // Required for node-fetch
    if (includeJSBuiltIns) {
        Object.assign(window, {
            // No-op any async tasks
            setTimeout() { },
            clearTimeout() { },
            // Required for node-fetch
            Buffer,
            console: {
                log(...args) {
                    console.log(...args);
                },
                info(...args) {
                    console.info(...args);
                },
                warn(...args) {
                    console.warn(...args);
                },
                debug(...args) {
                    console.debug(...args);
                },
                error(...args) {
                    console.error(...args);
                },
                assert(bool, msg) {
                    if (!bool) {
                        throw new Error(msg);
                    }
                },
            },
        });
    }
    return window;
};
export const installWindowOnGlobal = (props = {}) => {
    // Avoid installing the DOM shim if one already exists
    if (globalThis.window === undefined) {
        const window = getWindow({ props });
        // Setup window to proxy all globals added to window to the node global
        window.window = new Proxy(window, {
            set(_target, p, value) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                window[p] = globalThis[p] = value;
                return true;
            },
        });
        // Copy initial window globals to node global
        Object.assign(globalThis, window);
    }
};
//# sourceMappingURL=dom-shim.js.map