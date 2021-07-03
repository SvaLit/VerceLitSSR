/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, nothing } from 'lit';
import { repeat } from 'lit/directives/repeat.js';
import { classMap } from 'lit/directives/class-map.js';
import { LitElement, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';
export { digestForTemplateResult } from 'lit/experimental-hydrate.js';
export { render } from '../../lib/render-lit-html.js';
/* Real Tests */
// prettier-ignore
export const simpleTemplateResult = html `<div></div>`;
/* Text Expressions */
// prettier-ignore
export const templateWithTextExpression = (x) => html `<div>${x}</div>`;
/* Attribute Expressions */
// prettier-ignore
export const templateWithAttributeExpression = (x) => html `<div class=${x}></div>`;
// prettier-ignore
export const templateWithMultipleAttributeExpressions = (x, y) => html `<div x=${x} y=${y} z="not-dynamic"></div>`;
// prettier-ignore
export const templateWithMultiBindingAttributeExpression = (x, y) => html `<div test="a ${x} b ${y} c"></div>`;
/* Reflected Property Expressions */
// prettier-ignore
export const inputTemplateWithValueProperty = (x) => html `<input .value=${x}>`;
// prettier-ignore
export const elementTemplateWithClassNameProperty = (x) => html `<div .className=${x}></div>`;
// prettier-ignore
export const elementTemplateWithClassnameProperty = (x) => html `<div .classname=${x}></div>`;
// prettier-ignore
export const elementTemplateWithIDProperty = (x) => html `<div .id=${x}></div>`;
/* Nested Templates */
// prettier-ignore
export const nestedTemplate = html `<div>${html `<p>Hi</p>`}</div>`;
/* Custom Elements */
let TestSimple = class TestSimple extends LitElement {
    render() {
        // prettier-ignore
        return html `<main></main>`;
    }
};
TestSimple = __decorate([
    customElement('test-simple')
], TestSimple);
export { TestSimple };
// prettier-ignore
export const simpleTemplateWithElement = html `<test-simple></test-simple>`;
let TestProperty = class TestProperty extends LitElement {
    render() {
        // prettier-ignore
        return html `<main>${this.foo}</main>`;
    }
};
__decorate([
    property()
], TestProperty.prototype, "foo", void 0);
TestProperty = __decorate([
    customElement('test-property')
], TestProperty);
export { TestProperty };
// prettier-ignore
export const elementWithProperty = html `<test-property .foo=${'bar'}></test-property>`;
let TestWillUpdate = class TestWillUpdate extends LitElement {
    constructor() {
        super(...arguments);
        this.fullName = '';
    }
    willUpdate(changedProperties) {
        if (changedProperties.has('first') || changedProperties.has('last')) {
            this.fullName = `${this.first} ${this.last}`;
        }
    }
    render() {
        // prettier-ignore
        return html `<main>${this.fullName}</main>`;
    }
};
__decorate([
    property()
], TestWillUpdate.prototype, "first", void 0);
__decorate([
    property()
], TestWillUpdate.prototype, "last", void 0);
TestWillUpdate = __decorate([
    customElement('test-will-update')
], TestWillUpdate);
export { TestWillUpdate };
// prettier-ignore
export const elementWithWillUpdate = html `<test-will-update .first=${'Foo'} .last=${'Bar'}></test-will-update>`;
/* Slots and Distribution */
// prettier-ignore
export const noSlot = html `<test-simple><p>Hi</p></test-simple>`;
let TestSlot = class TestSlot extends LitElement {
    render() {
        // prettier-ignore
        return html `<main><slot></slot></main>`;
    }
};
TestSlot = __decorate([
    customElement('test-simple-slot')
], TestSlot);
export { TestSlot };
// prettier-ignore
export const slotWithStaticChild = html `<test-simple-slot><p>Hi</p></test-simple-slot>`;
// prettier-ignore
export const slotWithStaticChildren = html `<test-simple-slot><h1>Yo</h1><p>Hi</p></test-simple-slot>`;
// prettier-ignore
const dynamicChild = html `<p>Hi</p>`;
// prettier-ignore
export const slotWithDynamicChild = html `<test-simple-slot>${dynamicChild}</test-simple-slot>`;
// prettier-ignore
export const slotWithDynamicChildAndMore = html `<test-simple-slot>${dynamicChild}</test-simple-slot>${42}`;
// prettier-ignore
export const slotWithReusedDynamicChild = html `<test-simple-slot>${dynamicChild}</test-simple-slot>${dynamicChild}`;
let TestTwoSlots = class TestTwoSlots extends LitElement {
    render() {
        // prettier-ignore
        return html `<main><slot></slot></main>
      <slot name="a"></slot>`;
    }
};
TestTwoSlots = __decorate([
    customElement('test-two-slots')
], TestTwoSlots);
export { TestTwoSlots };
// prettier-ignore
export const twoSlotsWithStaticChildren = html `<test-two-slots><h1>Yo</h1><p slot="a">Hi</p></test-two-slots>`;
// prettier-ignore
export const twoSlotsWithStaticChildrenOutOfOrder = html `<test-two-slots><p slot="a">Hi</p><h1>Yo</h1></test-two-slots>`;
// prettier-ignore
export const twoSlotsWithDynamicChildren = html `<test-two-slots>${html `<h1>Yo</h1><p slot="a">Hi</p>`}</test-two-slots>`;
// prettier-ignore
export const twoSlotsWithDynamicChildrenOutOfOrder = html `<test-two-slots>${html `<p slot="a">Hi</p><h1>Yo</h1>`}</test-two-slots>`;
let TestDynamicSlot = class TestDynamicSlot extends LitElement {
    constructor() {
        super(...arguments);
        this.renderSlot = true;
    }
    render() {
        // prettier-ignore
        return html `${this.renderSlot ? html `<slot></slot>` : nothing}`;
    }
};
__decorate([
    property({ type: Boolean })
], TestDynamicSlot.prototype, "renderSlot", void 0);
TestDynamicSlot = __decorate([
    customElement('test-dynamic-slot')
], TestDynamicSlot);
export { TestDynamicSlot };
// prettier-ignore
export const dynamicSlot = (renderSlot) => html `<test-dynamic-slot .renderSlot=${renderSlot}><p>Hi</p></test-dynamic-slot>`;
let TestStyles = class TestStyles extends LitElement {
};
TestStyles.styles = css `
    :host {
      display: block;
    }
  `;
TestStyles = __decorate([
    customElement('test-styles')
], TestStyles);
export { TestStyles };
/* Directives */
// prettier-ignore
export const repeatDirectiveWithTemplateResult = html `<div>${repeat(['foo', 'bar', 'qux'], (name, i) => html `<p>${i}) ${name}</p>`)}</div>`;
// prettier-ignore
export const repeatDirectiveWithString = html `${repeat(['foo', 'bar', 'qux'], (name) => name)}`;
// prettier-ignore
export const classMapDirective = html `<div class="${classMap({ a: true, b: false, c: true })}"></div>`;
// prettier-ignore
export const classMapDirectiveMultiBinding = html `<div class="z ${'hi'} ${classMap({ a: true, b: false, c: true })}"></div>`;
// Tests to do:
//  - simple template, no expressions
//  - simple template, text expressions
//  - simple template, attribute expressions
//  - compound template
//  - hydration of above
//  - template w/ custom element, no expressions
//  - template w/ custom element, expressions in outer and element templates
//  - template w/ custom element, <slot>, static children in outer template
//  - template w/ custom element, named <slot>, static children in outer template
//  - template w/ custom element, named <slot>, children in nested template
//  - dynamic <slot>s
// This setup tests
//  - that we render and slot children from deeply nested templates
//  - that we keep distributed node state per TemplateResult _value_, not per
//    TemplateResult, because of the reuse of the inner result.
// prettier-ignore
export const nestedTemplateResult = html `<div></div>`;
// prettier-ignore
export const trickyNestedDynamicChildren = html `<test-simple-slot
  >${html `${nestedTemplateResult}${nestedTemplateResult}`}</test-simple-slot
>`;
//# sourceMappingURL=render-test-module.js.map