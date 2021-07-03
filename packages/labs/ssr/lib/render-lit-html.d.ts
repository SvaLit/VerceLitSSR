/// <reference lib="dom" />
import { ElementRenderer, ElementRendererConstructor } from './element-renderer.js';
declare module 'parse5' {
    interface DefaultTreeElement {
        isDefinedCustomElement?: boolean;
    }
}
export declare type RenderInfo = {
    elementRenderers: ElementRendererConstructor[];
    customElementInstanceStack: Array<ElementRenderer | undefined>;
    customElementHostStack: Array<ElementRenderer | undefined>;
};
declare global {
    interface Array<T> {
        flat(depth: number): Array<T>;
    }
}
/**
 * Renders a lit-html template (or any renderable lit-html value) to a string
 * iterator. Any custom elements encountered will be rendered if a matching
 * ElementRenderer is found.
 *
 * This method is suitable for streaming the contents of the element.
 *
 * @param value Value to render
 * @param renderInfo Optional render context object that should be passed
 *   to any re-entrant calls to `render`, e.g. from a `renderShadow` callback
 *   on an ElementRenderer.
 */
export declare function render(value: unknown, renderInfo?: RenderInfo): IterableIterator<string>;
//# sourceMappingURL=render-lit-html.d.ts.map