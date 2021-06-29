import {LitElement, html} from "lit";

export class AppDemo extends LitElement {
    constructor() {
        super();
        this.url = '';
        this.hydrated = false;
    }

    static get properties() {
        return {
            url: {type: String},
            hydrated: {type: Boolean}
        }
    }

    firstUpdated() {
        this.url = location.pathname;
        this.hydrated = true;
    }

    render() {
        return html`<p>Path: ${this.url} (${this.hydrated ? 'Hydrated' : html`<slot></slot>`})</p>`;
    }
}

customElements.define('lit-app', AppDemo);
