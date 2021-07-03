/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
import { LitElement } from 'lit';
export declare const initialData: {
    name: string;
    message: string;
    items: string[];
    prop: string;
    attr: string;
    wasUpdated: boolean;
};
export declare class MyElement extends LitElement {
    static styles: import("lit").CSSResult;
    prop: string;
    attr: string;
    wasUpdated: boolean;
    private fetchController;
    render(): import("lit-html").TemplateResult<1>;
}
export declare const header: (name: string) => import("lit-html").TemplateResult<1>;
export declare const template: (data: {
    name: string;
    message: string;
    items: Array<string>;
    prop: string;
    attr: string;
    wasUpdated: boolean;
}) => import("lit-html").TemplateResult<1>;
export declare function renderApp(body: () => Iterable<string>): Generator<string, void, undefined>;
//# sourceMappingURL=template.d.ts.map