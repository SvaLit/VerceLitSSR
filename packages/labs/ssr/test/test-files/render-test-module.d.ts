/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
import { LitElement, PropertyValues } from 'lit';
export { digestForTemplateResult } from 'lit/experimental-hydrate.js';
export { render } from '../../lib/render-lit-html.js';
export declare const simpleTemplateResult: import("lit-html").TemplateResult<1>;
export declare const templateWithTextExpression: (x: string) => import("lit-html").TemplateResult<1>;
export declare const templateWithAttributeExpression: (x: string) => import("lit-html").TemplateResult<1>;
export declare const templateWithMultipleAttributeExpressions: (x: string, y: string) => import("lit-html").TemplateResult<1>;
export declare const templateWithMultiBindingAttributeExpression: (x: string, y: string) => import("lit-html").TemplateResult<1>;
export declare const inputTemplateWithValueProperty: (x: string) => import("lit-html").TemplateResult<1>;
export declare const elementTemplateWithClassNameProperty: (x: string) => import("lit-html").TemplateResult<1>;
export declare const elementTemplateWithClassnameProperty: (x: string) => import("lit-html").TemplateResult<1>;
export declare const elementTemplateWithIDProperty: (x: string) => import("lit-html").TemplateResult<1>;
export declare const nestedTemplate: import("lit-html").TemplateResult<1>;
export declare class TestSimple extends LitElement {
    render(): import("lit-html").TemplateResult<1>;
}
export declare const simpleTemplateWithElement: import("lit-html").TemplateResult<1>;
export declare class TestProperty extends LitElement {
    foo?: string;
    render(): import("lit-html").TemplateResult<1>;
}
export declare const elementWithProperty: import("lit-html").TemplateResult<1>;
export declare class TestWillUpdate extends LitElement {
    first?: string;
    last?: string;
    fullName: string;
    willUpdate(changedProperties: PropertyValues): void;
    render(): import("lit-html").TemplateResult<1>;
}
export declare const elementWithWillUpdate: import("lit-html").TemplateResult<1>;
export declare const noSlot: import("lit-html").TemplateResult<1>;
export declare class TestSlot extends LitElement {
    render(): import("lit-html").TemplateResult<1>;
}
export declare const slotWithStaticChild: import("lit-html").TemplateResult<1>;
export declare const slotWithStaticChildren: import("lit-html").TemplateResult<1>;
export declare const slotWithDynamicChild: import("lit-html").TemplateResult<1>;
export declare const slotWithDynamicChildAndMore: import("lit-html").TemplateResult<1>;
export declare const slotWithReusedDynamicChild: import("lit-html").TemplateResult<1>;
export declare class TestTwoSlots extends LitElement {
    render(): import("lit-html").TemplateResult<1>;
}
export declare const twoSlotsWithStaticChildren: import("lit-html").TemplateResult<1>;
export declare const twoSlotsWithStaticChildrenOutOfOrder: import("lit-html").TemplateResult<1>;
export declare const twoSlotsWithDynamicChildren: import("lit-html").TemplateResult<1>;
export declare const twoSlotsWithDynamicChildrenOutOfOrder: import("lit-html").TemplateResult<1>;
export declare class TestDynamicSlot extends LitElement {
    renderSlot: boolean;
    render(): import("lit-html").TemplateResult<1>;
}
export declare const dynamicSlot: (renderSlot: boolean) => import("lit-html").TemplateResult<1>;
export declare class TestStyles extends LitElement {
    static styles: import("lit").CSSResult;
}
export declare const repeatDirectiveWithTemplateResult: import("lit-html").TemplateResult<1>;
export declare const repeatDirectiveWithString: import("lit-html").TemplateResult<1>;
export declare const classMapDirective: import("lit-html").TemplateResult<1>;
export declare const classMapDirectiveMultiBinding: import("lit-html").TemplateResult<1>;
export declare const nestedTemplateResult: import("lit-html").TemplateResult<1>;
export declare const trickyNestedDynamicChildren: import("lit-html").TemplateResult<1>;
//# sourceMappingURL=render-test-module.d.ts.map