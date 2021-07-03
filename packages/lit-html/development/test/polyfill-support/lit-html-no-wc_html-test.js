/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
import '../../polyfill-support.js';
import { html, render } from '../../lit-html.js';
import { assert } from '@esm-bundle/chai';
suite('shady-render without Shadow DOM or Custom Elements', () => {
    test('shady-render renders content', () => {
        const container = document.createElement('scope-1');
        document.body.appendChild(container);
        const result = html ` <div>Rendered content.</div> `;
        render(result, container, { scope: 'scope-1' });
        const div = container.querySelector('div');
        assert.equal(div.textContent, 'Rendered content.');
        document.body.removeChild(container);
    });
});
//# sourceMappingURL=lit-html-no-wc_html-test.js.map