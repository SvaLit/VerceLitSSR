/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
import { RenderOptions } from '../../lit-html.js';
export interface ShadyRenderOptions extends RenderOptions {
    scope?: string;
}
export declare const wrap: (node: Node) => Node;
export declare const shadowRoot: (element: Node) => ShadowRoot | null;
/**
 * A helper for creating a shadowRoot on an element.
 */
export declare const renderShadowRoot: (result: unknown, element: Element) => void;
//# sourceMappingURL=shadow-root.d.ts.map