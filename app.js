import {LitElement, html} from "./import.js";

export class AppDemo extends LitElement {
    constructor() {
        super();
        this.name = 'Default';
    }

    static get properties() {
        return {
            name: {type: String}
        }
    }

    firstUpdated() {
        setTimeout(() => this.name = 'Hydrated', 1000);
    }

    render() {
        return html`<p>Hello, ${this.name} !</p>`;
    }
}

customElements.define('lit-app', AppDemo);
