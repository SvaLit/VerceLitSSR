/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
import { html, render } from '../../lit-html.js';
import { ref, createRef } from '../../directives/ref.js';
import { assert } from '@esm-bundle/chai';
suite('ref', () => {
    let container;
    setup(() => {
        container = document.createElement('div');
    });
    test('sets a ref on a Ref object', () => {
        const divRef = createRef();
        render(html `<div ${ref(divRef)}></div>`, container);
        const div = container.firstElementChild;
        assert.equal(divRef.value, div);
    });
    test('calls a ref callback', () => {
        let divRef;
        const divCallback = (el) => (divRef = el);
        render(html `<div ${ref(divCallback)}></div>`, container);
        const div = container.firstElementChild;
        assert.equal(divRef, div);
    });
    test('sets a ref when Ref object changes', () => {
        const divRef1 = createRef();
        const divRef2 = createRef();
        const go = (r) => render(html `<div ${ref(r)}></div>`, container);
        go(divRef1);
        const div1 = container.firstElementChild;
        assert.equal(divRef1.value, div1);
        go(divRef2);
        const div2 = container.firstElementChild;
        assert.equal(divRef1.value, undefined);
        assert.equal(divRef2.value, div2);
    });
    test('calls a ref callback when callback changes', () => {
        let divRef;
        const divCallback1 = (el) => (divRef = el);
        const divCallback2 = (el) => (divRef = el);
        const go = (r) => render(html `<div ${ref(r)}></div>`, container);
        go(divCallback1);
        const div1 = container.firstElementChild;
        assert.equal(divRef, div1);
        go(divCallback2);
        const div2 = container.firstElementChild;
        assert.equal(divRef, div2);
    });
    test('only sets a ref when element changes', () => {
        let queriedEl;
        let callCount = 0;
        const elRef = createRef();
        // Patch Ref to observe value changes
        let value;
        Object.defineProperty(elRef, 'value', {
            set(v) {
                value = v;
                callCount++;
            },
            get() {
                return value;
            },
        });
        const go = (x) => render(x ? html `<div ${ref(elRef)}></div>` : html `<span ${ref(elRef)}></span>`, container);
        go(true);
        queriedEl = container.firstElementChild;
        assert.equal(queriedEl === null || queriedEl === void 0 ? void 0 : queriedEl.tagName, 'DIV');
        assert.equal(elRef.value, queriedEl);
        assert.equal(callCount, 1);
        go(true);
        queriedEl = container.firstElementChild;
        assert.equal(queriedEl === null || queriedEl === void 0 ? void 0 : queriedEl.tagName, 'DIV');
        assert.equal(elRef.value, queriedEl);
        assert.equal(callCount, 1);
        go(false);
        queriedEl = container.firstElementChild;
        assert.equal(queriedEl === null || queriedEl === void 0 ? void 0 : queriedEl.tagName, 'SPAN');
        assert.equal(elRef.value, queriedEl);
        assert.equal(callCount, 2);
    });
    test('only calls a ref callback when element changes', () => {
        let queriedEl;
        const calls = [];
        const elCallback = (e) => {
            calls.push(e === null || e === void 0 ? void 0 : e.tagName);
        };
        const go = (x) => render(x
            ? html `<div ${ref(elCallback)}></div>`
            : html `<span ${ref(elCallback)}></span>`, container);
        go(true);
        queriedEl = container.firstElementChild;
        assert.equal(queriedEl === null || queriedEl === void 0 ? void 0 : queriedEl.tagName, 'DIV');
        assert.deepEqual(calls, ['DIV']);
        go(true);
        queriedEl = container.firstElementChild;
        assert.equal(queriedEl === null || queriedEl === void 0 ? void 0 : queriedEl.tagName, 'DIV');
        assert.deepEqual(calls, ['DIV']);
        go(false);
        queriedEl = container.firstElementChild;
        assert.equal(queriedEl === null || queriedEl === void 0 ? void 0 : queriedEl.tagName, 'SPAN');
        assert.deepEqual(calls, ['DIV', undefined, 'SPAN']);
        go(true);
        queriedEl = container.firstElementChild;
        assert.equal(queriedEl === null || queriedEl === void 0 ? void 0 : queriedEl.tagName, 'DIV');
        assert.deepEqual(calls, ['DIV', undefined, 'SPAN', undefined, 'DIV']);
    });
    test('calls callback bound to options.host', () => {
        let queriedEl;
        const host = {
            calls: [],
            elCallback(e) {
                this.calls.push(e === null || e === void 0 ? void 0 : e.tagName);
            },
        };
        const go = (x) => render(x
            ? html `<div ${ref(host.elCallback)}></div>`
            : html `<span ${ref(host.elCallback)}></span>`, container, { host });
        go(true);
        queriedEl = container.firstElementChild;
        assert.equal(queriedEl === null || queriedEl === void 0 ? void 0 : queriedEl.tagName, 'DIV');
        assert.deepEqual(host.calls, ['DIV']);
        go(true);
        queriedEl = container.firstElementChild;
        assert.equal(queriedEl === null || queriedEl === void 0 ? void 0 : queriedEl.tagName, 'DIV');
        assert.deepEqual(host.calls, ['DIV']);
        go(false);
        queriedEl = container.firstElementChild;
        assert.equal(queriedEl === null || queriedEl === void 0 ? void 0 : queriedEl.tagName, 'SPAN');
        assert.deepEqual(host.calls, ['DIV', undefined, 'SPAN']);
        go(true);
        queriedEl = container.firstElementChild;
        assert.equal(queriedEl === null || queriedEl === void 0 ? void 0 : queriedEl.tagName, 'DIV');
        assert.deepEqual(host.calls, ['DIV', undefined, 'SPAN', undefined, 'DIV']);
    });
    test('two refs', () => {
        const divRef1 = createRef();
        const divRef2 = createRef();
        render(html `<div ${ref(divRef1)} ${ref(divRef2)}></div>`, container);
        const div = container.firstElementChild;
        assert.equal(divRef1.value, div);
        assert.equal(divRef2.value, div);
    });
    test('two ref callbacks alternating', () => {
        let queriedEl;
        const divCalls = [];
        const divCallback = (e) => {
            divCalls.push(e === null || e === void 0 ? void 0 : e.tagName);
        };
        const spanCalls = [];
        const spanCallback = (e) => {
            spanCalls.push(e === null || e === void 0 ? void 0 : e.tagName);
        };
        const go = (x) => render(x
            ? html `<div ${ref(divCallback)}></div>`
            : html `<span ${ref(spanCallback)}></span>`, container);
        go(true);
        queriedEl = container.firstElementChild;
        assert.equal(queriedEl === null || queriedEl === void 0 ? void 0 : queriedEl.tagName, 'DIV');
        assert.deepEqual(divCalls, ['DIV']);
        assert.deepEqual(spanCalls, []);
        go(true);
        queriedEl = container.firstElementChild;
        assert.equal(queriedEl === null || queriedEl === void 0 ? void 0 : queriedEl.tagName, 'DIV');
        assert.deepEqual(divCalls, ['DIV']);
        assert.deepEqual(spanCalls, []);
        go(false);
        queriedEl = container.firstElementChild;
        assert.equal(queriedEl === null || queriedEl === void 0 ? void 0 : queriedEl.tagName, 'SPAN');
        assert.deepEqual(divCalls, ['DIV', undefined]);
        assert.deepEqual(spanCalls, ['SPAN']);
        go(true);
        queriedEl = container.firstElementChild;
        assert.equal(queriedEl === null || queriedEl === void 0 ? void 0 : queriedEl.tagName, 'DIV');
        assert.deepEqual(divCalls, ['DIV', undefined, 'DIV']);
        assert.deepEqual(spanCalls, ['SPAN', undefined]);
    });
    test('refs are always set in tree order', () => {
        const elRef = createRef();
        const go = () => render(html `
        <div id="first" ${ref(elRef)}></div>
        <div id="next" ${ref(elRef)}>
          ${html `<span id="last" ${ref(elRef)}></span>`}
        </div>`, container);
        go();
        assert.equal(elRef.value.id, 'last');
        go();
        assert.equal(elRef.value.id, 'last');
    });
    test('callbacks are always called in tree order', () => {
        const calls = [];
        const elCallback = (e) => {
            calls.push(e === null || e === void 0 ? void 0 : e.id);
        };
        const go = () => render(html `
        <div id="first" ${ref(elCallback)}></div>
        <div id="next" ${ref(elCallback)}>
          ${html `<span id="last" ${ref(elCallback)}></span>`}
        </div>`, container);
        go();
        assert.deepEqual(calls, ['first', undefined, 'next', undefined, 'last']);
        calls.length = 0;
        go();
        assert.deepEqual(calls, [
            undefined,
            'first',
            undefined,
            'next',
            undefined,
            'last',
        ]);
    });
    test('Ref passed to ref directive changes', () => {
        var _a, _b, _c;
        const aRef = createRef();
        const bRef = createRef();
        const go = (x) => render(html `<div ${ref(x ? aRef : bRef)}></div>`, container);
        go(true);
        assert.equal((_a = aRef.value) === null || _a === void 0 ? void 0 : _a.tagName, 'DIV');
        assert.equal(bRef.value, undefined);
        go(false);
        assert.equal(aRef.value, undefined);
        assert.equal((_b = bRef.value) === null || _b === void 0 ? void 0 : _b.tagName, 'DIV');
        go(true);
        assert.equal((_c = aRef.value) === null || _c === void 0 ? void 0 : _c.tagName, 'DIV');
        assert.equal(bRef.value, undefined);
    });
    test('callback passed to ref directive changes', () => {
        const aCalls = [];
        const aCallback = (el) => aCalls.push(el === null || el === void 0 ? void 0 : el.tagName);
        const bCalls = [];
        const bCallback = (el) => bCalls.push(el === null || el === void 0 ? void 0 : el.tagName);
        const go = (x) => render(html `<div ${ref(x ? aCallback : bCallback)}></div>`, container);
        go(true);
        assert.deepEqual(aCalls, ['DIV']);
        assert.deepEqual(bCalls, []);
        go(false);
        assert.deepEqual(aCalls, ['DIV', undefined]);
        assert.deepEqual(bCalls, ['DIV']);
        go(true);
        assert.deepEqual(aCalls, ['DIV', undefined, 'DIV']);
        assert.deepEqual(bCalls, ['DIV', undefined]);
    });
    test('new callback created each render', () => {
        const calls = [];
        const go = () => render(html `<div ${ref((el) => calls.push(el === null || el === void 0 ? void 0 : el.tagName))}></div>`, container);
        go();
        assert.deepEqual(calls, ['DIV']);
        go();
        assert.deepEqual(calls, ['DIV', undefined, 'DIV']);
        go();
        assert.deepEqual(calls, ['DIV', undefined, 'DIV', undefined, 'DIV']);
    });
});
//# sourceMappingURL=ref_test.js.map