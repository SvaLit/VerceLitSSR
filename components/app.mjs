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
        this.url = location.href.replace(location.origin, '');
        this.hydrated = true;
    }

    render() {
        return html`<p>Path: ${this.url} (${this.hydrated ? html`<span style="color: greenyellow">Hydrated</span>` : html`<slot></slot>`})</p>`;
    }
}

customElements.define('lit-app', AppDemo);
