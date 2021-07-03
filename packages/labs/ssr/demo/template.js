/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * This is a shared client/server module.
 */
import { html } from 'lit';
import { LitElement, css } from 'lit';
import { property } from 'lit/decorators/property.js';
import { serverUntil } from '@lit-labs/ssr-client/directives/server-until.js';
import { Task } from '@lit-labs/task';
export const initialData = {
    name: 'SSR',
    message: 'This is a test.',
    items: ['foo', 'bar', 'qux'],
    prop: 'prop-value',
    attr: 'attr-value',
    wasUpdated: false,
};
const asyncContent = (content, timeout = 500) => new Promise((r) => {
    setTimeout(() => {
        r(content);
    }, timeout);
});
class FetchController extends Task {
    constructor(host, url) {
        super(host, async ([url]) => {
            const response = await fetch(url);
            return await response.json();
        }, () => [this.url]);
        this.url = url;
    }
    get serverUpdateComplete() {
        this.hostUpdated();
        return this.taskComplete;
    }
    render(renderer) {
        return super.render(renderer);
    }
}
export class MyElement extends LitElement {
    constructor() {
        super(...arguments);
        this.prop = 'initial-prop';
        this.attr = 'initial-attr';
        this.wasUpdated = false;
        this.fetchController = new FetchController(this, 'https://gist.githubusercontent.com/kevinpschaaf/c2baac9c299fb8912bedaafa41f0148f/raw/d23e618049da61c9405ea5464f51d07aa13f5f21/response.json');
    }
    render() {
        return html `
      <header>I'm a my-element!</header>
      <div><i>this.prop</i>: ${this.prop}</div>
      <section>
        ${serverUntil(asyncContent('async content', 100), 'loading...')}
      </section>
      <div><i>this.attr</i>: ${this.attr}</div>
      ${this.fetchController.render({
            pending: () => 'Loading...',
            complete: (list) => html `<ul>
            ${list.map((item) => html `<li>${item.name}</li>`)}
          </ul>`,
            error: (error) => `Error loading: ${error}`,
        })}
    `;
    }
}
MyElement.styles = css `
    :host {
      display: inline-block;
      border: 1px dashed gray;
      margin: 4px;
      padding: 4px;
    }

    :host > * {
      padding: 4px;
    }

    header {
      font-weight: bold;
    }

    :host([wasUpdated]) {
      background: lightgreen;
    }
  `;
__decorate([
    property({ type: String })
], MyElement.prototype, "prop", void 0);
__decorate([
    property({ type: String })
], MyElement.prototype, "attr", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], MyElement.prototype, "wasUpdated", void 0);
customElements.define('my-element', MyElement);
export const header = (name) => html ` <h1>Hello ${name}!</h1> `;
export const template = (data) => html ` ${header(data.name)}
    <p>${data.message}</p>
    <h4>repeating:</h4>
    <div>${data.items.map((item, i) => html ` <p>${i}) ${item}</p> `)}</div>
    ${Array(3)
    .fill(1)
    .map((_item, i) => html `
          <my-element
            ?wasUpdated=${data.wasUpdated}
            .prop=${`${data.prop}: ${i}`}
            attr=${`${data.attr}: ${i}`}
          ></my-element>
        `)}`;
export function* renderApp(body) {
    yield `
    <!doctype html>
    <html>
      <head>
        <!-- This little script loads the client script on a button click. This
             lets us see that only the HTML loads for first render -->
        <script type="module">
          const button = document.querySelector('button');
          button.addEventListener('click', () => {
            import('/demo/app-client.js');
          });
        </script>
        <script src="./node_modules/@webcomponents/template-shadowroot/template-shadowroot.min.js"></script>
        `;
    yield `
      </head>
      <body>
        <button>Hydrate</button>
        <div id="body-container">`;
    yield* body();
    yield `
        </div>
        <script>TemplateShadowRoot.hydrateShadowRoots(document.body);</script>
      </body>
</html>`;
}
//# sourceMappingURL=template.js.map