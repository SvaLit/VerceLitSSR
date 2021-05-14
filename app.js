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
        this.name = 'Hydrated';
    }

    render() {
        return html`<p>Hello, ${this.name} !</p>`;
    }
}

customElements.define('lit-app', AppDemo);
