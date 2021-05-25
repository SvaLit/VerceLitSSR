/// <reference lib="dom" />
import { createRequire } from 'module';
// const require = createRequire(import.meta.url);
// eslint-disable-next-line @typescript-eslint/no-var-requires
const escapeHtml = require('escape-html');
export const getElementRenderer = ({ elementRenderers }, tagName, ceClass = customElements.get(tagName), attributes = new Map()) => {
    if (ceClass === undefined) {
        console.warn(`Custom element ${tagName} was not registered.`);
        return;
    }
    // TODO(kschaaf): Should we implement a caching scheme, e.g. keyed off of
    // ceClass's base class to prevent O(n) lookups for every element (probably
    // not a concern for the small number of element renderers we'd expect)? Doing
    // so would preclude having cross-cutting renderers to e.g. no-op render all
    // custom elements with a `client-only` attribute, so punting for now.
    for (const renderer of elementRenderers) {
        if (renderer.matchesClass(ceClass, tagName, attributes)) {
            return new renderer(tagName);
        }
    }
    return undefined;
};
/**
 * An object that renders elements of a certain type.
 */
export class ElementRenderer {
    constructor(tagName) {
        this.tagName = tagName;
    }
    /**
     * Should be implemented to return true when the given custom element class
     * and/or tagName should be handled by this renderer.
     *
     * @param ceClass - Custom Element class
     * @param tagName - Tag name of custom element instance
     * @param attributes - Map of attribute key/value pairs
     * @returns
     */
    static matchesClass(_ceClass, _tagName, _attributes) {
        return false;
    }
    /**
     * Handles setting a property.
     *
     * Default implementation sets the property on the renderer's element instance.
     *
     * @param name Name of the property
     * @param value Value of the property
     */
    setProperty(name, value) {
        if (this.element !== undefined) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            this.element[name] = value;
        }
    }
    /**
     * Handles setting an attribute on an element.
     *
     * Default implementation calls `setAttribute` on the renderer's element
     * instance, and calls the abstract `attributeChangedCallback` on the
     * renderer.
     *
     * @param name Name of the attribute
     * @param value Value of the attribute
     */
    setAttribute(name, value) {
        if (this.element !== undefined) {
            const old = this.element.getAttribute(name);
            this.element.setAttribute(name, value);
            this.attributeChangedCallback(name, old, value);
        }
    }
    /**
     * Render an element's attributes.
     *
     * Default implementation serializes all attributes on the element instance.
     */
    *renderAttributes() {
        if (this.element !== undefined) {
            const { attributes } = this.element;
            for (let i = 0, name, value; i < attributes.length && ({ name, value } = attributes[i]); i++) {
                if (value === '') {
                    yield ` ${name}`;
                }
                else {
                    yield ` ${name}="${escapeHtml(value)}"`;
                }
            }
        }
    }
}
//# sourceMappingURL=element-renderer.js.map
